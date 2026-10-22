import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { JOURNEYS } from '../utils/data';
import { MapPin, Sparkles, Video, ArrowLeft, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface JourneyDetailPageProps {
  currentLang: 'en' | 'ar';
}

export const JourneyDetailPage: React.FC<JourneyDetailPageProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const journey = JOURNEYS.find((j) => j.id === id) || JOURNEYS[0];

  return (
    <div className="pb-24">
      <PageHeader
        titleEn={journey.nameEn}
        titleAr={journey.nameAr}
        subtitleEn={journey.descriptionEn}
        subtitleAr={journey.descriptionAr}
        categoryEn="EXPEDITIONS"
        categoryAr="سجل الرحلات"
        isRtl={isRtl}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        {/* Main Card */}
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b4ff39] mb-2">
                <MapPin className="w-4 h-4" />
                <span>GPS: {journey.coordinates}</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-400">{journey.category}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal text-white">
                {isRtl ? journey.nameAr : journey.nameEn}
              </h2>
            </div>

            <button
              onClick={() => navigate(`/vr/${journey.id === 'shali' ? 'shali' : 'siwa'}`)}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#b4ff39] hover:bg-[#c6ff33] text-black font-bold text-xs font-mono-tech uppercase tracking-widest transition-all cursor-pointer shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isRtl ? 'فتح التجربة في 360°' : 'LAUNCH 360° PREVIEW'}</span>
            </button>
          </div>

          <div className="py-8 space-y-6">
            <div>
              <span className="text-xs font-mono-tech text-[#b4ff39] uppercase tracking-wider block mb-2">
                ARCHIVAL CONTEXT & POETRY
              </span>
              <p className="text-neutral-200 text-lg sm:text-xl font-poetic italic leading-relaxed">
                {isRtl ? `«${journey.descriptionAr}»` : `"${journey.descriptionEn}"`}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800/60">
              <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 space-y-1">
                <span className="text-[10px] font-mono-tech text-neutral-500 uppercase">
                  RECORDING SPECIFICATION
                </span>
                <p className="text-sm font-mono-tech text-white flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#b4ff39]" />
                  <span>{journey.recordedIn}</span>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 space-y-1">
                <span className="text-[10px] font-mono-tech text-neutral-500 uppercase">
                  IMMERSIVE COMPATIBILITY
                </span>
                <p className="text-sm font-mono-tech text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#b4ff39]" />
                  <span>Apple Vision Pro · Quest 3</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Journeys Horizontal Strip */}
        <div className="pt-6 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
            <h3 className="text-xs font-mono-tech text-neutral-400 uppercase tracking-widest">
              {isRtl ? 'المحطات الموثقة الأخرى' : 'OTHER DOCUMENTED SITES'}
            </h3>
            <Link to="/work" className="text-xs font-mono-tech text-[#b4ff39] hover:underline">
              {isRtl ? 'عرض الدليل الكامل →' : 'VIEW ALL ARCHIVES →'}
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {JOURNEYS.map((item) => (
              <Link
                key={item.id}
                to={`/journeys/${item.id}`}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono-tech transition-all border ${
                  item.id === journey.id
                    ? 'bg-[#b4ff39] text-black border-[#b4ff39] font-bold shadow-md'
                    : 'bg-neutral-900/60 text-neutral-300 border-neutral-800 hover:border-neutral-600 hover:text-white'
                }`}
              >
                {isRtl ? item.nameAr : item.nameEn}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
