/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark, Compass, Award, ShieldCheck, Heart, Clock, Navigation, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import TempleDivider from './TempleDivider';

interface TrimbakeshwarSectionProps {
  lang: Language;
}

export default function TrimbakeshwarSection({ lang }: TrimbakeshwarSectionProps) {
  const historyTimeline = [
    {
      year: { en: 'Ancient Origin', hi: 'प्राचीन इतिहास' },
      title: { en: 'The Descent of Godavari', hi: 'मां गोदावरी का अवतरण' },
      desc: {
        en: 'To absolve the land from a divine misunderstanding, Sage Gautama performed rigorous penance to please Lord Shiva. In response, Lord Shiva brought the holy Ganga down to the Brahmagiri Hills, where she emerged as River Godavari (Gautami Ganga).',
        hi: 'गौ हत्या के कलंक से मुक्ति के लिए महर्षि गौतम ने ब्रह्मगिरि पर्वत पर कठोर तपस्या कर महादेव को प्रसन्न किया। भगवान शिव की कृपा से मां गंगा पृथ्वी पर गोदावरी नदी के रूप में अवतरित हुईं।'
      }
    },
    {
      year: { en: 'Pauranik Era', hi: 'पौराणिक काल' },
      title: { en: 'Sinking of Kushavarta Kund', hi: 'कुशावर्त कुंड का निर्माण' },
      desc: {
        en: 'Sage Gautama bound the fast-flowing Godavari river using Kusha grass (holy reeds) to create a sacred pond, known today as Kushavarta Kund. This is recognized as the ultimate place for spiritual purification and ancestral tarpan.',
        hi: 'महर्षि गौतम ने तीव्र वेग से बहती गोदावरी को कुश घास की बाड़ लगाकर एक स्थान पर रोक दिया, जिसे आज कुशावर्त कुंड कहा जाता है। यह समस्त पापों की शुद्धि और पूर्वज तर्पण का सर्वोच्च स्थल माना जाता है।'
      }
    },
    {
      year: { en: '18th Century', hi: '18वीं शताब्दी (मराठा काल)' },
      title: { en: 'Peshwa Royal Reconstruction', hi: 'पेशवा द्वारा भव्य मंदिर का निर्माण' },
      desc: {
        en: 'The grand black-stone temple structure standing today was commissioned and rebuilt by Peshwa Balaji Baji Rao (Nanasaheb) between 1755 and 1786. It represents classic Hemadpanthi temple architecture with intricate stone carvings.',
        hi: 'वर्तमान काले पत्थरों से निर्मित भव्य मंदिर का निर्माण पेशवा बालाजी बाजीराव (नानासाहेब) ने 1755-1786 के दौरान कराया था। यह वास्तुकला की हेमाडपंथी शैली का उत्कृष्ट उदाहरण है।'
      }
    }
  ];

  const holySpots = [
    {
      name: { en: 'Kushavarta Kund', hi: 'कुशावर्त कुंड' },
      desc: {
        en: 'The holy pond from which River Godavari flows. It is a highly sacred historical pond visited by millions of devotees.',
        hi: 'वह पवित्र सरोवर जहाँ से गोदावरी नदी का उद्गम होता है। यह एक अत्यंत पावन ऐतिहासिक सरोवर है जहाँ लाखों श्रद्धालु दर्शन करने आते हैं।'
      }
    },
    {
      name: { en: 'Brahmagiri Hills', hi: 'ब्रह्मगिरि पर्वत' },
      desc: {
        en: 'The magnificent mountain overlooking the temple, considered the physical form of Lord Shiva himself.',
        hi: 'मुख्य मंदिर के पीछे स्थित विशाल पर्वत, जिसे साक्षात भगवान शिव का ही विग्रह माना जाता है।'
      }
    },
    {
      name: { en: 'Gangadwar & Varaha Tirtha', hi: 'गंगाद्वार और वराह तीर्थ' },
      desc: {
        en: 'Located halfway up Brahmagiri hill, where the Godavari river flows through a carved stone cow mouth (Gomukh).',
        hi: 'ब्रह्मगिरि पर्वत पर स्थित पावन स्थल, जहाँ गोदावरी नदी एक सुंदर प्रस्तर गोमुख से अवतरित होती है।'
      }
    }
  ];

  return (
    <div className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
            {lang === 'en' ? 'Sacred Land of Trimbak' : 'त्र्यंबकेश्वर धाम परिचय'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4 tracking-tight">
            {lang === 'en' ? 'History & Significance of Trimbakeshwar' : 'त्र्यंबकेश्वर ज्योतिर्लिंग का इतिहास और महत्व'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium leading-relaxed">
            {lang === 'en'
              ? 'Nestled at the foothills of Brahmagiri mountain, Trimbakeshwar is home to one of the twelve divine Jyotirlingas, carrying unmatched spiritual weight for Vedic remedies.'
              : 'ब्रह्मगिरि पर्वत के नीचे बसा त्र्यंबकेश्वर द्वादश ज्योतिर्लिंगों में से एक है। इसकी अलौकिक आध्यात्मिक ऊर्जा सभी प्रकार के वैदिक अनुष्ठानों को सिद्धि प्रदान करती है।'}
          </p>
          <TempleDivider />
        </div>

        {/* The Unique Jyotirlinga Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Column: Traditional Visual Panel */}
          <div className="relative h-[380px] sm:h-[450px] rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-lg bg-gradient-to-br from-[#7A1E1E] to-[#400F0F] p-8 sm:p-12 flex flex-col justify-between bg-cover bg-center">
            {/* Real Background Dummy Image (easily replaceable by user) */}
            <img 
              src="/images/bramahagiri.webp" 
              alt="Sacred Brahmagiri Hills Trimbakeshwar" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            
            <div className="absolute inset-0 bg-[radial-gradient(#E88921_1px,transparent_1px)] bg-[size:24px_24px] mix-blend-overlay opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-sm bg-[#FFFDF7]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
              <Landmark className="w-6 h-6 animate-pulse" />
            </div>

            <div className="relative z-10">
              <span className="font-sans text-[10px] text-[#D4AF37] font-bold tracking-widest uppercase block mb-1">
                {lang === 'en' ? 'The Unique Trinity Linga' : 'त्रिदेवों का साक्षात वास'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-tight">
                {lang === 'en' ? 'Brahma, Vishnu & Mahesh Unified' : 'एक ही लिंग में ब्रह्मा, विष्णु और महेश'}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#FAF8F2]/90 mt-3 leading-relaxed text-justify">
                {lang === 'en'
                  ? 'Unlike other Jyotirlingas, the sacred linga here is not a singular pillar. Instead, it is a hollow cavity featuring three distinct small pillars or thumbs, representing the divine Trinity—Lord Brahma (Creator), Lord Vishnu (Protector), and Lord Shiva (Dissolver), covered by a traditional gold-crown.'
                  : 'त्र्यंबकेश्वर ज्योतिर्लिंग की विशेषता यह है कि यहाँ शिवलिंग एक सामान्य स्तंभ के रूप में नहीं है, बल्कि एक अर्ध-गोलाकार कुंड के रूप में है जिसके अंदर तीन छोटे अंगूठे जैसे शिवलिंग हैं। ये तीन लिंग त्रिदेवों—ब्रह्मा, विष्णु और महेश के प्रतीक हैं। इनके ऊपर एक दिव्य स्वर्ण मुकुट सुशोभित रहता है।'}
              </p>
            </div>
          </div>

          {/* Right Column: Narrative History */}
          <div className="flex flex-col justify-center">
            <span className="font-sans text-xs font-bold text-[#E88921] uppercase tracking-wider mb-2">
              {lang === 'en' ? 'The Legend of River Godavari' : 'गंगा-गोदावरी का पावन अवतरण'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mb-6">
              {lang === 'en' ? 'The Source of Dakshin Ganga' : 'दक्षिण की पावन गंगा गोदावरी का उद्गम'}
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#1a1a1a]/85 mb-6 leading-relaxed text-justify font-medium">
              {lang === 'en'
                ? 'Known as the "Dakshin Ganga" (Ganges of the South), the Godavari river begins its path right above Trimbakeshwar at Brahmagiri. Sage Gautama used a sacred ring of Kusha grass to pond the waters and create Kushavarta Kund. This pond retains divine purification parameters. It is said that taking a holy bath in Kushavarta clears all current-life and ancestral karmic debts, making it a sacred site of deep spiritual relevance in Trimbakeshwar.'
                : 'गोदावरी नदी को दक्षिण की गंगा कहा जाता है। इसका उद्गम त्र्यंबकेश्वर के ठीक ऊपर ब्रह्मगिरि पहाड़ियों पर होता है। महर्षि गौतम ने गंगाजी को रोकने के लिए कुशा (पवित्र घास) का उपयोग किया, जिससे कुशावर्त कुंड की रचना हुई। शास्त्रों में माना गया है कि इस जल में स्नान करने से सात जन्मों के संचित पापों का शमन हो जाता है, जिससे यह त्र्यंबकेश्वर में गहरी आध्यात्मिक आस्था का केंद्र बनता है।'}
            </p>

            <div className="border-t border-[#F2E6CE] pt-6 mt-2">
              <h4 className="font-serif text-base font-bold text-[#7A1E1E] mb-4">
                {lang === 'en' ? 'Sacred Geography of the Region' : 'क्षेत्र की पवित्र भौगोलिक संरचना'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {holySpots.map((spot, i) => (
                  <div key={i} className="bg-white border border-[#F2E6CE] p-4 rounded-sm shadow-sm">
                    <h5 className="font-serif text-xs font-bold text-[#7A1E1E] mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#E88921]" />
                      <span>{spot.name[lang]}</span>
                    </h5>
                    <p className="font-sans text-[10px] sm:text-xs text-[#1a1a1a]/80 leading-relaxed font-semibold">
                      {spot.desc[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* History Timeline */}
        <div className="border-t border-[#F2E6CE] pt-20">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
              {lang === 'en' ? 'Our Sacred Legacy' : 'पवित्र ऐतिहासिक विरासत'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-1">
              {lang === 'en' ? 'Chronicles of Devotion & Time' : 'श्रद्धा और समय की पावन यात्रा'}
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E88921]/15 via-[#D4AF37]/50 to-[#7A1E1E]/15 transform md:translate-x-[-50%]" />

            {historyTimeline.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Pin Node */}
                  <div className="absolute left-[9px] md:left-1/2 w-4 h-4 bg-[#FFFDF7] border-2 border-[#E88921] rounded-full transform md:translate-x-[-50%] z-10" />

                  {/* Spacer block */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Timeline Text Card */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <div className="bg-white border border-[#F2E6CE] p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200">
                      <span className="inline-block bg-[#E88921]/10 text-[#E88921] font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-3">
                        {event.year[lang]}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#7A1E1E] mb-2">{event.title[lang]}</h4>
                      <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed font-semibold">{event.desc[lang]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
