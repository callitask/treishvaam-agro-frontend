import React from 'react';

export function LogoMark({ size = 60, className = '', variant = 'light' }: { size?: number; className?: string; variant?: 'light' | 'dark' }) {
  return (
    <img
      src="/Treishvaam_Agro_Logo.svg"
      alt="Treishvaam Agro — Enterprise B2B Ingredients"
      width={Math.round(size * 2.666)}
      height={size}
      className={`object-contain object-left ${className}`}
      style={{ height: size, width: 'auto' }}
      loading="eager"
      decoding="async"
    />
  );
}

export function LogoFull({ className = '', size = 52, variant = 'light' }: { className?: string; size?: number; variant?: 'light' | 'dark' }) {
  // Enterprise: SVG 2048x768 (2.666:1) — height = navbar height - pad, no overflow, white only
  return (
    <div className={`flex items-center bg-white h-full ${className}`}>
      <img
        src="/Treishvaam_Agro_Logo.svg"
        alt="Treishvaam Agro"
        width={Math.round(size * 2.666)}
        height={size}
        className="object-contain object-left"
        style={{ height: size, width: 'auto', display: 'block', maxHeight: size }}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}

export function Wordmark({ className = '', size = 16 }: { className?: string; size?: number }) {
  return (
    <img
      src="/Treishvaam_Agro_logo.png"
      alt="Treishvaam Agro"
      width={size * 3.6}
      height={size}
      className={`object-contain ${className}`}
      style={{ height: size, width: 'auto' }}
      loading="lazy"
      decoding="async"
    />
  );
}

export default LogoMark;
