import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, FlaskConical, Landmark, Moon, ArrowLeft, PhoneCall, Send, ShoppingCart, Info } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

type TabType = 'modern' | 'traditional' | 'islamic';

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('islamic');

  const tabs = [
    { id: 'islamic' as TabType, label: 'تعالیم اسلامی', icon: <Moon className="h-4 w-4" /> },
    { id: 'traditional' as TabType, label: 'علوم باستانی و سنتی اصفهان', icon: <Landmark className="h-4 w-4" /> },
    { id: 'modern' as TabType, label: 'دانش روز و نانوتکنولوژی', icon: <FlaskConical className="h-4 w-4" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" dir="rtl">
      
      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-[#0B1B3D] border border-[#C9A227]/30 text-[#F5F0E1] shadow-[0_10px_50px_rgba(201,162,39,0.3)] flex flex-col md:flex-row"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 p-2 rounded-full bg-[#0B1B3D]/80 border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227]/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Product Visual Side (Left in RTL, Right in LTR - let's make it fixed size or responsive) */}
        <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full bg-gradient-to-b from-[#1E4D7B] to-[#0B1B3D] p-8 flex flex-col justify-between border-b md:border-b-0 md:border-l border-[#C9A227]/20">
          
          {/* Esoteric BG Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:16px_16px]"></div>

          {/* Special Craft Tag */}
          <div className="relative z-10 self-start">
            <span className="inline-block px-3 py-1 rounded-full bg-[#C9A227]/20 border border-[#C9A227] text-[#C9A227] text-[10px] font-bold">
              ساخت اختصاصی آتلانتیک
            </span>
          </div>

          {/* Main Image with Magical Glow */}
          <div className="relative z-10 my-auto flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-[#C9A227] shadow-[0_0_30px_rgba(201,162,39,0.3)]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/50 to-transparent"></div>
            </div>
            {/* Pulsating golden energy circles */}
            <div className="absolute inset-0 rounded-full border border-[#C9A227]/20 animate-ping" style={{ animationDuration: '3s' }}></div>
          </div>

          {/* Attention / Package Change Label */}
          <div className="relative z-10 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs flex items-center gap-2">
            <Info className="h-4 w-4 flex-shrink-0" />
            <span className="font-semibold leading-snug">توجه: بسته‌بندی این محصول نفیس در حال ارتقا و تغییر است.</span>
          </div>
        </div>

        {/* Product Content Side */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[90vh] md:max-h-[80vh]">
          
          {/* Product Header */}
          <div className="space-y-3">
            <span className="text-[#C9A227]/80 text-xs font-bold block">{product.categoryName}</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#C9A227] leading-tight font-sans">
              {product.name}
            </h2>
            <p className="text-sm text-[#F5F0E1]/90 leading-relaxed text-justify">
              {product.description}
            </p>
          </div>

          {/* Ingredients Section */}
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-bold text-[#C9A227] border-b border-[#C9A227]/20 pb-1">ترکیبات پایه ملکوتی و مصفا:</h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {product.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E4D7B]/30 border border-[#C9A227]/20 text-[#F5F0E1] text-xs font-medium"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#C9A227]" />
                  <span>{ing}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Triple-Science Tabs Section */}
          <div className="mt-8">
            <h3 className="text-sm font-bold text-[#C9A227] mb-3">حکمت تولید و عملکرد سه گانه:</h3>
            
            {/* Tab Navigation */}
            <div className="flex border-b border-[#C9A227]/20 mb-4 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold transition-all relative ${
                    activeTab === tab.id
                      ? 'text-[#C9A227]'
                      : 'text-[#F5F0E1]/60 hover:text-[#C9A227]/80'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A227]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[120px] p-4 rounded-2xl bg-[#1E4D7B]/20 border border-[#C9A227]/10 text-xs sm:text-sm text-[#F5F0E1]/90 leading-relaxed text-justify">
              {activeTab === 'islamic' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p>{product.islamicScience}</p>
                </motion.div>
              )}
              {activeTab === 'traditional' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p>{product.traditionalScience}</p>
                </motion.div>
              )}
              {activeTab === 'modern' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p>{product.modernScience}</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Usage Method */}
          <div className="mt-6 p-4 rounded-2xl bg-[#0B1B3D]/50 border border-dashed border-[#C9A227]/30 text-xs sm:text-sm">
            <span className="font-bold text-[#C9A227] block mb-1">روش مصرف و دوز پیشنهادی:</span>
            <p className="text-[#F5F0E1]/80 leading-relaxed text-justify">{product.usage}</p>
          </div>

          {/* Ordering Actions */}
          <div className="mt-8 pt-4 border-t border-[#C9A227]/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-xs text-[#F5F0E1]/60 block">قیمت تضمینی مستقیم تولید:</span>
              <span className="text-xl font-bold text-[#C9A227]">ارتباط با مشاور جهت ثبت نهایی</span>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <a
                href="https://rubika.ir/Islamic_medical_of_ATLANTIC"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors shadow-lg"
              >
                <Send className="h-4 w-4" />
                <span>روبیکا آتلانتیک</span>
              </a>

              <a
                href="tel:09138128424"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C9A227] text-[#0B1B3D] hover:bg-[#C9A227]/90 font-bold text-xs transition-colors shadow-lg"
              >
                <PhoneCall className="h-4 w-4" />
                <span>تماس: ۰۹۱۳۸۱۲۸۴۲۴</span>
              </a>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
