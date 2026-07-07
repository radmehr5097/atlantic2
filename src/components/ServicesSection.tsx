import React from 'react';
import { motion } from 'motion/react';
import { Heart, Activity, Sliders, Sparkles, UserCheck, Eye, Smile } from 'lucide-react';

interface ServicesSectionProps {
  onViewChange: (view: string) => void;
}

export default function ServicesSection({ onViewChange }: ServicesSectionProps) {
  const services = [
    {
      title: 'اصلاح طبع و مزاج تخصصی',
      description: 'تشخیص دقیق غلبه اخلاط چهارگانه (صفرا، دم، بلغم، سودا) بر اساس معاینه فیزیکی، فرم‌شناسی چهره و طالع تولد، جهت متعادل‌سازی ترشحات هورمونی.',
      icon: <Sliders className="h-6 w-6 text-[#C9A227]" />,
      iconBg: 'bg-[#C9A227]/10'
    },
    {
      title: 'درمان ریشه‌ای کبد چرب',
      description: 'به کارگیری پروتکل سم‌زدایی دو فازی آتلانتیک با عرقیات مصفای گرم‌کننده و رژیم پاکسازی ۱۵ روزه جهت احیای کبد و پاکسازی کک‌ومک صورت.',
      icon: <Activity className="h-6 w-6 text-[#C9A227]" />,
      iconBg: 'bg-[#C9A227]/10'
    },
    {
      title: 'تنظیم تخصصی وزن (لاغری و چاقی)',
      description: 'کاهش سایز پایدار با سوزاندن چربی‌های بلغم سرد و دفع آب‌های میان‌بافتی مزاحم، بدون رژیم‌های سخت گرسنگی و سستی عضلات.',
      icon: <UserCheck className="h-6 w-6 text-[#C9A227]" />,
      iconBg: 'bg-[#C9A227]/10'
    },
    {
      title: 'درمان قطعی کم‌خونی و ضعف شدید',
      description: 'رفع رنگ‌پریدگی، خستگی و ریزش مو با فعال‌سازی گلبول‌های قرمز خون مصفا با قرص مروارید و اکسیرهای غنی از آهن طبیعی کوهی.',
      icon: <Heart className="h-6 w-6 text-red-500" />,
      iconBg: 'bg-red-500/10'
    },
    {
      title: 'بهبود اضطراب و افسردگی‌های حاد',
      description: 'بازگرداندن نشاط و امید با آرام‌سازی سودای سوخته‌ی اعصاب به وسیله رایحه‌درمانی کیهانی ادکلن‌ها و اکسیر ماءالذهب مصفا آتلانتیک.',
      icon: <Smile className="h-6 w-6 text-[#C9A227]" />,
      iconBg: 'bg-[#C9A227]/10'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1B3D] relative overflow-hidden" id="consultation-services">
      
      {/* Decorative Blur Background Glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-[#1E4D7B]/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#C9A227]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10" dir="rtl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E4D7B]/40 text-[#C9A227] text-xs font-semibold border border-[#C9A227]/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>خدمات درمانی و کلینیکال آتلانتیک</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F5F0E1] tracking-tight">
            درگاه مشاوره‌های تخصصی و احیای مزاج
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-[#F5F0E1]/80 leading-relaxed max-w-2xl mx-auto">
            اساتید مجرب ما در شعبه اصلی اصفهان آماده ارائه مشاوره‌های رایگان ۱۵ دقیقه‌ای برای ارزیابی ساختارهای بیولوژیکی و تعادل طبع شما هستند.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((serv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#1E4D7B]/10 border border-[#C9A227]/10 hover:border-[#C9A227]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4 text-right">
                
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-2xl ${serv.iconBg} border border-[#C9A227]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {serv.icon}
                </div>

                <h3 className="text-lg font-bold text-[#F5F0E1] group-hover:text-[#C9A227] transition-colors leading-snug">
                  {serv.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F5F0E1]/70 leading-relaxed text-justify">
                  {serv.description}
                </p>

              </div>

              {/* Arrow Indicator */}
              <div className="w-full h-[1px] bg-[#C9A227]/10 mt-6 group-hover:bg-[#C9A227]/30 transition-colors"></div>
            </motion.div>
          ))}

          {/* Quick Consultation Request CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-tr from-[#1E4D7B]/30 to-[#C9A227]/10 border-2 border-dashed border-[#C9A227]/40 flex flex-col justify-between items-center text-center space-y-6"
          >
            <div className="space-y-2">
              <span className="text-[28px]">📞</span>
              <h3 className="text-lg font-bold text-[#C9A227]">نوبت‌دهی آسان آنلاین</h3>
              <p className="text-xs text-[#F5F0E1]/80 leading-relaxed max-w-xs">
                تنها با وارد کردن نام و شماره تماس، مشاوران ارشد آتلانتیک جهت بررسی و مزاج‌شناسی با شما تماس خواهند گرفت.
              </p>
            </div>

            <button
              id="services-request-consult-btn"
              onClick={() => onViewChange('contact')}
              className="px-6 py-3 rounded-full bg-[#C9A227] text-[#0B1B3D] font-bold text-xs hover:bg-[#C9A227]/90 transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
            >
              ثبت درخواست مشاوره رایگان
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
