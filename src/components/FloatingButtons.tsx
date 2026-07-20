/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { businessConfig } from '../data';
import { Language } from '../types';

interface FloatingButtonsProps {
  lang: Language;
}

export default function FloatingButtons({ lang }: FloatingButtonsProps) {
  const [showCallTooltip, setShowCallTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-end justify-end pointer-events-none select-none">
      {/* Floating Call Button (Right side of screen) */}
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
