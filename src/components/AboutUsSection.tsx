/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Calendar, Users, Star, Award, Compass, Heart, MapPin, Plane, Train, Car, Clock } from 'lucide-react';
import { Language } from '../types';
import { businessConfig } from '../data';
import TempleDivider from './TempleDivider';

interface AboutUsSectionProps {
  lang: Language;
}

export default function AboutUsSection({ lang }: AboutUsSectionProps) {
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-[#E88921]" />,
      value: '35+',
      label: { en: 'Years of Vedic Service', hi: 'वर्षों का वैदिक अनुभव' }
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#E88921]" />,
      value: '15,000+',
      label: { en: 'Pujas Performed', hi: 'संपन्न पावन पूजाएं' }
    },
    {
      icon: <Users className="w-6 h-6 text-[#E88921]" />,
      value: '12,000+',
      label: { en: 'Families Served', hi: 'संतुष्ट श्रद्धालु परिवार' }
    },
    {
      icon: <Star className="w-6 h-6 text-[#E88921]" />,
      value: '100%',
      label: { en: 'Scriptural Authenticity', hi: 'शास्त्र सम्मत विधि' }
    }
  ];

  const profile = {
    role: { en: 'Head Vedic Priest (Acharya)', hi: 'मुख्य पुरोहित (आचार्य)' },
    name: { en: 'Pandit Bineet Shastriji', hi: 'पंडित बिनीत शास्त्रीजी' },
    avatar: '/images/image.png',
    bio: {
      en: 'Pandit Bineet Shastriji is a highly respected generational Vedic scholar who completed his traditional Shastras training in Varanasi (Kashi) and Nashik. Belonging to an ancient family of traditional priests in the holy town of Trimbakeshwar, he possesses decades of generational ancestral expertise. Shastriji specializes in conducting highly effective Vedic remedial rituals like Kalsarpa Shanti, Narayan Nagbali, Tripindi Shraddha, Mahamrityunjaya Japa, and Navagraha Shanti, ensuring absolute scriptural purity and perfect Sanskrit mantra pronunciations.',
      hi: 'पंडित बिनीत शास्त्रीजी काशी (वाराणसी) और नासिक के गुरुकुलों से दीक्षित एवं प्रशिक्षित एक अत्यंत सम्मानित पीढ़ीगत वैदिक पुरोहित हैं। त्र्यंबकेश्वर के पारंपरिक पुरोहितों के प्राचीन वंश से जुड़े होने के कारण उन्हें पीढ़ियों से चली आ रही प्रामाणिक पूजा पद्धतियों का गहन ज्ञान प्राप्त है। शास्त्रीजी कालसर्प शांति, नारायण नागबलि, त्रिपिंडी श्राद्ध, महामृत्युंजय जाप और नवग्रह शांति जैसे सभी दोष निवारक वैदिक अनुष्ठानों को पूर्ण शास्त्रीय मर्यादा, शुचिता और शुद्ध संस्कृत मंत्रोच्चार के साथ संपन्न कराने में सिद्धहस्त हैं।'
    },
    lineage: {
      en: 'Authorized Generational Lineage at Trimbakeshwar',
      hi: 'त्र्यंबकेश्वर में अधिकृत पीढ़ीगत पुरोहित परिवार'
    }
  };

  return (
    <div className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
            {lang === 'en' ? 'Vedic Priest Profile' : 'विद्वान पुरोहित परिचय'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4 tracking-tight">
            {lang === 'en' ? 'Dedicated to Pure Vedic Ritual Integrity' : 'वैदिक मर्यादा और शुचिता के प्रति समर्पित'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium">
            {lang === 'en'
              ? 'Pandit Bineet Shastriji is an authorized generational Vedic priest in Trimbakeshwar, helping devotees resolve karmic debts with pure mantra accuracy.'
              : 'पंडित बिनीत शास्त्रीजी त्र्यंबकेश्वर में अधिकृत और दीक्षित पीढ़ीगत पुरोहित हैं, जो शुद्ध वैदिक परंपरा के साथ श्रद्धालुओं की समस्याओं और ग्रह दोषों का निवारण करते हैं।'}
          </p>
          <TempleDivider />
        </div>

        {/* 1. Intro Narrative with Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#7A1E1E]">
              {lang === 'en' ? 'Authentic Ancestral & Planetary Remedies' : 'प्रामाणिक पैतृक और गृहदोष निवारण'}
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#1a1a1a]/85 leading-relaxed text-justify font-medium">
              {lang === 'en'
                ? 'Pandit Bineet Shastriji believes that sacred rituals like Kalsarpa Shanti, Narayan Nagbali, and Tripindi Shraddha are not commercial events, but deep, sacred spiritual operations. Every ritual performed at his dedicated private Puja Sthal is carried out using authentic herbal offerings and exact syllable-by-syllable Sanskrit chanting. Over the last three decades, Shastriji has guided thousands of global families safely through these complex, life-changing procedures.'
                : 'पंडित बिनीत शास्त्रीजी का मानना है कि कालसर्प शांति, नारायण नागबलि और त्रिपिंडी श्राद्ध जैसे अनुष्ठान केवल धार्मिक कृत्य नहीं हैं, बल्कि ये आत्मा की शुद्धि के गहन आध्यात्मिक विधान हैं। उनके समर्पित निजी पूजा स्थल पर की जाने वाली प्रत्येक पूजा में प्रामाणिक जड़ी-बूटियों और शुद्ध संस्कृत मंत्रोच्चार का प्रयोग किया जाता है। पिछले तीन दशकों में, शास्त्रीजी ने देश-विदेश के हजारों परिवारों को इन जटिल विधानों से सफलतापूर्वक मुक्ति दिलाई है।'}
            </p>
            <p className="font-sans text-sm sm:text-base text-[#1a1a1a]/85 leading-relaxed text-justify font-medium">
              {lang === 'en'
                ? 'To maintain absolute peace and spiritual focus, Panditji hosts all rituals in his clean, custom-built halls away from the crowded general temple queues. Devotees take resolutions (Sankalp) individually with full concentration.'
                : 'भीड़भाड़ से दूर, पूर्ण शांति और एकाग्रता के साथ पूजा संपन्न कराने के लिए, पंडितजी मुख्य मंदिर के निकट अपने स्वच्छ और सुव्यवस्थित निजी अनुष्ठान भवनों में पूजा आयोजित करते हैं। श्रद्धालु शांत मन से बैठकर पंडितजी के सान्निध्य में संकल्प लेते हैं।'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-white border-2 border-[#F2E6CE] p-6 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-[#7A1E1E]/5 rounded-sm border border-[#7A1E1E]/10">
                    {s.icon}
                  </div>
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#7A1E1E] tracking-tight">{s.value}</div>
                <div className="font-sans text-[10px] sm:text-xs text-[#1a1a1a]/70 font-bold uppercase tracking-wider mt-1">{s.label[lang]}</div>
              </div>
            ))}
          </div>

        </div>

        {/* 2. Panditji Profile Section */}
        <div className="border-t border-[#F2E6CE] py-16">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E]">
              {lang === 'en' ? 'Meet Pandit Bineet Shastriji' : 'पंडित बिनीत शास्त्रीजी का परिचय'}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#7A1E1E]/70 font-semibold uppercase tracking-wider mt-1">
              {lang === 'en' ? 'Trained in Ancient Gurukuls with Generational Authority' : 'प्राचीन गुरुकुलों से दीक्षित एवं अधिकृत पीढ़ीगत पुरोहित'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-[#D4AF37]/30 p-8 rounded-sm shadow-md relative flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E88921]" />
            
            {/* Priest Avatar Image Slot */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#D4AF37]/40 shrink-0 shadow-lg">
              <img
                src={profile.avatar}
                alt={profile.name[lang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <span className="font-sans text-xs text-[#E88921] font-bold uppercase tracking-wider block mb-1 text-center md:text-left">
                {profile.role[lang]}
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#7A1E1E] mb-3 text-center md:text-left">
                {profile.name[lang]}
              </h4>
              <p className="font-sans text-xs text-[#E88921] font-bold uppercase tracking-wide mb-4 text-center md:text-left">
                {profile.lineage[lang]}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed text-justify font-semibold mb-4">
                {profile.bio[lang]}
              </p>
              <div className="bg-[#FAF8F2] border border-[#F2E6CE]/40 p-4 rounded-sm">
                <span className="font-serif text-xs font-bold text-[#7A1E1E] block mb-1">
                  {lang === 'en' ? 'Generational Expertise' : 'पीढ़ीगत विशेषज्ञता'}
                </span>
                <p className="font-sans text-xs text-[#E88921] font-bold">
                  {lang === 'en' 
                    ? 'Expert in Kalsarpa Dosha Nivaran, Narayan Nagbali, Tripindi Shraddha, Mahamrityunjaya Mantra, and all sacred Vedic Remedies.'
                    : 'कालसर्प दोष निवारण, नारायण नागबलि, त्रिपिंडी श्राद्ध, महामृत्युंजय जाप और सभी प्रकार के वैदिक दोष निवारण अनुष्ठानों में विशेष निपुणता।'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Location, Address & How to Reach Travel Logistics */}
        <div className="border-t border-[#F2E6CE] pt-16">
          
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E]">
              {lang === 'en' ? 'Our Location & Travel Guide' : 'पूजा स्थल मार्गदर्शिका एवं यात्रा जानकारी'}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#7A1E1E]/70 font-semibold uppercase tracking-wider mt-1">
              {lang === 'en' ? 'How to Reach our Sthal in Trimbakeshwar' : 'त्र्यंबकेश्वर अनुष्ठान स्थल कैसे पहुंचें'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Contact Info Address card */}
            <div className="lg:col-span-5 bg-white border border-[#F2E6CE] p-6 sm:p-8 rounded-sm shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#7A1E1E] mb-6 border-b border-[#F2E6CE] pb-3">
                  {lang === 'en' ? 'Physical Sthal Details' : 'पूजा कार्यालय विवरण'}
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E88921] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-serif text-xs font-bold text-[#7A1E1E] block mb-1">{lang === 'en' ? 'Ritual Venue Address' : 'अनुष्ठान स्थल का पता'}</span>
                      <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/85 leading-relaxed font-semibold">
                        {businessConfig.address[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#E88921] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-serif text-xs font-bold text-[#7A1E1E] block mb-1">{lang === 'en' ? 'Ritual Timings' : 'अनुष्ठान संपन्न होने का समय'}</span>
                      <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/85 leading-relaxed font-semibold">
                        {businessConfig.workingHours[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF8F2] border border-[#F2E6CE] p-4 rounded-sm mt-8">
                <span className="text-xl mb-1.5 block">📍</span>
                <h5 className="font-serif text-xs font-bold text-[#7A1E1E] mb-1">{lang === 'en' ? 'Proximity Landmark' : 'मुख्य निकटतम स्थल'}</h5>
                <p className="font-sans text-[11px] text-[#7A1E1E]/80 leading-relaxed font-semibold">
                  {lang === 'en'
                    ? 'Our Sthal is located near the Swami Samarth Kendra in Trimbakeshwar. Devotees can easily reach our quiet and spiritual ritual venue.'
                    : 'हमारा पूजा स्थल त्र्यंबकेश्वर में स्वामी समर्थ केंद्र के समीप स्थित है। भक्त आसानी से हमारे शांत और आध्यात्मिक अनुष्ठान भवन में आ सकते हैं।'}
                </p>
              </div>
            </div>

            {/* Right: Travel Logistics Mode of Commute */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="bg-white border border-[#F2E6CE] p-5 rounded-sm shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#E88921]/10 rounded-sm text-[#E88921] shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#7A1E1E] mb-1">
                    {lang === 'en' ? 'By Air Commute' : 'हवाई मार्ग द्वारा'}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed font-semibold">
                    {businessConfig.howToReach.byAir[lang]}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#F2E6CE] p-5 rounded-sm shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#E88921]/10 rounded-sm text-[#E88921] shrink-0">
                  <Train className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#7A1E1E] mb-1">
                    {lang === 'en' ? 'By Railway Commute' : 'रेल मार्ग द्वारा'}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed font-semibold">
                    {businessConfig.howToReach.byTrain[lang]}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#F2E6CE] p-5 rounded-sm shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[#E88921]/10 rounded-sm text-[#E88921] shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#7A1E1E] mb-1">
                    {lang === 'en' ? 'By Road/Cab Commute' : 'सड़क मार्ग द्वारा'}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed font-semibold">
                    {businessConfig.howToReach.byRoad[lang]}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
