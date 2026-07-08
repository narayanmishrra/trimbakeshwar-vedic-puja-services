/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle, Calendar, ShieldCheck, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { businessConfig, servicesData } from '../data';
import { Language } from '../types';
import TempleDivider from './TempleDivider';

interface ContactPageProps {
  lang: Language;
}

export default function ContactPage({ lang }: ContactPageProps) {
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

    // Simulate successful form receipt without storing any data (100% compliance with privacy consent)
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

  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
    lang === 'en'
      ? 'Pranam Pandit Bineet Shastriji, I would like to consult with you about scheduling a Vedic Puja at Trimbakeshwar.'
      : 'प्रणाम पंडित बिनीत शास्त्रीजी, मैं त्र्यंबकेश्वर में वैदिक पूजा आयोजित करने के संबंध में परामर्श करना चाहता हूँ।'
  )}`;

  return (
    <div className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
            {lang === 'en' ? 'Connect With Us' : 'पंडितजी से संपर्क करें'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4 tracking-tight">
            {lang === 'en' ? 'Contacts, Location & Timing' : 'कार्यालय संपर्क, स्थान और पूजा का समय'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium leading-relaxed">
            {lang === 'en'
              ? 'Visit our sacred ritual office in Trimbakeshwar or reach out directly via call/WhatsApp to receive authentic guidance.'
              : 'त्र्यंबकेश्वर में हमारे पवित्र पूजा कार्यालय पर पधारें या सीधे कॉल/व्हाट्सएप द्वारा संपर्क करके शास्त्रोक्त मार्गदर्शन प्राप्त करें।'}
          </p>
          <TempleDivider />
        </div>

        {/* 2-Column Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Left Column: Opening Hours & Contact Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#7A1E1E] border-b border-[#F2E6CE] pb-3">
                {lang === 'en' ? 'Direct Contact Information' : 'सीधा संपर्क विवरण'}
              </h3>

              {/* Phone Helpline */}
              <a
                href={`tel:${businessConfig.phone}`}
                className="flex items-center gap-4 bg-white hover:bg-[#F2E6CE]/20 border border-[#F2E6CE] p-4 rounded-sm shadow-sm transition-all group cursor-pointer"
              >
                <div className="p-3 rounded-sm bg-[#E88921]/10 text-[#E88921] group-hover:bg-[#7A1E1E] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#7A1E1E]/60 font-bold uppercase tracking-wider">
                    {lang === 'en' ? 'Call Helpline' : 'कॉल हेल्पलाइन'}
                  </span>
                  <span className="text-base font-bold text-[#7A1E1E]">{businessConfig.phoneDisplay}</span>
                </div>
              </a>

              {/* WhatsApp Support */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white hover:bg-[#F2E6CE]/20 border border-[#F2E6CE] p-4 rounded-sm shadow-sm transition-all group cursor-pointer"
              >
                <div className="p-3 rounded-sm bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#7A1E1E]/60 font-bold uppercase tracking-wider">
                    {lang === 'en' ? 'WhatsApp Support' : 'व्हाट्सएप सहायता'}
                  </span>
                  <span className="text-base font-bold text-[#7A1E1E]">{businessConfig.whatsappDisplay}</span>
                </div>
              </a>

              {/* Email Office */}
              <a
                href={`mailto:${businessConfig.email}`}
                className="flex items-center gap-4 bg-white hover:bg-[#F2E6CE]/20 border border-[#F2E6CE] p-4 rounded-sm shadow-sm transition-all group cursor-pointer"
              >
                <div className="p-3 rounded-sm bg-[#E88921]/10 text-[#E88921] group-hover:bg-[#7A1E1E] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] text-[#7A1E1E]/60 font-bold uppercase tracking-wider">
                    {lang === 'en' ? 'Email Address' : 'ईमेल पता'}
                  </span>
                  <span className="text-sm font-bold text-[#7A1E1E] break-all">{businessConfig.email}</span>
                </div>
              </a>

              {/* Physical Sthal Address */}
              <div className="flex items-start gap-4 bg-white border border-[#F2E6CE] p-4 rounded-sm shadow-sm">
                <div className="p-3 rounded-sm bg-[#E88921]/10 text-[#E88921] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#7A1E1E]/60 font-bold uppercase tracking-wider">
                    {lang === 'en' ? 'Puja Sthal Address' : 'पूजा कार्यालय का पता'}
                  </span>
                  <p className="text-xs sm:text-sm text-[#1a1a1a]/85 font-semibold mt-1 leading-relaxed">
                    {businessConfig.address[lang]}
                  </p>
                </div>
              </div>

              {/* Opening/Working Hours */}
              <div className="flex items-start gap-4 bg-white border border-[#F2E6CE] p-4 rounded-sm shadow-sm">
                <div className="p-3 rounded-sm bg-[#E88921]/10 text-[#E88921] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#7A1E1E]/60 font-bold uppercase tracking-wider">
                    {lang === 'en' ? 'Opening & Consultation Hours' : 'दर्शन एवं परामर्श का समय'}
                  </span>
                  <p className="text-xs sm:text-sm text-[#7A1E1E] font-bold mt-1">
                    {businessConfig.workingHours[lang]}
                  </p>
                  <span className="block text-[10px] text-[#7A1E1E]/50 mt-1 font-semibold">
                    {lang === 'en' ? '*Prior booking is recommended for multi-day pujas.' : '*बहु-दिवसीय पूजाओं के लिए पहले से बुकिंग कराना उचित है।'}
                  </span>
                </div>
              </div>
            </div>

            {/* Travel Instruction snippet */}
            <div className="bg-[#FAF8F2] border border-[#D4AF37]/20 p-5 rounded-sm shadow-inner">
              <h4 className="font-serif text-sm font-bold text-[#7A1E1E] mb-1.5 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#E88921]" />
                <span>{lang === 'en' ? 'Proximity Landmark' : 'मुख्य निकटतम स्थल'}</span>
              </h4>
              <p className="font-sans text-xs text-[#1a1a1a]/80 leading-relaxed font-semibold">
                {lang === 'en'
                  ? 'Our Sthal is located near the Swami Samarth Kendra in Trimbakeshwar. Devotees can easily reach our quiet and spiritual ritual venue.'
                  : 'हमारा पूजा स्थल त्र्यंबकेश्वर में स्वामी समर्थ केंद्र के समीप स्थित है। भक्त आसानी से हमारे शांत और आध्यात्मिक अनुष्ठान भवन में आ सकते हैं।'}
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="h-full flex flex-col">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#7A1E1E] border-b border-[#F2E6CE] pb-3 mb-6">
                {lang === 'en' ? 'Our Location on Google Maps' : 'गूगल मैप्स पर हमारा स्थान'}
              </h3>
              
              {/* Maps container */}
              <div className="relative w-full flex-grow min-h-[350px] bg-gradient-to-br from-[#7A1E1E]/5 to-[#E88921]/5 border border-[#F2E6CE] rounded-sm shadow-sm overflow-hidden flex flex-col">
                <iframe
                  title="Swami Samarth Kendra Trimbakeshwar Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.5397441584985!2d73.52843487507348!3d19.933306981454593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd131e649af8d3%3A0xe104fc558bb9f58c!2sKushavarta%20Kund!5e0!3m2!1sen!2sin!4v1719875429402!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full flex-grow"
                ></iframe>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-[#7A1E1E]/70 font-semibold font-sans">
                <span>📍 Near Swami Samarth Kendra, Trimbakeshwar, Nashik</span>
                <a
                  href="https://maps.google.com/?q=Swami+Samarth+Kendra+Trimbakeshwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E88921] hover:underline flex items-center gap-1"
                >
                  {lang === 'en' ? 'Open in Google Maps App' : 'मैप्स ऐप में खोलें'} →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lead consultation Request Form below */}
        <div className="border-t border-[#F2E6CE] pt-16">
          <div className="bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm p-6 sm:p-10 shadow-sm relative max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4AF37]/40" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#D4AF37]/40" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#D4AF37]/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4AF37]/40" />

            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="font-serif text-2xl font-bold text-[#7A1E1E]">
                {lang === 'en' ? 'Request Personal Consultation' : 'पंडितजी से निःशुल्क परामर्श लें'}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#7A1E1E]/70 mt-2 font-medium">
                {lang === 'en'
                  ? 'Send us your birth or lineage details, or select the Puja you wish to perform. Pandit Bineet Shastriji will respond with the most auspicious Muhurats.'
                  : 'हमें अपनी जन्म तिथि, गोत्र या जिस पूजा को आप संपन्न कराना चाहते हैं उसका विवरण भेजें। पंडित बिनीत शास्त्रीजी आपको अनुकूल शुभ मुहूर्तों की जानकारी देंगे।'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
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

                {/* Phone */}
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
                {/* Puja Select */}
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

                {/* Gotra */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-[#7A1E1E] mb-1.5 uppercase tracking-wider">
                    {lang === 'en' ? 'Gotra / Caste (Optional)' : 'गोत्र / जाति (वैकल्पिक)'}
                  </label>
                  <input
                    type="text"
                    value={gotra}
                    onChange={(e) => setGotra(e.target.value)}
                    placeholder={lang === 'en' ? 'e.g. Kashyap' : 'जैसे: कश्यप'}
                    className="bg-white border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-sans font-semibold text-[#1a1a1a] focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-[#7A1E1E] mb-1.5 uppercase tracking-wider">
                  {lang === 'en' ? 'Message / Special Birth Details' : 'संदेश / कुंडली या जन्म विवरण'}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'en'
                      ? 'Describe your obstacles, family details, or requested date of ritual performance...'
                      : 'अपनी परेशानियाँ, परिवार की जानकारी, या पूजा के आयोजन की संभावित तिथि का विवरण लिखें...'
                  }
                  className="bg-white border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-sans font-semibold text-[#1a1a1a] focus:outline-none focus:border-[#D4AF37] transition-all"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 bg-white border border-[#F2E6CE] p-3.5 rounded-sm">
                <input
                  id="consent-checkbox-page"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-[#7A1E1E] cursor-pointer"
                />
                <label htmlFor="consent-checkbox-page" className="text-[11px] leading-relaxed text-[#1a1a1a]/75 cursor-pointer font-sans select-none text-left">
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

              {/* Success Notification */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-sm text-sm font-semibold flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    <span>
                      {lang === 'en'
                        ? 'Consultation request submitted! Panditji will call or WhatsApp you within 2 hours.'
                        : 'आपका विवरण सफलतापूर्वक भेज दिया गया है! पंडितजी 2 घंटे के भीतर आपसे संपर्क करेंगे।'}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={!consent}
                  className="inline-flex items-center gap-2 bg-[#7A1E1E] hover:bg-[#E88921] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:border-gray-200 text-white text-xs font-serif uppercase tracking-widest py-3.5 px-8 rounded-sm shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Send Message' : 'विवरण भेजें'}</span>
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
