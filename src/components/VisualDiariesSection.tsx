import React from 'react';
import { Play, ChevronRight, Video } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface VisualDiariesSectionProps {
  currentLang: 'en' | 'ar';
  onOpenVRWithScene?: (sceneId: string) => void;
}

export const VisualDiariesSection: React.FC<VisualDiariesSectionProps> = ({
  currentLang,
}) => {
  const isRtl = currentLang === 'ar';
  const navigate = useNavigate();

  return (
    <section id="diaries-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-900">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-mono-tech text-xs tracking-[0.25em] text-neutral-400 uppercase">
          {isRtl ? 'اليوميات البصرية' : 'VISUAL DIARIES'}
        </h2>
        <Link
          to="/visual-diaries"
          className="inline-flex items-center gap-1 text-xs font-mono-tech text-neutral-400 hover:text-[#b4ff39] uppercase tracking-wider transition-colors cursor-pointer group"
        >
          <span className="underline underline-offset-4">
            {isRtl ? 'جميع اليوميات (صفحة مخصصة)' : 'ALL DIARIES'}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#b4ff39] transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Grid of 2 Diary Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {/* Diary 01: A Nostalgic VR Journey Across the Dunes */}
        <div className="group space-y-4">
          <div
            onClick={() => navigate('/vr/dunes')}
            className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer shadow-xl transition-all duration-300 group-hover:border-neutral-700"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1000&q=80')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono-tech text-neutral-200 flex items-center gap-1.5 border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>360° CINEMA</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#b4ff39] group-hover:text-[#b4ff39]">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
            </div>

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono-tech text-neutral-400">
              <span>8K 360° STEREO</span>
              <span className="text-[#b4ff39]">EXPERIENCE NOW</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-[#b4ff39] transition-colors">
              <Link to="/vr/dunes">
                {isRtl ? 'رحلة حنين افتراضية عبر الكثبان الرملية' : 'A Nostalgic VR Journey Across the Dunes'}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {isRtl
                ? 'رحلة صحراوية سينمائية بزاوية 360°، حيث يلتقي الحنين إلى الماضي بالمستقبل.'
                : 'A cinematic desert journey in 360°, where nostalgia meets the future.'}
            </p>
            <p className="text-[11px] font-mono-tech text-neutral-500 uppercase tracking-widest pt-1">
              CHANNEL: TIME TRAVELLER 04X
            </p>
          </div>
        </div>

        {/* Diary 02: Shali Secrets */}
        <div className="group space-y-4">
          <div
            onClick={() => navigate('/vr/shali')}
            className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer shadow-xl transition-all duration-300 group-hover:border-neutral-700"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />

            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center pointer-events-none select-none">
              <span className="font-arabic text-2xl sm:text-3xl text-white font-bold tracking-widest drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                أسرار شالي
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#b4ff39] group-hover:text-[#b4ff39]">
                <Video className="w-6 h-6 ml-0.5" />
              </div>
            </div>

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono-tech text-neutral-400">
              <span>DEOVR READY</span>
              <span className="text-[#b4ff39]">360° FILM</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-[#b4ff39] transition-colors">
              <Link to="/vr/shali">
                {isRtl
                  ? 'أسرار شالي: فيلم واقع افتراضي يستكشف القلعة التاريخية'
                  : 'Shali Secrets: a VR film exploring the castle, set to western country ambient music'}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {isRtl
                ? 'استكشاف لقلعة شالي الطينية القديمة بموسيقى تصويرية بيئية حالمة.'
                : 'A meditative night walkthrough of the mudbrick ruins under northern Saharan starlight.'}
            </p>
            <div className="pt-1">
              <Link
                to="/vr/shali"
                className={`inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-[#b4ff39] uppercase tracking-wider underline underline-offset-4 cursor-pointer ${
                  isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'
                }`}
              >
                <span>{isRtl ? 'مشاهدة على DEOVR' : 'WATCH ON DEOVR'}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#b4ff39]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
