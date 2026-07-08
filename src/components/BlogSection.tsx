/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, Tag, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { BlogPost, Language } from '../types';
import { blogPosts } from '../data';

const seoTags = [
  { name: { en: "Kalsarpa Shanti Trimbakeshwar", hi: "कालसर्प शांति त्र्यंबकेश्वर" } },
  { name: { en: "Narayan Nagbali Puja", hi: "नारायण नागबलि पूजा" } },
  { name: { en: "Tripindi Shraddha Vidhi", hi: "त्रिपिंडी श्राद्ध विधि" } },
  { name: { en: "Best Pandit in Trimbakeshwar", hi: "त्र्यंबकेश्वर के सर्वश्रेष्ठ पंडित" } },
  { name: { en: "Kaalsarp Dosh Nivaran", hi: "कालसर्प दोष निवारण" } },
  { name: { en: "Jyotirlinga Temple Nashik", hi: "ज्योतिर्लिंग मंदिर नासिक" } },
  { name: { en: "Rahu Ketu Shanti", hi: "राहु केतु शांति" } },
  { name: { en: "Pitri Dosha Puja", hi: "पितृ दोष पूजा" } },
  { name: { en: "Trimbakeshwar Puja Booking", hi: "त्र्यंबकेश्वर पूजा बुकिंग" } },
  { name: { en: "Kaal Sarp Puja Muhurat", hi: "कालसर्प पूजा मुहूर्त" } },
  { name: { en: "Online Puja Guidance", hi: "ऑनलाइन पूजा मार्गदर्शन" } },
  { name: { en: "Vedic Rituals Sthal", hi: "वैदिक अनुष्ठान स्थल" } }
];

interface BlogSectionProps {
  lang: Language;
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogSection({ lang, onSelectPost }: BlogSectionProps) {
  return (
    <section className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
            {lang === 'en' ? 'Vedic Wisdom' : 'वैदिक ज्ञान गंगा'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4 tracking-tight">
            {lang === 'en' ? 'Spiritual Guides & Authentic Wisdom' : 'पूजा मार्गदर्शिका एवं पौराणिक इतिहास'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium">
            {lang === 'en'
              ? 'Deepen your understanding of Vedic remedies, sacred history, and mythological origins of the Trimbakeshwar Jyotirlinga through our curated scholarly guides.'
              : 'त्र्यंबकेश्वर ज्योतिर्लिंग के पौराणिक महत्व, कालसर्प शांति विधान और विभिन्न वैदिक उपचारों के वैज्ञानिक-आध्यात्मिक कारणों को हमारे विद्वान लेखों के माध्यम से समझें।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Main Blogs List Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col justify-between bg-white border-t-4 border-[#E88921] border-x border-b border-[#F2E6CE] rounded-sm p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div>
                    {/* Meta details */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#7A1E1E]/60 mb-4 font-sans font-bold uppercase tracking-wider">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#E88921]" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#E88921]" />
                        <span>{post.readTime[lang]}</span>
                      </div>
                      <span className="bg-[#7A1E1E]/5 text-[#E88921] px-2.5 py-1 rounded-sm border border-[#7A1E1E]/10 uppercase text-[10px]">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-bold text-[#7A1E1E] group-hover:text-[#E88921] transition-colors duration-200 mb-3 leading-snug">
                      {post.title[lang]}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/85 mb-6 leading-relaxed font-semibold">
                      {post.excerpt[lang]}
                    </p>
                  </div>

                  {/* Card Footer displaying Author & Action */}
                  <div className="border-t border-[#F2E6CE]/40 pt-4 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-sm bg-[#E88921]/10 flex items-center justify-center text-[#E88921] border border-[#E88921]/20">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-sans font-bold text-[#7A1E1E]/95">
                        {post.author[lang]}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectPost(post)}
                      className="flex items-center gap-1 text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#7A1E1E] hover:text-[#E88921] transition-all cursor-pointer"
                    >
                      <span>{lang === 'en' ? 'Read Full Guide →' : 'पूर्ण लेख पढ़ें →'}</span>
                    </button>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Recent Posts widget */}
            <div className="bg-white border border-[#F2E6CE] p-6 rounded-sm shadow-sm">
              <h4 className="font-serif text-base font-bold text-[#7A1E1E] mb-5 flex items-center gap-2 border-b border-[#F2E6CE]/60 pb-3">
                <Flame className="w-4 h-4 text-[#E88921]" />
                <span>{lang === 'en' ? 'Recent Posts' : 'नवीनतम लेख'}</span>
              </h4>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => onSelectPost(post)}
                    className="group cursor-pointer flex flex-col gap-1 hover:bg-[#FAF8F2] p-2 -mx-2 rounded-sm transition-colors"
                  >
                    <div className="flex items-center gap-2 text-[10px] text-[#7A1E1E]/50 font-sans font-bold uppercase tracking-wider">
                      <Calendar className="w-3 h-3 text-[#E88921]" />
                      <span>{post.date}</span>
                    </div>
                    <h5 className="font-serif text-sm font-bold text-[#7A1E1E] group-hover:text-[#E88921] transition-colors leading-snug line-clamp-2">
                      {post.title[lang]}
                    </h5>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO & Spiritual Tags widget */}
            <div className="bg-white border border-[#F2E6CE] p-6 rounded-sm shadow-sm">
              <h4 className="font-serif text-base font-bold text-[#7A1E1E] mb-5 flex items-center gap-2 border-b border-[#F2E6CE]/60 pb-3">
                <Tag className="w-4 h-4 text-[#E88921]" />
                <span>{lang === 'en' ? 'Vedic & SEO Keywords' : 'वैदिक एवं खोज सूचक शब्द (Tags)'}</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {seoTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-[#FFFDF7] border border-[#F2E6CE] text-[#7A1E1E]/90 hover:bg-[#E88921]/10 hover:border-[#E88921]/40 transition-colors duration-200 px-3 py-1.5 rounded-full font-sans text-xs font-semibold cursor-default"
                  >
                    #{tag.name[lang]}
                  </span>
                ))}
              </div>
              <p className="font-sans text-[10px] text-[#7A1E1E]/40 font-bold mt-4 uppercase tracking-wider text-center">
                {lang === 'en' ? '* Optimised for Vedic search visibility' : '* वैदिक खोज अनुकूलता हेतु अनुकूलित'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
