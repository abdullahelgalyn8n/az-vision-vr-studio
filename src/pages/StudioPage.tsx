import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { EyeOfHorusLogo } from '../components/EyeOfHorusLogo';
import { Video, Mic, Cpu, Globe2, MapPin, Award, CheckCircle2, ArrowRight, Layers, Compass, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StudioPageProps {
  currentLang: 'en' | 'ar';
}

export const StudioPage: React.FC<StudioPageProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';

  const productionPhases = [
    {
      num: '01',
      titleEn: 'Field Scouting & Spatial Mapping',
      titleAr: 'المعاينة الميدانية والمسح المكاني',
      descEn: 'Architectural LIDAR scans and ambient acoustic profiling across Egyptian locations before flight.',
      descAr: 'مسح معماري دقيق ورصد البصمة الصوتية المحيطة بالموقع قبل بدء التصوير الميداني.',
    },
    {
      num: '02',
      titleEn: 'Stereoscopic 8K Recording',
      titleAr: 'التصوير المجسم المزدوج 8K',
      descEn: 'Dual-sensor optics recording 60fps high dynamic range with realistic human pupillary scale.',
      descAr: 'تصوير مزدوج العدسات بسرعة 60 إطاراً في الثانية بمدى ديناميكي واسع وعمق واقعي مطابق لعين الإنسان.',
    },
    {
      num: '03',
      titleEn: 'Full-Order Ambisonics',
      titleAr: 'هندسة الصوت المكاني الأمبيسونيك',
      descEn: 'Tetrahedral microphone decoding spatial soundscapes that turn in real-time as your head turns.',
      descAr: 'مصفوفات ميكروفونات رباعية الاتجاهات تسجل الصوت بزاوية 360 درجة ليتفاعل فورياً مع التفاف الرأس.',
    },
    {
      num: '04',
      titleEn: 'Spatial Headset Packaging',
      titleAr: 'تجهيز نظارات الواقع الافتراضي',
      descEn: 'Color mastering for Apple Vision Pro, Meta Quest 3, and DeoVR ultra-low latency streams.',
      descAr: 'معايرة الألوان والترميز الفائق لنظارات آبل فيجن برو، ميتا كويست 3، ومنصة ديو في آر.',
    },
  ];

  return (
    <div className="pb-24">
      <PageHeader
        titleEn="Immersive Art Studio Egypt"
        titleAr="استوديو فنون الواقع الافتراضي والإنتاج الغامر"
        subtitleEn="Based in 6th of October City, Vision VR fuses ancient Egyptian heritage with cutting-edge 8K stereoscopic imaging."
        subtitleAr="من قلب مدينة السادس من أكتوبر، نجمع بين عراقة التراث المصري وأحدث تقنيات التصوير المكاني ثلاثي الأبعاد بدقة 8K."
        categoryEn="THE STUDIO"
        categoryAr="عن الاستوديو"
        isRtl={isRtl}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {/* Tier 1: Monograph & Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b4ff39]">
              <Award className="w-4 h-4" />
              <span>EST. 2024 · CAIRO & 6TH OF OCTOBER CITY</span>
            </div>

            <h2 className="font-poetic italic text-3xl sm:text-5xl text-white leading-tight">
              {isRtl
                ? '«ليست مجرد ذكرى عابرة على شاشة مستوية، بل مكان تعود وتقف في قلبه كلما أردت.»'
                : '"Not a memory. A place you return to."'}
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? 'فيجن في آر هو استوديو إنتاج فني وتقني مستقل في مصر، مكرس لحفظ اللحظات الاستثنائية والمعالم التراثية في فضاء مكاني ثلاثي الأبعاد. نؤمن أن الشاشات المستوية تظلم المشاعر والتفاصيل؛ لذلك نصور الواقع لنعيده كما حدث تماماً.'
                : 'Vision VR is Egypt’s dedicated spatial production atelier. We pioneer 1:1 scale preservation of executive conferences, historic citadels, and Saharan expeditions. A memory preserved on a flat screen is compromised; in a headset, it is resurrected.'}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#b4ff39] hover:bg-[#c6ff33] text-black font-bold text-xs font-mono-tech uppercase tracking-widest transition-all shadow-lg"
              >
                <span>{isRtl ? 'بدء محادثة إنتاج' : 'COMMISSION A PRODUCTION'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center p-8 bg-neutral-900/30 rounded-3xl border border-neutral-800">
            <EyeOfHorusLogo size={220} />
          </div>
        </div>

        {/* Tier 2: Technical Rigging & Standards */}
        <div className="space-y-10">
          <div className="border-b border-neutral-900 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <span className="text-xs font-mono-tech text-[#b4ff39] uppercase tracking-wider block mb-1">
                HARDWARE & ACOUSTICS
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-white">
                {isRtl ? 'المواصفات التقنية وهندسة الصوت' : 'Technical Specifications'}
              </h3>
            </div>
            <p className="text-xs text-neutral-400 font-mono-tech">
              8K 60FPS · AMBISONIC B-FORMAT · ZERO LATENCY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <Video className="w-7 h-7 text-[#b4ff39]" />
              <h4 className="text-base font-bold text-white">8K Stereoscopic VR</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                True dual-eye parallax reproducing natural human inter-pupillary distance for spatial depth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <Mic className="w-7 h-7 text-[#b4ff39]" />
              <h4 className="text-base font-bold text-white">Ambisonic Spatial Sound</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Tetrahedral microphone decoders tracking wind, acoustic reverberation, and voice position.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <Cpu className="w-7 h-7 text-[#b4ff39]" />
              <h4 className="text-base font-bold text-white">Headset Distribution</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Seamless playback for Apple Vision Pro, Meta Quest 3, and DeoVR global VR streaming channels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <Globe2 className="w-7 h-7 text-[#b4ff39]" />
              <h4 className="text-base font-bold text-white">Egypt & GCC Coverage</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Autonomous field pilots deployable across Cairo, Siwa, Red Sea, Doha, Riyadh, and Dubai.
              </p>
            </div>
          </div>
        </div>

        {/* Tier 3: Production Lifecycle Roadmap */}
        <div className="space-y-10">
          <div className="border-b border-neutral-900 pb-4">
            <span className="text-xs font-mono-tech text-[#b4ff39] uppercase tracking-wider block mb-1">
              THE WORKFLOW
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-white">
              {isRtl ? 'مراحل الإنتاج والتسليم المكاني' : 'Spatial Production Lifecycle'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productionPhases.map((phase) => (
              <div key={phase.num} className="p-6 rounded-2xl bg-black border border-neutral-800 space-y-3">
                <span className="font-mono-tech text-lg font-bold text-[#b4ff39]">
                  {phase.num}
                </span>
                <h4 className="text-sm font-bold text-white">
                  {isRtl ? phase.titleAr : phase.titleEn}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {isRtl ? phase.descAr : phase.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 4: Physical Headquarters */}
        <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-300">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#b4ff39] shrink-0" />
            <div>
              <span className="font-bold text-white block">Atelier Location:</span>
              <span className="text-neutral-400">9 Yasmin Street, 4th District, 6th of October City, Egypt</span>
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono-tech">
            <span className="text-neutral-500">DIRECT ENVOY:</span>
            <a href="mailto:VISIONVR.PILOTS@GMAIL.COM" className="text-[#b4ff39] hover:underline">
              VISIONVR.PILOTS@GMAIL.COM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
