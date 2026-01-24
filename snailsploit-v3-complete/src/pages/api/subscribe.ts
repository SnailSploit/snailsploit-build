// src/pages/api/subscribe.ts
// Astro API endpoint for email subscriptions
// Configure with your email service provider

import type { APIRoute } from 'astro';

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

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, source, tags } = await request.json();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Choose your provider (uncomment one):
    
    // const success = await subscribeConvertKit(email, tags);
    // const success = await subscribeResend(email, source);
    // const success = await subscribeButtondown(email, tags);
    const success = await subscribeLocal(email, source, tags); // Default for testing

    if (!success) {
      return new Response(
        JSON.stringify({ error: 'Subscription failed' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
