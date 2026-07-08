/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Landmark, Phone, Mail, Clock, ShieldAlert, X, ShieldCheck } from 'lucide-react';
import { businessConfig, servicesData } from '../data';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  lang: Language;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ lang, activeTab, setActiveTab }: FooterProps) {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const quickLinks = [
    { id: 'home', label: { en: 'Home', hi: 'मुख्य' } },
    { id: 'trimbakeshwar', label: { en: 'About Trimbakeshwar', hi: 'त्र्यंबकेश्वर परिचय' } },
    { id: 'services', label: { en: 'Our Puja Services', hi: 'पूजा सेवाएं' } },
    { id: 'about', label: { en: 'About Us', hi: 'हमारे बारे में' } },
    { id: 'gallery', label: { en: 'Gallery', hi: 'गैलरी' } },
    { id: 'blog', label: { en: 'Blog & Reviews', hi: 'ब्लॉग एवं समीक्षाएं' } },
    { id: 'faq', label: { en: 'FAQs', hi: 'सवाल-जवाब' } },
    { id: 'contact', label: { en: 'Contact Us', hi: 'संपर्क करें' } },
  ];

  const topServices = servicesData.slice(0, 4);

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#7A1E1E] text-[#FFFDF7] border-t-4 border-[#D4AF37] pt-16 pb-8 overflow-hidden">
      
      {/* Subtle traditional design accents in background */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFFDF7_1px,transparent_1px)] bg-[size:32px_32px] opacity-5 pointer-events-none" />
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 rounded-full bg-[#E88921]/10 filter blur-[100px] pointer-events-none" />

      {/* Decorative Silhouette Wave Border top (pointing down) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] select-none pointer-events-none">
        <svg viewBox="0 0 1200 120" className="relative block w-full h-8 text-[#FAF8F2] fill-current" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A417.08,417.08,0,0,1,0,56.57V0H1200V120C1132.19,96.09,1055.71,88.48,985.66,92.83Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Logo info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center border border-[#D4AF37]/40 shadow-md">
                <img 
                  src="/images/logo.jpg"
                  alt="Lord Shiva Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Trimbakeshwar</span>
                <span className="font-serif text-lg font-bold">Vedic Puja Services</span>
              </div>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-[#FFFDF7]/75 leading-relaxed">
              {lang === 'en'
                ? 'Committed to conducting authentic Vedic remedies with pure scriptural protocols, ensuring direct guidance and spiritual alignment near the source of holy Godavari.'
                : 'पवित्र गोदावरी और कुशावर्त कुंड के समीप, पूर्ण विधि-विधान और वैदिक शुचिता के साथ अनुष्ठान संपन्न करने के लिए सदैव तत्पर एवं संकल्पित।'}
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>{lang === 'en' ? 'Temple Entry Timings' : 'मंदिर दर्शन समय'}</span>
              </div>
              <span className="block text-xs text-[#FFFDF7]/80 mt-1">
                {lang === 'en' ? '6:00 AM - 9:00 PM (Daily)' : 'सुबह 6:00 बजे से रात 9:00 बजे तक (दैनिक)'}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-[#D4AF37] mb-4 pb-2 border-b border-[#FFFDF7]/15">
              {lang === 'en' ? 'Quick Navigation' : 'त्वरित लिंक'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FFFDF7]/80 font-medium">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                  >
                    {link.label[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#D4AF37] mb-4 pb-2 border-b border-[#FFFDF7]/15">
              {lang === 'en' ? 'Top Vedic Rituals' : 'मुख्य अनुष्ठान'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FFFDF7]/80 font-medium">
              {topServices.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleLinkClick(`service-${service.id}`)}
                    className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left line-clamp-1"
                  >
                    {service.title[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#D4AF37] mb-4 pb-2 border-b border-[#FFFDF7]/15">
              {lang === 'en' ? 'Connect With Us' : 'संपर्क केंद्र'}
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-[#FFFDF7]/80 font-semibold">
              <a href={`tel:${businessConfig.phone}`} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>{businessConfig.phoneDisplay}</span>
              </a>
              <a href={`mailto:${businessConfig.email}`} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors break-all">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>{businessConfig.email}</span>
              </a>
              <div className="flex items-start gap-2 pt-1">
                < Landmark className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed text-[#FFFDF7]/75">
                  {businessConfig.address[lang]}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Trust accuracy banner */}
        <div className="border-t border-[#FFFDF7]/15 pt-8 pb-4">
          <div className="bg-black/15 rounded-sm p-4 flex gap-3 border border-[#FFFDF7]/10 max-w-4xl mx-auto">
            <ShieldAlert className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#FFFDF7]/80 leading-relaxed text-justify font-sans">
              <strong>{lang === 'en' ? 'Disclaimer: ' : 'महत्वपूर्ण सूचना: '}</strong>
              {lang === 'en'
                ? 'This website represents an independent spiritual service and Vedic priest organization. Traditional rituals are performed in strict accordance with the scriptures at our private Puja Sthals inside the holy town of Trimbakeshwar. These ceremonies are not organized by, nor do they take place inside, the public Trimbakeshwar Temple premises. Devotees perform temple darshans separately.'
                : 'यह वेबसाइट एक स्वतंत्र आध्यात्मिक सेवा और वैदिक पुरोहित संस्थान का प्रतिनिधित्व करती है। पारंपरिक अनुष्ठान शास्त्रों के अनुसार त्र्यंबकेश्वर नगर में हमारे समर्पित निजी पूजा स्थलों पर आयोजित होते हैं। ये अनुष्ठान मुख्य सार्वजनिक मंदिर के अंदर नहीं कराए जाते। श्रद्धालु मंदिर दर्शन अलग से करते हैं।'}
            </p>
          </div>
        </div>

        {/* Outer bottom copyright credits */}
        <div className="border-t border-[#FFFDF7]/10 pt-6 mt-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FFFDF7]/60 font-semibold font-sans">
          <p>© {new Date().getFullYear()} Trimbakeshwar Vedic Puja Services. All Rights Reserved.</p>
          <p>
            {lang === 'en' ? 'Website by ' : 'वेबसाइट निर्माण: '}
            <a href="tel:+917709753120" className="text-[#D4AF37] hover:underline">Viralmize</a>
          </p>
          <div className="flex gap-4">
            <button onClick={() => setLegalModal('terms')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">{lang === 'en' ? 'Terms of Devotion' : 'नियम व शर्तें'}</button>
            <button onClick={() => setLegalModal('privacy')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">{lang === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}</button>
          </div>
        </div>

      </div>

      {/* Legal Modals Overlay */}
      <AnimatePresence>
        {legalModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLegalModal(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFFDF7] border-2 border-[#D4AF37]/40 text-[#1a1a1a] p-6 sm:p-8 rounded-sm max-w-lg w-full shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setLegalModal(null)}
                className="absolute top-4 right-4 p-2 bg-[#7A1E1E]/5 hover:bg-[#7A1E1E]/15 text-[#7A1E1E] rounded-sm transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {legalModal === 'privacy' ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#F2E6CE] pb-3">
                    <ShieldCheck className="w-5 h-5 text-[#E88921]" />
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#7A1E1E]">
                      {lang === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}
                    </h3>
                  </div>

                  <div className="text-xs sm:text-sm leading-relaxed space-y-3.5 text-justify font-sans text-gray-700 font-semibold">
                    {lang === 'en' ? (
                      <>
                        <p>
                          At <strong>Trimbakeshwar Vedic Puja Services</strong>, we value your faith and are committed to protecting your privacy. This policy details how we handle the information you voluntarily submit on this website.
                        </p>
                        <p>
                          <strong>1. Information Collection:</strong> We only collect minimal personally identifiable details such as your full name, phone number, and optional Gotra or message when you voluntarily request a consultation. No background advertising cookies or tracking scripts are deployed on this site.
                        </p>
                        <p>
                          <strong>2. Usage:</strong> Your shared contact details are used strictly to coordinate and schedule your Vedic Puja, determine auspicious Muhurats, and communicate essential ritual arrangements with Pandit Bineet Shastriji.
                        </p>
                        <p>
                          <strong>3. Protection:</strong> We store zero consultation records in online databases, avoiding risk of data breaches. Your details are handled directly and confidentially by our scholars.
                        </p>
                        <p>
                          <strong>4. Third-Party Sharing:</strong> We do not sell, rent, trade, or share any devotee data with external marketing firms or third parties.
                        </p>
                        <p>
                          <strong>5. Opt-Out & Deletion:</strong> If you would like to delete any details shared via WhatsApp, call, or consultation form, you can reach out directly to us at <strong>mishranarayan2005@gmail.com</strong>.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          <strong>त्र्यंबकेश्वर वैदिक पूजा सेवा</strong> पर हम आपकी आस्था और गोपनीयता का सम्मान करते हैं। यह नीति स्पष्ट करती है कि आपके द्वारा साझा की गई जानकारी को हम किस प्रकार सुरक्षित रखते हैं।
                        </p>
                        <p>
                          <strong>१. जानकारी का संग्रह:</strong> जब आप स्वेच्छा से निःशुल्क पूजा परामर्श के लिए अनुरोध भेजते हैं, केवल तभी हम आपका नाम, संपर्क नंबर, गोत्र या समस्या का संक्षिप्त विवरण एकत्र करते हैं। इस वेबसाइट पर किसी भी विज्ञापन ट्रैकर या कुकीज़ का उपयोग नहीं किया जाता है।
                        </p>
                        <p>
                          <strong>२. जानकारी का उपयोग:</strong> आपकी जानकारी का उपयोग केवल पंडित बिनीत शास्त्रीजी के साथ आपके पावन अनुष्ठान का समय तय करने, शुभ मुहूर्त का अध्ययन करने और आवश्यक पूजा व्यवस्थाओं की जानकारी आप तक पहुँचाने के लिए किया जाता है।
                        </p>
                        <p>
                          <strong>३. सुरक्षा:</strong> हम भक्तों की किसी भी जानकारी को इंटरनेट के सार्वजनिक डेटाबेस में संगृहीत नहीं करते हैं, जिससे डेटा चोरी का कोई खतरा नहीं रहता है।
                        </p>
                        <p>
                          <strong>४. तृतीय-पक्ष साझाकरण:</strong> हम आपके डेटा को किसी भी बाहरी विज्ञापन एजेंसी या तीसरे पक्ष के साथ कभी भी साझा या विक्रय नहीं करते हैं।
                        </p>
                        <p>
                          <strong>५. डेटा हटाना:</strong> यदि आप हमारे द्वारा संपर्क के बाद अपनी जानकारी या चैट हटाने का अनुरोध करना चाहते हैं, तो आप बेझिझक हमें <strong>mishranarayan2005@gmail.com</strong> पर ईमेल भेज सकते हैं।
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#F2E6CE] pb-3">
                    <Landmark className="w-5 h-5 text-[#E88921]" />
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#7A1E1E]">
                      {lang === 'en' ? 'Terms of Devotion' : 'नियम व शर्तें'}
                    </h3>
                  </div>

                  <div className="text-xs sm:text-sm leading-relaxed space-y-3.5 text-justify font-sans text-gray-700 font-semibold">
                    {lang === 'en' ? (
                      <>
                        <p>
                          Welcome to <strong>Trimbakeshwar Vedic Puja Services</strong>. By consulting with us or scheduling any rituals, you acknowledge and agree to the following sacred principles:
                        </p>
                        <p>
                          <strong>1. Scope of Service:</strong> We provide spiritual advice, Vedic scripture interpretations, and coordinate traditional rituals such as Kalsarpa Shanti, Narayan Nagbali, and Tripindi Shraddha, performed under scriptural guidelines.
                        </p>
                        <p>
                          <strong>2. Crucial Disclaimer:</strong> This platform represents an independent priest organization and spiritual scholars. We have <strong>no official association, affiliation, endorsement, or management relation</strong> with the government-managed public Trimbakeshwar Temple Trust. Traditional rituals are performed purely at our private dedicated Puja Sthals. Main temple visits are done separately.
                        </p>
                        <p>
                          <strong>3. Voluntary Consultation:</strong> Devotees engage with our services and select ritual packages based entirely on their personal faith, planetary alignments, and astrological assessments.
                        </p>
                        <p>
                          <strong>4. Conduct:</strong> Devotees are expected to maintain sacred cleanliness, follow fasts or restrictions specified by Panditji, and participate in rituals with positive devotion.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          <strong>त्र्यंबकेश्वर वैदिक पूजा सेवा</strong> में स्वागत है। हमारे माध्यम से पूजा आयोजित करने या परामर्श प्राप्त करने पर आप निम्नलिखित नियमों और मर्यादाओं से सहमत होते हैं:
                        </p>
                        <p>
                          <strong>१. सेवाओं का क्षेत्र:</strong> हम श्रद्धालुओं को शास्त्रोक्त गोत्र पूजन, कालसर्प शांति, नारायण नागबलि, और त्रिपिंडी श्राद्ध जैसे पारंपरिक वैदिक निवारण अनुष्ठान आयोजित करने में मार्गदर्शन प्रदान करते हैं।
                        </p>
                        <p>
                          <strong>२. महत्वपूर्ण अस्वीकरण (Disclaimer):</strong> यह वेबसाइट स्वतंत्र रूप से कार्य करने वाले पुरोहितों का प्रतिनिधित्व करती है। हमारा मुख्य सार्वजनिक सरकारी मंदिर (श्री त्र्यंबकेश्वर देवस्थान ट्रस्ट) के साथ <strong>कोई आधिकारिक या व्यावसायिक संबंध नहीं है</strong>। सभी निवारक अनुष्ठान हमारे निजी पूजा भवनों में सम्पन्न होते हैं।
                        </p>
                        <p>
                          <strong>३. स्वैच्छिक आस्था:</strong> भक्त अपनी श्रद्धा, ग्रह दशा, और स्वेच्छा के आधार पर ही अनुष्ठान आयोजित कराने का निर्णय लेते हैं।
                        </p>
                        <p>
                          <strong>४. आचरण एवं पवित्रता:</strong> अनुष्ठान के दौरान भक्तों से सात्विक आचरण, शुद्धता बनाए रखने और पंडितजी द्वारा बताए गए नियमों (जैसे उपवास आदि) का पूर्ण श्रद्धा से पालन करने की अपेक्षा की जाती है।
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Close Bottom Button */}
              <button
                onClick={() => setLegalModal(null)}
                className="mt-6 w-full bg-[#7A1E1E] hover:bg-[#E88921] text-white text-xs font-serif uppercase tracking-widest py-3 rounded-sm border border-[#D4AF37]/20 transition-all cursor-pointer"
              >
                {lang === 'en' ? 'Close Window' : 'बंद करें'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
