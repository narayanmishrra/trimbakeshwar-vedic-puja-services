/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Landmark, Compass, Eye, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryData } from '../data';
import { GalleryItem, Language } from '../types';

interface GallerySectionProps {
  lang: Language;
}

type FilterCategory = 'all' | 'temple' | 'venue' | 'rituals' | 'priests' | 'devotees';

// Helper component for high-performance, instant image rendering with beautiful skeleton shimmers
function GalleryImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const resolvedSrc = src;

  // We immediately set loaded to true if the image is already cached
  React.useEffect(() => {
    const img = new Image();
    img.src = resolvedSrc;
    if (img.complete) {
      setLoaded(true);
    }
  }, [resolvedSrc]);

  return (
    <div className="relative w-full h-full bg-[#7A1E1E]/5 flex items-center justify-center overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#7A1E1E]/5 via-[#D4AF37]/10 to-[#7A1E1E]/5 flex items-center justify-center">
          <span className="text-[#D4AF37]/40 text-3xl animate-spin font-serif">ॐ</span>
        </div>
      )}
      <img
        src={resolvedSrc}
        alt={alt}
        onLoad={() => setLoaded(true)}
        referrerPolicy="no-referrer"
        className={`${className} transition-all duration-700 ease-out ${
          loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-xs'
        }`}
      />
    </div>
  );
}

