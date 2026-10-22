import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StudioSectionProps {
  currentLang: 'en' | 'ar';
  onMeetStudio?: () => void;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';

  return (
    <section id="studio-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 mb-8">
        <h2 className="font-mono-tech text-xs tracking-[0.25em] text-neutral-400 uppercase">
          {isRtl ? 'الاستوديو' : 'STUDIO'}
        </h2>
        <p className="font-poetic italic text-2xl sm:text-3xl text-neutral-300 max-w-2xl text-left md:text-right">
          {isRtl
            ? 'نحن استوديو إنتاج فني غامر في مصر.'
            : 'We are an Immersive Art Production Studio in Egypt.'}
        </p>
      </div>

      <div>
        <Link
          to="/studio"
          className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-neutral-400 hover:text-[#b4ff39] uppercase tracking-wider transition-colors cursor-pointer group"
        >
          <span className="underline underline-offset-4 group-hover:text-[#b4ff39]">
            {isRtl ? 'تعرف على الاستوديو (رابط الصفحة)' : 'MEET THE STUDIO'}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#b4ff39] transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};
