import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Send, CheckCircle2, MessageSquare, Mail, MapPin, Sparkles, Clock, Compass, ShieldCheck } from 'lucide-react';
import { validateInquiryForm, InquiryFormData } from '../utils/data';

interface ContactPageProps {
  currentLang: 'en' | 'ar';
}

export const ContactPage: React.FC<ContactPageProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';
  const [formData, setFormData] = useState<Partial<InquiryFormData>>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Executive Event Coverage 360°',
    location: 'Cairo / Giza, Egypt',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const whatsappMessage = encodeURIComponent(
    `Hello Vision VR Production, I would like to inquire about ${formData.serviceType || 'VR Coverage'}. My name is ${formData.name || ''}.`
  );

  return (
    <div className="pb-24">
      <PageHeader
        titleEn="Start a Conversation"
        titleAr="فتح بوابة المحادثة وحجز الإنتاج"
        subtitleEn="The gate to immersive realms is opening. Tell us about your executive moment, milestone, or film commission."
        subtitleAr="بوابة العوالم الغامرة تنفتح أمامك. أخبرنا عن لحظتك الخاصة، مؤتمرك القيادي، أو رؤيتك الفنية."
        categoryEn="COMMUNICATIONS"
        categoryAr="التواصل المباشر"
        isRtl={isRtl}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Coordinates & Dispatch Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-normal text-white">
                {isRtl ? 'استوديو VISION VR في مصر' : 'VISION VR Studio Egypt'}
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {isRtl
                  ? 'سواء كنت تخطط لقمة تنفيذية مغلقة، فعالية ثقافية، أو توثيق معماري وتاريخي، يقوم طيارونا ومخرجونا بتصميم خطة تصوير مكاني متكاملة.'
                  : 'Whether you are staging an executive leadership assembly, cultural celebration, or heritage survey, our pilots blueprint bespoke spatial captures.'}
              </p>
            </div>

            {/* Structured Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/201000000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-[#25D366] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#25D366] transition-colors">
                      {isRtl ? 'محادثة فورية عبر واتساب' : 'Direct WhatsApp'}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {isRtl ? 'رد سريع من فريق الإنتاج' : 'Instant response from production desk'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono-tech text-[#25D366] group-hover:translate-x-1 transition-transform">
                  +20 100 000 0000 →
                </span>
              </a>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-neutral-400">
                  <Mail className="w-3.5 h-3.5 text-[#b4ff39]" />
                  <span>{isRtl ? 'البريد الإلكتروني الرسمي' : 'OFFICIAL DISPATCH'}</span>
                </div>
                <a
                  href="mailto:VISIONVR.PILOTS@GMAIL.COM"
                  className="text-sm font-mono-tech text-neutral-200 hover:text-[#b4ff39] transition-colors block"
                >
                  VISIONVR.PILOTS@GMAIL.COM
                </a>
              </div>

              {/* Physical Studio Address */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-[#b4ff39]" />
                  <span>{isRtl ? 'المقر الرئيسي' : 'STUDIO ATELIER'}</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  9 Yasmin Street, 4th District, 6th of October City, Giza, Egypt
                </p>
              </div>
            </div>

            {/* Deployment & Turnaround Guarantee */}
            <div className="p-5 rounded-2xl bg-black border border-neutral-800/80 space-y-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#b4ff39]" />
                <span>{isRtl ? 'ضمانات الإنتاج والتسليم' : 'Production Standards'}</span>
              </div>
              <ul className="space-y-1.5 list-disc list-inside text-neutral-400 leading-relaxed">
                <li>8K 60fps Stereoscopic Dual-Sensor Masters</li>
                <li>Tetrahedral Ambisonic Audio with Head-Tracked Reverb</li>
                <li>Delivery optimized for Apple Vision Pro, Quest 3, & DeoVR</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Commission Brief Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b0b0d] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#b4ff39]/8 rounded-full blur-3xl pointer-events-none" />

              {isSubmitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#b4ff39]/20 border border-[#b4ff39] flex items-center justify-center mx-auto text-[#b4ff39]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white font-poetic italic">
                      {isRtl ? 'تم استقبال طلبك بنجاح.' : 'Your brief has entered our spatial log.'}
                    </h3>
                    <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                      {isRtl
                        ? 'سيقوم فريق الإنتاج والطيارون بالتواصل معك خلال ٢٤ ساعة لمناقشة خطة التصوير والمعدات.'
                        : 'Our VR production directors will review your parameters and follow up within 24 hours.'}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/201000000000?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-semibold text-xs tracking-wider uppercase transition-transform hover:scale-105"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{isRtl ? 'متابعة عبر واتساب' : 'FOLLOW UP ON WHATSAPP'}</span>
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      type="button"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs font-mono-tech transition-colors cursor-pointer"
                    >
                      {isRtl ? 'إرسال طلب إضافي' : 'SEND ANOTHER INQUIRY'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-neutral-800 pb-4">
                    <span className="text-xs font-mono-tech text-[#b4ff39] uppercase tracking-wider block mb-1">
                      01 · COMMISSION SPECIFICATIONS
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {isRtl ? 'تفاصيل الفعالية أو اللحظة' : 'Capture Parameters & Vision'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono-tech text-neutral-400 mb-2">
                        {isRtl ? 'الاسم أو الجهة الراعية *' : 'NAME / ENTITY *'}
                      </label>
                      <input
                        type="text"
                        value={formData.name || ''}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isRtl ? 'مثال: شركة النور أو أحمد عثمان' : 'e.g. Omar Mansour / Art Foundation'}
                        className={`w-full bg-neutral-900 border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#b4ff39] transition-colors ${
                          errors.name ? 'border-red-500' : 'border-neutral-800'
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech text-neutral-400 mb-2">
                        {isRtl ? 'البريد الإلكتروني *' : 'EMAIL *'}
                      </label>
                      <input
                        type="email"
                        value={formData.email || ''}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@organization.eg"
                        className={`w-full bg-neutral-900 border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#b4ff39] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-neutral-800'
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono-tech text-neutral-400 mb-2">
                        {isRtl ? 'نوع الخدمة المطلوبة *' : 'SERVICE TYPE *'}
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#b4ff39] transition-colors"
                      >
                        <option value="Executive Event Coverage 360°">Executive Event Coverage 360°</option>
                        <option value="Heritage & Cultural 360° Film">Heritage & Cultural 360° Film</option>
                        <option value="Architectural & Spatial Walkthrough">Architectural & Spatial Walkthrough</option>
                        <option value="Private VIP Milestone Archive">Private VIP Milestone Archive</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech text-neutral-400 mb-2">
                        {isRtl ? 'الموقع الجغرافي *' : 'LOCATION *'}
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#b4ff39] transition-colors"
                      >
                        <option value="Cairo / Giza, Egypt">Cairo / Giza, Egypt</option>
                        <option value="Siwa Oasis, Egypt">Siwa Oasis, Egypt</option>
                        <option value="Red Sea / Sinai, Egypt">Red Sea / Sinai, Egypt</option>
                        <option value="Doha, Qatar">Doha, Qatar</option>
                        <option value="Riyadh, Saudi Arabia">Riyadh, Saudi Arabia</option>
                        <option value="Dubai / Abu Dhabi, UAE">Dubai / Abu Dhabi, UAE</option>
                        <option value="International / Other">International / Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-neutral-400 mb-2">
                      {isRtl ? 'تفاصيل اللحظة أو الفعالية *' : 'TELL US ABOUT YOUR MOMENT *'}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message || ''}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isRtl
                          ? 'صِف لنا طبيعة الحدث، عدد الحضور المتوقع، والأهداف التوثيقية لنظارات الواقع الافتراضي...'
                          : 'Describe the atmosphere, scheduled date, VIP participants, and intended spatial distribution...'
                      }
                      className={`w-full bg-neutral-900 border rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#b4ff39] transition-colors ${
                        errors.message ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#b4ff39] hover:bg-[#c6ff33] text-black font-bold text-xs font-mono-tech uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:shadow-[#b4ff39]/20"
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
        </div>
      </div>
    </div>
  );
};
