'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('[Enterprise Error Boundary]', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-surface-off px-6 text-center">
      <div className="max-w-lg bg-white rounded-card p-10 border border-brand-border shadow-resting">
        <h2 className="text-2xl font-bold text-brand-dark mb-3">Something went wrong</h2>
        <p className="text-brand-textMuted mb-8">
          Our enterprise team has been notified. Please retry or contact sales@treishvaamagro.com for immediate assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="bg-brand-primary hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-enterprise transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-white border border-brand-border hover:bg-brand-surface-off text-brand-dark font-semibold px-6 py-3 rounded-enterprise transition-colors text-center"
          >
            Back to Home
          </Link>
        </div>
        {error.digest && <p className="text-xs text-gray-400 mt-6">Ref: {error.digest}</p>}
      </div>
    </div>
  );
}
