import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Filter, AlertCircle } from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';
import ProductDetailModal from './ProductDetailModal';

interface ProductsSectionProps {
  searchQuery: string;
}

export default function ProductsSection({ searchQuery: initialSearchQuery }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [localSearchQuery, setLocalSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Combine initial search query from Header and local search input
  const activeSearchQuery = useMemo(() => {
    return (localSearchQuery || initialSearchQuery || '').trim().toLowerCase();
  }, [localSearchQuery, initialSearchQuery]);

  const categories = [
    { id: 'all', label: 'همه محصولات' },
    { id: 'rejuvenator', label: 'جوانسازها' },
    { id: 'skin_care', label: 'مراقبت پوست' },
    { id: 'hair_care', label: 'مراقبت مو' },
  ];

  // Filter products based on search query and selected category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(activeSearchQuery) ||
        product.shortDesc.toLowerCase().includes(activeSearchQuery) ||
        product.description.toLowerCase().includes(activeSearchQuery) ||
        product.ingredients.some((ing) => ing.toLowerCase().includes(activeSearchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, activeSearchQuery]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1B3D]" id="products-catalog">
      <div className="max-w-7xl mx-auto" dir="rtl">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1E4D7B]/40 text-[#C9A227] text-xs font-semibold border border-[#C9A227]/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>محصولات مصفا و دست‌ساز طب اسلامی</span>
          </span>
          <h2 className="text-3xl font-black text-[#F5F0E1] tracking-tight">
            کاتالوگ محصولات ویژه آتلانتیک
          </h2>
          <p className="text-sm text-[#F5F0E1]/70 leading-relaxed">
            مجموعه ۱۹ قلم محصول ناب درمانی، جوانساز و مراقبت‌های طبیعی تولید شده بر پایه عسل وحشی، ذرات مروارید، طلای ۲۴ عیار، و گیاهان طب سنتی اصفهان.
          </p>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
        </div>

        {/* Filter and Search Bar Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 p-4 rounded-3xl bg-[#1E4D7B]/20 border border-[#C9A227]/20 backdrop-blur-md">
          
          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#C9A227] text-[#0B1B3D] shadow-lg'
                      : 'bg-[#1E4D7B]/30 text-[#F5F0E1]/80 hover:bg-[#1E4D7B]/50 hover:text-white border border-[#C9A227]/15'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search bar inside Catalog */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="جستجو در محصولات آتلانتیک..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pr-10 text-xs rounded-full bg-[#0B1B3D]/80 border border-[#C9A227]/30 text-[#F5F0E1] text-right focus:outline-none focus:border-[#C9A227]"
            />
            <Search className="absolute right-3.5 top-3 h-4 w-4 text-[#C9A227]/70" />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-3xl overflow-hidden bg-[#1E4D7B]/10 border border-[#C9A227]/10 flex flex-col justify-between hover:border-[#C9A227]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_30px_rgba(201,162,39,0.15)] hover:-translate-y-1"
                >
                  
                  {/* Product Card Image Wrapper */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-[#1E4D7B]/40 to-[#0B1B3D] border-b border-[#C9A227]/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/90 via-transparent to-transparent"></div>
                    
                    {/* Exclusive Brand Tag */}
                    <span className="absolute top-3 right-3 px-2 py-1 text-[9px] font-bold tracking-tight rounded-md bg-[#C9A227] text-[#0B1B3D]">
                      ساخت اختصاصی آتلانتیک
                    </span>

                    {/* Left floating specific promo badge */}
                    {product.tag && (
                      <span className="absolute top-3 left-3 px-2 py-1 text-[9px] font-medium tracking-tight rounded-md bg-[#1E4D7B]/90 border border-[#C9A227]/30 text-[#F5F0E1]">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* Product Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-right space-y-3">
                    <div className="space-y-1.5">
                      <span className="text-[10px] text-[#C9A227]/80 font-bold block">{product.categoryName}</span>
                      <h3 className="text-sm sm:text-base font-bold text-[#F5F0E1] group-hover:text-[#C9A227] transition-colors leading-snug line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-[#F5F0E1]/60 leading-relaxed line-clamp-2 h-9">
                        {product.shortDesc}
                      </p>
                    </div>

                    <button
                      id={`view-product-btn-${product.id}`}
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-2 rounded-xl bg-transparent hover:bg-[#C9A227] border border-[#C9A227] text-[#C9A227] hover:text-[#0B1B3D] text-xs font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>مشاهده و خرید</span>
                    </button>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty Search results state */
          <div className="text-center py-20 px-4 rounded-3xl bg-[#1E4D7B]/10 border border-[#C9A227]/20">
            <AlertCircle className="h-12 w-12 text-[#C9A227] mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-bold text-[#F5F0E1] mb-2">اکسیر مورد نظر یافت نشد</h3>
            <p className="text-sm text-[#F5F0E1]/60 max-w-md mx-auto">
              هیچ محصولی با کلمات کلیدی «{activeSearchQuery}» در دسته بندی {categories.find(c => c.id === selectedCategory)?.label} یافت نشد. لطفاً نام‌های دیگر یا ترکیبات را جستجو فرمایید.
            </p>
            <button
              onClick={() => {
                setLocalSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-6 px-5 py-2.5 rounded-full bg-[#C9A227] text-[#0B1B3D] text-xs font-bold"
            >
              پاک کردن فیلترها
            </button>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

    </section>
  );
}
