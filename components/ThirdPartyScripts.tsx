/**
 * AI-CONTEXT:
 * Purpose: Zero-Trust 0ms TBT Analytics Loader
 * Implements interaction-based deferred loading for GA4, AdSense, Google Ads
 * Prevents main-thread blocking as mandated in AI_WORKFLOW.md Phase 5
 * Must be used in app/layout.tsx
 */
'use client';

import { useEffect, useState } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const GADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

const INACTIVITY_TIMEOUT = 7000; // 7s fallback

export default function ThirdPartyScripts() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    if (!GA_ID && !ADSENSE_ID && !GADS_ID) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let fired = false;

    const load = () => {
      if (fired) return;
      fired = true;
      setLoaded(true);

      if (GA_ID) {
        const s1 = document.createElement('script');
        s1.async = true;
        s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(s1);
        const s2 = document.createElement('script');
        s2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `;
        document.head.appendChild(s2);
      }

      if (ADSENSE_ID) {
        const s = document.createElement('script');
        s.async = true;
        s.crossOrigin = 'anonymous';
        s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`;
        document.head.appendChild(s);
      }

      if (GADS_ID) {
        const s = document.createElement('script');
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`;
        document.head.appendChild(s);
      }

      cleanup();
    };

    const events: (keyof WindowEventMap)[] = ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'];
    const handler = () => load();

    events.forEach((e) => window.addEventListener(e, handler, { once: true, passive: true }));
    timeoutId = setTimeout(load, INACTIVITY_TIMEOUT);

    function cleanup() {
      clearTimeout(timeoutId);
      events.forEach((e) => window.removeEventListener(e, handler));
    }

    return cleanup;
  }, [loaded]);

  return null;
}
