import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { validateInquiryForm, InquiryFormData } from '../utils/data';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  isRtl?: boolean;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, isRtl = false }) => {
  const [formData, setFormData] = useState<Partial<InquiryFormData>>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Event Coverage 360°',
    location: 'Cairo, Egypt',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Event Coverage 360°',
      location: 'Cairo, Egypt',
      message: '',
    });
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Vision VR Production, I would like to inquire about ${formData.serviceType || 'VR Coverage'}. My name is ${formData.name || ''}.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#0d0d0d] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#b4ff39]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-5 border-b border-neutral-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#b4ff39]" />
            <h2 id="inquiry-modal-title" className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {isRtl ? 'فتح بوابة المحادثة مع استوديو VISION VR' : 'Open The Gate — Start a Conversation'}
            </h2>
          </div>
          <button
            onClick={resetForm}
            type="button"
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close conversation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#b4ff39]/20 border border-[#b4ff39] flex items-center justify-center mx-auto text-[#b4ff39]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-poetic italic">
                {isRtl ? 'لحظتك قيد التدوين في الذاكرة المكانية.' : 'Your moment has been received.'}
              </h3>
              <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                {isRtl
                  ? 'سيتواصل معك فريق الإنتاج والطيارون في غضون ٢٤ ساعة لمناقشة أجهزة التصوير والتغطية المكانية.'
                  : 'Our VR production pilots and directors will reach out within 24 hours to blueprint your spatial capture.'}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/201000000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-semibold text-xs tracking-wider uppercase transition-transform hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isRtl ? 'تواصل عبر واتساب فوراً' : 'DIRECT WHATSAPP'}</span>
              </a>

              <button
                onClick={resetForm}
                type="button"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs font-mono-tech transition-colors cursor-pointer"
              >
                {isRtl ? 'إغلاق' : 'DONE'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="text-xs text-neutral-400 font-mono-tech uppercase tracking-wider">
              {isRtl
                ? 'وثّق مؤتمرك، حفلك، أو عملك الثقافي بنقاء 8K وتجربة ثلاثية الأبعاد.'
                : 'Immortalize your corporate summit, cultural landmark, or gala in 8K spatial immersion.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono-tech text-neutral-400 mb-1.5">
                  {isRtl ? 'الاسم أو الجهة *' : 'NAME / ENTITY *'}
                </label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={isRtl ? 'مثال: شركة النور أو أحمد عثمان' : 'e.g. Omar Mansour / Art Foundation'}
                  className={`w-full bg-neutral-900 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#b4ff39] transition-colors ${
                    errors.name ? 'border-red-500' : 'border-neutral-800'
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono-tech text-neutral-400 mb-1.5">
                  {isRtl ? 'البريد الإلكتروني *' : 'EMAIL *'}
                </label>
                <input
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@example.com"
                  className={`w-full bg-neutral-900 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#b4ff39] transition-colors ${
                    errors.email ? 'border-red-500' : 'border-neutral-800'
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Service Type */}
              <div>
                <label className="block text-xs font-mono-tech text-neutral-400 mb-1.5">
                  {isRtl ? 'نوع الخدمة المطلوبة *' : 'SERVICE TYPE *'}
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b4ff39] transition-colors"
                >
                  <option value="Event Coverage 360°">
                    {isRtl ? 'تغطية الفعاليات والمؤتمرات 360°' : 'Executive Event Coverage 360°'}
                  </option>
                  <option value="Heritage & Cultural 360 Film">
                    {isRtl ? 'فيلم توثيقي تراثي وفني 360°' : 'Heritage & Cultural 360° Film'}
                  </option>
                  <option value="Architectural & Real Estate VR">
                    {isRtl ? 'توثيق معماري ومكاني غامر' : 'Architectural & Spatial Walkthrough'}
                  </option>
                  <option value="Private VIP Archive">
                    {isRtl ? 'أرشيف عائلي أو خاص فائق الدقة' : 'Private VIP Milestone Archive'}
                  </option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-mono-tech text-neutral-400 mb-1.5">
                  {isRtl ? 'الموقع الجغرافي *' : 'LOCATION *'}
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b4ff39] transition-colors"
                >
                  <option value="Cairo, Egypt">{isRtl ? 'القاهرة الكبرى / الجيزة' : 'Cairo / Giza, Egypt'}</option>
                  <option value="Siwa Oasis, Egypt">{isRtl ? 'واحة سيوة، مصر' : 'Siwa Oasis, Egypt'}</option>
                  <option value="Red Sea / Sinai, Egypt">{isRtl ? 'البحر الأحمر / سيناء' : 'Red Sea / Sinai, Egypt'}</option>
                  <option value="Doha / Qatar">{isRtl ? 'الدوحة، قطر' : 'Doha, Qatar'}</option>
                  <option value="Riyadh / Saudi Arabia">{isRtl ? 'الرياض / المملكة العربية السعودية' : 'Riyadh / Saudi Arabia'}</option>
                  <option value="Dubai / UAE">{isRtl ? 'دبي / الإمارات' : 'Dubai / UAE'}</option>
                  <option value="International">{isRtl ? 'دولي / موقع آخر' : 'International / Other'}</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono-tech text-neutral-400 mb-1.5">
                {isRtl ? 'تفاصيل اللحظة أو الفعالية *' : 'TELL US ABOUT YOUR MOMENT *'}
              </label>
              <textarea
                rows={3}
                value={formData.message || ''}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={
                  isRtl
                    ? 'صِف لنا رؤيتك، الموعد المتوقع، وعدد الحضور أو طبيعة المكان...'
                    : 'Describe the atmosphere, expected date, attendance, or vision for your VR production...'
                }
                className={`w-full bg-neutral-900 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#b4ff39] transition-colors ${
                  errors.message ? 'border-red-500' : 'border-neutral-800'
                }`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Direct Contact Links */}
            <div className="p-3.5 bg-neutral-950 rounded-xl border border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-neutral-400">
                <Mail className="w-4 h-4 text-[#b4ff39]" />
                <span className="font-mono-tech">visionvr.pilots@gmail.com</span>
              </div>
              <a
                href={`https://wa.me/201000000000?text=${encodeURIComponent('Hello Vision VR!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#b4ff39] hover:underline font-mono-tech"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isRtl ? 'واتساب مباشر' : 'Direct WhatsApp'}</span>
              </a>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#b4ff39] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#c6ff33] transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#b4ff39]/20"
              >
                {isSubmitting ? (
                  <Sparkles className="w-4 h-4 animate-spin text-black" />
                ) : (
                  <Send className="w-4 h-4 text-black" />
                )}
                <span>
                  {isSubmitting
                    ? isRtl
                      ? 'جارٍ الإرسال...'
                      : 'TRANSMITTING...'
                    : isRtl
                    ? 'إرسال الطلب'
                    : 'TRANSMIT BRIEF'}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
