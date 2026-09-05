/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { businessConfig } from '../business';
import { Language } from '../types';

interface FloatingButtonsProps {
  lang: Language;
}

export default function FloatingButtons({ lang }: FloatingButtonsProps) {
  const whatsappText = 'Namaste, I want to enquire about Kaalsarp Puja and Narayan Nagbali Puja at Trimbakeshwar.';
  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(whatsappText)}`;
  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={lang === 'en' ? 'WhatsApp inquiry' : 'व्हाट्सएप पूछताछ'}
        className="fixed left-4 md:left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1fb857] active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
      >
        <MessageCircle className="h-7 w-7 fill-current" />
      </a>

      <a
        href="tel:+917020682622"
        aria-label={`Call Now ${businessConfig.phoneDisplay}`}
        className="fixed right-4 md:right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#E88921] text-white shadow-xl hover:bg-[#cf7618] active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#E88921]/30"
        style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
      >
        <span
          className="floating-pulse absolute inset-0 rounded-full bg-[#E88921]/40"
          aria-hidden="true"
          style={{ pointerEvents: 'none' }}
        />
        <Phone className="relative h-7 w-7 fill-current" style={{ pointerEvents: 'none' }} />
      </a>
    </>
  );
}
