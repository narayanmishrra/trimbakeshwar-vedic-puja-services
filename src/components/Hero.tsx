/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ShieldCheck, HeartHandshake, Users, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { businessConfig } from '../data';

interface HeroProps {
  lang: Language;
  setActiveTab: (tab: string) => void;
}

export default function Hero({ lang, setActiveTab }: HeroProps) {
  // Lotus petals configurations for custom floating background animations
  const petals = [
    { id: 1, size: 24, left: '10%', top: '70%', delay: 0, duration: 25 },
    { id: 2, size: 16, left: '85%', top: '20%', delay: 2, duration: 18 },
    { id: 3, size: 20, left: '75%', top: '75%', delay: 4, duration: 22 },
    { id: 4, size: 14, left: '5%', top: '30%', delay: 1, duration: 20 },
    { id: 5, size: 18, left: '45%', top: '85%', delay: 3, duration: 28 },
  ];

  const prefilledMessage = ' Om namah shivay panditji 🕉️';

  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(prefilledMessage)}`;

  const trustBadges = [
    {
      icon: <Users className="w-5 h-5 text-[#E88921]" />,
      text: { en: 'Generational Vedic Priest', hi: 'पीढ़ीगत वैदिक पुरोहित' }
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#E88921]" />,
      text: { en: 'Authentic Scriptural Rituals', hi: 'प्रामाणिक शास्त्रीय अनुष्ठान' }
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#E88921]" />,
      text: { en: 'Complete Guidance & Support', hi: 'पूर्ण मार्गदर्शन एवं सहायता' }
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#E88921]" />,
      text: { en: 'Personalized Sankalp Taken', hi: 'व्यक्तिगत गोत्र-नाम संकल्प' }
    }
  ];

  // Scrolling Gallery - auto changes every 4 seconds
  const heroGalleryImages = [
    { src: '/images/gallery1.jpeg', alt: 'Puja Ritual at Trimbakeshwar' },
    { src: '/images/gallery2.jpeg', alt: 'Sacred Trimbakeshwar Valley Rituals' },
    { src: '/images/gallery3.jpeg', alt: 'Vedic Puja Samagri' },
    { src: '/images/galllery4.jpeg', alt: 'Devotees at Puja Sthal' },
    { src: '/images/gallery7.jpeg', alt: 'Kalsarpa Shanti Venue' },
    { src: '/images/kalsarp puja.jpeg', alt: 'Kalsarp Puja Ceremony' },
    { src: '/images/bramahagiri.webp', alt: 'Brahmagiri Hills Trimbakeshwar' },
    { src: '/images/online.jpeg', alt: 'Online Puja Darshan' },
    { src: '/images/main-photo.png', alt: 'Shri Trimbakeshwar Jyotirlinga Temple' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroGalleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroGalleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroGalleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroGalleryImages.length) % heroGalleryImages.length);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FAF8F2] to-[#F2E6CE]/20">

      {/* Soft Sunrise/Sandstone Aura Light background elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[#E88921]/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[50%] rounded-full bg-[#7A1E1E]/5 filter blur-[100px] pointer-events-none" />

      {/* Floating Lotus Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-[#E88921]/20 pointer-events-none select-none z-10"
          style={{
            left: petal.left,
            top: petal.top,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 30, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Customized SVG Lotus Petal */}
          <svg width={petal.size} height={petal.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2 C12,2 19,8 19,13 C19,16.8 15.8,20 12,20 C8.2,20 5,16.8 5,13 C5,8 12,2 12,2 Z" />
          </svg>
        </motion.div>
      ))}

      {/* Grid Pattern Background overlay (Very subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(242,230,206,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(242,230,206,0.1)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">

            {/* Lead intro tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block py-1.5 px-4 bg-[#F2E6CE] text-[#7A1E1E] text-[11px] font-bold tracking-[0.2em] mb-4 rounded-sm uppercase self-center lg:self-start"
            >
              <span className="font-sans">
                {lang === 'en' ? '100% Dosh Nivaran • 100% प्रामाणिक दोष निवारण' : '100% प्रामाणिक दोष निवारण • 100% Dosh Nivaran'}
              </span>
            </motion.div>

            {/* Puja Badges in English view featuring Hindi headlines */}
            {lang === 'en' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4"
              >
                <button
                  onClick={() => setActiveTab('kalsarpa-shanti')}
                  className="bg-[#7A1E1E]/10 hover:bg-[#7A1E1E]/20 border border-[#7A1E1E]/20 text-[#7A1E1E] px-3 py-1 rounded-full text-xs font-bold font-serif transition-colors cursor-pointer"
                >
                  Kaalsarp Puja • कालसर्प शांति पूजा
                </button>
                <button
                  onClick={() => setActiveTab('narayan-nagbali')}
                  className="bg-[#7A1E1E]/10 hover:bg-[#7A1E1E]/20 border border-[#7A1E1E]/20 text-[#7A1E1E] px-3 py-1 rounded-full text-xs font-bold font-serif transition-colors cursor-pointer"
                >
                  Narayan Naagbali • नारायण नागबलि पूजा
                </button>
                <button
                  onClick={() => setActiveTab('pitru-dosh')}
                  className="bg-[#7A1E1E]/10 hover:bg-[#7A1E1E]/20 border border-[#7A1E1E]/20 text-[#7A1E1E] px-3 py-1 rounded-full text-xs font-bold font-serif transition-colors cursor-pointer"
                >
                  Pitru Dosh • पितृ दोष निवारण
                </button>
              </motion.div>
            )}

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#7A1E1E] leading-[1.1] mb-6 tracking-tight text-center lg:text-left"
            >
              {lang === 'en' ? (
                <>
                  100% Dosh Nivaran <br />
                  <span className="italic font-light text-[#E88921]">at Sacred</span> <br />
                  Trimbakeshwar
                  <span className="block font-serif text-base sm:text-lg md:text-xl font-bold text-[#E88921]/80 mt-2">
                    त्र्यंबकेश्वर में 100% दोष निवारण
                  </span>
                </>
              ) : (
                <>
                  त्र्यंबकेश्वर में <br />
                  <span className="italic font-light text-[#E88921]">100% दोष निवारण</span> <br />
                  शास्त्रोक्त एवं प्रामाणिक अनुष्ठान
                  <span className="block font-serif text-sm sm:text-base md:text-lg font-bold text-[#E88921]/80 mt-2">
                    100% Dosh Nivaran at Sacred Trimbakeshwar
                  </span>
                </>
              )}
            </motion.h1>

            {/* Mobile-Only Scrolling Gallery (Displays on mobile as hero visual) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="block lg:hidden w-full h-64 sm:h-80 rounded-sm overflow-hidden border border-[#D4AF37]/40 shadow-lg mb-6 relative group bg-black"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`mobile-${currentSlide}`}
                  src={heroGalleryImages[currentSlide].src}
                  alt={heroGalleryImages[currentSlide].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none z-[1]" />

              {/* Mobile dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {heroGalleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${idx === currentSlide ? 'w-6 h-1.5 bg-[#D4AF37]' : 'w-1.5 h-1.5 bg-white/60'
                      }`}
                  />
                ))}
              </div>

              <div className="absolute bottom-3 left-4 right-12 flex items-center justify-between text-[#FFFDF7] z-10">
                <span className="font-serif text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold">
                  {lang === 'en' ? 'Sacred Darshan Gallery' : 'पावन दर्शन गैलरी'}
                </span>
              </div>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-[#1a1a1a]/85 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-medium text-center lg:text-left"
            >
              {lang === 'en'
                ? 'Experience 100% authentic Dosh Nivaran at holy Trimbakeshwar Jyotirlinga—the sacred origin of River Godavari and supreme site for Kaal Sarp Dosh (कालसर्प दोष शांति पूजा), Narayan Nagbali (नारायण नागबलि पूजा) & Pitru Dosh Shanti (पितृ दोष निवारण). Conducted by experienced Guruji Pandit Bineet Shastriji with complete scriptural purity, individual resolution (Sankalp), and dedicated guidance.'
                : 'पवित्र त्र्यंबकेश्वर (Trimbakeshwar) ज्योतिर्लिंग धाम में 100% प्रामाणिक दोष निवारण (Dosh Nivaran) कराएं। पवित्र गोदावरी तट पर स्थित यह धाम कालसर्प दोष (Kaal Sarp Dosh), नारायण नागबलि (Narayan Nagbali) एवं पितृ दोष निवारण (Pitru Dosh Shanti) हेतु सर्वश्रेष्ठ तीर्थ माना गया है। अधिकृत वैदिक पुरोहित पंडित बिनीत शास्त्रीजी द्वारा पूर्ण विधि-विधान, शुचिता और व्यक्तिगत संकल्प (Sankalp) के साथ अनुष्ठान संपन्न कराएं।'}
            </motion.p>

            {/* Conversion CTA triggers */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10 w-full"
            >
              <a
                href="tel:+917020682622"
                className="flex items-center justify-center gap-3 bg-[#7A1E1E] hover:bg-[#5a1616] text-white font-serif text-base tracking-wide py-4 px-8 rounded-sm shadow-xl transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5 border border-[#D4AF37]/20"
              >
                <Phone className="pointer-events-none w-5 h-5 fill-current text-white shrink-0" />
                <span className="pointer-events-none uppercase tracking-wider font-bold text-sm whitespace-nowrap">{lang === 'en' ? `Call ${businessConfig.phoneDisplay}` : `कॉल ${businessConfig.phoneDisplay}`}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border-2 border-[#E88921] hover:bg-[#E88921]/5 text-[#E88921] font-serif text-base tracking-wide py-4 px-8 rounded-sm transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 text-[#E88921] fill-current" />
                <span className="uppercase tracking-wider font-bold text-sm">{lang === 'en' ? 'WhatsApp Chat' : 'व्हाट्सएप संपर्क'}</span>
              </a>
            </motion.div>



          </div>

          {/* Right Column: Scrolling Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block lg:col-span-5 relative w-full h-[480px] lg:h-[560px] rounded-sm overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-black group"
          >
            {/* Images */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={heroGalleryImages[currentSlide].src}
                alt={heroGalleryImages[currentSlide].alt}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Soft overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7A1E1E]/20 to-transparent pointer-events-none" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E88921] to-[#D4AF37] z-10" />

            {/* Navigation Arrows - visible on hover */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom content - dots + label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-[11px] tracking-[0.2em] text-[#D4AF37] uppercase font-bold">
                  {lang === 'en' ? 'Sacred Darshan Gallery' : 'पावन दर्शन गैलरी'}
                </span>
                <span className="text-[10px] text-white/70 font-sans font-medium">
                  {currentSlide + 1} / {heroGalleryImages.length}
                </span>
              </div>

              {/* Progress / Dots */}
              <div className="flex items-center gap-2">
                {heroGalleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative h-1.5 rounded-full transition-all duration-500 cursor-pointer overflow-hidden ${idx === currentSlide ? 'w-8 bg-[#D4AF37]' : 'w-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {idx === currentSlide && (
                      <motion.div
                        layoutId="progress"
                        className="absolute inset-0 bg-[#D4AF37] origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, ease: 'linear' }}
                        key={currentSlide}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Caption */}
              <p className="mt-3 text-[12px] text-white/90 font-sans font-medium leading-snug line-clamp-1">
                {heroGalleryImages[currentSlide].alt}
              </p>
            </div>

            {/* Decorative Om watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
              <span className="text-[200px] font-serif text-white">ॐ</span>
            </div>
          </motion.div>

          {/* Tablet/Mobile duplicate gallery that scrolls every 2 sec */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden md:block lg:hidden col-span-1 relative w-full h-[420px] rounded-sm overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-black group mt-4"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`md-${currentSlide}`}
                src={heroGalleryImages[currentSlide].src}
                alt={heroGalleryImages[currentSlide].alt}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <div className="flex gap-1.5">
                {heroGalleryImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all ${idx === currentSlide ? 'w-6 bg-[#D4AF37]' : 'w-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Horizontal Trust badges row */}
        <div className="mt-16 pt-10 border-t border-[#F2E6CE]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            {trustBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left bg-white border border-[#F2E6CE] p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-2 bg-[#FAF8F2] rounded-sm border border-[#F2E6CE]">
                  {badge.icon}
                </div>
                <span className="font-sans text-xs font-bold text-[#7A1E1E] leading-snug">
                  {badge.text[lang]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Decorative Traditional Temple Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180 select-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" className="relative block w-full h-12 text-[#FFFDF7] fill-current" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,4.75,55.05,16.33,83.1,26.3,140.74,46.72,201.24,54.75,262,56.57A417.08,417.08,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

    </section>
  );
}
