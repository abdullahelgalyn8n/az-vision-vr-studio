import React, { useState } from 'react';
import { Share2, Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  categoryEn?: string;
  categoryAr?: string;
  isRtl?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  titleEn,
  titleAr,
  subtitleEn,
  subtitleAr,
  categoryEn = 'STUDIO REALM',
  categoryAr = 'استوديو الإنتاج',
  isRtl = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          {/* Breadcrumb trail */}
          <nav
            aria-label="Breadcrumb"
            className={`flex items-center gap-2 text-xs text-neutral-400 uppercase ${
              isRtl ? 'font-cairo font-semibold' : 'font-mono-tech tracking-wider'
            }`}
          >
            <Link to="/" className="hover:text-white transition-colors">
              {isRtl ? 'الرئيسية' : 'HOME'}
            </Link>
            {isRtl ? (
              <ChevronLeft className="w-3.5 h-3.5 text-neutral-600" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            )}
            <span className="text-[#b4ff39]">
              {isRtl ? categoryAr : categoryEn}
            </span>
          </nav>

          {/* Clean title with balanced wrapping */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight [text-wrap:balance]">
            {isRtl ? titleAr : titleEn}
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            {isRtl ? subtitleAr : subtitleEn}
          </p>
        </div>

        {/* Minimalist copy link button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleCopyLink}
            type="button"
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs text-neutral-300 hover:text-white transition-all cursor-pointer ${
              isRtl ? 'font-cairo font-semibold' : 'font-mono-tech'
            }`}
            title={isRtl ? 'نسخ رابط الصفحة' : 'Copy page URL'}
            aria-label="Copy page link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#b4ff39]" />
                <span className="text-[#b4ff39]">{isRtl ? 'تم نسخ الرابط' : 'COPIED'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-neutral-400" />
                <span>{isRtl ? 'مشاركة الرابط' : 'SHARE URL'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
