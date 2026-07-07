import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, Calendar, PhoneCall, Heart, MessageSquare, Info, ShieldCheck } from 'lucide-react';
import { treatmentPacks } from '../data';

export default function PacksSection() {
  const [activePackId, setActivePackId] = useState<string>('pack-1');

  const selectedPack = treatmentPacks.find(p => p.id === activePackId) || treatmentPacks[0];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1B3D]" id="treatment-packs">
      <div className="max-w-7xl mx-auto" dir="rtl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E4D7B]/40 text-[#C9A227] text-xs font-semibold border border-[#C9A227]/20">
            <Heart className="h-3.5 w-3.5 text-red-500 animate-pulse" />
            <span>درمان‌های ریشه‌ای و مصلح مزاج</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F5F0E1] tracking-tight">
            پک‌های درمانی تخصصی و مینیاتوری آتلانتیک
          </h2>
          <div className="w-20 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-[#F5F0E1]/80 leading-relaxed text-justify sm:text-center">
            ما برای برخی از شایع‌ترین مشکلات روحی و جسمی عصر نوین، پک‌های تلفیقی چندبعدی طراحی کرده‌ایم. این پک‌ها با تحت تأثیر قرار دادن ذهن (رایحه‌درمانی کیهانی)، جسم (عرقیات مصفا و روغن‌های سنتی) و انرژی درونی، تعادل از دست رفته را احیا می‌کنند.
          </p>
        </div>

        {/* Dynamic Pack Switch Tabs */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-12 border-b border-[#C9A227]/20 pb-4">
          {treatmentPacks.map((pack) => {
            const isActive = activePackId === pack.id;
            return (
              <button
                key={pack.id}
                onClick={() => setActivePackId(pack.id)}
                className={`w-full md:w-auto px-6 py-4 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-3 border ${
                  isActive
                    ? 'bg-[#C9A227] text-[#0B1B3D] border-[#C9A227] shadow-[0_0_20px_rgba(201,162,39,0.3)]'
                    : 'bg-[#1E4D7B]/20 text-[#F5F0E1]/80 border-transparent hover:bg-[#1E4D7B]/40 hover:text-white'
                }`}
              >
                <span className="text-lg">{pack.icon}</span>
                <span>{pack.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pack Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPack.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#1E4D7B]/10 border border-[#C9A227]/25 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          >
            
            {/* Right Column: Disease info & description (8 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between text-right space-y-6 order-2 lg:order-1">
              
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#C9A227] block">بررسی و ریشه‌یابی تخصصی بیماری</span>
                <h3 className="text-2xl font-black text-[#F5F0E1] leading-tight">
                  {selectedPack.name}
                </h3>
                <p className="text-sm text-[#C9A227] leading-relaxed font-semibold">
                  {selectedPack.desc}
                </p>
                <div className="w-12 h-0.5 bg-[#C9A227]"></div>
                <p className="text-xs sm:text-sm text-[#F5F0E1]/80 leading-relaxed text-justify">
                  {selectedPack.diseaseInfo}
                </p>
              </div>

              {/* Consultation Info Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1B3D]/80 border border-[#C9A227]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-xl text-[#C9A227]">
                    🕌
                  </div>
                  <div className="text-right">
                    <h4 className="text-xs font-bold text-[#F5F0E1]">مشاوره تخصصی و مزاج‌شناسی همگام</h4>
                    <span className="text-[11px] text-[#C9A227] font-semibold">{selectedPack.sessions}</span>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                  کاملاً رایگان روی پک
                </span>
              </div>

              {/* CTA Action Bar */}
              <div className="pt-4 border-t border-[#C9A227]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-right">
                  <span className="text-[10px] text-[#F5F0E1]/50 block">جهت هماهنگی طالع درمانی و ارسال:</span>
                  <span className="text-base font-bold text-[#C9A227]">برقراری تماس مستقیم با اصفهان</span>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <a
                    href="tel:09138128424"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C9A227] text-[#0B1B3D] font-bold text-xs hover:bg-[#C9A227]/90 transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>مشاوره و سفارش پک: ۰۹۱۳۸۱۲۸۴۲۴</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Left Column: Image and pack contents list (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#0B1B3D]/70 p-6 rounded-2xl border border-[#C9A227]/15 order-1 lg:order-2">
              
              {/* Pack Image with frame */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#C9A227]/20 shadow-md">
                <img
                  src={selectedPack.image}
                  alt={selectedPack.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-transparent to-transparent"></div>
              </div>

              {/* Contents list */}
              <div className="space-y-3 text-right">
                <h4 className="text-xs font-bold text-[#C9A227] flex items-center gap-1.5 border-b border-[#C9A227]/20 pb-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>محتویات کامل پک ارسالی آتلانتیک:</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedPack.contents.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5F0E1]/90">
                      <CheckCircle2 className="h-4 w-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Packaging note */}
              <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 text-[10px] text-amber-500 flex items-start gap-2">
                <Info className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                <p className="leading-snug">تمام قرص‌ها و نوشیدنی‌های موجود در پک‌ها، از مصفاترین مواد ارگانیک و کندوهای دامنه‌ زاگرس اصفهان تهیه می‌شوند.</p>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
