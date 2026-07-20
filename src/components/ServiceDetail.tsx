/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, PhoneCall, Calendar, Clock, BookOpen, Flame, CheckCircle, HelpCircle, MessageSquare, Search, Sparkles } from 'lucide-react';
import { Service, Language } from '../types';
import { businessConfig } from '../data';
import TempleDivider from './TempleDivider';

const kalsarpaTypes = [
  {
    num: "01",
    name: { en: "Anant Kalsarpa Dosh", hi: "अनंत कालसर्प दोष" },
    alignment: { en: "Rahu in 1st House, Ketu in 7th House", hi: "राहु प्रथम भाव में, केतु सप्तम भाव में" },
    impact: {
      en: "Causes struggles with physical health, self-identity, mental tension, and constant hurdles in marital life or partnership.",
      hi: "मानसिक अशांति, स्वास्थ्य समस्याएं, आत्म-पहचान में संघर्ष और वैवाहिक जीवन या साझेदारी में लगातार रुकावटें पैदा करता है।"
    }
  },
  {
    num: "02",
    name: { en: "Kulika Kalsarpa Dosh", hi: "कुलिक कालसर्प दोष" },
    alignment: { en: "Rahu in 2nd House, Ketu in 8th House", hi: "राहु द्वितीय भाव में, केतु अष्टम भाव में" },
    impact: {
      en: "Brings friction in family relationships, delays in accumulating savings, harsh speech, and potential health complications.",
      hi: "पारिवारिक संबंधों में तनाव, बचत संचय में देरी, कठोर वाणी और स्वास्थ्य संबंधी जटिलताओं का कारण बनता है।"
    }
  },
  {
    num: "03",
    name: { en: "Vasuki Kalsarpa Dosh", hi: "वासुकि कालसर्प दोष" },
    alignment: { en: "Rahu in 3rd House, Ketu in 9th House", hi: "राहु तृतीय भाव में, केतु नवम भाव में" },
    impact: {
      en: "Results in misunderstandings with siblings, sudden career setbacks, lack of fortune support, and high efforts with lower rewards.",
      hi: "भाई-बहनों से अनबन, करियर में अप्रत्याशित रुकावटें, भाग्य का साथ न मिलना और अत्यधिक प्रयासों के बाद भी कम फल मिलना।"
    }
  },
  {
    num: "04",
    name: { en: "Shankhapal Kalsarpa Dosh", hi: "शंखपाल कालसर्प दोष" },
    alignment: { en: "Rahu in 4th House, Ketu in 10th House", hi: "राहु चतुर्थ भाव में, केतु दशम भाव में" },
    impact: {
      en: "Disturbs domestic peace, creates challenges in purchasing property, affects mother's well-being, and causes professional instability.",
      hi: "पारिवारिक शांति में व्यवधान, संपत्ति क्रय में बाधाएं, माता के स्वास्थ्य में गिरावट और व्यावसायिक अस्थिरता का कारण बनता है।"
    }
  },
  {
    num: "05",
    name: { en: "Padma Kalsarpa Dosh", hi: "पद्म कालसर्प दोष" },
    alignment: { en: "Rahu in 5th House, Ketu in 11th House", hi: "राहु पंचम भाव में, केतु एकादश भाव में" },
    impact: {
      en: "Creates interruptions in academic pursuits, delays or complications in progeny, and setbacks in emotional relationships.",
      hi: "शैक्षणिक क्षेत्र में रुकावटें, संतान सुख में देरी या बाधाएं और भावनात्मक संबंधों में उतार-चढ़ाव लाता है।"
    }
  },
  {
    num: "06",
    name: { en: "Mahapadma Kalsarpa Dosh", hi: "महापद्म कालसर्प दोष" },
    alignment: { en: "Rahu in 6th House, Ketu in 12th House", hi: "राहु षष्ठ भाव में, केतु द्वादश भाव में" },
    impact: {
      en: "Leads to a rise in hidden enemies, persistent health issues, debts, legal disputes, and delays in foreign achievements.",
      hi: "गुप्त शत्रुओं में वृद्धि, लगातार बनी रहने वाली स्वास्थ्य समस्याएं, पुराना कर्ज, कानूनी विवाद और विदेश यात्राओं में देरी।"
    }
  },
  {
    num: "07",
    name: { en: "Takshak Kalsarpa Dosh", hi: "तक्षक कालसर्प दोष" },
    alignment: { en: "Rahu in 7th House, Ketu in 1st House", hi: "राहु सप्तम भाव में, केतु प्रथम भाव में" },
    impact: {
      en: "Causes significant delays or obstacles in marriage, lack of trust in business partnerships, and self-esteem challenges.",
      hi: "विवाह में अत्यधिक विलंब या बाधाएं, व्यावसायिक साझेदारियों में विश्वास की कमी और आत्मसम्मान से जुड़े संघर्ष।"
    }
  },
  {
    num: "08",
    name: { en: "Karkotak Kalsarpa Dosh", hi: "कर्कोटक कालसर्प दोष" },
    alignment: { en: "Rahu in 8th House, Ketu in 2nd House", hi: "राहु अष्टम भाव में, केतु द्वितीय भाव में" },
    impact: {
      en: "Poses a risk of sudden accidents, loss of inherited family wealth, unexpected health scares, and issues in speech.",
      hi: "अचानक होने वाली दुर्घटनाओं का भय, पैतृक संपत्ति विवाद, अकारण स्वास्थ्य समस्याएं और वाणी के कारण विवाद।"
    }
  },
  {
    num: "09",
    name: { en: "Shankhachur Kalsarpa Dosh", hi: "शंखचूड़ कालसर्प दोष" },
    alignment: { en: "Rahu in 9th House, Ketu in 3rd House", hi: "राहु नवम भाव में, केतु तृतीय भाव में" },
    impact: {
      en: "Brings fluctuations in luck, ideological differences with mentors or fathers, and a life filled with relentless struggles.",
      hi: "भाग्य का साथ न मिलना, गुरु या पिता से वैचारिक मतभेद और जीवन में निरंतर बने रहने वाले संघर्षों का सामना।"
    }
  },
  {
    num: "10",
    name: { en: "Ghatak Kalsarpa Dosh", hi: "घातक कालसर्प दोष" },
    alignment: { en: "Rahu in 10th House, Ketu in 4th House", hi: "राहु दशम भाव में, केतु चतुर्थ भाव में" },
    impact: {
      en: "Impairs progress in career or politics, creates friction with senior authority figures, and challenges in maintaining domestic harmony.",
      hi: "करियर या राजनीति में उन्नति में बाधा, उच्च अधिकारियों से मतभेद और पारिवारिक शांति बनाए रखने में कठिनाई।"
    }
  },
  {
    num: "11",
    name: { en: "Vishdhar Kalsarpa Dosh", hi: "विषधर कालसर्प दोष" },
    alignment: { en: "Rahu in 11th House, Ketu in 5th House", hi: "राहु एकादश भाव में, केतु पंचम भाव में" },
    impact: {
      en: "Causes blocks in business profits, speculative investment losses, ear-related ailments, and cold terms with elder siblings.",
      hi: "व्यापारिक लाभ में रुकावटें, निवेश में अप्रत्याशित हानि, स्वास्थ्य (कान संबंधी) कष्ट और बड़े भाई-बहनों से मधुर संबंधों का अभाव।"
    }
  },
  {
    num: "12",
    name: { en: "Sheshnag Kalsarpa Dosh", hi: "शेषनाग कालसर्प दोष" },
    alignment: { en: "Rahu in 12th House, Ketu in 6th House", hi: "राहु द्वादश भाव में, केतु षष्ठ भाव में" },
    impact: {
      en: "Results in heavy financial expenditure, mental worries, sleep disorders, legal worries, and a sense of isolation.",
      hi: "अत्यधिक वित्तीय खर्च, मानसिक अशांति, अनिद्रा की समस्या, अदालती विवाद और जीवन में अकेलेपन की अनुभूति।"
    }
  }
];

