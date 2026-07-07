import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, MessageSquare } from 'lucide-react';
// @ts-ignore
import mysticMiniature from '../assets/images/mystic_miniature_1783435768932.jpg';

interface HeroProps {
  onViewChange: (view: string) => void;
}

export default function Hero({ onViewChange }: HeroProps) {
  // Use the statically imported image for reliable production serving
  const imageSrc = mysticMiniature;

  // Array of coordinates for stardust particles
  const stars = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: Math.random() * 3 + 1,
  }));

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#0B1B3D]">
      
      {/* Mystical Ocean-Dome Background Blend */}
      <div className="absolute inset-0 z-0">
        {/* Deep blue to turquoise ocean depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D] via-[#1E4D7B]/30 to-[#0B1B3D]"></div>
        
        {/* Waves SVG pattern representing Atlantis */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-teal-900 to-black"></div>
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" width="100" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0,20 Q 25,5 50,20 T 100,20" fill="none" stroke="#C9A227" strokeWidth="1" />
            </pattern>
            <pattern id="eslimi-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#C9A227" />
              <path d="M 30,0 L 30,60 M 0,30 L 60,30" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="3,3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          <rect width="100%" height="100%" fill="url(#eslimi-grid)" />
        </svg>

        {/* Massive dome silhouette resembling Sheikh Lotfollah mosque dome */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] border border-[#C9A227]/10 rounded-full flex items-center justify-center opacity-25">
          <div className="w-[85%] h-[85%] border border-[#C9A227]/5 rounded-full flex items-center justify-center">
            <div className="w-[70%] h-[70%] border border-[#C9A227]/5 rounded-full flex items-center justify-center">
              {/* Islamic geometry center */}
              <div className="w-[50%] h-[50%] border border-[#C9A227]/5 rounded-full bg-[#1E4D7B]/5"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Meteorites / Golden Stardust */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-[#C9A227] shadow-[0_0_8px_#C9A227]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Core Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" dir="rtl">
        
        {/* Right Column: Dynamic Text and Branding */}
        <div className="text-right flex flex-col items-start space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Tagline Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E4D7B]/30 border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold">
              <Sparkles className="h-3 w-3" />
              <span>اصفهان - آتلانتیس</span>
            </span>

            {/* Brand Title (Simulated elegant calligraphy) */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#F5F0E1] leading-tight font-sans">
              برند سلطنتی <span className="text-[#C9A227] relative">آتلانتیک
                <span className="absolute bottom-1 right-0 w-full h-[6px] bg-[#1E4D7B] -z-10 rounded-full"></span>
              </span>
            </h1>

            {/* Slogan */}
            <p className="text-lg sm:text-xl font-bold text-[#C9A227] tracking-wide mt-2">
              «تلفیق دانش روز، علوم باستانی و تعالیم اسلامی»
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-[#F5F0E1]/80 max-w-xl leading-relaxed text-justify"
          >
            به دنیای اسرارآمیز آتلانتیک خوش آمدید. جایی که با تکیه بر علم نوین، رموز کهکشان‌ها و کتب طب باستانی، همراه با احادیث نورانی طب اسلامی، اکسیرهای درمانی منحصربه‌فرد، محصولات جوانساز سلطنتی و ادکلن‌های درمانی کیهانی را برای سلامت جسم و آرامش روح شما بازآفرینی کرده‌ایم.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-products-btn"
              onClick={() => onViewChange('products')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C9A227] text-[#0B1B3D] font-bold text-sm transition-all duration-300 hover:scale-105 hover:bg-[#C9A227]/90 shadow-[0_0_20px_rgba(201,162,39,0.4)] cursor-pointer group"
            >
              <span>مشاهده محصولات ویژه</span>
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </button>

            <button
              id="hero-consult-btn"
              onClick={() => onViewChange('consult')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-[#C9A227] border-2 border-[#C9A227] font-bold text-sm transition-all duration-300 hover:bg-[#C9A227]/10 cursor-pointer"
            >
              <MessageSquare className="h-4 w-4" />
              <span>مشاوره تخصصی رایگان</span>
            </button>
          </motion.div>

          {/* Mini Features List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-[#C9A227]/10 w-full"
          >
            <div className="text-right">
              <span className="block text-xl font-bold text-[#C9A227]">۱۹+</span>
              <span className="text-xs text-[#F5F0E1]/60">اکسیر و محصول درمانی</span>
            </div>
            <div className="text-right">
              <span className="block text-xl font-bold text-[#C9A227]">۴</span>
              <span className="text-xs text-[#F5F0E1]/60">ادکلن کیهانی درمانی</span>
            </div>
            <div className="text-right">
              <span className="block text-xl font-bold text-[#C9A227]">۱۰۰٪</span>
              <span className="text-xs text-[#F5F0E1]/60">ضمانت اصالت و بازگشت وجه</span>
            </div>
          </motion.div>
        </div>

        {/* Left Column: Flying Spirits Miniature Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] group">
            
            {/* Golden Esoteric Frame Ring 1 */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C9A227]/40 animate-spin" style={{ animationDuration: '40s' }}></div>
            
            {/* Golden Esoteric Frame Ring 2 */}
            <div className="absolute inset-[-12px] rounded-full border border-[#C9A227]/30 animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }}></div>
            
            {/* Turquoise Islamic Geometry Portal Glow */}
            <div className="absolute inset-4 rounded-full bg-[#1E4D7B]/20 blur-xl opacity-80 group-hover:bg-[#1E4D7B]/30 transition-all duration-500"></div>

            {/* Core Artwork Card */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-[#C9A227] shadow-[0_0_50px_rgba(201,162,39,0.3)] bg-[#0B1B3D]">
              <img
                src={imageSrc}
                alt="مینیاتور عرفانی پرواز روح در سبک فرشچیان - برند آتلانتیک"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[4000ms]"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-[#0B1B3D]/30 mix-blend-multiply"></div>
              
              {/* Islamic geometric pattern subtle overlay */}
              <div className="absolute inset-0 opacity-15 bg-[#1E4D7B]/20 mix-blend-color-dodge"></div>
            </div>

            {/* Glowing Atomic Symbol Accent ⚛️ */}
            <div className="absolute top-1/2 left-[-15px] -translate-y-1/2 bg-[#0B1B3D] border border-[#C9A227] text-[#C9A227] w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(201,162,39,0.4)] text-lg animate-bounce">
              ⚛️
            </div>

            {/* Islamic Star Badge 🕌 */}
            <div className="absolute bottom-4 right-[-10px] bg-[#0B1B3D] border border-[#C9A227] text-[#C9A227] px-3 py-1 rounded-full text-[10px] font-bold tracking-tight shadow-[0_0_15px_rgba(201,162,39,0.4)]">
              دست‌ساز اصفهان
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
