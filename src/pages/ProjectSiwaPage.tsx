import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Play, Sparkles, MapPin, Video, Headphones, ShieldCheck, ExternalLink, ArrowRight, ArrowLeft, Camera, Compass, Layers } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ProjectSiwaPageProps {
  currentLang: 'en' | 'ar';
}

export const ProjectSiwaPage: React.FC<ProjectSiwaPageProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'optics' | 'cultural'>('overview');

  return (
    <div className="pb-28">
      {/* Page Header */}
      <PageHeader
        titleEn="Siwa Oasis 360° — Lake Crossing & Bayoot Island"
        titleAr="واحة سِيوَة 360° — عبور البحيرة وجزيرة بيوت"
        subtitleEn="A meditative boat journey across the mirrored brine of Lake Siwa to Bayoot Island at sunset, preserved in 8K 60FPS for spatial headsets."
        subtitleAr="رحلة قارب تأملية عبر مياه بحيرة سيوة العاكسة إلى جزيرة بيوت عند الغروب، موثقة بتقنية 8K و60 إطاراً في الثانية لنظارات الواقع المكاني."
        categoryEn="PROJECT 01 · 360° SPATIAL ARCHIVE"
        categoryAr="المشروع 01 · الأرشيف المكاني 360°"
        isRtl={isRtl}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Hero Cinematic Canvas Card */}
        <div className="relative group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85')`,
              }}
            />
            {/* Atmospheric gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

            {/* Arabic Calligraphy "واحة سيوة" */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center pointer-events-none select-none">
              <span className="font-arabic text-4xl sm:text-7xl text-white font-bold tracking-widest drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] opacity-95">
                وَاحَة سِيوَة
              </span>
            </div>

            {/* Floating Information Badges */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 text-xs font-mono-tech text-[#b4ff39]">
                8K 60FPS STEREO
              </span>
              <span className="hidden sm:inline-block bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 text-xs font-mono-tech text-neutral-300">
                AMBISONIC B-FORMAT AUDIO
              </span>
            </div>

            {/* Bottom Controls / VR Launch */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-neutral-700/60 max-w-md">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b4ff39] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>29.2032° N, 25.5195° E</span>
                  <span className="text-neutral-500">·</span>
                  <span className="text-neutral-300">WESTERN DESERT, EGYPT</span>
                </div>
                <p className="text-xs text-neutral-300 font-sans">
                  {isRtl
                    ? 'تم تسجيل هذه التجربة فوق مياه بحيرة سيوة شديدة الملوحة أثناء انعكاس أشعة الشمس الغاربة.'
                    : 'Recorded upon the hypersaline brine waters of Lake Siwa during golden hour twilight.'}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate('/vr/siwa')}
                  type="button"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#b4ff39] hover:bg-[#c6ff33] text-black font-bold text-xs font-mono-tech uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(180,255,57,0.4)] cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{isRtl ? 'تشغيل التجربة 360°' : 'LAUNCH 360° EXPERIENCE'}</span>
                </button>

                <a
                  href="https://deovr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-black/80 hover:bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-xs font-mono-tech uppercase text-neutral-200 transition-all"
                >
                  <span>DEOVR VR STREAM</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Project Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800">
            <span className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-widest block mb-1">
              LOCATION
            </span>
            <span className="text-sm font-semibold text-white">Siwa Oasis, Egypt</span>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800">
            <span className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-widest block mb-1">
              FORMAT
            </span>
            <span className="text-sm font-semibold text-[#b4ff39]">8K 60FPS Equirectangular</span>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800">
            <span className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-widest block mb-1">
              ACOUSTICS
            </span>
            <span className="text-sm font-semibold text-white">4-Ch Ambisonic Audio</span>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800">
            <span className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-widest block mb-1">
              COMPATIBILITY
            </span>
            <span className="text-sm font-semibold text-white">Vision Pro · Quest 3 · Web</span>
          </div>
        </div>

        {/* Deep Dive Tabs */}
        <div className="space-y-8">
          <div className="flex items-center border-b border-neutral-800 gap-6">
            <button
              onClick={() => setActiveTab('overview')}
              type="button"
              className={`pb-4 text-xs tracking-widest uppercase transition-colors cursor-pointer ${
                isRtl ? 'font-cairo font-bold' : 'font-mono-tech'
              } ${
                activeTab === 'overview'
                  ? 'text-[#b4ff39] border-b-2 border-[#b4ff39]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {isRtl ? 'سرد الرحلة والغرض' : 'EXPEDITION NARRATIVE'}
            </button>

            <button
              onClick={() => setActiveTab('optics')}
              type="button"
              className={`pb-4 text-xs tracking-widest uppercase transition-colors cursor-pointer ${
                isRtl ? 'font-cairo font-bold' : 'font-mono-tech'
              } ${
                activeTab === 'optics'
                  ? 'text-[#b4ff39] border-b-2 border-[#b4ff39]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {isRtl ? 'العتاد التقني وهندسة الصوت' : 'OPTICS & ACOUSTIC RIG'}
            </button>

            <button
              onClick={() => setActiveTab('cultural')}
              type="button"
              className={`pb-4 text-xs tracking-widest uppercase transition-colors cursor-pointer ${
                isRtl ? 'font-cairo font-bold' : 'font-mono-tech'
              } ${
                activeTab === 'cultural'
                  ? 'text-[#b4ff39] border-b-2 border-[#b4ff39]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {isRtl ? 'التوثيق التراثي والبيئي' : 'HERITAGE ARCHIVE'}
            </button>
          </div>

          {/* Tab 1: Narrative */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-sm sm:text-base">
                <p className="font-poetic italic text-2xl text-neutral-200">
                  {isRtl
                    ? '«عندما تتوقف المحركات، لا يبقى سوى صوت مجداف خشبي يمزق سطح الملح، ورياح الصحراء التي حملت تاريخ الإسكندر الأكبر.»'
                    : '"When the motors cease, nothing remains but the scrape of a wooden oar parting the brine, and the desert wind that once whispered to Alexander the Great."'}
                </p>

                <p>
                  {isRtl
                    ? 'تقع واحة سيوة على بعد أكثر من 300 كيلومتر جنوب غرب مرسى مطروح في عمق الصحراء الغربية المصرية. هذا المشروع لم يكن مجرد تصوير فيديو عادي، بل كان مهمة لحفظ الإحساس الحقيقي بالوجود المكاني (Spatial Presence) داخل إحدى أهدأ بقاع الأرض عزلة وجمالاً.'
                    : 'Located more than 300 kilometers southwest of Marsa Matruh deep within the Egyptian Western Desert, Siwa Oasis rests in a geological depression surrounded by sand dunes and hypersaline salt lakes. This production was engineered not as a standard video, but as a preservation of true spatial presence in one of the most secluded and silent sanctuaries on earth.'}
                </p>

                <p>
                  {isRtl
                    ? 'صعد فريقنا على متن قارب خشبي تقليدي عند الساعة الخامسة مساءً. مع تبخر مياه البحيرة، تتشكل بلورات ملحية بيضاء تلمع كالألماس على الحواف، في حين تنعكس الجبال الجيرية المحيطة كمرآة سائلة متناهية الدقة. أخذنا القارب عبر الممر المائي الهادئ حتى رسونا عند جزيرة بيوت المعزولة.'
                    : 'Our production pilots boarded a traditional wooden craft at 17:00. As the lake waters evaporate beneath the arid desert sun, brilliant white salt crystals encrust the shorelines like diamonds, while the surrounding limestone hills reflect seamlessly on the liquid brine. We navigated the silent channel to land upon Bayoot Island as dusk embraced the palm canopy.'}
                </p>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
                  <h4 className="text-xs font-mono-tech text-[#b4ff39] uppercase tracking-widest flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    <span>CURATORIAL LOG</span>
                  </h4>
                  <ul className="text-xs font-mono-tech space-y-3 text-neutral-300 divide-y divide-neutral-800/80">
                    <li className="pt-2 flex justify-between">
                      <span className="text-neutral-500">EXPEDITION DATE</span>
                      <span className="text-white">Autumn Equinox</span>
                    </li>
                    <li className="pt-2 flex justify-between">
                      <span className="text-neutral-500">SUNSET ELEVATION</span>
                      <span className="text-white">-19m Below Sea Level</span>
                    </li>
                    <li className="pt-2 flex justify-between">
                      <span className="text-neutral-500">SALT CONTENT</span>
                      <span className="text-white">~35% Salinity Index</span>
                    </li>
                    <li className="pt-2 flex justify-between">
                      <span className="text-neutral-500">CREW SIZE</span>
                      <span className="text-white">2 Spatial Pilots (Discreet)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Optics & Sound */}
          {activeTab === 'optics' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center text-[#b4ff39]">
                  <Camera className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white">8K Equirectangular Optics</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Dual matched custom 200° circular fisheye optics synchronized to sub-millisecond shutter genlock, capturing 8192 × 4096 at 60 progressive frames per second with HDR exposure brackets.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center text-[#b4ff39]">
                  <Headphones className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white">Ambisonic Spatial Sound</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  First-order Ambisonics (B-format W, X, Y, Z) recorded with an array of four directional capsules, rotating in real-time as the viewer turns their head inside Apple Vision Pro or Meta Quest 3.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center text-[#b4ff39]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white">Salt Mist Ingress Resistance</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Custom sealed carbon-fiber nautical housing designed specifically to withstand the corrosive aerosol brine and extreme thermal heat spikes of the Egyptian depression.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Cultural */}
          {activeTab === 'cultural' && (
            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-6">
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-mono-tech text-[#b4ff39] uppercase tracking-wider">
                  INDIGENOUS PRESERVATION
                </span>
                <h3 className="text-2xl font-normal text-white">
                  {isRtl ? 'حفظ الذاكرة الشفهية لأهالي سيوة' : 'Preserving the Living Memory of Siwa'}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {isRtl
                    ? 'تعتبر سيوة موطناً للغة الأمازيغية السيوية، وثقافة عريقة تعتمد على الزراعة المعمرة لنخيل البلح والزيتون واستخراج الملح. يهدف هذا الفيلم إلى حفظ البيئة المكانية للواحة قبل أي تغييرات مناخية أو عمرانية مستقبلية.'
                    : 'Siwa is home to the indigenous Siwi language (Juba) and a centuries-old way of life sustained by olive groves, date palms, and salt excavation. This spatial archive captures the pristine equilibrium of the oasis landscape in 1:1 scale for international scholars, cultural foundations, and future generations.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Visual Frame Captures */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
            <h3 className="text-xs font-mono-tech text-neutral-400 uppercase tracking-widest">
              {isRtl ? 'لقطات من أرشيف الإنتاج' : 'ARCHIVAL FRAME STILLS'}
            </h3>
            <span className="text-xs font-mono-tech text-[#b4ff39]">
              RAW 8K CAPTURES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80"
                  alt="Siwa dunes"
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-neutral-950 text-xs font-mono-tech text-neutral-400">
                FRAME 01 · THE DESERT HORIZON ESCARPMENT
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                  alt="Shali Fortress ruins"
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-neutral-950 text-xs font-mono-tech text-neutral-400">
                FRAME 02 · KERSHIF SALT-CLAY MUD FORTRESS
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
                  alt="Bayoot Island twilight"
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-neutral-950 text-xs font-mono-tech text-neutral-400">
                FRAME 03 · BAYOOT ISLAND DUSK ANCHORAGE
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation Footer */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#b4ff39]" />
            <span>{isRtl ? 'العودة إلى معرض الأعمال' : 'BACK TO WORK CATALOG'}</span>
          </Link>

          <Link
            to="/work/service-explained"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono-tech text-white uppercase tracking-wider transition-all"
          >
            <span>{isRtl ? 'المشروع التالي: شرح خدمة الواقع الافتراضي' : 'NEXT: OUR VR SERVICE EXPLAINED'}</span>
            <ArrowRight className="w-4 h-4 text-[#b4ff39]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
