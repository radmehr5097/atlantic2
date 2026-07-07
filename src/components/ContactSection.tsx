import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, Clock, Globe, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onViewChange?: (view: string) => void;
}

export default function ContactSection({ onViewChange }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'مزاج‌شناسی و اصلاح طبع',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        subject: 'مزاج‌شناسی و اصلاح طبع',
        message: ''
      });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1B3D] text-[#F5F0E1]" id="contact-us">
      <div className="max-w-7xl mx-auto" dir="rtl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E4D7B]/40 text-[#C9A227] text-xs font-semibold border border-[#C9A227]/20">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>پل‌های ارتباطی اصفهان-آتلانتیس</span>
          </span>
          <h2 className="text-3xl font-black text-[#F5F0E1] tracking-tight">
            تماس با شعبه اصلی آتلانتیک
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
          <p className="text-sm text-[#F5F0E1]/70 leading-relaxed max-w-lg mx-auto">
            جهت ارسال نسخه، ارتباط با اساتید یا ثبت سفارشی متمایز، به صورت تلفنی یا از طریق کانال روبیکا با ما همگام شوید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Stylized Vector Map & Information (7 cols) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between order-2 lg:order-1">
            
            {/* Elegant Vector Map of Isfahan Sheikh Lotfollah Area */}
            <div className="rounded-3xl border border-[#C9A227]/30 bg-[#1E4D7B]/10 overflow-hidden relative p-4 flex flex-col justify-between min-h-[350px] shadow-lg">
              
              {/* Map Canvas Background Design */}
              <div className="absolute inset-0 z-0 opacity-20 bg-[#0B1B3D]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="gold-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#C9A227" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  {/* Grid Lines simulating celestial mapping coordinates */}
                  <line x1="0" y1="100" x2="800" y2="100" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="2,5" />
                  <line x1="0" y1="200" x2="800" y2="200" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="2,5" />
                  <line x1="0" y1="300" x2="800" y2="300" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="2,5" />
                  <line x1="150" y1="0" x2="150" y2="400" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="2,5" />
                  <line x1="300" y1="0" x2="300" y2="400" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="2,5" />
                  <line x1="450" y1="0" x2="450" y2="400" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="2,5" />
                  
                  {/* Concentric Islamic Geometry rings centered at Sheikh Lotfollah */}
                  <circle cx="50%" cy="50%" r="60" fill="none" stroke="#C9A227" strokeWidth="0.5" />
                  <circle cx="50%" cy="50%" r="100" fill="none" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="4,4" />
                  <circle cx="50%" cy="50%" r="140" fill="url(#gold-glow)" />

                  {/* Simulated historical routes */}
                  <path d="M 50,50 Q 150,120 300,200 T 550,280" fill="none" stroke="#C9A227" strokeWidth="1" />
                  <path d="M 50,350 Q 250,220 450,200 T 750,50" fill="none" stroke="#C9A227" strokeWidth="1" />
                </svg>
              </div>

              {/* Map Floating Badges & Controls */}
              <div className="relative z-10 flex justify-between items-center text-xs">
                <span className="px-3 py-1 rounded-full bg-[#0B1B3D] border border-[#C9A227] text-[#C9A227] font-semibold">
                  موقعیت کارگاه مرکزی و عطرخانه
                </span>
                <span className="text-[10px] text-[#F5F0E1]/50 font-mono">32.6546° N, 51.6787° E</span>
              </div>

              {/* Pin Center Marker */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-2">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-full bg-[#0B1B3D] border-2 border-[#C9A227] flex items-center justify-center text-[#C9A227] shadow-[0_0_20px_rgba(201,162,39,0.5)]"
                >
                  🕌
                </motion.div>
                <div className="text-center bg-[#0B1B3D]/90 border border-[#C9A227]/30 px-4 py-2 rounded-2xl max-w-xs">
                  <h4 className="text-xs font-bold text-[#C9A227]">اصفهان، میدان نقش جهان</h4>
                  <p className="text-[10px] text-[#F5F0E1]/80 mt-1">ضلع شرقی، کوی شیخ لطف‌الله، پلاک ۷، عمارت آتلانتیک</p>
                </div>
              </div>

              {/* Bottom Instructions */}
              <div className="relative z-10 text-[10px] text-[#F5F0E1]/60 text-right">
                نقشه سنتی-کیهانی اصفهان به سبک تمدن‌های غرق شده. عطرخانه آتلانتیک همه‌روزه جهت خرید حضوری با هماهنگی تلفنی پذیراست.
              </div>

            </div>

            {/* Direct Information Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-[#1E4D7B]/10 border border-[#C9A227]/15 text-right space-y-3">
                <h4 className="text-xs font-bold text-[#C9A227] flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>خط مستقیم پشتیبانی و سفارشات:</span>
                </h4>
                <div className="text-right">
                  <a href="tel:09138128424" className="text-lg font-black text-[#F5F0E1] hover:text-[#C9A227] transition-colors block" dir="ltr">
                    ۰۹۱۳ ۸۱۲ ۸۴۲۴
                  </a>
                  <span className="text-[10px] text-[#F5F0E1]/50 mt-0.5 block">پاسخگویی سریع ۲۴ ساعته مستقیم اصفهان</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#1E4D7B]/10 border border-[#C9A227]/15 text-right space-y-3">
                <h4 className="text-xs font-bold text-[#C9A227] flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>عضویت در شبکه‌های اجتماعی:</span>
                </h4>
                <div className="text-right">
                  <a
                    href="https://rubika.ir/Islamic_medical_of_ATLANTIC"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-black text-orange-500 hover:text-orange-400 transition-colors block"
                  >
                    @Islamic_medical_of_ATLANTIC
                  </a>
                  <span className="text-[10px] text-[#F5F0E1]/50 mt-0.5 block">کانال رسمی طب اسلامی آتلانتیک در روبیکا</span>
                </div>
              </div>

            </div>

            {/* Work Hours Info */}
            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-center gap-3 text-amber-500 text-xs">
              <Clock className="h-5 w-5 flex-shrink-0 animate-pulse" />
              <p className="leading-relaxed">
                <strong>ساعات پاسخگویی و پذیرش حضوری:</strong> شنبه تا پنج‌شنبه از ساعت ۹:۰۰ صبح الی ۲۱:۰۰ شب (جمعه‌ها کارگاه فقط جهت استخراج اسانس‌های نجومی موعود فعال است).
              </p>
            </div>

          </div>

          {/* Right Column: Contact & Message Form (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#1E4D7B]/10 border border-[#C9A227]/25 backdrop-blur-md shadow-lg order-1 lg:order-2">
            
            <h3 className="text-lg font-bold text-[#C9A227] mb-6 border-b border-[#C9A227]/25 pb-2 text-right">
              درخواست مشاوره تخصصی و مزاج‌شناسی
            </h3>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-4 text-right text-xs"
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block text-[#F5F0E1]/80 font-bold">نام و نام خانوادگی:</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="مثال: سید امیرحسین مظاهری"
                      className="w-full p-3 rounded-xl bg-[#0B1B3D]/80 border border-[#C9A227]/30 text-[#F5F0E1] text-right focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="block text-[#F5F0E1]/80 font-bold">شماره تماس (ترجیحاً روبیکا):</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="مثال: ۰۹۱۳۸۱۲۸۴۲۴"
                      className="w-full p-3 rounded-xl bg-[#0B1B3D]/80 border border-[#C9A227]/30 text-[#F5F0E1] text-right focus:outline-none focus:border-[#C9A227] font-mono"
                    />
                  </div>

                  {/* Subject selector */}
                  <div className="space-y-1.5">
                    <label className="block text-[#F5F0E1]/80 font-bold">موضوع مشاوره درمانی:</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl bg-[#0B1B3D]/80 border border-[#C9A227]/30 text-[#F5F0E1] text-right focus:outline-none focus:border-[#C9A227] font-bold text-xs"
                    >
                      <option value="مزاج‌شناسی و اصلاح طبع">مزاج‌شناسی و اصلاح طبع</option>
                      <option value="درمان کبد چرب">درمان کبد چرب و مشکلات کک‌ومک</option>
                      <option value="لاغری و سوزاندن چربی بلغم">لاغری و سوزاندن چربی بلغم</option>
                      <option value="درمان کم‌خونی و خستگی دائم">درمان کم‌خونی و خستگی دائم</option>
                      <option value="افسردگی‌های سوداوی و دوقطبی">افسردگی‌های سوداوی و دوقطبی</option>
                      <option value="سفارش پک یا ادکلن کیهانی">سفارش پک درمانی یا ادکلن کیهانی</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="block text-[#F5F0E1]/80 font-bold">شرح حال کوتاه یا سوال:</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="دردها، علائم یا طبع فعلی خود را با مشاوران ما در میان بگذارید..."
                      className="w-full p-3 rounded-xl bg-[#0B1B3D]/80 border border-[#C9A227]/30 text-[#F5F0E1] text-right focus:outline-none focus:border-[#C9A227] leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-3 rounded-full bg-[#C9A227] text-[#0B1B3D] font-black hover:bg-[#C9A227]/90 transition-all duration-300 shadow-lg shadow-[#C9A227]/10 cursor-pointer text-xs sm:text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>ارسال درخواست و مزاج‌شناسی</span>
                  </button>

                  <p className="text-[10px] text-[#F5F0E1]/40 text-center mt-3">
                    اطلاعات شما کاملاً محرمانه مانده و در سوابق درمانی آتلانتیک ثبت خواهد شد.
                  </p>

                </motion.form>
              ) : (
                /* Success Message State */
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="text-sm font-bold text-emerald-400">درخواست شما با موفقیت ثبت شد</h4>
                  <p className="text-xs text-[#F5F0E1]/80 leading-relaxed max-w-xs mx-auto">
                    جناب {formData.name} گرامی، نسخه ارسالی شما در دایره حکیمان اصفهان-آتلانتیک قرار گرفت. مشاور مزاج‌شناسی ما تا حداکثر ۱۲ ساعت آینده با شماره {formData.phone} تماس خواهد گرفت.
                  </p>
                  <div className="w-12 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
                  <span className="text-[10px] text-[#F5F0E1]/50 block">آتلانتیک | در امان خدا باشید</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Gemini Consult Callout */}
            {onViewChange && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-4 rounded-2xl bg-[#1E4D7B]/20 border border-[#C9A227]/30 text-right space-y-2.5 relative overflow-hidden"
              >
                <div className="absolute right-[-15%] top-[-15%] text-7xl text-[#C9A227]/5 select-none pointer-events-none">
                  🤖
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10px] bg-[#C9A227] text-[#0B1B3D] px-2.5 py-0.5 rounded-full font-bold">
                    مشاوره هوشمند آنی ⚡
                  </span>
                  <span className="text-[10px] text-[#C9A227]/80 font-bold">دستیار فوق‌سریع جمینای</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#F5F0E1]">تحلیل طبع و مشاوره با هوش مصنوعی آتلانتیک</h4>
                <p className="text-[11px] text-[#F5F0E1]/70 leading-relaxed text-justify">
                  نمی‌خواهید منتظر تماس کارشناسان بمانید؟ همین حالا دکمه زیر را لمس کنید تا مغز هوش مصنوعی ما به صورت ۲۴ ساعته و کاملاً رایگان، پاسخ تمامی سوالات پوستی، دارویی یا طالع ادکلن‌های شما را بدهد!
                </p>
                <button
                  type="button"
                  onClick={() => onViewChange('contact_consult')}
                  className="w-full py-2.5 rounded-xl bg-transparent border-2 border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1B3D] font-black text-xs transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mt-1 shadow-[0_0_15px_rgba(201,162,39,0.1)] hover:shadow-[0_0_20px_rgba(201,162,39,0.35)]"
                >
                  <span>شروع مشاوره آنی رایگان با جمینای</span>
                  <Sparkles className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
