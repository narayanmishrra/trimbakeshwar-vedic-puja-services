/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageSquare, ShieldCheck, HeartHandshake, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
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

  const prefilledMessage = lang === 'en' 
    ? 'Namaste Panditji, I would like to consult regarding Vedic Puja services at Trimbakeshwar.'
    : 'नमस्ते पंडितजी, मैं त्र्यंबकेश्वर में वैदिक पूजा सेवाओं के बारे में परामर्श करना चाहता हूँ।';

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
              className="inline-block py-1.5 px-4 bg-[#F2E6CE] text-[#7A1E1E] text-[11px] font-bold tracking-[0.2em] mb-6 rounded-sm uppercase self-center lg:self-start"
            >
              <span className="font-sans">
                {lang === 'en' ? 'Authentic Vedic Tradition' : 'प्रामाणिक वैदिक परंपरा'}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#7A1E1E] leading-[1.1] mb-6 tracking-tight text-center lg:text-left"
            >
              {lang === 'en' ? (
                <>
                  Experience <br />
                  <span className="italic font-light text-[#E88921]">Sacred Rituals</span> <br />
                  in Trimbakeshwar
                </>
              ) : (
                <>
                  त्र्यंबकेश्वर में <br />
                  <span className="italic font-light text-[#E88921]">शास्त्रोक्त अनुष्ठान</span> <br />
                  का दिव्य अनुभव
                </>
              )}
            </motion.h1>

            {/* Mobile-Only Main Photo (Displays prominently on mobile when opened) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="block lg:hidden w-full h-56 sm:h-72 rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-lg mb-6 relative"
            >
              <img 
                src="/images/main photo.png" 
                alt="Shri Trimbakeshwar Temple"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[#FFFDF7]">
                <span className="font-serif text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold">
                  {lang === 'en' ? 'Shri Trimbakeshwar Jyotirlinga' : 'श्री त्र्यंबकेश्वर ज्योतिर्लिंग'}
                </span>
                <span className="text-xs font-serif font-bold">ॐ नमः शिवाय</span>
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
                ? 'Traditional Vedic rituals conducted by Pandit Bineet Shastriji at his dedicated private Puja Sthal with complete guidance, devotion, and absolute authenticity.'
                : 'पंडित बिनीत शास्त्रीजी द्वारा अपने समर्पित निजी पूजा स्थल पर पूर्ण मार्गदर्शन, विधि-विधान और शुद्धता के साथ संपन्न किए जाने वाले पारंपरिक शास्त्रीय अनुष्ठान।'}
            </motion.p>

            {/* Conversion CTA triggers */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10 w-full"
            >
              <a
                href={`tel:${businessConfig.phone}`}
                className="flex items-center justify-center gap-3 bg-[#7A1E1E] hover:bg-[#5a1616] text-white font-serif text-base tracking-wide py-4 px-8 rounded-sm shadow-xl transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5 border border-[#D4AF37]/20"
              >
                <Phone className="w-5 h-5 fill-current text-white" />
                <span className="uppercase tracking-wider font-bold text-sm">{lang === 'en' ? 'Book Consultation' : 'परामर्श बुक करें'}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border-2 border-[#E88921] hover:bg-[#E88921]/5 text-[#E88921] font-serif text-base tracking-wide py-4 px-8 rounded-sm transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 text-[#E88921] fill-current" />
                <span className="uppercase tracking-wider font-bold text-sm">{lang === 'en' ? 'WhatsApp Chat' : 'व्हाट्सएप चैट'}</span>
              </a>
            </motion.div>

            {/* Trust disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-[#7A1E1E]/70 italic mt-2 text-center lg:text-left font-sans font-medium"
            >
              * {lang === 'en' 
                ? 'Important: All rituals are held at private Puja Sthals; temple darshan and ritual venues are separate.'
                : 'महत्वपूर्ण सूचना: सभी अनुष्ठान निजी पूजा स्थलों पर आयोजित होते हैं; मुख्य मंदिर दर्शन और अनुष्ठान स्थल अलग-अलग हैं।'}
            </motion.p>

          </div>

          {/* Right Column: Beautiful Temple-Inspired Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-sm overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-gradient-to-tr from-[#7A1E1E] to-[#2B0A0A] flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Real Background Dummy Image (easily replaceable by user) */}
            <img 
              src="/images/main photo.png" 
              alt="Trimbakeshwar Temple Brahmagiri" 
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay"
            />
            
            {/* Visual background pattern simulation */}
            <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-10 bg-[radial-gradient(#E88921_1px,transparent_1px)] bg-[size:16px_16px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Sacred Lotus Watermark in center of mockup */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <span className="text-[120px] sm:text-[180px]">ॐ</span>
            </div>

            {/* Card top border header */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
              <span className="font-serif text-xs tracking-widest text-[#D4AF37] uppercase font-bold">
                {lang === 'en' ? 'DEDICATED PUJA STHAL' : 'समर्पित पूजा स्थल'}
              </span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E88921]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAF8F2]" />
              </div>
            </div>

            {/* Placeholder center illustration */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
              <div className="w-14 h-14 rounded-full bg-[#FFFDF7]/10 flex items-center justify-center border border-[#D4AF37]/40 mb-4 shadow-lg backdrop-blur-sm">
                <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 22h20L12 2z" />
                  <circle cx="12" cy="14" r="3" />
                </svg>
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-[#FFFDF7] font-semibold tracking-wide">
                {lang === 'en' ? 'Sacred Trimbakeshwar Valley' : 'पवित्र त्र्यंबकेश्वर घाटी'}
              </h3>
              <p className="text-[11px] text-[#FAF8F2]/85 font-sans mt-2 max-w-sm font-medium leading-relaxed">
                {lang === 'en' 
                  ? 'Our primary ritual sanctuary is situated near Swami Samarth Kendra surrounded by Brahmagiri Hills.'
                  : 'हमारा मुख्य अनुष्ठान स्थल ब्रह्मगिरि पहाड़ियों से घिरे स्वामी समर्थ केंद्र के समीप स्थित है।'}
              </p>
            </div>

            {/* Card Bottom status indicators */}
            <div className="relative z-10 flex items-center justify-between bg-[#FFFDF7]/5 border border-[#FFFDF7]/10 rounded-sm p-4 backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="text-[9px] text-[#D4AF37] uppercase tracking-wider font-bold font-sans">
                  {lang === 'en' ? 'Rituals Performed Daily' : 'दैनिक अनुष्ठान समय'}
                </span>
                <span className="text-[11px] text-[#FFFDF7] font-bold mt-0.5">
                  {businessConfig.workingHours[lang]}
                </span>
              </div>
              <button 
                onClick={() => setActiveTab('services')}
                className="text-[10px] uppercase tracking-wider text-white bg-[#7A1E1E] hover:bg-[#E88921] border border-[#D4AF37]/30 px-3 py-1.5 rounded-sm font-bold transition-all cursor-pointer"
              >
                {lang === 'en' ? 'View Rituals' : 'अनुष्ठान सूची'}
              </button>
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
