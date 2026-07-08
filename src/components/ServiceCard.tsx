/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Service, Language } from '../types';
import { businessConfig } from '../data';

interface ServiceCardProps {
  key?: string;
  service: Service;
  lang: Language;
  onSelect: (id: string) => void;
}

export default function ServiceCard({ service, lang, onSelect }: ServiceCardProps) {
  const isEven = service.id.charCodeAt(service.id.length - 1) % 2 === 0;
  const topBorderClass = isEven ? 'border-[#E88921]' : 'border-[#7A1E1E]';

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'kalsarpa-shanti':
        return '/images/kalsarp puja.jpeg';
      case 'narayan-nagbali':
        return '/images/narayan naagbali.jpg';
      case 'tripindi-shraddha':
        return '/images/tripindi.jpg';
      case 'mahamrityunjaya':
        return '/images/mahamrityunjay.jpg';
      case 'rudrabhishek':
        return '/images/rudrabhishek.jpg';
      case 'pitru-dosh':
        return '/images/pitrudosh.jpg';
      case 'navagraha-shanti':
        return '/images/navgrah.jpg';
      case 'mangal-dosh':
        return '/images/mangal dosh.png';
      case 'online-puja':
        return '/images/online.jpeg';
      default:
        return 'https://images.unsplash.com/photo-1602616191559-c34d88763294?auto=format&fit=crop&w=600&q=80';
    }
  };

  const serviceImg = getServiceImage(service.id);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group relative flex flex-col justify-between bg-white rounded-sm border-t-4 border-x border-b border-[#F2E6CE] hover:border-[#D4AF37]/60 ${topBorderClass} p-0 shadow-sm hover:shadow-md transition-all overflow-hidden`}
    >
      {/* Top Banner Image with Clock Overlaid */}
      <div className="relative w-full h-44 overflow-hidden border-b border-[#F2E6CE]">
        <img
          src={serviceImg}
          alt={service.title[lang]}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 bg-[#FAF8F2]/95 border border-[#F2E6CE]/60 rounded-sm py-0.5 px-2.5 text-[9px] font-bold uppercase tracking-wider text-[#7A1E1E]">
            <Clock className="w-2.5 h-2.5 text-[#E88921]" />
            <span>{service.duration[lang]}</span>
          </div>
        </div>
      </div>

      {/* Decorative Gold Corner Borders */}
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Tagline / Subtitle */}
          <span className="text-[10px] uppercase text-[#E88921] font-bold tracking-[0.15em] mb-1.5 block">
            {lang === 'en' ? 'VEDIC REMEDY' : 'वैदिक अनुष्ठान'}
          </span>

          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#7A1E1E] group-hover:text-[#E88921] transition-colors duration-200 mb-2 leading-snug">
            {service.title[lang]}
          </h3>

          {/* Short Description */}
          <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/85 mb-6 leading-relaxed text-justify font-semibold line-clamp-3">
            {service.shortDesc[lang]}
          </p>
        </div>

        {/* Quick metadata attributes */}
        <div className="border-t border-[#F2E6CE]/40 pt-4 flex items-center justify-between mt-auto">
          <button
            onClick={() => onSelect(service.id)}
            className="flex items-center gap-1 text-[11px] uppercase tracking-wider font-bold text-[#7A1E1E] hover:text-[#E88921] transition-colors cursor-pointer"
          >
            <span>{lang === 'en' ? 'Explore Details →' : 'विवरण देखें →'}</span>
          </button>

          <a
            href={`tel:${businessConfig.phone}`}
            className="text-[10px] uppercase tracking-wider font-serif font-bold bg-[#7A1E1E] hover:bg-[#E88921] text-[#FFFDF7] px-3.5 py-2 rounded-sm border border-[#D4AF37]/20 shadow-sm transition-colors"
          >
            {lang === 'en' ? 'Book Call' : 'बुक कॉल'}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
