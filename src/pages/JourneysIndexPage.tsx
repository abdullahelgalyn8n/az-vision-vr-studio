import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { JOURNEYS, JourneyItem } from '../utils/data';
import { MapPin, Sparkles, Video, Search, Filter, Eye, Compass, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface JourneysIndexPageProps {
  currentLang: 'en' | 'ar';
}

export const JourneysIndexPage: React.FC<JourneysIndexPageProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredJourneys = JOURNEYS.filter((item) => {
    // Tab filter
    if (activeTab === 'oasis' && !(item.id === 'siwa' || item.id === 'shali' || item.id === 'amun')) {
      return false;
    }
    if (activeTab === 'cairo' && !(item.id === 'old-cairo' || item.id === 'el-moez' || item.id === 'wadi-degla')) {
      return false;
    }
    if (activeTab === 'gulf' && !(item.id === 'doha' || item.id === 'souq-waqif' || item.id === 'lusail' || item.id === 'dahab')) {
      return false;
    }

    // Search query
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.nameEn.toLowerCase().includes(q) ||
      item.nameAr.includes(q) ||
      item.descriptionEn.toLowerCase().includes(q) ||
      item.descriptionAr.includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.coordinates.toLowerCase().includes(q)
    );
  });

  return (
    <div className="pb-28">
      {/* Header */}
      <PageHeader
        titleEn="Expeditions & Historic Sites Index"
        titleAr="فهرس الرحلات والمواقع التاريخية الموثقة"
        subtitleEn="The definitive archive of ancient Egyptian oases, Fatimid corridors, and Arabian Gulf architecture captured in spatial reality."
        subtitleAr="الأرشيف الشامل للواحات المصرية العتيقة، والمعالم الفاطمية، والعمارة الخليجية الحديثة الموثقة في الواقع المكاني."
        categoryEn="SITE ARCHIVES · 10 LOCATIONS"
        categoryAr="سجل المواقع · ١٠ محطات"
        isRtl={isRtl}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRtl ? 'ابحث عن موقع، إحداثية، أو واحة...' : 'Search by site name, coordinates, oasis...'}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#b4ff39] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className={`flex flex-wrap items-center gap-2 text-xs ${isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'}`}>
            <button
              onClick={() => setActiveTab('all')}
              type="button"
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#b4ff39] text-black font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              {isRtl ? 'الكل (١٠)' : 'ALL (10)'}
            </button>

            <button
              onClick={() => setActiveTab('oasis')}
              type="button"
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'oasis'
                  ? 'bg-[#b4ff39] text-black font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              {isRtl ? 'سيوة والواحات' : 'OASIS & DESERT'}
            </button>

            <button
              onClick={() => setActiveTab('cairo')}
              type="button"
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'cairo'
                  ? 'bg-[#b4ff39] text-black font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              {isRtl ? 'القاهرة التراثية' : 'CAIRO HERITAGE'}
            </button>

            <button
              onClick={() => setActiveTab('gulf')}
              type="button"
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'gulf'
                  ? 'bg-[#b4ff39] text-black font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              {isRtl ? 'الساحل والخليج' : 'COAST & GULF'}
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className={`flex items-center justify-between text-xs text-neutral-400 ${isRtl ? 'font-cairo' : 'font-mono-tech'}`}>
          <span>
            {isRtl
              ? `عرض ${filteredJourneys.length} من أصل ${JOURNEYS.length} موقع موثق`
              : `SHOWING ${filteredJourneys.length} OF ${JOURNEYS.length} DOCUMENTED SITES`}
          </span>

          <span className="text-[#b4ff39]">
            8K RESOLUTION · ALL COMPATIBLE WITH VISION PRO & QUEST 3
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJourneys.map((item) => (
            <div
              key={item.id}
              className="group bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#b4ff39] transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${
                        item.id === 'siwa' || item.id === 'amun'
                          ? 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
                          : item.id === 'shali'
                          ? 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
                          : item.id === 'el-moez' || item.id === 'old-cairo'
                          ? 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80'
                          : item.id === 'dahab'
                          ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
                          : 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80'
                      }')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono-tech text-[#b4ff39] border border-neutral-800">
                    {item.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono-tech text-neutral-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#b4ff39]" />
                      <span>{item.coordinates}</span>
                    </span>
                    <span className="text-white font-semibold">{item.recordedIn}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#b4ff39] transition-colors">
                      {isRtl ? item.nameAr : item.nameEn}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-400 font-poetic italic leading-relaxed line-clamp-3">
                    {isRtl ? `«${item.descriptionAr}»` : `"${item.descriptionEn}"`}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-neutral-800/60 mt-4 pt-4 text-xs font-mono-tech">
                <Link
                  to={`/journeys/${item.id}`}
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
                >
                  <span>{isRtl ? 'تفاصيل الأرشيف' : 'VIEW DOSSIER'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                </Link>

                <button
                  onClick={() => navigate(`/vr/${item.id === 'shali' ? 'shali' : 'siwa'}`)}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#b4ff39] hover:bg-[#c6ff33] text-black font-bold transition-all cursor-pointer shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'مشغل 360°' : '360° VR'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
