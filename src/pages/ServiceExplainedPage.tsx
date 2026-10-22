import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PROMO_SLIDES, getSlide } from '../utils/data';
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Zap, Headphones, Globe, ArrowRight, ArrowLeft, MessageSquare, Instagram, ExternalLink, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ServiceExplainedPageProps {
  currentLang: 'en' | 'ar';
}

export const ServiceExplainedPage: React.FC<ServiceExplainedPageProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  const currentSlide = getSlide(slideIndex, PROMO_SLIDES);

  const nextSlide = () => setSlideIndex((prev) => prev + 1);
  const prevSlide = () => setSlideIndex((prev) => prev - 1);

  return (
    <div className="pb-28">
      {/* Header */}
      <PageHeader
        titleEn="Our VR Service, Explained — Spatial Preservations"
        titleAr="شرح خدمة الواقع الافتراضي — التوثيق المكاني للأحداث"
        subtitleEn="How we capture high-stakes events, private milestones, and sacred architectural heritage so absent leaders and loved ones can stand inside the moment."
        subtitleAr="كيف نوثق الفعاليات الكبرى، والمناسبات الخاصة، والتراث المعماري لتمكين القادة والشركاء الغائبين من الحضور داخل اللحظة."
        categoryEn="PROJECT 02 · EXECUTIVE SERVICE FRAMEWORK"
        categoryAr="المشروع 02 · دليل الخدمة التنفيذي"
        isRtl={isRtl}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">
        {/* Interactive Slide Visualizer Card (Matching reference poster aesthetics) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Context & Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#b4ff39]">
              <span className="font-bold">02</span>
              <span>·</span>
              <span>INSTAGRAM & EXECUTIVE PROMO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              {isRtl ? 'حيث تصبح القرارات البعيدة لحظات حاضرة' : 'Where Remote Decisions Become Immersive Moments'}
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'عندما يكون أصحاب القرار أو شركاء الأعمال أو أفراد العائلة في قارات أخرى، فإن تسجيلات الفيديو العادية والشاشات المسطحة لا تنقل هيبة المكان أو دفء المشاعر. خدمتنا مصممة لنقلهم افتراضياً إلى المقعد الأول.'
                : 'When key board members, regional partners, or family elders cannot attend an event in Egypt or the GCC, standard video calls fail to convey presence, scale, and emotional resonance. Vision VR bridges thousands of miles with 1:1 scale spatial immersion.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#b4ff39] hover:bg-[#c6ff33] text-black font-bold text-xs font-mono-tech uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(180,255,57,0.3)] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isRtl ? 'طلب استشارة وتوثيق' : 'COMMISSION A CAPTURE'}</span>
              </Link>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-700 hover:border-neutral-500 text-xs font-mono-tech uppercase text-neutral-300 transition-all hover:bg-neutral-900"
              >
                <Instagram className="w-4 h-4 text-[#b4ff39]" />
                <span>INSTAGRAM REEL</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Poster / Slide Player */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-xl bg-[#0e0e11] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden text-neutral-200">
              {/* Slide Meta Line */}
              <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-400 mb-6" dir="ltr">
                <span className="tracking-widest uppercase text-[#b4ff39]">{currentSlide.badge}</span>
                <span className="tracking-widest font-semibold text-white px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                  {currentSlide.slideNumber}
                </span>
              </div>

              {/* Main Heading */}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-wide text-white uppercase mb-2 font-display" dir="ltr">
                {currentSlide.heading}
              </h3>
              <p className="text-xs font-mono-tech text-neutral-400 mb-8 uppercase tracking-wider" dir="ltr">
                {currentSlide.subheading}
              </p>

              {/* Center Diagram Aesthetic */}
              <div className="relative py-8 my-4 border-y border-neutral-800/80 flex flex-col items-center justify-center min-h-[220px]">
                {/* Tech Grid Background Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#b4ff39_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

                {/* Animated focal node */}
                <div className="relative z-10 w-24 h-24 rounded-full border border-neutral-700 bg-neutral-950/80 flex items-center justify-center shadow-[0_0_30px_rgba(180,255,57,0.15)] mb-4">
                  <div className="w-16 h-16 rounded-full border border-[#b4ff39]/40 flex items-center justify-center animate-pulse">
                    <Sparkles className="w-8 h-8 text-[#b4ff39]" />
                  </div>
                </div>

                <div className="relative z-10 text-center max-w-md px-4">
                  <p className="text-sm sm:text-base text-neutral-100 font-sans font-medium mb-1.5">
                    {isRtl ? currentSlide.arText : currentSlide.enText}
                  </p>
                  <p className="text-xs text-neutral-400 font-mono-tech">
                    {isRtl ? currentSlide.arDetails : currentSlide.enDetails}
                  </p>
                </div>
              </div>

              {/* Slide Navigation Controls */}
              <div className="flex items-center justify-between pt-4 mt-2">
                <div className="flex items-center gap-1.5" dir="ltr">
                  {PROMO_SLIDES.map((_, idx) => {
                    const active = ((slideIndex % PROMO_SLIDES.length) + PROMO_SLIDES.length) % PROMO_SLIDES.length === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSlideIndex(idx)}
                        type="button"
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          active ? 'w-8 bg-[#b4ff39]' : 'w-2 bg-neutral-800 hover:bg-neutral-600'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    );
                  })}
                </div>

                <div className="flex items-center gap-2" dir="ltr">
                  <button
                    onClick={prevSlide}
                    type="button"
                    className="p-2.5 rounded-xl border border-neutral-800 hover:border-neutral-600 bg-neutral-900/60 text-neutral-300 hover:text-white transition-all cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    type="button"
                    className="p-2.5 rounded-xl border border-neutral-800 hover:border-neutral-600 bg-neutral-900/60 text-neutral-300 hover:text-white transition-all cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Executive Spatial Capture */}
        <div className="space-y-8">
          <div className="border-b border-neutral-900 pb-4">
            <h3 className="text-xs font-mono-tech text-neutral-400 uppercase tracking-widest">
              {isRtl ? 'الأركان الأربعة لمنظومة الإنتاج' : 'THE FOUR PILLARS OF OUR PRODUCTION PIPELINE'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#b4ff39]">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">
                {isRtl ? 'حضور مكاني مطلق' : 'Absolute Spatial Presence'}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isRtl
                  ? 'رؤية 360 درجة متطابقة مع المقياس البشري الحقيقي، تمكن المشاهد من الالتفات وسماع الأصوات من مصدرها الطبيعي.'
                  : 'True 1:1 human scale optics allowing viewers to turn naturally and perceive directional acoustic balance.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#b4ff39]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">
                {isRtl ? 'سرية وخصوصية مشفرة' : 'Encrypted Discretion'}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isRtl
                  ? 'تسليم مشفر عبر خوادم خاصة بدون أي نشر عام، مخصص للاجتماعات الدبلوماسية والمناسبات الملكية والخاصة.'
                  : 'AES-256 encrypted private cloud delivery. No public uploads; designed for diplomatic and family confidentiality.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#b4ff39]">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">
                {isRtl ? 'عتاد غير متطفل' : 'Zero-Disruption Rigs'}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isRtl
                  ? 'كاميرات صغيرة وهادئة تماماً لا تشوش على سير الحدث، بدون كابلات ممتدة أو أضواء ساطعة مزعجة.'
                  : 'Silent, compact spatial camera clusters with no trailing cables, noisy fans, or harsh blinding set lights.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#b4ff39]">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">
                {isRtl ? 'تسليم نظارات مبرمجة جاهزة' : 'Pre-Configured Headsets'}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isRtl
                  ? 'توصيل نظارات جاهزة بضغطة زر إلى مقرات الشخصيات المهمة في القاهرة ودبي والدوحة والرياض ولندن.'
                  : 'Plug-and-play headsets pre-loaded with the capture and hand-delivered directly to VIP residences and suites.'}
              </p>
            </div>
          </div>
        </div>

        {/* Comparison: Standard 2D Video vs Vision VR Spatial Capture */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono-tech text-[#b4ff39] uppercase tracking-wider block mb-2">
              THE EXPERIENTIAL DELTA
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-white">
              {isRtl ? 'الفارق بين الفيديو التقليدي والتوثيق المكاني' : 'Why Flat Video Is No Longer Sufficient for Pivotal Moments'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Flat video */}
            <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800 space-y-4">
              <div className="text-xs font-mono-tech text-neutral-500 uppercase tracking-wider">
                TRADITIONAL 2D RECTILINEAR VIDEO
              </div>
              <ul className="text-xs text-neutral-400 space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400">✕</span>
                  <span>Locked frame: The viewer can only see what the cameraman chose to frame.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400">✕</span>
                  <span>Distorted distance: No real depth cues or sense of whether a speaker was 2 meters or 10 meters away.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400">✕</span>
                  <span>Passive consumption: Easy to get distracted on a phone or laptop screen.</span>
                </li>
              </ul>
            </div>

            {/* Vision VR */}
            <div className="p-6 rounded-2xl bg-[#0b1009] border border-[#b4ff39]/30 space-y-4">
              <div className="text-xs font-mono-tech text-[#b4ff39] uppercase tracking-wider">
                VISION VR SPATIAL PRESERVATION
              </div>
              <ul className="text-xs text-neutral-200 space-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#b4ff39] shrink-0 mt-0.5" />
                  <span>Full 360° autonomy: Look at the speaker, the audience, the architecture, or the sky.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#b4ff39] shrink-0 mt-0.5" />
                  <span>True stereoscopic depth: Matches human inter-pupillary distance for genuine spatial scale.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#b4ff39] shrink-0 mt-0.5" />
                  <span>Unbroken presence: 100% immersive focus without ambient notifications or distractions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Navigation Footer */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/work/siwa-oasis"
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#b4ff39]" />
            <span>{isRtl ? 'المشروع السابق: واحة سيوة 360°' : 'PREVIOUS: SIWA OASIS 360°'}</span>
          </Link>

          <Link
            to="/journeys"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono-tech text-white uppercase tracking-wider transition-all"
          >
            <span>{isRtl ? 'استعراض سجل الرحلات الكامل' : 'BROWSE ALL EXPEDITIONS'}</span>
            <ArrowRight className="w-4 h-4 text-[#b4ff39]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
