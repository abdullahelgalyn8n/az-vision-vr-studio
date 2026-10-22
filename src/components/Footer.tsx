import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  currentLang: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';

  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 text-center bg-black">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Poetic quote */}
        <p className="font-poetic italic text-lg sm:text-xl text-neutral-400">
          {isRtl ? '«عيناكِ ليالي صيف، ورؤى وقصائد.»' : 'Your eyes are summer nights, visions and poems.'}
        </p>

        {/* Brand Name */}
        <Link to="/" className="inline-flex items-center justify-center text-xl sm:text-2xl font-extrabold tracking-wider">
          <span className="text-white tracking-widest font-sans">VISION</span>
          <span className="text-[#b4ff39] ml-1 tracking-widest font-sans drop-shadow-[0_0_12px_rgba(180,255,57,0.4)]">
            VR
          </span>
        </Link>

        {/* Tagline */}
        <p className="font-mono-tech text-[11px] sm:text-xs text-neutral-400 tracking-[0.25em] uppercase">
          {isRtl ? 'إنتاج فني · تغطية فعاليات' : 'ART PRODUCTION · EVENT COVERAGE'}
        </p>

        {/* Dedicated Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono-tech text-xs tracking-wider uppercase text-neutral-300">
          <Link to="/" className="hover:text-[#b4ff39] transition-colors">
            {isRtl ? 'الرئيسية' : 'HOME'}
          </Link>
          <span className="text-neutral-700">·</span>
          <Link to="/work" className="hover:text-[#b4ff39] transition-colors">
            {isRtl ? 'الأعمال' : 'WORK'}
          </Link>
          <span className="text-neutral-700">·</span>
          <Link to="/studio" className="hover:text-[#b4ff39] transition-colors">
            {isRtl ? 'الاستوديو' : 'STUDIO'}
          </Link>
          <span className="text-neutral-700">·</span>
          <Link to="/visual-diaries" className="hover:text-[#b4ff39] transition-colors">
            {isRtl ? 'اليوميات' : 'DIARIES'}
          </Link>
          <span className="text-neutral-700">·</span>
          <Link to="/vr/siwa" className="hover:text-[#b4ff39] transition-colors">
            {isRtl ? 'مشغل VR' : 'VR PLAYER'}
          </Link>
          <span className="text-neutral-700">·</span>
          <Link to="/contact" className="hover:text-[#b4ff39] transition-colors">
            {isRtl ? 'تواصل معنا' : 'CONTACT'}
          </Link>
        </div>

        {/* Address */}
        <p className="font-mono-tech text-[10px] sm:text-[11px] text-neutral-500 tracking-widest uppercase">
          {isRtl
            ? '٩ شارع الياسمين، الحي الرابع، مدينة السادس من أكتوبر، مصر'
            : '9 YASMIN STREET, 4TH DISTRICT, 6TH OF OCTOBER CITY, EGYPT'}
        </p>

        {/* Email */}
        <div>
          <a
            href="mailto:VISIONVR.PILOTS@GMAIL.COM"
            className="font-mono-tech text-xs text-neutral-300 hover:text-[#b4ff39] tracking-widest uppercase transition-colors"
          >
            VISIONVR.PILOTS@GMAIL.COM
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            INSTAGRAM
          </a>
          <span className="text-neutral-700">·</span>
          <a
            href="https://deovr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            DEOVR
          </a>
          <span className="text-neutral-700">·</span>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            YOUTUBE
          </a>
        </div>

        {/* Copyright */}
        <p className="font-mono-tech text-[11px] text-neutral-500 tracking-widest pt-4">جميع الحقوق محفوظة. <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold text-neutral-300">A.Z Agency</a> 2026 ©</p>
      </div>
    </footer>
  );
};
