import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Landmark, Beaker, ShieldCheck, Stars, Zap } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      title: 'طب اسلامی',
      icon: '🕌',
      description: 'برگرفته از روایات گهربار، احادیث ائمه اطهار (ع) و کتب معتبر همچون طب‌الائمه و طب‌الرضا. استفاده از مواد مقدس و طیبی چون آب زمزم، تربت ۷۰ ساله مصفا، عسل وحشی و سیاه دانه مبارک برای درمان اساسی علل بیماری‌ها.',
      accent: 'سنت گهربار وحی',
    },
    {
      title: 'طب سنتی اصفهان',
      icon: '🏛️',
      description: 'احیای مکتب درمانی حکیمان بزرگ اصفهان در دوران صفویه. بهره‌گیری از گیاهان خاص دارویی کوهستان‌های ایران، صمغ‌های کمیاب درختی، مومیایی سنگ و عرقیات گیاهی تقطیر شده با روش‌های سنتی اصفهان.',
      accent: 'حکمت تمدن کهن',
    },
    {
      title: 'طب نوین و نانوتکنولوژی',
      icon: '🧪',
      description: 'بهره‌گیری از به‌روزترین دستاوردهای داروسازی، آنالیزهای آزمایشگاهی پیشرفته و تکنولوژی نانو ذرات طلا، نقره و مس. افزایش نفوذپذیری سلولی و سرعت جذب ترکیبات فعال طبیعی در سطح اپیدرم پوست.',
      accent: 'دانش روز بشری',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1B3D] via-[#1E4D7B]/20 to-[#0B1B3D] relative overflow-hidden" id="about-us">
      
      {/* Decorative Traditional Geometric Vector BG */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_#C9A227_0.5px,_transparent_0.5px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,_#C9A227_0.5px,_transparent_0.5px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10" dir="rtl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E4D7B]/40 text-[#C9A227] text-xs font-semibold border border-[#C9A227]/20">
            <Stars className="h-3.5 w-3.5" />
            <span>فلسفه درمانی آتلانتیک</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F0E1] tracking-tight">
            حکیمان اصفهان، تمدن آتلانتیس و دانش نوین در یک برند
          </h2>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full mt-4"></div>
          <p className="text-[#F5F0E1]/80 text-sm sm:text-base leading-relaxed mt-4">
            ما در برند آتلانتیک بر این باوریم که درمان واقعی زمانی رخ می‌دهد که سه بعد جسم، روان و انرژی‌های کیهانی در تعادل باشند. با پیوند دادن ریشه‌های اصیل تمدن‌های کهن، طب اسلامی و تکنولوژی نوین، انقلابی در مراقبت و درمان ایجاد کرده‌ایم.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-3xl bg-[#1E4D7B]/10 border border-[#C9A227]/20 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-[#C9A227]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Outer Golden Corner Accents */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#C9A227]/30 group-hover:border-[#C9A227] transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#C9A227]/30 group-hover:border-[#C9A227] transition-colors duration-300"></div>

              <div>
                {/* Big Icon Container with Islamic Portal Shape */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1E4D7B]/50 to-[#C9A227]/20 border border-[#C9A227]/30 flex items-center justify-center text-3xl mb-6 shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
                  <span className="relative z-10">{pillar.icon}</span>
                </div>

                <span className="text-[10px] uppercase tracking-wider text-[#C9A227]/80 font-mono block mb-1">
                  {pillar.accent}
                </span>

                <h3 className="text-xl font-bold text-[#F5F0E1] mb-4">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#F5F0E1]/70 leading-relaxed text-justify">
                  {pillar.description}
                </p>
              </div>

              {/* Decorative Subtle Line at Bottom */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent mt-6 group-hover:via-[#C9A227]/50 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Integration Callout Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#1E4D7B]/30 via-[#0B1B3D]/80 to-[#1E4D7B]/30 border border-[#C9A227]/30 flex flex-col lg:flex-row items-center gap-8 shadow-2xl relative overflow-hidden"
        >
          {/* Atomic Energy Symbol Accent (⚛️) Background Glow */}
          <div className="absolute right-[-10%] top-[-20%] text-[200px] text-[#C9A227]/5 select-none pointer-events-none font-mono">
            ⚛️
          </div>

          <div className="text-right space-y-4 max-w-2xl relative z-10">
            <h4 className="text-lg font-bold text-[#C9A227] flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span>نشان پیوند اصفهان - آتلانتیس</span>
            </h4>
            <h3 className="text-2xl font-extrabold text-[#F5F0E1]">
              اتحاد اسرارآمیز نجوم، فیزیک نانو و روایات ملکوتی
            </h3>
            <p className="text-sm text-[#F5F0E1]/80 leading-relaxed text-justify">
              برند آتلانتیک نمادی از یک رنسانس معنوی-علمی است. ما کانی‌های شفا‌بخش حاصل از شهاب‌سنگ‌های سقوط‌کرده کهن را با نقوش هندسی گنبد مسجد شیخ لطف‌الله اصفهان پیوند داده‌ایم. هر ظرف از ادکلن‌ها و مکمل‌های ما حاوی ارتعاشات پاک انرژی است که بر پایه طالع بیمار و زمان‌های سعد نجومی تهیه و تقدیم می‌گردد.
            </p>
          </div>

          <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full lg:w-auto relative z-10">
            <div className="p-4 rounded-2xl bg-[#0B1B3D]/60 border border-[#C9A227]/10 text-center">
              <ShieldCheck className="h-6 w-6 text-[#C9A227] mx-auto mb-2" />
              <span className="text-xs text-[#F5F0E1]/80 block font-bold">بچ‌های محدود</span>
              <span className="text-[10px] text-[#F5F0E1]/50 block">تولید طالع نجومی</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0B1B3D]/60 border border-[#C9A227]/10 text-center">
              <Beaker className="h-6 w-6 text-[#C9A227] mx-auto mb-2" />
              <span className="text-xs text-[#F5F0E1]/80 block font-bold">پایداری مواد</span>
              <span className="text-[10px] text-[#F5F0E1]/50 block">ظروف فیروزه‌ای تیره</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
