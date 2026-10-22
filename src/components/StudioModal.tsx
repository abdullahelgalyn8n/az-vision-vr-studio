import React from 'react';
import { X, Video, Mic, Globe2, Cpu, MapPin, Award } from 'lucide-react';

interface StudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  isRtl?: boolean;
}

export const StudioModal: React.FC<StudioModalProps> = ({ isOpen, onClose, isRtl = false }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="studio-modal-title"
    >
      <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#b4ff39]">00 · STUDIO BLUEPRINT</span>
            <h2 id="studio-modal-title" className="text-xl font-bold text-white">
              {isRtl ? 'استوديو VISION VR للإنتاج الفني الغامر' : 'VISION VR · Immersive Art Production Studio'}
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close studio information"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Philosophy */}
        <div className="space-y-4 mb-8">
          <p className="font-poetic italic text-2xl text-neutral-200 leading-snug">
            {isRtl
              ? '«ليست مجرد ذكرى عابرة على شاشة مستوية، بل مكان تعود وتقف في قلبه كلما أردت.»'
              : '"Not a memory. A place you return to."'}
          </p>
          <p className="text-neutral-300 text-sm leading-relaxed">
            {isRtl
              ? 'نحن استوديو إنتاج فني وتقني متقدم مقره في مصر، نجمع بين الهوية التراثية الساحرة من واحة سيوة وشوارع المعز الفاطمية، وبين أحدث تكنولوجيا التصوير المكاني بزاوية 360 درجة والصوت المجسم ثلاثي الأبعاد.'
              : 'Based in 6th of October City, Egypt, Vision VR is an immersive production studio pioneering spatial preservation. We believe life’s singular milestones—from desert rituals to executive global keynotes—deserve more than flat 2D rectangles.'}
          </p>
        </div>

        {/* Grid specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
            <Video className="w-5 h-5 text-[#b4ff39] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {isRtl ? 'كاميرات 8K مجسمة' : '8K Stereoscopic Rigging'}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isRtl
                  ? 'تصوير حقيقي مزدوج العدسات (Stereo 3D) يمنح كل عين عمقاً حقيقياً ومقياساً واقعياً.'
                  : 'True stereoscopic 360 capturing depth cues and 1:1 scale for Meta Quest 3 and Apple Vision Pro.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
            <Mic className="w-5 h-5 text-[#b4ff39] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {isRtl ? 'صوت أمبيسونيك فضائي' : 'Full-Order Spatial Audio'}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isRtl
                  ? 'تسجيل الصوت في كافة الاتجاهات بمصفوفات ميكروفونات متخصصة تتفاعل مع حركة رأسك.'
                  : 'Ambisonic field recording capturing wind, footsteps, and reverberant acoustic geometry.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
            <Cpu className="w-5 h-5 text-[#b4ff39] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {isRtl ? 'توزيع عالمي متوافق' : 'Universal VR Headset Ready'}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isRtl
                  ? 'بث فوري على منصات DeoVR وYouTube 360 وتطبيقات الويب التفاعلية دون الحاجة لتطبيقات معقدة.'
                  : 'Native streaming optimization for DeoVR, WebVR, and ultra-high-bitrate private local playback.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
            <Globe2 className="w-5 h-5 text-[#b4ff39] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {isRtl ? 'تغطية إقليمية ودولية' : 'Egypt & GCC Deployment'}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {isRtl
                  ? 'طيارونا وفرقنا الميدانية جاهزة للانتشار السريع في القاهرة، سيوة، البحر الأحمر، الدوحة، والرياض.'
                  : 'Active mobile flight and production crew operating across Egypt, Qatar, UAE, and Saudi Arabia.'}
              </p>
            </div>
          </div>
        </div>

        {/* Footer info in modal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#b4ff39]" />
            <span>9 Yasmin Street, 4th District, 6th of October City, Egypt</span>
          </div>
          <div className="flex items-center gap-2 font-mono-tech text-[#b4ff39]">
            <Award className="w-4 h-4" />
            <span>EST. 2024 · CAIRO</span>
          </div>
        </div>
      </div>
    </div>
  );
};
