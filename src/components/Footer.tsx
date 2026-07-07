import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: string) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  return (
    <footer className="bg-[#0B1B3D] border-t border-[#C9A227]/30 text-[#F5F0E1] pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Subtle traditional vector glow on footer corners */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1E4D7B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10" dir="rtl">
        
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-b border-[#C9A227]/15 pb-12 text-right">
          
          {/* Logo and Slogan block (2 cols equivalent or big col) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A227] bg-[#1E4D7B]/40 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-[#C9A227]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#C9A227] font-sans tracking-wide">آتلانتیک (ATLANTIC)</h3>
                <span className="text-[8px] font-mono block text-[#F5F0E1]/50 tracking-widest">ISFAHAN-ATLANTIS</span>
              </div>
            </div>

            <p className="text-xs font-bold text-[#C9A227] italic">
              «تلفیق دانش روز، علوم باستانی و تعالیم اسلامی»
            </p>

            <p className="text-xs text-[#F5F0E1]/70 leading-relaxed max-w-sm text-justify">
              برند سلطنتی آتلانتیک با بازآفرینی مصلح‌های درمانی باستانی، گیاهان معطر طب اسلامی و تکنولوژی ذرات نانوی طلا و نقره، پلی استوار میان تمدن غرق‌شده آتلانتیس و هنر دیرینه‌ی اصفهان.
            </p>
          </div>

          {/* Quick links block */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#C9A227] border-r-2 border-[#C9A227] pr-2">دسترسی سریع به عطرخانه</h4>
            <ul className="space-y-2 text-xs text-[#F5F0E1]/80 font-medium">
              <li>
                <button onClick={() => onViewChange('home')} className="hover:text-[#C9A227] transition-colors">خانه / پیشخوان</button>
              </li>
              <li>
                <button onClick={() => onViewChange('products')} className="hover:text-[#C9A227] transition-colors">محصولات ویژه آتلانتیک</button>
              </li>
              <li>
                <button onClick={() => onViewChange('perfumes')} className="hover:text-[#C9A227] transition-colors">ادکلن‌های درمانی و کیهانی</button>
              </li>
              <li>
                <button onClick={() => onViewChange('packs')} className="hover:text-[#C9A227] transition-colors">پک‌های مصلح درمانی</button>
              </li>
              <li>
                <button onClick={() => onViewChange('about')} className="hover:text-[#C9A227] transition-colors">درباره ما و مکتب آتلانتیک</button>
              </li>
              <li>
                <button onClick={() => onViewChange('contact')} className="hover:text-[#C9A227] transition-colors">ارتباط با کلینیک اصفهان</button>
              </li>
            </ul>
          </div>

          {/* Contact Details block */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#C9A227] border-r-2 border-[#C9A227] pr-2">عمارت مرکزی آتلانتیک</h4>
            <ul className="space-y-3 text-xs text-[#F5F0E1]/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">اصفهان، میدان نقش جهان، ضلع شرقی، کوی شیخ لطف‌الله، پلاک ۷، عمارت آتلانتیک</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#C9A227] flex-shrink-0" />
                <a href="tel:09138128424" className="hover:text-[#C9A227] transition-colors" dir="ltr">۰۹۱۳ ۸۱۲ ۸۴۲۴</a>
              </li>
              <li className="flex items-start gap-2 text-orange-500">
                <Send className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <a href="https://rubika.ir/Islamic_medical_of_ATLANTIC" target="_blank" rel="noreferrer" className="hover:underline break-all text-right font-mono text-[10px]">
                  Islamic_medical_of_ATLANTIC@
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Meta / Credits block & Tasvirto Branding */}
        <div className="mt-8 pt-6 border-t border-[#C9A227]/20 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-[#F5F0E1]/80">
          
          <div className="text-right space-y-1 max-w-xl">
            <p className="text-center sm:text-right">
              © ۲۰۲۶ آتلانتیک. تمامی حقوق معنوی، فرمول‌ها و متون برای عطرخانه آتلانتیک اصفهان محفوظ است.
            </p>
            <p className="text-[#C9A227] font-bold text-[11px] flex items-center gap-1.5 justify-center sm:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-ping"></span>
              <span>حق این طراحی و ایده کاملاً محفوظ و متعلق به مجموعه <strong>تصویرتو</strong> می‌باشد.</span>
            </p>
          </div>

          {/* Tasvirto order banner buttons */}
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
            <span className="text-[10px] text-[#F5F0E1]/50 font-medium">سفارش این سبک طراحی و اپلیکیشن:</span>
            <a 
              href="tel:09138665345" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C9A227] text-[#0B1B3D] hover:bg-[#C9A227]/90 font-black text-xs transition-all shadow-[0_0_10px_rgba(201,162,39,0.3)]"
            >
              📞 ۰۹۱۳۸۶۶۵۳۴۵
            </a>
            <a 
              href="https://t.me/assreai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-600 text-white hover:bg-sky-700 font-bold text-xs transition-all shadow-md"
            >
              ✈️ تلگرام: assreai@
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
