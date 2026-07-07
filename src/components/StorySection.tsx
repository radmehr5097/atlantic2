import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote, Landmark } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1B3D] via-[#1E4D7B]/20 to-[#0B1B3D] overflow-hidden" id="brand-story">
      
      {/* Intricate Dome Outline SVG Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] flex items-center justify-center">
        <svg className="w-[120%] h-[120%] text-[#C9A227] animate-spin" style={{ animationDuration: '100s' }} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <polygon points="50,25 75,50 50,75 25,50" fill="none" stroke="currentColor" strokeWidth="0.1" />
          {/* Islamic Star motif */}
          <path d="M 50,5 L 61,35 L 95,50 L 61,65 L 50,95 L 39,65 L 5,50 L 39,35 Z" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center" dir="rtl">
        
        {/* Story Section Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/40 text-[#C9A227] text-xs font-bold shadow-[0_0_15px_rgba(201,162,39,0.1)]">
            <Landmark className="h-4 w-4" />
            <span>حکایت آتلانتیک: پیوند تمدن‌ها</span>
          </span>
        </div>

        {/* Story Quote Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#1E4D7B]/10 border border-[#C9A227]/25 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative"
        >
          
          {/* Big quotes icon */}
          <div className="absolute top-6 right-8 text-6xl text-[#C9A227]/10 font-serif select-none pointer-events-none">
            <Quote className="h-12 w-12 text-[#C9A227]/20" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#C9A227] mb-8 font-sans leading-tight">
            از کاشی‌های شیخ لطف‌الله اصفهان تا معابد غرق شده‌ی آتلانتیس
          </h3>

          <div className="space-y-6 text-sm sm:text-base text-[#F5F0E1]/90 leading-relaxed text-justify max-w-4xl mx-auto">
            <p>
              حکایت آتلانتیک، داستان یک پیوند مابعدالطبیعی است. تبار ما ریشه در هنر متعالی و ریاضیات مقدس معماری صفویه اصفهان دارد؛ جایی که کاشی‌های معرق مسجد شیخ لطف‌الله در گرگ‌ومیش غروب، به رنگ طلایی درخشان بدل می‌شوند و رازهای کیهان را با زبانی خاموش به تصویر می‌کشند.
            </p>
            <p>
              ما دریافتیم که آن فرکانس مارپیچ طلایی و آن نقوش فیروزه‌ای سحرآمیز، تکراری دقیق از ارتعاشات انرژی در تمدن مفقود شده و باستانی «آتلانتیس» است؛ تمدنی افسانه‌ای در قلب اقیانوس که رموز اتم، کیهان و سلامتی سلولی را به خوبی می‌دانستند.
            </p>
            <p>
              برند آتلانتیک متولد شد تا این دو دنیای از یاد رفته را در یک نقطه با هم پیوند دهد. ما با استعانت از تعالیم آسمانی و وحیانی اسلام، مواد شفابخشی چون آب متبرک زمزم و مشک بهشتی را به این معجون مضاف کردیم. هر اکسیر و ادکلن در کارگاه‌های ما، تنها با رعایت دقیق‌ترین قوانین طالع‌بینی، زمان‌شناسی و طهارت کامل مادی و معنوی آماده می‌گردد تا نه‌تنها التیامی بر پوست و جسم شما باشد، بلکه دریچه‌ای گشاید به سوی آرامش روان و شکوه از دست رفته‌ی باستان.
            </p>
          </div>

          <div className="mt-8 flex justify-center items-center gap-3">
            <div className="w-10 h-0.5 bg-[#C9A227]/30"></div>
            <Sparkles className="h-5 w-5 text-[#C9A227]" />
            <div className="w-10 h-0.5 bg-[#C9A227]/30"></div>
          </div>

          <div className="mt-4 text-[#C9A227] font-semibold text-xs sm:text-sm">
            مکتب اصفهان - آتلانتیس | تلفیق دانش روز، علوم باستانی و تعالیم اسلامی
          </div>

        </motion.div>

      </div>
    </section>
  );
}
