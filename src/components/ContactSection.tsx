/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Plane, Train, Car, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { businessConfig, servicesData } from '../data';
import { Language } from '../types';
import TempleDivider from './TempleDivider';

interface ContactSectionProps {
  lang: Language;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [puja, setPuja] = useState('');
  const [gotra, setGotra] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !consent) return;

    // Trigger Google Ads Contact Conversion
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {'send_to': 'AW-18301107881/ZzB6CNLJ384cEKn90pZE'});
    }

    // Format the message for WhatsApp
    const selectedPujaDetails = servicesData.find(s => s.id === puja);
    const pujaName = selectedPujaDetails ? selectedPujaDetails.title[lang] : (puja || (lang === 'en' ? 'Not specified' : 'निर्दिष्ट नहीं'));

    const whatsappMessage = lang === 'en' 
      ? `*New Consultation Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Puja:* ${pujaName}\n*Gotra:* ${gotra || 'Not specified'}\n*Message:* ${message || 'None'}`
      : `*नया परामर्श अनुरोध*\n\n*नाम:* ${name}\n*फ़ोन:* ${phone}\n*पूजा:* ${pujaName}\n*गोत्र:* ${gotra || 'निर्दिष्ट नहीं'}\n*संदेश:* ${message || 'कोई नहीं'}`;

    const url = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in a new tab
    window.open(url, '_blank');

    setSubmitted(true);
    setName('');
    setPhone('');
    setPuja('');
    setGotra('');
    setMessage('');
    setConsent(false);

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
            {lang === 'en' ? 'Get Guidance' : 'मार्गदर्शन एवं संपर्क'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4 tracking-tight">
            {lang === 'en' ? 'Request Free Puja Consultation' : 'निःशुल्क पूजा परामर्श प्राप्त करें'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium">
            {lang === 'en'
              ? 'Connect directly with our traditional Vedic scholars. Provide your birth details or queries to find the most auspicious Muhurat for your rituals.'
              : 'हमारे विद्वान पुरोहितों से संपर्क करें। अपनी कुंडली, गोत्र या समस्या का विवरण साझा करके पूजा के लिए शुभ मुहूर्त और संपूर्ण विधि जानें।'}
          </p>
          <TempleDivider />
        </div>

        {/* Form and Contact Detail Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Side: Contact coordinates details & Transportation Logistics */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#7A1E1E]">
                {lang === 'en' ? 'Traditional Sanctuary Office' : 'कार्यालय संपर्क विवरण'}
              </h3>
              
              {/* Phone info card */}
              <a
                href={`tel:${businessConfig.phone}`}
          onClick={(e) => {
            if (typeof (window as any).gtag_report_conversion === 'function') {
              e.preventDefault();
              (window as any).gtag_report_conversion(`tel:${businessConfig.phone}`);
            }
          }}
                className="flex items-center gap-4 bg-white hover:bg-[#F2E6CE]/30 border border-[#F2E6CE] p-4 rounded-sm shadow-sm transition-all group"
              >
                <div className="p-3 rounded-sm bg-[#E88921]/15 text-[#E88921] group-hover:bg-[#7A1E1E] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-[#7A1E1E]/60 font-bold uppercase tracking-wider">{lang === 'en' ? 'Consultation Phone' : 'परामर्श हेल्पलाइन'}</span>
                  <span className="text-base font-bold text-[#7A1E1E]">{businessConfig.phoneDisplay}</span>
                </div>
              </a>

              {/* Email info card */}
              <a
                href={`mailto:${businessConfig.email}`}
                className="flex items-center gap-4 bg-white hover:bg-[#F2E6CE]/30 border border-[#F2E6CE] p-4 rounded-sm shadow-sm transition-all group"
              >
                <div className="p-3 rounded-sm bg-[#E88921]/15 text-[#E88921] group-hover:bg-[#7A1E1E] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-[#7A1E1E]/60 font-bold uppercase tracking-wider">{lang === 'en' ? 'Direct Email' : 'ईमेल संपर्क'}</span>
                  <span className="text-base font-bold text-[#7A1E1E] break-all">{businessConfig.email}</span>
                </div>
              </a>

              {/* Address info card */}
              <div className="flex items-center gap-4 bg-white border border-[#F2E6CE] p-4 rounded-sm shadow-sm">
                <div className="p-3 rounded-sm bg-[#E88921]/15 text-[#E88921] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-[#7A1E1E]/60 font-bold uppercase tracking-wider">{lang === 'en' ? 'Puja Sthal Address' : 'पूजा स्थल का पता'}</span>
                  <span className="text-sm font-semibold text-[#1a1a1a]/85 leading-relaxed font-medium">
                    {businessConfig.address[lang]}
                  </span>
                </div>
              </div>

              {/* Timings card */}
              <div className="flex items-center gap-4 bg-white border border-[#F2E6CE] p-4 rounded-sm shadow-sm">
                <div className="p-3 rounded-sm bg-[#E88921]/15 text-[#E88921] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-[#7A1E1E]/60 font-bold uppercase tracking-wider">{lang === 'en' ? 'Working Hours' : 'कार्य समय'}</span>
                  <span className="text-sm font-bold text-[#7A1E1E]">
                    {businessConfig.workingHours[lang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Travel Logistics Guidelines */}
            <div className="border-t border-[#F2E6CE] pt-6 space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#7A1E1E] flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#E88921]" />
                <span>{lang === 'en' ? 'How To Reach Trimbakeshwar' : 'त्र्यंबकेश्वर कैसे पहुँचें?'}</span>
              </h4>

              <div className="space-y-3.5 text-xs text-[#1a1a1a]/80 leading-relaxed font-medium">
                <div className="flex gap-2 bg-white p-3 rounded-sm border border-[#F2E6CE]">
                  <Plane className="w-4 h-4 text-[#E88921] shrink-0 mt-0.5" />
                  <p><strong>{lang === 'en' ? 'By Air: ' : 'हवाई मार्ग: '}</strong> {businessConfig.howToReach.byAir[lang]}</p>
                </div>
                <div className="flex gap-2 bg-white p-3 rounded-sm border border-[#F2E6CE]">
                  <Train className="w-4 h-4 text-[#E88921] shrink-0 mt-0.5" />
                  <p><strong>{lang === 'en' ? 'By Train: ' : 'रेल मार्ग: '}</strong> {businessConfig.howToReach.byTrain[lang]}</p>
                </div>
                <div className="flex gap-2 bg-white p-3 rounded-sm border border-[#F2E6CE]">
                  <Car className="w-4 h-4 text-[#E88921] shrink-0 mt-0.5" />
                  <p><strong>{lang === 'en' ? 'By Road: ' : 'सड़क मार्ग: '}</strong> {businessConfig.howToReach.byRoad[lang]}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Lead Booking consultation form */}
          <div className="lg:col-span-7 bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm p-6 sm:p-10 shadow-sm relative">
            {/* Traditional Design Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4AF37]/40" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#D4AF37]/40" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#D4AF37]/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4AF37]/40" />

            <h3 className="font-serif text-2xl font-bold text-[#7A1E1E] mb-6">
              {lang === 'en' ? 'Send Your Details to Pandit Bineet Shastriji' : 'पंडित बिनीत शास्त्रीजी को विवरण भेजें'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Devotee Name */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-[#7A1E1E] mb-1.5 uppercase tracking-wider">
                    {lang === 'en' ? 'Full Name *' : 'पूरा नाम *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'en' ? 'e.g. Ramesh Kumar' : 'जैसे: रमेश कुमार'}
                    className="bg-white border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-sans font-semibold text-[#1a1a1a] focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>

                {/* Devotee Phone */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-[#7A1E1E] mb-1.5 uppercase tracking-wider">
                    {lang === 'en' ? 'Phone Number *' : 'फ़ोन नंबर *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={lang === 'en' ? 'e.g. +91 98765 43210' : 'जैसे: +91 98765 43210'}
                    className="bg-white border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-sans font-semibold text-[#1a1a1a] focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Selected Puja Ritual */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-[#7A1E1E] mb-1.5 uppercase tracking-wider">
                    {lang === 'en' ? 'Select Ritual / Puja' : 'अनुष्ठान का चयन करें'}
                  </label>
                  <select
                    value={puja}
                    onChange={(e) => setPuja(e.target.value)}
                    className="bg-white border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-sans font-semibold text-[#1a1a1a] focus:outline-none focus:border-[#D4AF37] transition-all"
                  >
                    <option value="">{lang === 'en' ? 'Select a Service' : 'चयन करें'}</option>
                    {servicesData.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Gotra / Birth Nakshatra */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-[#7A1E1E] mb-1.5 uppercase tracking-wider">
                    {lang === 'en' ? 'Gotra / Caste (Optional)' : 'गोत्र / जाति (वैकल्पिक)'}
                  </label>
                  <input
                    type="text"
                    value={gotra}
                    onChange={(e) => setGotra(e.target.value)}
                    placeholder={lang === 'en' ? 'e.g. Kashyap Gotra' : 'जैसे: कश्यप गोत्र'}
                    className="bg-white border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-sans font-semibold text-[#1a1a1a] focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              {/* Consultation Message */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-[#7A1E1E] mb-1.5 uppercase tracking-wider">
                  {lang === 'en' ? 'Brief Message / Describe Problem' : 'समस्या या संदेश का विवरण लिखें'}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={lang === 'en' ? 'Describe your problems or required puja date...' : 'कृपया अपनी जन्म तिथि, स्थान या जीवन में आ रही समस्या का विवरण लिखें...'}
                  className="bg-white border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-sans font-semibold text-[#1a1a1a] focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                />
              </div>

              {/* Consent and Policy Agreement Checkbox */}
              <div className="flex items-start gap-2.5 bg-white border border-[#F2E6CE] p-3.5 rounded-sm">
                <input
                  id="consent-checkbox-section"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-[#7A1E1E] cursor-pointer"
                />
                <label htmlFor="consent-checkbox-section" className="text-[11px] leading-relaxed text-[#1a1a1a]/75 cursor-pointer font-sans select-none">
                  {lang === 'en' ? (
                    <span>
                      I consent to share my details with Pandit Bineet Shastriji for scheduling my Vedic Puja consultation. I understand that my information is processed in accordance with the <strong>Privacy Policy</strong>.
                    </span>
                  ) : (
                    <span>
                      मैं वैदिक पूजा परामर्श प्राप्त करने के लिए पंडित बिनीत शास्त्रीजी के साथ अपनी जानकारी साझा करने की सहमति देता हूँ। मैं समझता हूँ कि मेरी जानकारी <strong>गोपनीयता नीति</strong> के तहत सुरक्षित रखी जाती है।
                    </span>
                  )}
                </label>
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={!consent}
                className="w-full flex items-center justify-center gap-2 bg-[#7A1E1E] hover:bg-[#E88921] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:border-gray-200 text-white font-serif tracking-wider uppercase text-xs py-4 px-6 rounded-sm border border-[#D4AF37]/30 shadow-md transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4 fill-current text-white" />
                <span>{lang === 'en' ? 'Submit for Guidance' : 'मार्गदर्शन हेतु विवरण भेजें'}</span>
              </button>

              {/* Toast response alert block */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 p-4 rounded-sm text-xs sm:text-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    <div>
                      <p className="font-bold">{lang === 'en' ? 'Consultation Submitted Successfully!' : 'परामर्श विवरण सफलतापूर्वक प्राप्त हुआ!'}</p>
                      <p className="text-[11px] text-green-700/80 mt-0.5">
                        {lang === 'en'
                          ? 'Pandit Bineet Shastriji will analyze your details and contact you on phone or WhatsApp shortly.'
                          : 'पंडित बिनीत शास्त्रीजी शीघ्र ही आपकी समस्या का अध्ययन करके आपसे फ़ोन या व्हाट्सएप पर संपर्क करेंगे।'}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
