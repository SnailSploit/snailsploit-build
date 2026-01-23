// src/components/V3DownloadGate.tsx
// Lead capture component for gated content downloads
// Requires: @astrojs/react integration + lucide-react

'use client';

import { useState } from 'react';

interface DownloadGateProps {
  title: string;
  description: string;
  file: string;
  buttonText?: string;
  features?: string[];
}

// Icons as inline SVGs to avoid lucide dependency issues
const FileDownIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const MailIcon = () => (
  <svg className="h-5 w-5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LoaderIcon = () => (
  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);

export default function V3DownloadGate({
  title,
  description,
  file,
  buttonText = 'Download Free PDF',
  features = [],
}: DownloadGateProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'set-framework-download',
          tags: ['framework-download', 'set-framework'],
        }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setStatus('success');
      
      // Trigger download after successful subscription
      const link = document.createElement('a');
      link.href = file;
      link.download = file.split('/').pop() || 'download.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="my-8 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* Left side - Info */}
        <div className="flex-1">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
            <FileDownIcon />
            Free Download
          </div>
          
          <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
            {title}
          </h3>
          
          <p className="mb-4 text-zinc-400">
            {description}
          </p>

          {features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-80">
          {status === 'success' ? (
            <div className="rounded-lg bg-green-500/10 p-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center">
                <svg className="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <p className="font-medium text-green-400">Download started!</p>
              <p className="mt-1 text-sm text-zinc-400">
                Check your inbox for more security frameworks and research.
              </p>
              <a
                href={file}
                download
                className="mt-3 inline-block text-sm text-red-400 hover:text-red-300 underline"
              >
                Click here if download didn't start
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <MailIcon />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 py-3 pl-10 pr-4 text-white placeholder:text-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#c73e3e] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#d94444] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <LoaderIcon />
                    Processing...
                  </>
                ) : (
                  <>
                    <FileDownIcon />
                    {buttonText}
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}

              <p className="text-center text-xs text-zinc-500">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
