import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onSearch: (query: string) => void;
}

export default function Header({
  currentView,
  onViewChange,
  isDarkMode,
  toggleTheme,
  onSearch,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { id: 'home', label: 'خانه' },
    { id: 'products', label: 'محصولات ویژه' },
    { id: 'perfumes', label: 'ادکلن‌های درمانی' },
    { id: 'packs', label: 'پک‌های درمانی' },
    { id: 'about', label: 'درباره ما' },
    { id: 'contact', label: 'تماس با ما' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    onViewChange('products');
    setSearchOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md border-b border-[#C9A227]/20 ${
      isDarkMode 
        ? 'bg-[#0B1B3D]/80 text-[#F5F0E1]' 
        : 'bg-[#F7F4EB]/90 text-[#0A162B] shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" dir="rtl">
        
        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-[#C9A227] hover:bg-[#1E4D7B]/30 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <button
            id="mobile-search-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-lg text-[#C9A227] hover:bg-[#1E4D7B]/30"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Logo and Brand Name */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => onViewChange('home')}
        >
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-[#C9A227] bg-[#1E4D7B]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)]">
            <Sparkles className="h-6 w-6 text-[#C9A227] animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-dashed border-[#C9A227]/30 animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>
          <div className="text-right">
            <h1 className="text-xl font-black tracking-wider text-[#C9A227] font-sans">آتلانتیک</h1>
            <span className={`text-[9px] block font-mono tracking-tighter ${isDarkMode ? 'text-[#F5F0E1]/70' : 'text-[#0A162B]/80'}`}>ATLANTIC</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 space-x-reverse">
          {menuItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-[#C9A227]' 
                    : isDarkMode
                      ? 'text-[#F5F0E1]/80 hover:text-[#C9A227]'
                      : 'text-[#0A162B]/80 hover:text-[#C9A227]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 border border-[#C9A227] bg-[#1E4D7B]/20 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons (Search, Theme, Cart/Order) */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Desktop Search bar */}
          <div className="hidden lg:block relative">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="جستجوی اکسیر شفابخش..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-48 xl:w-64 px-4 py-1.5 pr-10 text-xs rounded-full border border-[#C9A227]/30 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all text-right ${
                  isDarkMode
                    ? 'bg-[#1E4D7B]/30 text-[#F5F0E1] placeholder-[#F5F0E1]/40'
                    : 'bg-[#1E4D7B]/10 text-[#0A162B] placeholder-[#0A162B]/50'
                }`}
              />
              <Search className="absolute right-3 top-2 h-4 w-4 text-[#C9A227]/60 pointer-events-none" />
            </form>
          </div>

          <button
            id="toggle-theme-btn"
            onClick={toggleTheme}
            className="p-2 rounded-full text-[#C9A227] hover:bg-[#1E4D7B]/30 transition-all duration-300"
            title={isDarkMode ? "تغییر به تم روز (عاجی)" : "تغییر به تم شب (لاجوردی)"}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            id="cart-btn"
            onClick={() => onViewChange('products')}
            className="p-2 rounded-full text-[#C9A227] hover:bg-[#1E4D7B]/30 transition-all duration-300 relative"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
          </button>

          <button
            id="header-consultation-btn"
            onClick={() => onViewChange('contact')}
            className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold rounded-full bg-[#C9A227] hover:bg-[#C9A227]/90 text-[#0B1B3D] transition-all duration-300 border border-[#C9A227] shadow-[0_0_15px_rgba(201,162,39,0.3)] hover:scale-105"
          >
            درخواست مشاوره
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`lg:hidden w-full border-t border-[#C9A227]/20 p-3 flex justify-center ${
              isDarkMode ? 'bg-[#0B1B3D]' : 'bg-[#F7F4EB]'
            }`}
          >
            <form onSubmit={handleSearchSubmit} className="w-full max-w-md relative">
              <input
                type="text"
                placeholder="جستجوی اکسیر شفابخش..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-2 pr-10 text-xs rounded-full border border-[#C9A227]/40 text-right focus:outline-none focus:border-[#C9A227] ${
                  isDarkMode
                    ? 'bg-[#1E4D7B]/40 text-[#F5F0E1]'
                    : 'bg-[#1E4D7B]/10 text-[#0A162B]'
                }`}
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-[#C9A227]" />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t border-[#C9A227]/20 overflow-hidden ${
              isDarkMode ? 'bg-[#0B1B3D]' : 'bg-[#F7F4EB]'
            }`}
          >
            <div className="px-2 pt-2 pb-4 space-y-1" dir="rtl">
              {menuItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onViewChange(item.id);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#C9A227] bg-[#1E4D7B]/40 border-r-2 border-[#C9A227]'
                        : isDarkMode
                          ? 'text-[#F5F0E1]/80 hover:text-[#C9A227] hover:bg-[#1E4D7B]/20'
                          : 'text-[#0A162B]/80 hover:text-[#C9A227] hover:bg-[#1E4D7B]/10'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 px-4">
                <button
                  id="mobile-drawer-consultation-btn"
                  onClick={() => {
                    onViewChange('contact');
                    setIsOpen(false);
                  }}
                  className="w-full py-2.5 text-center text-xs font-semibold rounded-full bg-[#C9A227] text-[#0B1B3D] border border-[#C9A227] shadow-[0_0_10px_rgba(201,162,39,0.2)]"
                >
                  درخواست مشاوره رایگان
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
