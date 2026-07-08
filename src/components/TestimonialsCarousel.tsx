/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data';
import { Language } from '../types';

interface TestimonialsCarouselProps {
  lang: Language;
}

export default function TestimonialsCarousel({ lang }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const activeReview = testimonialsData[activeIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F2] to-[#FFFDF7] overflow-hidden select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Intro heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
            {lang === 'en' ? 'Devotee Experiences' : 'श्रद्धालु अनुभव'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4 tracking-tight">
            {lang === 'en' ? 'Trusted by Devotees Globally' : 'देश-विदेश के श्रद्धालुओं का विश्वास'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium">
            {lang === 'en'
              ? 'Read peaceful words of gratitude from devotees who received complete guidance and experienced positive transformations in their life journeys.'
              : 'उन श्रद्धालुओं के पावन अनुभव पढ़ें जिन्होंने हमारे सानिध्य में पूजा संपन्न कराई और जीवन में सुख-समृद्धि का मार्ग प्राप्त किया।'}
          </p>
        </div>

        {/* Central Card with Motion Transitions */}
        <div className="relative bg-white border-t-4 border-[#E88921] border-x border-b border-[#F2E6CE] rounded-sm p-6 sm:p-10 shadow-sm max-w-2xl mx-auto">
          {/* Quote watermark */}
          <div className="absolute top-6 left-6 text-[#E88921]/10 pointer-events-none">
            <Quote className="w-16 h-16 fill-current" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Star Ratings */}
              <div className="flex gap-1 mb-4">
                {[...Array(activeReview.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-[#E88921] fill-[#E88921]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-sans text-sm sm:text-base text-[#1a1a1a]/80 mb-6 italic leading-relaxed font-medium">
                "{activeReview.review[lang]}"
              </p>

              {/* Author details */}
              <div className="mt-2">
                <h4 className="font-serif text-base font-bold text-[#7A1E1E]">
                  {activeReview.name[lang]}
                </h4>
                <p className="font-sans text-xs text-[#E88921] font-bold tracking-wider uppercase mt-0.5">
                  {activeReview.location[lang]} • {activeReview.date}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-15px] sm:left-[-30px] z-20">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-sm bg-[#7A1E1E] text-white hover:bg-[#E88921] transition-all border border-[#D4AF37]/30 shadow-md flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-[-15px] sm:right-[-30px] z-20">
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-sm bg-[#7A1E1E] text-white hover:bg-[#E88921] transition-all border border-[#D4AF37]/30 shadow-md flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Dots Indicator */}
        <div className="flex justify-center items-center gap-1.5 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === idx ? 'w-6 bg-[#E88921]' : 'w-2 bg-[#7A1E1E]/20'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
