import React from 'react';
import { Eye } from 'lucide-react';
import { AmbientSound } from './AmbientSound';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  currentLang: 'en' | 'ar';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang }) => {
  const isRtl = currentLang === 'ar';
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070707]/95 backdrop-blur-md border-b border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark (Single element, always LTR) */}
        <Link
          to="/"
          dir="ltr"
          className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          aria-label="Vision VR Home"
        >
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-neutral-950 border border-neutral-800 group-hover:border-[#b4ff39] transition-colors">
            <Eye className="w-4 h-4 text-[#b4ff39] transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex items-center text-lg sm:text-xl font-extrabold tracking-wider whitespace-nowrap">
            <span className="text-white tracking-widest font-sans">VISION</span>
            <span className="text-[#b4ff39] ml-1 tracking-widest font-sans drop-shadow-[0_0_10px_rgba(180,255,57,0.4)]">
              VR
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className={`hidden md:flex items-center gap-7 text-xs tracking-widest ${isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'}`}>
          <Link
            to="/work"
            className={`transition-colors whitespace-nowrap uppercase py-1 ${
              isActive('/work')
                ? 'text-[#b4ff39] border-b border-[#b4ff39]'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            {isRtl ? 'الأعمال' : 'WORK'}
          </Link>

          <Link
            to="/studio"
            className={`transition-colors whitespace-nowrap uppercase py-1 ${
              isActive('/studio')
                ? 'text-[#b4ff39] border-b border-[#b4ff39]'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            {isRtl ? 'الاستوديو' : 'STUDIO'}
          </Link>

          <Link
            to="/visual-diaries"
            className={`transition-colors whitespace-nowrap uppercase py-1 ${
              isActive('/visual-diaries')
                ? 'text-[#b4ff39] border-b border-[#b4ff39]'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            {isRtl ? 'اليوميات البصرية' : 'VISUAL DIARIES'}
          </Link>

          <Link
            to="/vr/siwa"
            className={`transition-colors whitespace-nowrap uppercase py-1 ${
              isActive('/vr')
                ? 'text-[#b4ff39] border-b border-[#b4ff39]'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            {isRtl ? 'مشغل VR' : 'VR PLAYER'}
          </Link>
        </nav>

        {/* Zone 3: Actions & Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <AmbientSound isRtl={isRtl} />

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            type="button"
            className="px-2.5 py-1.5 text-xs font-semibold font-cairo text-neutral-300 hover:text-white rounded border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors cursor-pointer"
            aria-label={isRtl ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
          >
            {isRtl ? 'English' : 'العربية'}
          </button>

          {/* Primary Action Button */}
          <Link
            to="/contact"
            className={`hidden sm:inline-block px-4 py-2 border rounded-lg text-xs tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              isActive('/contact')
                ? 'bg-[#b4ff39] text-black border-[#b4ff39] font-bold shadow-[0_0_20px_rgba(180,255,57,0.3)]'
                : 'border-neutral-700 hover:border-[#b4ff39] text-neutral-200 hover:text-white bg-neutral-950'
            } ${isRtl ? 'font-cairo font-bold' : 'font-mono-tech'}`}
          >
            {isRtl ? 'ابدأ محادثة' : 'START A CONVERSATION'}
          </Link>
        </div>
      </div>

      {/* Mobile navigation row */}
      <div className={`md:hidden flex items-center justify-around py-3 px-4 border-t border-neutral-900 bg-black/80 text-xs tracking-wider uppercase text-neutral-400 ${
        isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'
      }`}>
        <Link
          to="/work"
          className={isActive('/work') ? 'text-[#b4ff39] font-bold' : 'hover:text-white'}
        >
          {isRtl ? 'الأعمال' : 'WORK'}
        </Link>
        <Link
          to="/studio"
          className={isActive('/studio') ? 'text-[#b4ff39] font-bold' : 'hover:text-white'}
        >
          {isRtl ? 'الاستوديو' : 'STUDIO'}
        </Link>
        <Link
          to="/visual-diaries"
          className={isActive('/visual-diaries') ? 'text-[#b4ff39] font-bold' : 'hover:text-white'}
        >
          {isRtl ? 'اليوميات' : 'DIARIES'}
        </Link>
        <Link
          to="/vr/siwa"
          className={isActive('/vr') ? 'text-[#b4ff39] font-bold' : 'hover:text-white'}
        >
          VR
        </Link>
        <Link
          to="/contact"
          className="text-[#b4ff39] font-bold"
        >
          {isRtl ? 'محادثة' : 'TALK'}
        </Link>
      </div>
    </header>
  );
};
