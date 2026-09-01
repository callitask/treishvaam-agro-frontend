import React from 'react';

export function LiquidGlassCard({
  children,
  className = '',
  hover = true,
  padding = 'p-4',
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
}) {
  return (
    <div
      className={`
        relative bg-white/70 backdrop-blur-[14px] backdrop-saturate-[160%]
        border border-white/60
        shadow-[0_4px_24px_rgba(31,69,36,0.06),0_1px_3px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:to-[#E8F0E7]/25 before:pointer-events-none
        overflow-hidden
        ${hover ? 'hover:bg-white/80 hover:shadow-[0_8px_32px_rgba(31,69,36,0.08),0_2px_8px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200' : ''}
        ${padding}
        ${className}
      `}
      style={{
        WebkitBackdropFilter: 'blur(14px) saturate(160%)',
        backdropFilter: 'blur(14px) saturate(160%)',
      }}
    >
      <div className="relative z-10">{children}</div>
      {/* Subtle gold edge highlight */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E5B824]/30 to-transparent pointer-events-none" />
    </div>
  );
}

export function LiquidGlassPanel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative bg-white/65 backdrop-blur-[16px] backdrop-saturate-[170%] border border-white/70 shadow-[0_8px_32px_rgba(31,69,36,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] overflow-hidden ${className}`}
      style={{
        WebkitBackdropFilter: 'blur(16px) saturate(170%)',
        backdropFilter: 'blur(16px) saturate(170%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-[#E8F0E7]/30 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
