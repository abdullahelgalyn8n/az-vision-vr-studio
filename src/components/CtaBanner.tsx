import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CtaBannerProps {
  currentLang: 'en' | 'ar';
  onStartConversation?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-neutral-900">
      <div className="space-y-8">
        {/* Typewriter style bold headline */}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl text-neutral-100 font-normal tracking-wide max-w-3xl mx-auto leading-relaxed ${
          isRtl ? 'font-cairo' : 'font-mono-tech'
        }`}>
          {isRtl
            ? 'بوابة العوالم الغامرة تنفتح أمامك. أخبرنا عن لحظتك الخاصة.'
            : 'The gate to immersive realms is opening. Tell us about your moment.'}
        </h2>

        {/* Solid neon lime button linked to /contact */}
        <div className="flex justify-center pt-2">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#b4ff39] hover:bg-[#c6ff33] text-black font-mono-tech font-bold text-xs uppercase tracking-widest rounded transition-all duration-200 cursor-pointer shadow-[0_0_30px_rgba(180,255,57,0.3)] hover:shadow-[0_0_40px_rgba(180,255,57,0.5)] hover:scale-[1.02]"
          >
            <span>{isRtl ? 'ابدأ المحادثة (رابط الصفحة)' : 'START A CONVERSATION'}</span>
            <ArrowUpRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
