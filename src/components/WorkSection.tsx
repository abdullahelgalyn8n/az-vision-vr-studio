import React, { useState } from 'react';
import { Play, Instagram, ChevronRight, ChevronLeft, MapPin, Sparkles, Youtube } from 'lucide-react';
import { JOURNEYS, PROMO_SLIDES, getSlide, JourneyItem } from '../utils/data';
import { Link, useNavigate } from 'react-router-dom';

interface WorkSectionProps {
  currentLang: 'en' | 'ar';
  onOpenVRWithScene?: (sceneId: string) => void;
  onOpenInquiry?: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({
  currentLang,
}) => {
  const isRtl = currentLang === 'ar';
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedJourney, setSelectedJourney] = useState<JourneyItem | null>(null);

  const currentSlide = getSlide(slideIndex, PROMO_SLIDES);

  const nextSlide = () => setSlideIndex((prev) => prev + 1);
  const prevSlide = () => setSlideIndex((prev) => prev - 1);

  return (
    <section id="work-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-900">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 gap-4">
        <h2 className="font-mono-tech text-xs tracking-[0.25em] text-neutral-400 uppercase">
          {isRtl ? 'الأعمال المختارة' : 'WORK'}
        </h2>
        <p className="font-poetic italic text-2xl sm:text-3xl text-neutral-300">
          {isRtl ? 'أماكن زرناها. أماكن يمكنك العودة إليها.' : 'Places we have been. Places you can return to.'}
        </p>
      </div>

      {/* PROJECT 01: Siwa Oasis 360 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-28">
        {/* Left: Atmospheric photo with Arabic Calligraphy */}
        <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          <div className="relative aspect-[16/10] overflow-hidden">
            {/* Visual simulation of Lake Siwa black and white shoreline */}
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80')`
              }}
            />
            {/* Dark vignette gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />

            {/* Arabic calligraphy banner overlay "واحة سيوة" */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-none select-none">
              <span className="font-arabic text-3xl sm:text-5xl text-white font-bold tracking-widest drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] opacity-95">
                وَاحَة سِيوَة
              </span>
            </div>

            {/* Shore figure & salt lake aesthetic */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 text-xs font-mono-tech text-neutral-300">
                <span className="text-[#b4ff39]">8K 60FPS</span> · DEOVR VR HEADSET STREAM
              </div>

              <button
                onClick={() => navigate('/vr/siwa')}
                type="button"
                className="w-12 h-12 rounded-full bg-[#b4ff39] text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                aria-label="Play 360 film"
              >
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Project details */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#b4ff39]">
            <span className="font-bold">01</span>
            <span>·</span>
            <span>360° VR FILM</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Siwa Oasis 360°
          </h3>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'رحلة قارب عبر بحيرة سيوة إلى جزيرة بيوت عند الغروب، تم تصويرها بتقنية 360° المخصصة لنظارات الواقع الافتراضي.'
              : 'A boat journey across Lake Siwa to Bayoot Island at sunset, filmed in 360° for a VR headset.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/work/siwa-oasis"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#b4ff39] text-black font-bold text-xs uppercase tracking-wider transition-all hover:bg-[#c6ff33] cursor-pointer shadow-md ${
                isRtl ? 'font-cairo' : 'font-mono-tech'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{isRtl ? 'تفاصيل المشروع الكاملة' : 'EXPLORE CASE STUDY'}</span>
            </Link>

            <button
              onClick={() => navigate('/vr/siwa')}
              type="button"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-700 hover:border-[#b4ff39] text-xs text-white uppercase tracking-wider transition-all hover:bg-neutral-900 cursor-pointer ${
                isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'
              }`}
            >
              <span>{isRtl ? 'مشاهدة على DEOVR' : 'WATCH ON DEOVR'}</span>
              <ChevronRight className="w-4 h-4 text-[#b4ff39]" />
            </button>
          </div>
        </div>
      </div>

      {/* PROJECT 02: Our VR Service, Explained + Instagram Promo Poster */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-28">
        {/* Left: Copy & Explanations */}
        <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#b4ff39]">
            <span className="font-bold">02</span>
            <span>·</span>
            <span>INSTAGRAM PROMO</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Our VR Service, Explained
          </h3>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {isRtl
              ? 'إعلان تعريفي قصير يوضح ماهية خدمتنا في التوثيق المكاني وكيف ننقل من لا يستطيع الحضور لقلب الحدث.'
              : 'A short Instagram promo that shows what our VR service is and how it works.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/work/service-explained"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#b4ff39] text-black font-bold text-xs uppercase tracking-wider transition-all hover:bg-[#c6ff33] cursor-pointer shadow-md ${
                isRtl ? 'font-cairo' : 'font-mono-tech'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{isRtl ? 'شرح منظومة الخدمة' : 'SERVICE BREAKDOWN'}</span>
            </Link>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-700 hover:border-[#b4ff39] text-xs text-white uppercase tracking-wider transition-all hover:bg-neutral-900 cursor-pointer ${
                isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'
              }`}
            >
              <Instagram className="w-4 h-4 text-[#b4ff39]" />
              <span>{isRtl ? 'مشاهدة على إنستغرام' : 'WATCH ON INSTAGRAM'}</span>
            </a>
          </div>
        </div>

        {/* Right: The stylized diagram poster card (Recreated with exact typography and graphics) */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-lg bg-[#0e0e11] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden text-neutral-200">
            {/* Top metadata line */}
            <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-400 mb-6" dir="ltr">
              <span className="tracking-widest uppercase">{currentSlide.badge}</span>
              <span className="tracking-widest font-semibold text-white">{currentSlide.slideNumber}</span>
            </div>

            {/* Poster Main Heading */}
            <h4 className="text-xl sm:text-2xl font-bold tracking-wide text-white uppercase mb-2 font-display" dir="ltr">
              {currentSlide.heading}
            </h4>
            <p className="text-[11px] font-mono-tech text-neutral-400 mb-8 uppercase tracking-wider" dir="ltr">
              {currentSlide.subheading}
            </p>

            {/* Constellation / Network Node Diagram */}
            <div className="relative w-full h-44 sm:h-52 flex items-center justify-center my-4" dir="ltr">
              <svg className="w-full h-full" viewBox="0 0 320 180" fill="none">
                {/* Concentric orbital rings */}
                <circle cx="160" cy="110" r="30" stroke="#262626" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="160" cy="110" r="60" stroke="#262626" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="160" cy="110" r="90" stroke="#262626" strokeWidth="1" strokeDasharray="3 3" />

                {/* Central VR Camera Core */}
                <circle cx="160" cy="110" r="14" fill="#070707" stroke="#b4ff39" strokeWidth="2" />
                <circle cx="160" cy="110" r="5" fill="#b4ff39" />

                {/* Radiating connector lines */}
                <line x1="160" y1="110" x2="60" y2="70" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />
                <line x1="160" y1="110" x2="90" y2="35" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />
                <line x1="160" y1="110" x2="160" y2="25" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />
                <line x1="160" y1="110" x2="230" y2="35" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />
                <line x1="160" y1="110" x2="260" y2="70" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />
                <line x1="160" y1="110" x2="275" y2="120" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />

                {/* Node 1: CEO */}
                <circle cx="60" cy="70" r="11" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                <text x="60" y="73" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">CEO</text>

                {/* Node 2: A (Regional Teams) */}
                <circle cx="90" cy="35" r="9" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                <text x="90" y="38" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">A</text>

                {/* Node 3: A */}
                <circle cx="160" cy="25" r="9" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                <text x="160" y="28" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">A</text>

                {/* Node 4: A */}
                <circle cx="230" cy="35" r="9" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                <text x="230" y="38" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">A</text>

                {/* Node 5: A */}
                <circle cx="260" cy="70" r="9" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                <text x="260" y="73" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">A</text>

                {/* Node 6: A */}
                <circle cx="275" cy="120" r="9" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                <text x="275" y="123" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">A</text>
              </svg>
            </div>

            {/* Highlight quote */}
            <div className="space-y-2 mt-4 mb-6" dir="ltr">
              <h5 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
                {currentSlide.bodyEn}
              </h5>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                {currentSlide.targetAudienceEn}
              </p>
              <p className="text-xs text-neutral-400 font-cairo leading-relaxed pt-1" dir="rtl">
                {currentSlide.targetAudienceAr}
              </p>
            </div>

            {/* Bottom bar with Swipe interactive action */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-[11px] font-mono-tech" dir="ltr">
              <span className="text-neutral-500 uppercase tracking-widest">VISION VR PRODUCTION</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  type="button"
                  className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous promo slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  type="button"
                  className="inline-flex items-center gap-1 text-[#b4ff39] hover:underline cursor-pointer uppercase"
                  aria-label="Next promo slide"
                >
                  <span>SWIPE</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER JOURNEYS */}
      <div className="pt-10 border-t border-neutral-900">
        <div className="flex items-center justify-between mb-4">
          <h4 className={`text-xs tracking-[0.2em] text-neutral-400 uppercase ${isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'}`}>
            {isRtl ? 'رحلات أخرى موثقة' : 'OTHER JOURNEYS'}
          </h4>
          <Link
            to="/journeys"
            className="text-xs font-mono-tech text-[#b4ff39] hover:underline flex items-center gap-1"
          >
            <span>{isRtl ? 'استعراض الدليل الشامل (١٠)' : 'VIEW ALL ARCHIVES (10)'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Journey tags with dedicated links */}
        <div className="flex flex-wrap items-center gap-y-3 gap-x-2 text-sm sm:text-base text-neutral-300">
          {JOURNEYS.map((journey, idx) => (
            <React.Fragment key={journey.id}>
              <Link
                to={`/journeys/${journey.id}`}
                className="hover:text-[#b4ff39] transition-colors cursor-pointer hover:underline underline-offset-4"
              >
                {isRtl ? journey.nameAr : journey.nameEn}
              </Link>
              {idx < JOURNEYS.length - 1 && (
                <span className="text-neutral-600 select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* MORE ON YOUTUBE Link */}
        <div className="mt-6">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-[#b4ff39] underline uppercase tracking-wider transition-colors ${
              isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'
            }`}
          >
            <Youtube className="w-4 h-4 text-red-500" />
            <span>{isRtl ? 'المزيد على يوتيوب' : 'MORE ON YOUTUBE'}</span>
          </a>
        </div>
      </div>

      {/* Journey Detail Modal if a chip is clicked */}
      {selectedJourney && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md bg-neutral-950 border border-neutral-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b4ff39]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedJourney.coordinates}</span>
              </div>
              <button
                onClick={() => setSelectedJourney(null)}
                className="text-neutral-400 hover:text-white"
                aria-label="Close journey detail"
              >
                ✕
              </button>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              {isRtl ? selectedJourney.nameAr : selectedJourney.nameEn}
            </h3>
            <p className="text-xs font-mono-tech text-neutral-400 uppercase mb-3">
              {selectedJourney.category} · {selectedJourney.recordedIn}
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {isRtl ? selectedJourney.descriptionAr : selectedJourney.descriptionEn}
            </p>

            <button
              onClick={() => {
                const id = selectedJourney.id === 'shali' ? 'shali' : 'siwa';
                setSelectedJourney(null);
                onOpenVRWithScene(id);
              }}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#b4ff39] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#c4ff33] transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isRtl ? 'استكشف المشهد في 360°' : 'LAUNCH 360° PREVIEW'}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
