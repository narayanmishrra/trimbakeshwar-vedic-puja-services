/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { faqsData } from '../data';
import { Language } from '../types';

interface FAQSectionProps {
  lang: Language;
}

export default function FAQSection({ lang }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#FAF8F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header headings */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
            {lang === 'en' ? 'Queries Resolved' : 'जिज्ञासा समाधान'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4 tracking-tight">
            {lang === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium">
            {lang === 'en'
              ? 'Find answers to standard queries regarding ritual locations, online remote options, dhotis/saree clothing codes, and lodging logistics.'
              : 'पूजा की शुद्धता, मुहूर्त निर्धारण, रहने-खाने की व्यवस्था, कपड़े के रंग और अन्य जिज्ञासाओं के उत्तर यहाँ प्राप्त करें।'}
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#F2E6CE] hover:border-[#D4AF37]/50 rounded-sm overflow-hidden shadow-sm transition-all"
              >
                {/* Trigger head button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left p-5 focus:outline-none select-none cursor-pointer group"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-[#E88921] group-hover:text-[#7A1E1E] shrink-0 transition-colors" />
                    <span className="font-serif text-sm sm:text-base font-bold text-[#7A1E1E] group-hover:text-[#E88921] transition-colors leading-snug">
                      {faq.question[lang]}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7A1E1E]/60 group-hover:text-[#E88921] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-[#F2E6CE]/30 text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed pl-13 font-medium">
                        {faq.answer[lang]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
