import React from 'react';
import { EyeOfHorusLogo } from './EyeOfHorusLogo';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  currentLang: 'en' | 'ar';
  onStepInside: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onStepInside }) => {
  const isRtl = currentLang === 'ar';

  const scrollToWork = () => {
    const el = document.getElementById('work-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[82vh] flex flex-col items-center justify-center text-center px-4 pt-12 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] max-w-full h-[350px] bg-gradient-to-b from-[#b4ff39]/12 via-[#d4af37]/8 to-transparent rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle background star dust / celestial grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Stylized Horus VR Emblem */}
      <div className="mb-10 transform hover:scale-105 transition-transform duration-700 cursor-pointer" onClick={onStepInside}>
        <EyeOfHorusLogo size={150} />
      </div>

      {/* Main Poetic Headline */}
      <div className="max-w-4xl mx-auto space-y-2 mb-8">
        <h1 className="font-poetic text-4xl sm:text-6xl md:text-7xl font-normal text-neutral-100 tracking-tight leading-[1.15]">
          {isRtl ? 'ليست مجرد ذكرى.' : 'Not a memory.'}
        </h1>
        <h2 className="font-poetic italic text-4xl sm:text-6xl md:text-7xl font-light text-neutral-300 tracking-tight leading-[1.15] flex items-center justify-center gap-1">
          <span>{isRtl ? 'بل مكان تعود إليه.' : 'A place you return to.'}</span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#b4ff39] drop-shadow-[0_0_8px_#b4ff39] ml-1" />
        </h2>
      </div>

      {/* Subtitle / Studio Identity */}
      <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 tracking-[0.25em] sm:tracking-[0.35em] uppercase max-w-xl mx-auto mb-14">
        {isRtl ? 'فيجن في آر · استوديو فنون غامرة · مصر' : 'VISION VR · IMMERSIVE ART STUDIO · EGYPT'}
      </p>

      {/* STEP INSIDE Action */}
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={scrollToWork}
          type="button"
          className="group inline-flex flex-col items-center gap-2 text-xs font-mono-tech text-neutral-400 hover:text-white transition-all cursor-pointer"
        >
          <span className="tracking-[0.25em] uppercase text-[11px] group-hover:text-[#b4ff39] transition-colors">
            {isRtl ? 'ادخل إلى العوالم' : 'STEP INSIDE'}
          </span>
          <div className="w-7 h-7 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-[#b4ff39] transition-colors">
            <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-[#b4ff39] animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
