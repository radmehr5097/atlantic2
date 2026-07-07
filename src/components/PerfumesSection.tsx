import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle, Calendar, ShieldAlert, Award, Package, Heart, Star, Compass } from 'lucide-react';
import { perfumes } from '../data';

export default function PerfumesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1B3D] to-[#1E4D7B]/40 relative overflow-hidden" id="cosmic-perfumes">
      
      {/* Meteor Star Trails Background Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="10%" x2="40%" y2="40%" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="5,15" />
          <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="#C9A227" strokeWidth="0.5" />
          <line x1="20%" y1="70%" x2="40%" y2="90%" stroke="#C9A227" strokeWidth="1" strokeDasharray="1,5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" dir="rtl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E4D7B]/50 text-[#C9A227] text-xs font-semibold border border-[#C9A227]/30">
            <Compass className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '12s' }} />
            <span>رایحه‌درمانی کیهانی و نجوم اسلامی</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F5F0E1] tracking-tight">
            ادکلن‌های درمانی و فرکانس‌های کیهانی آتلانتیک
          </h2>
          <div className="w-20 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-[#F5F0E1]/80 leading-relaxed text-justify sm:text-center">
            این ادکلن‌های گرانبها حاصل سال‌ها تحقیق روی تأثیر فرکانس‌های ارتعاشی گیاهان مطهر، کانی‌های قیمتی و آب‌های مقدس هستند. هر شیشه از این عطرها بر اساس طالع شخص در ساعات سعد نجومی پر شده و حاوی قوی‌ترین ترکیبات جذب سلامتی و دفع سنگینی است.
          </p>
        </div>

        {/* Perfumes Showcase Grid */}
        <div className="space-y-16">
          {perfumes.map((perfume, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={perfume.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 rounded-3xl p-6 sm:p-10 bg-[#1E4D7B]/10 border border-[#C9A227]/25 backdrop-blur-md hover:border-[#C9A227]/60 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.3)] ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* Perfume Artwork Column */}
                <div className="w-full lg:w-2/5 flex flex-col justify-between items-center bg-gradient-to-t from-[#0B1B3D] to-[#1E4D7B]/30 rounded-2xl p-6 border border-[#C9A227]/10 relative overflow-hidden group">
                  
                  {/* Astronomical Circle Background Accent */}
                  <div className="absolute inset-0 border border-[#C9A227]/5 rounded-full scale-75 animate-pulse"></div>

                  {/* Top Badge */}
                  <div className="self-end z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] text-[10px] font-bold">
                      <Star className="h-3 w-3 fill-current" />
                      <span>اکسیر طالع نجومی</span>
                    </span>
                  </div>

                  {/* Perfume Bottle Image (Circular elegant frame) */}
                  <div className="relative my-8">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-[#C9A227] shadow-[0_0_25px_rgba(201,162,39,0.2)]">
                      <img
                        src={perfume.image}
                        alt={perfume.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Golden sparkles */}
                    <div className="absolute top-2 right-2 text-xl animate-bounce">✨</div>
                  </div>

                  {/* Volume and Specifications Footer */}
                  <div className="w-full flex items-center justify-between text-xs border-t border-[#C9A227]/10 pt-4 z-10 text-[#F5F0E1]/80">
                    <span className="flex items-center gap-1">
                      <Package className="h-4 w-4 text-[#C9A227]" />
                      <span>حجم‌ها: {perfume.volume}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="h-4 w-4 text-[#C9A227]" />
                      <span>غلظت: اکستریت دِ پرفیوم</span>
                    </span>
                  </div>

                </div>

                {/* Perfume Details Column */}
                <div className="w-full lg:w-3/5 flex flex-col justify-between text-right space-y-6">
                  
                  {/* Name and Description */}
                  <div className="space-y-3">
                    <span className="text-[#C9A227] text-xs font-bold uppercase tracking-wider block">ادکلن‌های درمانی ملکوتی</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#F5F0E1] leading-tight font-sans">
                      {perfume.name}
                    </h3>
                    <p className="text-sm text-[#F5F0E1]/80 leading-relaxed text-justify">
                      {perfume.desc}
                    </p>
                  </div>

                  {/* Cosmic Benefits / Properties */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-[#C9A227] tracking-wider">خواص کیهانی و فرکانسی:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#F5F0E1]/90">
                      {perfume.cosmicProperties.map((prop, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4.5 w-4.5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{prop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Base Formulation Grid */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-[#C9A227] tracking-wider">فرمول پایه‌ی مشترک مقدسه:</h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {perfume.baseIngredients.map((base, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[10px] sm:text-xs rounded-lg bg-[#1E4D7B]/40 border border-[#C9A227]/20 text-[#F5F0E1]/90 font-medium"
                        >
                          {base}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specific Essence details */}
                  <div className="p-4 rounded-2xl bg-[#0B1B3D]/80 border border-[#C9A227]/15">
                    <span className="text-xs font-bold text-[#C9A227] block mb-1">نت‌های اسانس اختصاصی:</span>
                    <p className="text-xs text-[#F5F0E1]/80 leading-relaxed text-justify">{perfume.specificEssence}</p>
                  </div>

                  {/* Timing & Usage Methods */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#1E4D7B]/20 border border-[#C9A227]/10">
                      <span className="font-bold text-[#C9A227] flex items-center gap-1.5 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>زمان شروع مصرف طالع:</span>
                      </span>
                      <p className="text-[#F5F0E1]/80 font-semibold">{perfume.startDay}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#1E4D7B]/20 border border-[#C9A227]/10">
                      <span className="font-bold text-[#C9A227] flex items-center gap-1.5 mb-1">
                        <Compass className="h-4 w-4" />
                        <span>دستور استعمال سنتی:</span>
                      </span>
                      <p className="text-[#F5F0E1]/70 line-clamp-2" title={perfume.usageMethod}>{perfume.usageMethod}</p>
                    </div>
                  </div>

                  {/* Order CTA actions */}
                  <div className="pt-4 border-t border-[#C9A227]/20 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-right">
                      <span className="text-[10px] text-[#F5F0E1]/50 block">جهت تهیه و ارزیابی طالع شخصی:</span>
                      <span className="text-sm font-bold text-[#C9A227]">ثبت نوبت با مشاور اعظم آتلانتیک</span>
                    </div>

                    <div className="flex gap-2 w-full sm:w-auto">
                      <a
                        href="tel:09138128424"
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C9A227] text-[#0B1B3D] font-bold text-xs hover:bg-[#C9A227]/90 transition-colors shadow-lg shadow-[#C9A227]/10 cursor-pointer"
                      >
                        <span>ثبت سفارش ادکلن</span>
                      </a>
                      <a
                        href="https://rubika.ir/Islamic_medical_of_ATLANTIC"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors shadow-lg cursor-pointer"
                      >
                        <span>عضویت در کانال روبیکا</span>
                      </a>
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Warning label / Packaging disclosure */}
        <div className="mt-16 p-5 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-4 max-w-4xl mx-auto">
          <ShieldAlert className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5 animate-pulse" />
          <div className="text-right space-y-1">
            <h4 className="text-xs font-bold text-amber-500">نکته امنیتی و اصالت عطرها:</h4>
            <p className="text-xs text-[#F5F0E1]/80 leading-relaxed text-justify">
              تمامی شیشه‌ها با ظروف دست‌ساز سنتی شیشه‌گران اصفهان بسته‌بندی می‌گردد. به دلیل ارزشمندی مشک آهوی تبتی و شهاب‌سنگ‌های کوبیده شده، هر شیشه عطر با امضای حکاکی‌شده دستی و شماره اصالت تقدیم شما خواهد شد. لطفاً به دلیل حجم تولید محدود ناشی از طوالع نجومی، پیش از واریز هرگونه وجه با مشاوران ارشد به شماره ۰۹۱۳۸۱۲۸۴۲۴ هماهنگی لازم را انجام فرمایید.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