export default function GallerySection({ lang }: GallerySectionProps) {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs: { id: FilterCategory; label: { en: string; hi: string } }[] = [
    { id: 'all', label: { en: 'All Images', hi: 'सभी चित्र' } },
    { id: 'temple', label: { en: 'Sacred Temple', hi: 'पवित्र स्थल' } },
    { id: 'venue', label: { en: 'Puja Venue', hi: 'पूजा स्थल' } },
    { id: 'rituals', label: { en: 'Puja Rituals', hi: 'पूजा विधान' } },
    { id: 'priests', label: { en: 'Panditji', hi: 'पंडितजी' } },
    { id: 'devotees', label: { en: 'Devotees', hi: 'श्रद्धालु' } },
  ];

  const filteredItems = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <section className="py-20 bg-[#FAF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery intro headers */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
            {lang === 'en' ? 'Visual Glimpses' : 'गैलरी दर्शन'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4 tracking-tight">
            {lang === 'en' ? 'Sacred Spaces & Traditional Rites' : 'पावन स्थल एवं धार्मिक अनुष्ठान'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium">
            {lang === 'en'
              ? 'A curated glimpse into our dedicated private Puja Sthals, holy Kund baths, and traditional Vedic procedures conducted under experienced guidance.'
              : 'हमारे समर्पित निजी पूजा स्थलों, पवित्र स्नान घाटों और हमारे विद्वान पंडितों के सानिध्य में आयोजित होने वाली वैदिक पूजाओं की कुछ झलकियाँ।'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-sm text-xs font-bold font-sans tracking-wide transition-all border cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#7A1E1E] text-white border-[#7A1E1E] shadow-md'
                  : 'bg-white text-[#7A1E1E] border-[#F2E6CE] hover:border-[#D4AF37]/50'
              }`}
            >
              {tab.label[lang]}
            </button>
          ))}
        </div>

        {/* Responsive Grid list of items */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer h-72 rounded-sm overflow-hidden border border-[#F2E6CE] shadow-sm hover:shadow-xl bg-gradient-to-br from-[#7A1E1E]/5 to-[#E88921]/15 flex flex-col justify-between"
              >
                {/* Real Background Image with lazy preloader & transition helper */}
                {item.image && (
                  <GalleryImage
                    src={item.image}
                    alt={item.title[lang]}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Decorative border overlays */}
                <div className="absolute inset-2 border border-dashed border-[#D4AF37]/15 rounded-sm pointer-events-none group-hover:border-[#D4AF37]/40 transition-colors z-10" />
                
                {/* Interactive elegant visual overlay on hover instead of static captions */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/30 transition-colors duration-300 z-10" />

                {/* Central Elegant View Icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <div className="py-2 px-4 rounded-sm bg-[#7A1E1E]/95 border border-[#D4AF37]/30 text-[#FFFDF7] shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[11px] font-serif uppercase tracking-widest font-bold">
                      {lang === 'en' ? 'View Darshan' : 'दर्शन करें'}
                    </span>
                  </div>
                </div>

                {/* Inner Sacred motif label (only shown when no image) */}
                {!item.image && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10 text-center bg-gradient-to-br from-[#7A1E1E] to-[#400F0F] text-[#FFFDF7]">
                    <span className="text-4xl text-[#E88921] select-none block mb-2">ॐ</span>
                    <span className="font-serif text-sm text-[#FFFDF7]/90 font-semibold uppercase tracking-wider block">
                      {item.placeholderLabel}
                    </span>
                  </div>
                )}

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4"
          >
            {/* Close trigger overlay */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedItem(null)} />

            {/* Lightbox Content Card */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative bg-[#FFFDF7] border-2 border-[#D4AF37]/30 rounded-sm max-w-2xl w-full p-6 sm:p-8 z-10 shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-[#7A1E1E]/5 hover:bg-[#7A1E1E]/15 text-[#7A1E1E] rounded-sm transition-colors cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative Frame or Real Image */}
              {selectedItem.image ? (
                <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/30 h-[280px] sm:h-[360px] bg-black">
                  <GalleryImage
                    src={selectedItem.image}
                    alt={selectedItem.title[lang]}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="border border-dashed border-[#D4AF37]/30 rounded-sm p-4 sm:p-8 flex flex-col items-center justify-center min-h-[250px] sm:min-h-[320px] bg-gradient-to-br from-[#7A1E1E]/10 to-[#FAF8F2]">
                  <span className="text-5xl mb-4 text-[#E88921]">🏵️</span>
                  <span className="font-serif text-xs tracking-widest text-[#E88921] uppercase font-bold mb-1">
                    {selectedItem.placeholderLabel}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#7A1E1E] text-center max-w-md">
                    {selectedItem.title[lang]}
                  </h4>
                  <p className="text-xs text-[#7A1E1E]/60 font-sans mt-3 text-center max-w-sm font-semibold">
                    {lang === 'en'
                      ? 'This visual represents our premium high-quality facilities near Swami Samarth Kendra in Trimbakeshwar for performing sacred rituals.'
                      : 'यह चित्र त्र्यंबकेश्वर में स्वामी समर्थ केंद्र के निकट हमारे उत्कृष्ट एवं पवित्र पूजा स्थलों का प्रतिनिधित्व करता है।'}
                  </p>
                </div>
              )}

              {/* Caption and Title details positioned purely BELOW the image to keep the photo completely clean */}
              {selectedItem.image && (
                <div className="mt-4 border-l-2 border-[#D4AF37] pl-4">
                  <span className="font-serif text-[10px] tracking-widest text-[#E88921] uppercase font-bold mb-0.5 block">
                    {selectedItem.placeholderLabel}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#7A1E1E]">
                    {selectedItem.title[lang]}
                  </h4>
                </div>
              )}

              {/* Lightbox Footer Actions */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between border-t border-[#F2E6CE]/40 pt-4 gap-4">
                <div className="text-left">
                  <span className="block text-[10px] text-[#7A1E1E]/50 font-bold uppercase tracking-wider">{lang === 'en' ? 'Category' : 'श्रेणी'}</span>
                  <span className="text-sm font-serif font-bold text-[#7A1E1E] uppercase">{selectedItem.category}</span>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-[#7A1E1E] hover:bg-[#E88921] text-[#FFFDF7] text-xs font-serif uppercase tracking-widest py-2.5 px-6 rounded-sm border border-[#D4AF37]/20 transition-all cursor-pointer"
                >
                  {lang === 'en' ? 'Close View' : 'बंद करें'}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
