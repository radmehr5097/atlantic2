import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';
import { reviews } from '../data';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const activeReview = reviews[currentIndex];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1B3D] via-[#1E4D7B]/10 to-[#0B1B3D]" id="customer-reviews">
      <div className="max-w-4xl mx-auto" dir="rtl">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E4D7B]/40 text-[#C9A227] text-xs font-semibold border border-[#C9A227]/20">
            <Star className="h-3.5 w-3.5 fill-current text-[#C9A227]" />
            <span>بازخوردها و نتایج درمان زنده</span>
          </span>
          <h2 className="text-3xl font-black text-[#F5F0E1] tracking-tight">
            نظرات و روایت‌های خریداران آتلانتیک
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
        </div>

        {/* Dynamic Reviews Slider with Framer Motion animations */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-[#1E4D7B]/10 border border-[#C9A227]/20 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.3)]">
          
          {/* Subtle Decorative Golden Border Accents */}
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#C9A227]"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#C9A227]"></div>

          {/* Quotes icon backdrop */}
          <Quote className="absolute right-8 top-8 h-12 w-12 text-[#C9A227]/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 text-right"
            >
              
              {/* Star Rating & Location Row */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: activeReview.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-[#C9A227]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#C9A227]/80 bg-[#C9A227]/5 border border-[#C9A227]/25 px-2.5 py-1 rounded-md">
                  {activeReview.city}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-[#F5F0E1]/90 leading-relaxed text-justify italic font-medium h-24 sm:h-20 overflow-y-auto">
                « {activeReview.text} »
              </p>

              {/* Author Details and Date */}
              <div className="flex items-center justify-between border-t border-[#C9A227]/25 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-sm font-bold text-[#C9A227]">
                    {activeReview.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#F5F0E1]">{activeReview.name}</h4>
                    <span className="text-[10px] text-[#F5F0E1]/50 block">خریدار تایید شده آتلانتیک</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#F5F0E1]/50 font-mono">{activeReview.date}</span>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-[#0B1B3D] border border-[#C9A227]/50 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1B3D] transition-colors shadow-lg cursor-pointer"
              title="قبلی"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-[#0B1B3D] border border-[#C9A227]/50 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1B3D] transition-colors shadow-lg cursor-pointer"
              title="بعدی"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

        </div>

        {/* Brand Guarantee Badge */}
        <div className="mt-20 rounded-2xl border border-dashed border-[#C9A227]/30 p-6 bg-[#1E4D7B]/10 text-center max-w-2xl mx-auto space-y-2">
          <h4 className="text-sm font-bold text-[#C9A227]">سوگند تعهد اخلاقی آتلانتیک</h4>
          <p className="text-xs text-[#F5F0E1]/80 leading-relaxed">
            تمامی فرمول‌ها تحت نظر پزشکان داروساز و اساتید بومی طب سنتی تهیه می‌شوند. آتلانتیک متعهد است در صورت عدم رضایت یا عدم حصول نتیجه مطلوب پس از دوره‌های درمانی منظم، کل هزینه پرداختی خریدار را با رضایت قلبی مرجوع فرماید.
          </p>
        </div>

      </div>
    </section>
  );
}
