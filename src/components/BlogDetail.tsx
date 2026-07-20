/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2, Check, BookOpen, Tag } from 'lucide-react';
import { BlogPost, Language } from '../types';
import { blogPosts, businessConfig } from '../data';
import TempleDivider from './TempleDivider';

const seoTags = [
  { name: { en: "Kalsarpa Shanti Trimbakeshwar", hi: "कालसर्प शांति त्र्यंबकेश्वर" } },
  { name: { en: "Narayan Nagbali Puja", hi: "नारायण नागबलि पूजा" } },
  { name: { en: "Tripindi Shraddha Vidhi", hi: "त्रिपिंडी श्राद्ध विधि" } },
  { name: { en: "Best Pandit in Trimbakeshwar", hi: "त्र्यंबकेश्वर के सर्वश्रेष्ठ पंडित" } },
  { name: { en: "Kaalsarp Dosh Nivaran", hi: "कालसर्प दोष निवारण" } },
  { name: { en: "Jyotirlinga Temple Nashik", hi: "ज्योतिर्लिंग मंदिर नासिक" } },
  { name: { en: "Rahu Ketu Shanti", hi: "राहु केतु शांति" } },
  { name: { en: "Pitri Dosha Puja", hi: "पितृ दोष पूजा" } }
];

interface BlogDetailProps {
  post: BlogPost;
  lang: Language;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogDetail({ post, lang, onBack, onSelectPost }: BlogDetailProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPosts = blogPosts.filter(p => p.id !== post.id);

  // Parse lines to create safe HTML mock headers
  const renderParagraphs = (text: string) => {
    return text.split('\n\n').map((para, idx) => {
      if (para.startsWith('###')) {
        return (
          <h3 key={idx} className="font-serif text-xl font-bold text-[#7A1E1E] mt-8 mb-4">
            {para.replace('###', '').trim()}
          </h3>
        );
      }
      if (para.startsWith('*')) {
        return (
          <ul key={idx} className="list-disc pl-5 my-4 space-y-2">
            {para.split('\n').map((li, liIdx) => (
              <li key={liIdx} className="font-sans text-sm sm:text-base text-[#7A1E1E]/80 leading-relaxed font-medium">
                {li.replace('*', '').trim()}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={idx} className="font-sans text-sm sm:text-base text-[#7A1E1E]/80 leading-relaxed mb-6 font-medium">
          {para}
        </p>
      );
    });
  };

  return (
    <article className="bg-[#FFFDF7] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs and back navigation */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A1E1E] hover:text-[#E88921] group transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>{lang === 'en' ? 'Back to Vedic Blog' : 'ब्लॉग पर वापस जाएँ'}</span>
          </button>

          <div className="text-xs text-[#7A1E1E]/50 font-sans font-bold flex items-center gap-1.5">
            <span>Blog</span>
            <span>/</span>
            <span className="text-[#E88921] max-w-[150px] truncate">{post.title[lang]}</span>
          </div>
        </div>

        {/* Hero Title Container */}
        <div className="mb-8 border-b border-[#F2E6CE]/40 pb-6">
          <span className="bg-[#7A1E1E]/5 text-[#E88921] text-[10px] font-sans font-bold px-3 py-1.5 rounded-sm border border-[#7A1E1E]/10 uppercase tracking-wider block w-fit mb-4">
            {post.category}
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#7A1E1E] leading-tight mb-4 tracking-tight">
            {post.title[lang]}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#7A1E1E]/60 font-sans font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-sm bg-[#E88921]/10 flex items-center justify-center text-[#E88921]">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#7A1E1E]/80">{post.author[lang]}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E88921]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#E88921]" />
                <span>{post.readTime[lang]}</span>
              </div>
            </div>

            {/* Share action */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#7A1E1E] hover:text-[#E88921] bg-white hover:bg-[#F2E6CE]/20 border border-[#F2E6CE] py-1.5 px-3.5 rounded-sm transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'en' ? 'Link Copied!' : 'लिंक कॉपी हुआ!') : (lang === 'en' ? 'Share' : 'शेयर करें')}</span>
            </button>
          </div>
        </div>

        {/* Layout: Sidebar and main text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          
          {/* Left: Table of Contents & Tags (Sticky on Desktop) */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              
              {/* Table of contents */}
              <div className="bg-white border border-[#F2E6CE] p-5 rounded-sm shadow-sm">
                <h4 className="font-serif text-xs font-bold text-[#7A1E1E] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#E88921]" />
                  <span>{lang === 'en' ? 'Key Sections' : 'मुख्य अनुभाग'}</span>
                </h4>
                <ul className="space-y-2 text-xs font-sans font-semibold text-[#7A1E1E]/70">
                  <li className="hover:text-[#E88921] transition-colors">
                    <a href="#introduction">{lang === 'en' ? '1. Introduction' : '1. परिचय'}</a>
                  </li>
                  <li className="hover:text-[#E88921] transition-colors">
                    <a href="#main-body">{lang === 'en' ? '2. Core Teachings' : '2. मूल ज्ञान'}</a>
                  </li>
                  <li className="hover:text-[#E88921] transition-colors">
                    <a href="#summary">{lang === 'en' ? '3. Spiritual Outcome' : '3. आध्यात्मिक फल'}</a>
                  </li>
                </ul>
              </div>

              {/* Related SEO tags */}
              <div className="bg-white border border-[#F2E6CE] p-5 rounded-sm shadow-sm">
                <h4 className="font-serif text-xs font-bold text-[#7A1E1E] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#E88921]" />
                  <span>{lang === 'en' ? 'Vedic Keywords' : 'वैदिक सूचक शब्द'}</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {seoTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-[#FFFDF7] border border-[#F2E6CE] text-[#7A1E1E]/80 px-2 py-1 rounded-sm font-sans text-[10px] font-bold"
                    >
                      #{tag.name[lang]}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right: Main Reading Frame */}
          <div className="lg:col-span-9 prose prose-stone max-w-none">
            {/* Elegant Placeholder for Hero Header Graphic */}
            <div className="relative w-full h-[220px] sm:h-[280px] rounded-sm overflow-hidden border border-[#D4AF37]/20 shadow-md mb-8 bg-gradient-to-br from-[#7A1E1E]/20 to-[#E88921]/10 flex flex-col justify-between p-6">
              <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20 bg-[radial-gradient(#7A1E1E_1px,transparent_1px)] bg-[size:16px_16px]" />
              <span className="font-serif text-sm text-[#E88921] font-bold uppercase tracking-widest">
                {lang === 'en' ? 'VEDIC INSIGHTS' : 'वैदिक चिंतन'}
              </span>
              <div className="text-center my-auto">
                <span className="text-5xl block select-none">🏵️</span>
                <span className="text-xs text-[#7A1E1E]/50 uppercase tracking-wider font-sans font-bold mt-1 block">
                  {post.category}
                </span>
              </div>
              <div className="text-right text-[10px] text-[#7A1E1E]/50 font-sans font-bold uppercase tracking-wide">
                * {lang === 'en' ? 'Official Sanctuary Library' : 'आधिकारिक पुस्तकालय संग्रह'}
              </div>
            </div>

            {/* Content Display */}
            <div className="text-justify font-sans font-medium text-[#1a1a1a]/85 leading-relaxed text-sm sm:text-base">
              {renderParagraphs(post.content[lang])}
            </div>

            {/* Inner signature divider */}
            <TempleDivider />

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-[#F2E6CE]/40">
                <h4 className="font-serif text-lg font-bold text-[#7A1E1E] mb-6">
                  {lang === 'en' ? 'Related Reading Guides' : 'यह भी पढ़ें'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPosts.map((rPost) => (
                    <div
                      key={rPost.id}
                      onClick={() => onSelectPost(rPost)}
                      className="cursor-pointer bg-white border border-[#F2E6CE] p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <h5 className="font-serif text-sm font-bold text-[#7A1E1E] hover:text-[#E88921] transition-colors line-clamp-2">
                        {rPost.title[lang]}
                      </h5>
                      <div className="flex items-center justify-between text-[10px] text-[#7A1E1E]/50 font-sans font-bold uppercase tracking-wider mt-4">
                        <span>{rPost.date}</span>
                        <span className="text-[#E88921]">{lang === 'en' ? 'Read Guide' : 'लेख पढ़ें'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </article>
  );
}
