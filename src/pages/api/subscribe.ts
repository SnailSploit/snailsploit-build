// src/pages/api/subscribe.ts
// Astro API endpoint for email subscriptions with security hardening
// Configure with your email service provider

import type { APIRoute } from 'astro';

// =============================================================================
// SECURITY: Rate Limiting (in-memory - consider Redis for production)
// =============================================================================
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute per IP

function getRateLimitKey(request: Request): string {
  // Use forwarded IP if behind proxy (Cloudflare)
  const forwarded = request.headers.get('cf-connecting-ip')
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || 'unknown';
  return forwarded;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, RATE_LIMIT_WINDOW);

// =============================================================================
// SECURITY: Input Validation
// =============================================================================

// RFC 5322 compliant email regex (simplified but robust)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function isValidEmail(email: unknown): email is string {
  return typeof email === 'string'
    && email.length <= 254
    && EMAIL_REGEX.test(email);
}

function sanitizeTags(tags: unknown): string[] {
  if (!Array.isArray(tags)) return [];

  return tags
    .filter((tag): tag is string => typeof tag === 'string')
    .map(tag => tag.trim().slice(0, 50)) // Limit tag length
    .filter(tag => /^[a-zA-Z0-9-_]+$/.test(tag)) // Only alphanumeric, dash, underscore
    .slice(0, 10); // Max 10 tags
}

function sanitizeSource(source: unknown): string {
  if (typeof source !== 'string') return 'unknown';
  return source.trim().slice(0, 100).replace(/[^a-zA-Z0-9-_/]/g, '');
}

// =============================================================================
// SECURITY: CSRF Protection
// =============================================================================

function isValidOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  const allowedOrigins = [
    'https://snailsploit.com',
    'https://www.snailsploit.com',
  ];

  // Allow localhost in development
  if (import.meta.env.DEV) {
    allowedOrigins.push('http://localhost:4321', 'http://localhost:4322', 'http://localhost:4323', 'http://localhost:4324', 'http://localhost:3000');
  }

  // Check origin header first
  if (origin && allowedOrigins.some(allowed => origin.startsWith(allowed))) {
    return true;
  }

  // Fall back to referer
  if (referer && allowedOrigins.some(allowed => referer.startsWith(allowed))) {
    return true;
  }

  // If no origin/referer (some browsers omit), be lenient but log
  if (!origin && !referer) {
    console.warn('Request without origin/referer headers');
    return true; // Allow but monitor
  }

  return false;
}

// =============================================================================
// Email Service Providers
// =============================================================================

// Option 1: ConvertKit
async function subscribeConvertKit(email: string, tags: string[]) {
  const CONVERTKIT_API_KEY = import.meta.env.CONVERTKIT_API_KEY;
  const CONVERTKIT_FORM_ID = import.meta.env.CONVERTKIT_FORM_ID;

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email,
        tags,
      }),
    }
  );

  return response.ok;
}

// Option 2: Resend (collect emails in their audience)
async function subscribeResend(email: string, source: string) {
  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
  const RESEND_AUDIENCE_ID = import.meta.env.RESEND_AUDIENCE_ID;

  const response = await fetch(
    `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        first_name: '',
        last_name: '',
        unsubscribed: false,
      }),
    }
  );

  return response.ok;
}

// Option 3: Buttondown
async function subscribeButtondown(email: string, tags: string[]) {
  const BUTTONDOWN_API_KEY = import.meta.env.BUTTONDOWN_API_KEY;

  const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      tags,
    }),
  });

  return response.ok;
}

// Option 4: Local logging (for testing - replace with database later)
async function subscribeLocal(email: string, source: string, tags: string[]) {
  console.log('New subscriber:', {
    email,
    source,
    tags,
    timestamp: new Date().toISOString()
  });

  // TODO: Save to your database
  // await db.subscribers.create({ email, source, tags });

  return true;
}

// =============================================================================
// Security Headers for API Response
// =============================================================================

const securityHeaders = {
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
  'Cache-Control': 'no-store, max-age=0',
};

// =============================================================================
// Main API Handler
// =============================================================================

export const POST: APIRoute = async ({ request }) => {
  try {
    // SECURITY: Validate Content-Type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({ error: 'Content-Type must be application/json' }),
        { status: 415, headers: securityHeaders }
      );
    }

    // SECURITY: Check request body size (10KB max)
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10240) {
      return new Response(
        JSON.stringify({ error: 'Request too large' }),
        { status: 413, headers: securityHeaders }
      );
    }

    // SECURITY: CSRF protection - validate origin
    if (!isValidOrigin(request)) {
      console.warn('CSRF attempt blocked:', {
        origin: request.headers.get('origin'),
        referer: request.headers.get('referer'),
      });
      return new Response(
        JSON.stringify({ error: 'Invalid request origin' }),
        { status: 403, headers: securityHeaders }
      );
    }

    // SECURITY: Rate limiting
    const clientKey = getRateLimitKey(request);
    if (isRateLimited(clientKey)) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { status: 429, headers: { ...securityHeaders, 'Retry-After': '60' } }
      );
    }

    // Parse and validate input
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON' }),
        { status: 400, headers: securityHeaders }
      );
    }

    if (typeof body !== 'object' || body === null) {
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        { status: 400, headers: securityHeaders }
      );
    }

    const { email, source, tags } = body as Record<string, unknown>;

    // SECURITY: Validate email with proper regex
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Valid email required' }),
        { status: 400, headers: securityHeaders }
      );
    }

    // SECURITY: Sanitize inputs
    const sanitizedSource = sanitizeSource(source);
    const sanitizedTags = sanitizeTags(tags);

    // Choose your provider (uncomment one):

    // const success = await subscribeConvertKit(email, sanitizedTags);
    // const success = await subscribeResend(email, sanitizedSource);
    // const success = await subscribeButtondown(email, sanitizedTags);
    const success = await subscribeLocal(email, sanitizedSource, sanitizedTags); // Default for testing

    if (!success) {
      return new Response(
        JSON.stringify({ error: 'Subscription failed' }),
        { status: 500, headers: securityHeaders }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: securityHeaders }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: securityHeaders }
    );
  }
};

// Only allow POST method
export const ALL: APIRoute = () => {
  return new Response(
    JSON.stringify({ error: 'Method not allowed' }),
    { status: 405, headers: { ...securityHeaders, 'Allow': 'POST' } }
  );
};
