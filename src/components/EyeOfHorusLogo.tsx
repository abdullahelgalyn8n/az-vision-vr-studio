import React from 'react';

interface EyeOfHorusLogoProps {
  className?: string;
  size?: number;
}

export const EyeOfHorusLogo: React.FC<EyeOfHorusLogoProps> = ({ className = '', size = 120 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Background ethereal aura */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-b from-[#b4ff39]/20 via-[#d4af37]/15 to-transparent blur-xl pointer-events-none"
        style={{ width: size * 1.4, height: size * 1.2, transform: 'translate(-15%, -10%)' }}
      />
      
      <svg
        width={size}
        height={size * 0.7}
        viewBox="0 0 240 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_0_16px_rgba(180,255,57,0.45)]"
      >
        <defs>
          <linearGradient id="goldLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff5c0" />
            <stop offset="35%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#b4ff39" />
            <stop offset="100%" stopColor="#86efac" />
          </linearGradient>

          <linearGradient id="lensGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b4ff39" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="irisLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#b4ff39" />
            <stop offset="85%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#021a11" />
          </radialGradient>
        </defs>

        {/* Outer VR Visor Frame contour blending with Eyebrow */}
        <path
          d="M 30 52 C 70 24, 170 24, 210 52 C 190 40, 110 32, 30 52 Z"
          fill="url(#goldLimeGrad)"
          opacity="0.9"
        />

        {/* Upper eyelid with VR lens curve */}
        <path
          d="M 38 78 C 75 42, 165 42, 202 78"
          stroke="url(#goldLimeGrad)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Lower eyelid */}
        <path
          d="M 38 78 C 80 108, 160 108, 202 78"
          stroke="url(#goldLimeGrad)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Horus Pupil / VR Sensor Core */}
        <circle cx="120" cy="78" r="22" fill="url(#irisLight)" />
        <circle cx="120" cy="78" r="14" stroke="#ffffff" strokeWidth="2.5" fill="#051009" />
        <circle cx="124" cy="74" r="5" fill="#ffffff" />
        <circle cx="116" cy="82" r="2" fill="#b4ff39" />

        {/* VR HUD grid lines across pupil */}
        <line x1="102" y1="78" x2="138" y2="78" stroke="#b4ff39" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
        <line x1="120" y1="60" x2="120" y2="96" stroke="#b4ff39" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />

        {/* Tear line (Vertical Falcon plumage) */}
        <path
          d="M 120 106 L 120 148 C 120 152, 116 156, 112 154 C 108 152, 110 146, 112 140 L 112 106"
          fill="url(#goldLimeGrad)"
        />

        {/* Spiral Falcon curl (The Golden Spiral / Horus curl) */}
        <path
          d="M 148 102 C 160 118, 178 132, 196 130 C 204 129, 208 120, 202 114 C 196 108, 184 110, 180 118 C 178 122, 180 126, 184 126"
          stroke="url(#goldLimeGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Inner glow points */}
        <circle cx="38" cy="78" r="3" fill="#b4ff39" />
        <circle cx="202" cy="78" r="3" fill="#b4ff39" />
      </svg>
    </div>
  );
};
