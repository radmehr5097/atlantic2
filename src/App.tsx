import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import PerfumesSection from './components/PerfumesSection';
import PacksSection from './components/PacksSection';
import StorySection from './components/StorySection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GeminiConsultation from './components/GeminiConsultation';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, MessageCircle, Send, X, Star, Sparkles, MessageSquare } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Royal Lapis & Gold is dark mode by default
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFloatingPanel, setShowFloatingPanel] = useState<boolean>(false);
  const [activeFloatingTab, setActiveFloatingTab] = useState<'gemini' | 'support'>('gemini');

  // Smooth scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleViewChange = (view: string) => {
    if (view === 'consult' || view === 'contact_consult') {
      setActiveFloatingTab('gemini');
      setShowFloatingPanel(true);
      return;
    }
    setCurrentView(view);
    // Reset search query if moving away from products
    if (view !== 'products') {
      setSearchQuery('');
    }
  };

  return (
    <div 
      className={`min-h-screen flex flex-col justify-between font-sans transition-all duration-500 selection:bg-[#C9A227] selection:text-[#0B1B3D] ${
        isDarkMode 
          ? 'bg-[#0B1B3D] text-[#F5F0E1] dark-theme' 
          : 'bg-[#F7F4EB] text-[#0A162B] light-theme'
      }`}
    >
      
      {/* Top Tasvirto Announcement / News Bar */}
      <div className="w-full bg-gradient-to-r from-[#C9A227] via-[#E4BE3E] to-[#B08D20] text-[#0B1B3D] py-2.5 px-4 relative z-50 border-b border-[#C9A227]/30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-right" dir="rtl">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0B1B3D]/10 text-xs animate-bounce">💎</span>
            <p className="text-xs font-black leading-relaxed">
              این یک طراحی منحصر به فرد برای این لاین کسب‌وکار هست که <span className="underline decoration-wavy decoration-[#0B1B3D]/60">تصویرتو</span> ارائه می‌دارد؛ جهت سفارش این سبک سایت و اپلیکیشن تماس بگیرید:
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center font-bold">
            <a 
              href="tel:09138665345" 
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0B1B3D] text-[#C9A227] hover:bg-[#0B1B3D]/95 transition-all text-xs font-mono"
            >
              📞 ۰۹۱۳۸۶۶۵۳۴۵
            </a>
            <a 
              href="https://t.me/assreai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-all text-xs"
            >
              ✈️ PV تلگرام
            </a>
          </div>
        </div>
      </div>
      
      {/* Dynamic Header */}
      <Header
        currentView={currentView}
        onViewChange={handleViewChange}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onSearch={handleSearch}
      />

      {/* Main Content Sections with Fade/Slide Animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {currentView === 'home' && (
              <>
                <Hero onViewChange={handleViewChange} />
                <AboutSection />
                <ServicesSection onViewChange={handleViewChange} />
                <StorySection />
                <ReviewsSection />
              </>
            )}

            {currentView === 'products' && (
              <ProductsSection searchQuery={searchQuery} />
            )}

            {currentView === 'perfumes' && (
              <PerfumesSection />
            )}

            {currentView === 'packs' && (
              <PacksSection />
            )}

            {currentView === 'about' && (
              <>
                <AboutSection />
                <StorySection />
              </>
            )}

            {currentView === 'contact' && (
              <ContactSection onViewChange={handleViewChange} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Footer */}
      <Footer onViewChange={handleViewChange} />

      {/* Floating Support Button Widget */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3" dir="rtl">
        
        {/* Floating Expandable Panel */}
        <AnimatePresence>
          {showFloatingPanel && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="rounded-3xl border border-[#C9A227]/30 bg-[#0B1B3D]/95 text-[#F5F0E1] shadow-[0_10px_40px_rgba(201,162,39,0.45)] w-[320px] sm:w-[420px] overflow-hidden flex flex-col"
            >
              {/* Decorative Golden Top bar */}
              <div className="h-1 bg-gradient-to-r from-[#C9A227] via-[#E4BE3E] to-[#B08D20] w-full" />

              {/* Header */}
              <div className="flex justify-between items-center bg-[#0B1B3D]/80 px-5 py-4 border-b border-[#C9A227]/15">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C9A227]">
                  <Sparkles className="h-4 w-4 text-[#C9A227] animate-pulse" />
                  <span>کلینیک و مرکز مشاوره آتلانتیک اصفهان</span>
                </div>
                <button 
                  onClick={() => setShowFloatingPanel(false)}
                  className="p-1.5 rounded-full text-[#F5F0E1]/40 hover:text-white hover:bg-[#1E4D7B]/20 transition-all cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-[#C9A227]/10 bg-[#0B1B3D]/40 p-1">
                <button
                  onClick={() => setActiveFloatingTab('gemini')}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeFloatingTab === 'gemini'
                      ? 'bg-[#C9A227] text-[#0B1B3D] shadow-md'
                      : 'text-[#F5F0E1]/60 hover:text-[#F5F0E1] hover:bg-[#1E4D7B]/10'
                  }`}
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>مشاوره هوشمند (جمینای)</span>
                </button>
                <button
                  onClick={() => setActiveFloatingTab('support')}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeFloatingTab === 'support'
                      ? 'bg-[#C9A227] text-[#0B1B3D] shadow-md'
                      : 'text-[#F5F0E1]/60 hover:text-[#F5F0E1] hover:bg-[#1E4D7B]/10'
                  }`}
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>ارتباط مستقیم و شبکه‌ها</span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="flex-1">
                {activeFloatingTab === 'gemini' ? (
                  <GeminiConsultation />
                ) : (
                  <div className="p-5 space-y-4 text-right">
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-[#C9A227]">ارتباط با داروساز و اساتید طب سنتی</h4>
                      <p className="text-[11px] sm:text-xs text-[#F5F0E1]/80 leading-relaxed text-justify">
                        هم‌اکنون می‌توانید مستقیم با داروساز و اساتید طب سنتی شعبه اصفهان برای دریافت نسخه‌های شخصی و پیگیری سفارشات ارتباط برقرار کنید.
                      </p>
                    </div>

                    {/* Support Links */}
                    <div className="space-y-2.5 pt-2">
                      <a
                        href="tel:09138128424"
                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#C9A227] text-[#0B1B3D] hover:bg-[#C9A227]/90 text-xs font-bold transition-all shadow-md w-full justify-center group"
                      >
                        <PhoneCall className="h-4 w-4 transition-transform group-hover:scale-110" />
                        <span>تماس سریع: ۰۹۱۳۸۱۲۸۴۲۴</span>
                      </a>

                      <a
                        href="https://rubika.ir/Islamic_medical_of_ATLANTIC"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-all shadow-md w-full justify-center group"
                      >
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <span>کانال روبیکا آتلانتیک</span>
                      </a>
                    </div>

                    <div className="pt-3 border-t border-[#C9A227]/10 text-center">
                      <span className="text-[10px] text-[#F5F0E1]/50 block">طراحی و اجرا توسط آژانس تصویرتو</span>
                      <a href="tel:09138665345" className="text-[10px] text-[#C9A227] hover:underline font-mono">۰۹۱۳۸۶۶۵۳۴۵</a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bubble Button */}
        <motion.button
          id="floating-support-bubble"
          onClick={() => setShowFloatingPanel(!showFloatingPanel)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-[#C9A227] text-[#0B1B3D] flex items-center justify-center shadow-[0_4px_25px_rgba(201,162,39,0.5)] relative cursor-pointer group"
          title="مشاوره رایگان هوش مصنوعی و پشتیبانی آتلانتیک"
        >
          <span className="absolute inset-0 rounded-full bg-[#C9A227]/30 animate-ping" style={{ animationDuration: '2.5s' }}></span>
          <MessageCircle className="h-6 w-6 relative z-10 transition-transform group-hover:rotate-12" />
        </motion.button>

      </div>

    </div>
  );
}
