/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, PhoneCall, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { businessConfig } from '../data';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ lang, setLang, activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: { en: 'Home', hi: 'मुख्य' } },
    { id: 'trimbakeshwar', label: { en: 'About Trimbakeshwar', hi: 'त्र्यंबकेश्वर परिचय' } },
    { id: 'services', label: { en: 'Our Puja Services', hi: 'पूजा सेवाएं' } },
    { id: 'about', label: { en: 'About Us', hi: 'हमारे बारे में' } },
    { id: 'gallery', label: { en: 'Gallery', hi: 'गैलरी' } },
    { id: 'blog', label: { en: 'Blog & Reviews', hi: 'ब्लॉग एवं समीक्षाएं' } },
    { id: 'faq', label: { en: 'FAQs', hi: 'सवाल-जवाब' } },
    { id: 'contact', label: { en: 'Contact Us', hi: 'संपर्क करें' } },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/30 py-3'
            : 'bg-[#FFFDF7]/90 backdrop-blur-sm border-b border-[#D4AF37]/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Branding Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer select-none group"
            >
              {/* Sacred Temple Logo Graphic */}
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center border border-[#D4AF37]/40 shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                <img 
                  src="/images/lord-shiva-face-silhouette-lord-shiva-logo-icon-illustration-silhouette-and-line-art-lord-shiva-face-silhouette-vector.jpg"
                  alt="Lord Shiva Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-serif text-base sm:text-lg leading-none text-[#7A1E1E] font-bold tracking-tight">
                  {lang === 'en' ? 'TRIMBAKESHWAR' : 'त्र्यंबकेश्वर'}
                </h1>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#E88921] font-bold mt-0.5">
                  {lang === 'en' ? 'Vedic Puja Services' : 'वैदिक पूजा सेवा'}
                </p>
              </div>
            </div>
 
            {/* Desktop Navigation links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer py-1 ${
                    activeTab === item.id || (item.id === 'services' && activeTab.startsWith('service-'))
                      ? 'text-[#E88921]'
                      : 'text-[#1a1a1a] hover:text-[#E88921]'
                  }`}
                >
                  {item.label[lang]}
                  {(activeTab === item.id || (item.id === 'services' && activeTab.startsWith('service-'))) && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E88921]"
                    />
                  )}
                </button>
              ))}
            </nav>
 
            {/* Utility Actions (Language switcher & Direct call CTA) */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Switcher */}
              <div className="flex items-center bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm p-1">
                <button
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 rounded-sm text-[11px] font-bold tracking-wider transition-all cursor-pointer ${
                    lang === 'en'
                      ? 'bg-[#7A1E1E] text-white shadow-sm'
                      : 'text-[#7A1E1E] hover:text-[#E88921]'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('hi')}
                  className={`px-2.5 py-1 rounded-sm text-[11px] font-bold tracking-wider transition-all cursor-pointer ${
                    lang === 'hi'
                      ? 'bg-[#7A1E1E] text-white shadow-sm'
                      : 'text-[#7A1E1E] hover:text-[#E88921]'
                  }`}
                >
                  हिन्दी
                </button>
              </div>
 
              {/* High conversion twin actions */}
              <a
                href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
                  lang === 'en'
                    ? 'Namaste Panditji, I would like to consult regarding Vedic Puja services at Trimbakeshwar.'
                    : 'नमस्ते पंडितजी, मैं त्र्यंबकेश्वर में वैदिक पूजा सेवाओं के बारे में परामर्श करना चाहता हूँ।'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E88921] hover:bg-[#c97416] text-[#FFFDF7] px-4.5 py-2 rounded-sm font-serif text-xs tracking-wider shadow-md flex items-center gap-1.5 transition-all duration-300 transform hover:-translate-y-0.5 uppercase font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>{lang === 'en' ? 'WhatsApp' : 'व्हाट्सएप'}</span>
              </a>

              <a
                href={`tel:${businessConfig.phone}`}
          onClick={(e) => {
            if (typeof (window as any).gtag_report_conversion === 'function') {
              e.preventDefault();
              (window as any).gtag_report_conversion(`tel:${businessConfig.phone}`);
            }
          }}
                className="bg-[#7A1E1E] text-white px-4.5 py-2 rounded-sm font-serif text-xs tracking-wider shadow-md hover:bg-[#5a1616] flex items-center gap-1.5 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-3.5 h-3.5 fill-white text-white" />
                <span className="uppercase font-bold">{lang === 'en' ? 'Call' : 'कॉल'}</span>
              </a>
            </div>

            {/* Mobile Actions: Language switch + Menu Button */}
            <div className="flex items-center lg:hidden gap-3">
              {/* Small Toggle for Mobile Language */}
              <button
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="flex items-center gap-1 bg-[#FAF8F2] border border-[#F2E6CE] rounded-full py-1.5 px-3 text-xs font-semibold text-[#7A1E1E] hover:text-[#E88921] shadow-inner cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="uppercase">{lang}</span>
              </button>

              {/* Menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-md text-[#7A1E1E] hover:text-[#E88921] hover:bg-[#FAF8F2] focus:outline-none transition-all cursor-pointer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-45"
            />

            {/* Drawer Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] max-w-full bg-[#FFFDF7] border-l border-[#F2E6CE] z-50 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-[#F2E6CE]">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-[#E88921] font-semibold">Trimbakeshwar</span>
                    <span className="text-sm font-bold text-[#7A1E1E]">Vedic Pujas</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-md text-[#7A1E1E] hover:text-[#E88921]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Nav Links List */}
                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left font-sans text-base font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                        activeTab === item.id || (item.id === 'services' && activeTab.startsWith('service-'))
                          ? 'bg-[#7A1E1E]/5 text-[#E88921]'
                          : 'text-[#7A1E1E] hover:bg-[#FAF8F2] hover:text-[#E88921]'
                      }`}
                    >
                      {item.label[lang]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Contact within Mobile Menu */}
              <div className="flex flex-col gap-3 pt-6 border-t border-[#F2E6CE]">
                <a
                  href={`tel:${businessConfig.phone}`}
          onClick={(e) => {
            if (typeof (window as any).gtag_report_conversion === 'function') {
              e.preventDefault();
              (window as any).gtag_report_conversion(`tel:${businessConfig.phone}`);
            }
          }}
                  className="flex items-center justify-center gap-2 bg-[#7A1E1E] hover:bg-[#E88921] text-[#FFFDF7] text-sm font-bold py-3 px-4 rounded-xl border border-[#D4AF37]/30 shadow-md"
                >
                  <PhoneCall className="w-4 h-4 fill-[#FFFDF7]" />
                  <span>{lang === 'en' ? 'Call Panditji' : 'पंडितजी को कॉल करें'}</span>
                </a>
                <p className="text-center text-[10px] text-[#7A1E1E]/60 font-medium">
                  {lang === 'en' ? 'Temple Darshan & Ritual Venue are Separate' : 'मंदिर दर्शन और अनुष्ठान स्थल अलग हैं'}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