interface ServiceDetailProps {
  service: Service;
  lang: Language;
  onBack: () => void;
}

export default function ServiceDetail({ service, lang, onBack }: ServiceDetailProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const prefilledMessage = lang === 'en' 
    ? `Namaste Panditji, I would like to consult about ${service.title.en} Puja services at Trimbakeshwar.`
    : `नमस्ते पंडितजी, मैं त्र्यंबकेश्वर में ${service.title.hi} के बारे में परामर्श करना चाहता हूँ।`;

  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(prefilledMessage)}`;

  const filteredDoshas = kalsarpaTypes.filter(d => 
    d.name[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.alignment[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.impact[lang].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#FFFDF7] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A1E1E] hover:text-[#E88921] mb-8 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>{lang === 'en' ? 'Back to All Pujas' : 'सभी पूजाओं पर वापस जाएँ'}</span>
        </button>

        {/* Hero title block */}
        <div className="bg-gradient-to-br from-[#7A1E1E] to-[#400F0F] rounded-sm p-8 sm:p-12 text-[#FFFDF7] border-2 border-[#D4AF37]/30 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#E88921_1px,transparent_1px)] bg-[size:20px_20px] mix-blend-overlay opacity-10" />
          
          <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="bg-[#E88921] text-[#FFFDF7] text-[10px] font-sans font-bold px-3.5 py-1.5 rounded-sm uppercase tracking-wider mb-4 shadow-sm">
              {lang === 'en' ? 'Sacred Vedic Ritual' : 'पवित्र वैदिक विधान'}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {service.title[lang]}
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#FAF8F2]/90 max-w-2xl leading-relaxed mb-6 font-medium">
              {service.shortDesc[lang]}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mt-4 border-t border-[#FFFDF7]/15 pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#FFFDF7]/10 rounded-sm border border-[#D4AF37]/20 text-[#D4AF37]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-[#FAF8F2]/60 uppercase tracking-widest font-semibold">{lang === 'en' ? 'Duration' : 'अवधि'}</span>
                  <span className="text-sm font-bold">{service.duration[lang]}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#FFFDF7]/10 rounded-sm border border-[#D4AF37]/20 text-[#D4AF37]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-[#FAF8F2]/60 uppercase tracking-widest font-semibold">{lang === 'en' ? 'Ideal Timing' : 'उत्तम मुहूर्त'}</span>
                  <span className="text-sm font-bold">{service.idealTiming[lang]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Info Sections */}
        <div className="space-y-12">
          
          {/* 1. Deep Overview & Legend */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#7A1E1E] mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#E88921]" />
              <span>{lang === 'en' ? 'Ritual Significance' : 'अनुष्ठान का महत्व'}</span>
            </h2>
            <div className="bg-white border border-[#F2E6CE] p-6 rounded-sm shadow-sm space-y-4">
              <p className="font-sans text-sm sm:text-base text-[#1a1a1a]/85 leading-relaxed font-medium">
                {service.longDesc[lang]}
              </p>
              <div className="p-4 bg-[#7A1E1E]/5 rounded-sm border border-[#7A1E1E]/10 border-l-4 border-l-[#E88921]">
                <h4 className="font-serif text-sm font-bold text-[#7A1E1E] mb-1">
                  {lang === 'en' ? 'Spiritual Importance' : 'आध्यात्मिक महत्व'}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#7A1E1E]/90 leading-relaxed italic font-semibold">
                  {service.importance[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* 2. Who Should Perform */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#7A1E1E] mb-4 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#E88921]" />
              <span>{lang === 'en' ? 'Who Should Perform This?' : 'यह पूजा किसे करानी चाहिए?'}</span>
            </h2>
            <div className="bg-white border border-[#F2E6CE] p-6 rounded-sm shadow-sm">
              <p className="font-sans text-sm sm:text-base text-[#1a1a1a]/85 leading-relaxed font-semibold">
                {service.whoShouldPerform[lang]}
              </p>
            </div>
          </div>

          {/* 12 Types of Kaalsarp Dosh (Only for Kaalsarp Shanti) */}
          {service.id === 'kalsarpa-shanti' && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#7A1E1E] mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#E88921]" />
                <span>{lang === 'en' ? 'The 12 Types of Kalsarpa Dosha' : 'कालसर्प दोष के १२ मुख्य प्रकार'}</span>
              </h2>
              <div className="bg-[#FAF8F2] border border-[#F2E6CE] p-6 rounded-sm shadow-sm mb-6">
                <p className="font-sans text-sm text-[#1a1a1a]/85 leading-relaxed mb-6 font-medium">
                  {lang === 'en'
                    ? 'According to Vedic astrology, Kalsarpa Yog manifests in twelve distinct varieties depending on the houses where the shadow planets Rahu and Ketu reside in your astrological birth chart (Kundali). Explore each below to understand their symptoms and specific astrological alignments:'
                    : 'वैदिक ज्योतिष के अनुसार, कुंडली में राहु और केतु की स्थिति के आधार पर कालसर्प योग बारह अलग-अलग रूपों में प्रकट होता है। अपने ग्रह विन्यास के अनुसार अपने दोष के विशिष्ट लक्षण और प्रभाव को यहाँ समझें:'}
                </p>

                {/* Interactive Search Bar */}
                <div className="relative max-w-md mb-8">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#7A1E1E]/40">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder={lang === 'en' ? 'Search by name or house placement...' : 'नाम या भाव विन्यास से खोजें...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-[#F2E6CE] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#7A1E1E] font-sans placeholder-[#7A1E1E]/40 text-[#1a1a1a] font-medium"
                  />
                </div>

                {/* Dosha Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDoshas.map((dosha) => (
                    <div
                      key={dosha.num}
                      className="bg-white border border-[#F2E6CE] p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#7A1E1E]/10 to-transparent flex items-center justify-center font-serif text-xs font-bold text-[#7A1E1E]/40">
                        {dosha.num}
                      </div>
                      
                      <h4 className="font-serif text-base font-bold text-[#7A1E1E] mb-1 group-hover:text-[#E88921] transition-colors flex items-center gap-1.5">
                        <span>{dosha.name[lang]}</span>
                      </h4>
                      
                      <span className="inline-block bg-[#E88921]/10 text-[#7A1E1E] font-sans text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider mb-3">
                        {dosha.alignment[lang]}
                      </span>
                      
                      <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed font-semibold">
                        {dosha.impact[lang]}
                      </p>
                    </div>
                  ))}
                  
                  {filteredDoshas.length === 0 && (
                    <div className="col-span-1 md:col-span-2 text-center py-8 text-[#7A1E1E]/50 font-sans text-sm font-semibold">
                      {lang === 'en' ? 'No matching Kalsarpa Dosha types found.' : 'कोई मेल खाने वाला कालसर्प दोष नहीं मिला।'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}


          {/* 3. Benefits List */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#7A1E1E] mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-[#E88921]" />
              <span>{lang === 'en' ? 'Spiritual Benefits' : 'पूजा के दैवीय लाभ'}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white border border-[#F2E6CE] p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/50" />
                  <span className="text-3xl font-serif text-[#E88921]/15 font-bold block mb-2">0{idx + 1}</span>
                  <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed font-semibold">
                    {benefit[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Step-by-Step Procedure */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#7A1E1E] mb-4 flex items-center gap-2">
              <Flame className="w-6 h-6 text-[#E88921]" />
              <span>{lang === 'en' ? 'Detailed Ritual Procedure' : 'विस्तृत पूजा विधि-विधान'}</span>
            </h2>
            <div className="relative border-l-2 border-[#E88921]/20 pl-6 ml-4 space-y-8">
              {service.procedure.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Step counter node */}
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-sm bg-[#E88921] text-white font-serif text-xs font-bold flex items-center justify-center border border-[#D4AF37]">
                    {idx + 1}
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#1a1a1a]/85 leading-relaxed font-medium">
                    {step[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Preparation Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#F2E6CE] pt-10">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#7A1E1E] mb-4">
                {lang === 'en' ? 'Devotee Preparation Guidelines' : 'श्रद्धालुओं के लिए तैयारी के नियम'}
              </h3>
              <ul className="space-y-3">
                {service.preparation.map((prep, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white border border-[#F2E6CE] p-3 rounded-sm text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E88921] mt-2 shrink-0" />
                    <span>{prep[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-[#7A1E1E] mb-4">
                {lang === 'en' ? 'Required Items & Logistics' : 'आवश्यक सामग्री एवं व्यवस्था'}
              </h3>
              <ul className="space-y-3">
                {service.itemsRequired.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white border border-[#F2E6CE] p-3 rounded-sm text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E88921] mt-2 shrink-0" />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Customized service FAQs */}
          <div className="border-t border-[#F2E6CE] pt-10">
            <h3 className="font-serif text-xl font-bold text-[#7A1E1E] mb-6">
              {lang === 'en' ? 'Frequently Asked Questions' : ' पूजा से संबंधित सवाल-जवाब'}
            </h3>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-[#F2E6CE] p-5 rounded-sm shadow-sm">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#7A1E1E] mb-2 flex items-start gap-2">
                    <span className="text-[#E88921] font-sans font-extrabold text-xs bg-[#E88921]/10 rounded-sm px-1.5 py-0.5">Q</span>
                    <span>{faq.question[lang]}</span>
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed pl-6 font-semibold">
                    {faq.answer[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* High-Impact conversion call-out card */}
          <div className="bg-[#FAF8F2] border border-[#D4AF37]/30 rounded-sm p-6 sm:p-8 text-center max-w-xl mx-auto mt-16 shadow-inner relative">
            <span className="text-4xl absolute -top-5 left-1/2 transform -translate-x-1/2">🏵️</span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#7A1E1E] mb-2 mt-2">
              {lang === 'en' ? 'Contact Panditji For Puja Guidance' : 'पंडितजी से संपर्क करें'}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/80 mb-6 leading-relaxed font-semibold">
              {lang === 'en'
                ? 'Speak directly with Pandit Bineet Shastriji to check dates, select an auspicious timing, and resolve queries.'
                : 'अपनी कुंडली के अनुसार शुभ मुहूर्त और सही पूजा विधि जानने के लिए अभी पंडितजी से बात करें।'}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a
                href={`tel:${businessConfig.phone}`}
          onClick={(e) => {
            if (typeof (window as any).gtag_report_conversion === 'function') {
              e.preventDefault();
              (window as any).gtag_report_conversion(`tel:${businessConfig.phone}`);
            }
          }}
                className="flex items-center gap-2 bg-[#7A1E1E] hover:bg-[#E88921] text-white text-xs uppercase tracking-widest font-serif py-3.5 px-6 rounded-sm border border-[#D4AF37]/20 shadow-md transition-colors w-full sm:w-auto justify-center"
              >
                <PhoneCall className="w-4 h-4 fill-white" />
                <span>{lang === 'en' ? 'Call Panditji Now' : 'कॉल करें'}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-[#F2E6CE]/30 text-[#7A1E1E] text-xs uppercase tracking-widest font-serif py-3.5 px-6 rounded-sm border border-[#F2E6CE] shadow-sm transition-colors w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-current" />
                <span>{lang === 'en' ? 'WhatsApp Chat' : 'व्हाट्सएप चैट'}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
