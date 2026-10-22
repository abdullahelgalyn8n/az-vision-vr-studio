import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Play, Instagram, ChevronRight, ChevronLeft, MapPin, Eye, ExternalLink, Filter, Sparkles } from 'lucide-react';
import { JOURNEYS, PROMO_SLIDES, getSlide } from '../utils/data';
import { Link, useNavigate } from 'react-router-dom';

interface WorkPageProps {
  currentLang: 'en' | 'ar';
}

export const WorkPage: React.FC<WorkPageProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const currentSlide = getSlide(slideIndex, PROMO_SLIDES);

  const filteredJourneys = activeCategory === 'all'
    ? JOURNEYS
    : JOURNEYS.filter((j) => {
        if (activeCategory === 'oasis') return j.id === 'siwa' || j.id === 'shali' || j.id === 'amun';
        if (activeCategory === 'cairo') return j.id === 'old-cairo' || j.id === 'el-moez' || j.id === 'wadi-degla';
        if (activeCategory === 'regional') return j.id === 'doha' || j.id === 'souq-waqif' || j.id === 'lusail' || j.id === 'dahab';
        return true;
      });

  return (
    <div className="pb-24">
      <PageHeader
        titleEn="Works & Spatial Preservations"
        titleAr="الأعمال والتوثيق المكاني ثلاثي الأبعاد"
        subtitleEn="Step into our library of 360° films, event capsules, and historic Egyptian landmarks preserved for spatial headsets."
        subtitleAr="مكتبة أفلام 360 درجة، وتوثيق الفعاليات الكبرى، والمعالم التراثية المصرية المحفوظة لنظارات الواقع الافتراضي."
        categoryEn="PORTFOLIO"
        categoryAr="سجل الأعمال"
        isRtl={isRtl}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {/* Project 01: Siwa Oasis 360 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />

              <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-none select-none">
                <span className="font-arabic text-3xl sm:text-5xl text-white font-bold tracking-widest drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] opacity-95">
                  وَاحَة سِيوَة
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-neutral-700/60 text-xs font-mono-tech text-neutral-300">
                  <span className="text-[#b4ff39]">8K 60FPS</span> · DEOVR VR HEADSET STREAM
                </div>

                <button
                  onClick={() => navigate('/vr/siwa')}
                  type="button"
                  className="w-12 h-12 rounded-full bg-[#b4ff39] text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Launch 360 film"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono-tech text-[#b4ff39]">
              01 · 360° VR FILM
            </div>

            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              Siwa Oasis 360°
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'رحلة قارب عبر بحيرة سيوة إلى جزيرة بيوت عند الغروب، تم تصويرها بتقنية 360° المخصصة لنظارات الواقع الافتراضي.'
                : 'A boat journey across Lake Siwa to Bayoot Island at sunset, filmed in 360° for a VR headset.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                to="/work/siwa-oasis"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#b4ff39] text-black text-xs font-bold uppercase tracking-wider transition-all hover:bg-[#c6ff33] cursor-pointer shadow-md ${
                  isRtl ? 'font-cairo' : 'font-mono-tech'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>{isRtl ? 'تفاصيل المشروع والعتاد' : 'VIEW FULL CASE STUDY'}</span>
              </Link>

              <button
                onClick={() => navigate('/vr/siwa')}
                type="button"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-700 hover:border-[#b4ff39] text-xs font-mono-tech uppercase tracking-wider text-neutral-200 transition-all cursor-pointer hover:bg-neutral-900`}
              >
                <Eye className="w-4 h-4 text-[#b4ff39]" />
                <span>{isRtl ? 'مشغل 360°' : '360° VR'}</span>
              </button>

              <a
                href="https://deovr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-neutral-800 hover:border-neutral-600 text-xs text-neutral-400 font-mono-tech uppercase tracking-wider transition-all"
              >
                <span>DEOVR</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 02: Our VR Service Explained + Poster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            <div className="text-xs font-mono-tech text-[#b4ff39]">
              02 · INSTAGRAM PROMO
            </div>

            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              Our VR Service, Explained
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'إعلان تعريفي قصير يوضح ماهية خدمتنا في التوثيق المكاني وكيف ننقل من لا يستطيع الحضور لقلب الحدث.'
                : 'A short Instagram promo that shows what our VR service is and how it works.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/work/service-explained"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#b4ff39] text-black text-xs font-bold uppercase tracking-wider transition-all hover:bg-[#c6ff33] cursor-pointer shadow-md ${
                  isRtl ? 'font-cairo' : 'font-mono-tech'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>{isRtl ? 'الدليل والشرح الكامل' : 'FULL SERVICE BREAKDOWN'}</span>
              </Link>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-700 hover:border-[#b4ff39] text-xs text-white uppercase tracking-wider transition-all hover:bg-neutral-900 cursor-pointer ${
                  isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'
                }`}
              >
                <Instagram className="w-4 h-4 text-[#b4ff39]" />
                <span>{isRtl ? 'إنستغرام' : 'INSTAGRAM'}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg bg-[#0e0e11] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden text-neutral-200">
              <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-400 mb-6" dir="ltr">
                <span className="tracking-widest uppercase">{currentSlide.badge}</span>
                <span className="tracking-widest font-semibold text-white">{currentSlide.slideNumber}</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold tracking-wide text-white uppercase mb-2 font-display" dir="ltr">
                {currentSlide.heading}
              </h4>
              <p className="text-[11px] font-mono-tech text-neutral-400 mb-8 uppercase tracking-wider" dir="ltr">
                {currentSlide.subheading}
              </p>

              <div className="relative w-full h-44 sm:h-52 flex items-center justify-center my-4" dir="ltr">
                <svg className="w-full h-full" viewBox="0 0 320 180" fill="none">
                  <circle cx="160" cy="110" r="30" stroke="#262626" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="160" cy="110" r="60" stroke="#262626" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="160" cy="110" r="90" stroke="#262626" strokeWidth="1" strokeDasharray="3 3" />

                  <circle cx="160" cy="110" r="14" fill="#070707" stroke="#b4ff39" strokeWidth="2" />
                  <circle cx="160" cy="110" r="5" fill="#b4ff39" />

                  <line x1="160" y1="110" x2="60" y2="70" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />
                  <line x1="160" y1="110" x2="90" y2="35" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />
                  <line x1="160" y1="110" x2="160" y2="25" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />
                  <line x1="160" y1="110" x2="230" y2="35" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />
                  <line x1="160" y1="110" x2="260" y2="70" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />
                  <line x1="160" y1="110" x2="275" y2="120" stroke="rgba(180,255,57,0.4)" strokeWidth="1" />

                  <circle cx="60" cy="70" r="11" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                  <text x="60" y="73" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">CEO</text>

                  <circle cx="90" cy="35" r="9" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                  <text x="90" y="38" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">A</text>

                  <circle cx="160" cy="25" r="9" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                  <text x="160" y="28" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">A</text>

                  <circle cx="230" cy="35" r="9" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                  <text x="230" y="38" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">A</text>

                  <circle cx="260" cy="70" r="9" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                  <text x="260" y="73" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">A</text>

                  <circle cx="275" cy="120" r="9" fill="#141416" stroke="#525252" strokeWidth="1.5" />
                  <text x="275" y="123" fill="#e5e5e5" fontSize="7" fontFamily="Space Mono" textAnchor="middle">A</text>
                </svg>
              </div>

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

              <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-[11px] font-mono-tech" dir="ltr">
                <span className="text-neutral-500 uppercase tracking-widest">VISION VR PRODUCTION</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSlideIndex((p) => p - 1)}
                    type="button"
                    className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous promo slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSlideIndex((p) => p + 1)}
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

        {/* Filterable Journeys Bento Section */}
        <div className="pt-12 border-t border-neutral-900 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-tech text-[#b4ff39] uppercase tracking-wider block">
                  LOCATION DIRECTORY
                </span>
                <span className="text-neutral-600">·</span>
                <Link
                  to="/journeys"
                  className="text-xs font-mono-tech text-neutral-400 hover:text-[#b4ff39] hover:underline"
                >
                  {isRtl ? 'عرض فهرس الرحلات المخصص (١٠) →' : 'OPEN CATALOG PAGE (10) →'}
                </Link>
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                {isRtl ? 'أرشيف المواقع الجغرافية المسجلة' : 'Documented Expeditions'}
              </h3>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-neutral-900/80 rounded-xl border border-neutral-800">
              <button
                onClick={() => setActiveCategory('all')}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-colors cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#b4ff39] text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isRtl ? 'الكل' : 'ALL'}
              </button>
              <button
                onClick={() => setActiveCategory('oasis')}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-colors cursor-pointer ${
                  activeCategory === 'oasis'
                    ? 'bg-[#b4ff39] text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isRtl ? 'سيوة والواحات' : 'OASIS & DESERT'}
              </button>
              <button
                onClick={() => setActiveCategory('cairo')}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-colors cursor-pointer ${
                  activeCategory === 'cairo'
                    ? 'bg-[#b4ff39] text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isRtl ? 'القاهرة والمعز' : 'CAIRO HERITAGE'}
              </button>
              <button
                onClick={() => setActiveCategory('regional')}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-colors cursor-pointer ${
                  activeCategory === 'regional'
                    ? 'bg-[#b4ff39] text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isRtl ? 'الخليج والبحار' : 'COAST & GULF'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredJourneys.map((journey) => (
              <Link
                key={journey.id}
                to={`/journeys/${journey.id}`}
                className="group p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-[#b4ff39] transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-400 mb-2">
                    <span className="text-[#b4ff39]">{journey.category}</span>
                    <MapPin className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#b4ff39] transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#b4ff39] transition-colors mb-2">
                    {isRtl ? journey.nameAr : journey.nameEn}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {isRtl ? journey.descriptionAr : journey.descriptionEn}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono-tech text-neutral-400">
                  <span>{journey.recordedIn}</span>
                  <span className="text-[#b4ff39] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {isRtl ? 'استعراض' : 'EXPLORE'} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
