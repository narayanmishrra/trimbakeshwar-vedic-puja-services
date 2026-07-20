/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { businessConfig } from '../data';
import { Language } from '../types';

interface FloatingButtonsProps {
  lang: Language;
}

export default function FloatingButtons({ lang }: FloatingButtonsProps) {
  const [showCallTooltip, setShowCallTooltip] = useState(false);
  const [showWsTooltip, setShowWsTooltip] = useState(false);

  const prefilledMessage = lang === 'en' 
    ? 'Namaste Panditji, I would like to consult regarding Vedic Puja services at Trimbakeshwar.'
    : 'नमस्ते पंडितजी, मैं त्र्यंबकेश्वर में वैदिक पूजा सेवाओं के बारे में परामर्श करना चाहता हूँ।';

  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3.5 items-end pointer-events-none select-none">
      {/* Floating WhatsApp Button (Top in stack on right) */}
      <div 
        className="pointer-events-auto relative group flex items-center justify-end"
        onMouseEnter={() => setShowWsTooltip(true)}
        onMouseLeave={() => setShowWsTooltip(false)}
      >
        <AnimatePresence>
          {showWsTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-16 bg-[#25D366] text-white text-xs py-2 px-3 rounded-sm shadow-lg border border-white/20 whitespace-nowrap hidden sm:block font-sans font-bold"
            >
              {lang === 'en' ? 'WhatsApp Panditji' : 'व्हाट्सएप संपर्क करें'}
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Panditji"
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
          }}
        >
          <MessageSquare className="w-6 h-6 md:w-7 md:h-7 fill-current" />
        </a>
      </div>

      {/* Floating Call Button (Bottom in stack on right) */}
      <div 
        className="pointer-events-auto relative group flex items-center justify-end"
        onMouseEnter={() => setShowCallTooltip(true)}
        onMouseLeave={() => setShowCallTooltip(false)}
      >
        <AnimatePresence>
          {showCallTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-16 bg-[#7A1E1E] text-[#FFFDF7] text-xs py-2 px-3 rounded-sm shadow-lg border border-[#D4AF37]/30 whitespace-nowrap hidden sm:block font-sans font-bold"
            >
              {lang === 'en' ? 'Call Panditji Immediately' : 'पंडितजी को कॉल करें'}
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href={`tel:${businessConfig.phone}`}
          onClick={(e) => {
            if (typeof (window as any).gtag_report_conversion === 'function') {
              e.preventDefault();
              (window as any).gtag_report_conversion(`tel:${businessConfig.phone}`);
            }
          }}
          aria-label="Call Panditji"
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E88921] text-[#FFFDF7] shadow-xl hover:bg-[#d17415] transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            boxShadow: '0 8px 30px rgba(232, 137, 33, 0.5)',
          }}
        >
          {/* Pulsing ring animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#E88921] opacity-75 animate-ping pointer-events-none" />
          <Phone className="w-6 h-6 md:w-7 md:h-7 fill-current" />
        </a>
      </div>
    </div>
  );
}
