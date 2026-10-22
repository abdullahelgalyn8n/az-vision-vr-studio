import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Play, Video, Compass, Sparkles, ExternalLink, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface VisualDiariesPageProps {
  currentLang: 'en' | 'ar';
}

export const VisualDiariesPage: React.FC<VisualDiariesPageProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';
  const navigate = useNavigate();

  const diaries = [
    {
      id: 'dunes',
      titleEn: 'A Nostalgic VR Journey Across the Dunes',
      titleAr: 'رحلة حنين افتراضية عبر الكثبان الرملية',
      descriptionEn: 'A cinematic desert journey in 360°, where nostalgia meets the future. Filmed in the Great Sand Sea under unpolluted starlight.',
      descriptionAr: 'رحلة صحراوية سينمائية بزاوية 360°، حيث يلتقي الحنين إلى الماضي بالمستقبل في بحر الرمال الأعظم.',
      channel: 'TIME TRAVELLER 04X',
      runtime: '14 MINS · 8K STEREO',
      badge: 'DESERT EXPEDITION',
      image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'shali',
      titleEn: 'Shali Secrets: A VR Film Exploring the Castle',
      titleAr: 'أسرار شالي: فيلم واقع افتراضي يستكشف القلعة التاريخية',
      descriptionEn: 'A meditative night walkthrough of the mudbrick ruins of Shali Fortress, set to western country ambient acoustics and desert night breezes.',
      descriptionAr: 'استكشاف ليلي تأملي لأطلال قلعة شالي المصنوعة من الكرشيف الطيني، مع نغمات بيئية وصوت الرياح الليلية.',
      channel: 'VISION ARCHIVE EG',
      runtime: '18 MINS · BINAURAL',
      badge: 'ANCIENT HERITAGE',
      calligraphy: 'أسرار شالي',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'siwa',
      titleEn: 'Bayoot Island Twilight: The Salt Lake Passage',
      titleAr: 'شفق جزيرة بيوت: عبور بحيرة الملح',
      descriptionEn: 'Gliding on mirrored brine waters at dusk as salt crystals glow beneath the silent Egyptian sky.',
      descriptionAr: 'الانزلاق فوق مياه الملح البلورية عند الشفق بينما تتلألأ بلورات الملح تحت سماء مصر الهادئة.',
      channel: 'PILOT LOG 003',
      runtime: '11 MINS · 360° AMBIENT',
      badge: 'WATER & MINERALS',
      calligraphy: 'وَاحَة سِيوَة',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <div className="pb-24">
      <PageHeader
        titleEn="Visual Diaries Archive"
        titleAr="أرشيف اليوميات البصرية الغامرة"
        subtitleEn="Poetic 360° documentaries and ambient cinema capsules recorded across Egypt's ancient deserts and silent waters."
        subtitleAr="أفلام وثائقية شاعرية بزاوية 360 درجة وكبسولات سينمائية بيئية مسجلة عبر صحاري مصر ومياهها الهادئة."
        categoryEn="VISUAL DIARIES"
        categoryAr="اليوميات البصرية"
        isRtl={isRtl}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diaries.map((diary) => (
            <div
              key={diary.id}
              className="group bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#b4ff39] transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div
                  onClick={() => navigate(`/vr/${diary.id}`)}
                  className="relative aspect-video overflow-hidden cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${diary.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

                  {diary.calligraphy && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                      <span className="font-arabic text-xl sm:text-2xl text-white font-bold drop-shadow-md">
                        {diary.calligraphy}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono-tech text-[#b4ff39] border border-neutral-800">
                    {diary.badge}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/75 backdrop-blur-md border border-neutral-600 text-white flex items-center justify-center group-hover:scale-110 group-hover:border-[#b4ff39] group-hover:text-[#b4ff39] transition-all shadow-lg">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono-tech text-neutral-400">
                    <span>{diary.runtime}</span>
                    <span className="text-[#b4ff39]">VR READY</span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#b4ff39] transition-colors leading-snug">
                    {isRtl ? diary.titleAr : diary.titleEn}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {isRtl ? diary.descriptionAr : diary.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-neutral-800/60 mt-4 text-xs font-mono-tech">
                <span className="text-neutral-500 uppercase">
                  {diary.channel}
                </span>

                <button
                  onClick={() => navigate(`/vr/${diary.id}`)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-[#b4ff39] hover:underline cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'مشاهدة الآن 360°' : 'WATCH 360°'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Headset Audio Note */}
        <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-300">
          <div className="flex items-center gap-3">
            <Headphones className="w-5 h-5 text-[#b4ff39] shrink-0" />
            <div>
              <span className="font-bold text-white block">Recommended Listening Mode:</span>
              <span className="text-neutral-400">Binaural headphones or Meta Quest 3 / Apple Vision Pro spatial audio drivers.</span>
            </div>
          </div>

          <a
            href="https://deovr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#b4ff39] hover:underline font-mono-tech uppercase"
          >
            <span>DEOVR OFFICIAL STREAM</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
