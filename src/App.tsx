/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Compass, ArrowRight, Landmark, Clock, ShieldCheck, Sparkles, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Data & Types
import { Language, BlogPost } from './types';
import { businessConfig, servicesData, blogPosts } from './data';

// Custom Reusable Components
import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButtons';
import TempleDivider from './components/TempleDivider';
import Hero from './components/Hero';
import TrimbakeshwarSection from './components/TrimbakeshwarSection';
import AboutUsSection from './components/AboutUsSection';
import ServiceCard from './components/ServiceCard';
import ServiceDetail from './components/ServiceDetail';
import GallerySection from './components/GallerySection';
import BlogSection from './components/BlogSection';
import BlogDetail from './components/BlogDetail';
import FAQSection from './components/FAQSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ContactSection from './components/ContactSection';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
export default function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Prioritized Background Preloader for high-fidelity images
  useEffect(() => {
    // 1. Critical Home Page Images (loaded immediately with top priority)
    const criticalImages = [
      '/images/main-photo.png',
      '/images/bramahagiri.webp'
    ];

    // 2. Secondary Gallery & Specific Puja Images (loaded with non-blocking stagger)
    const secondaryImages = [
      // Gallery section
      '/images/gallery1.jpeg',
      '/images/gallery2.jpeg',
      '/images/gallery3.jpeg',
      '/images/kalsarp puja.jpeg',
      '/images/galllery4.jpeg',
      '/images/gallery7.jpeg',
      '/images/online.jpeg',
      // Specific Puja images
      '/images/mahamrityunjay.jpg',
      '/images/navgrah.jpg',
      '/images/pitrudosh.jpg',
      '/images/narayan naagbali.jpg',
      '/images/tripindi.jpg',
      '/images/rudrabhishek.jpg',
      '/images/mangal dosh.png'
    ];

    const loadImages = (urls: string[]) => {
      return Promise.all(
        urls.map((src) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          });
        })
      );
    };

    // Load home page essentials first
    loadImages(criticalImages).then(() => {
      // Once home page essentials are loaded, queue the secondary images with a slight stagger
      setTimeout(() => {
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => {
            loadImages(secondaryImages);
          });
        } else {
          loadImages(secondaryImages);
        }
      }, 1500);
    });
  }, []);

  // Dynamic Browser SEO Page Title synchronization
  useEffect(() => {
    let title = '';
    if (lang === 'en') {
      if (activeTab === 'home') title = 'Trimbakeshwar Authentic Vedic Puja Services | Kalsarpa & Narayan Nagbali';
      else if (activeTab === 'trimbakeshwar') title = 'About Trimbakeshwar - Holy Town History & Legend';
      else if (activeTab === 'about') title = 'About Pandit Bineet Shastriji & Lineage | Trimbakeshwar Vedic Puja';
      else if (activeTab === 'gallery') title = 'Sacred Puja Gallery - Visual Darshan | Trimbakeshwar';
      else if (activeTab === 'services') title = 'Scriptural Vedic Rituals & Remedies | Trimbakeshwar';
      else if (activeTab.startsWith('service-')) {
        const id = activeTab.replace('service-', '');
        const s = servicesData.find((serv) => serv.id === id);
        title = `${s ? s.title.en : 'Ritual'} - Complete Vedic Guide | Trimbakeshwar`;
      } else if (activeTab === 'blog') title = 'Vedic Wisdom, Puja Guides & Devotee Testimonials';
      else if (activeTab.startsWith('blog-')) {
        const id = activeTab.replace('blog-', '');
        const p = blogPosts.find((post) => post.id === id);
        title = `${p ? p.title.en : 'Spiritual Guide'} | Trimbakeshwar Blog`;
      } else if (activeTab === 'faq') title = 'Frequently Answered Questions | Trimbakeshwar Puja';
    } else {
      if (activeTab === 'home') title = 'त्र्यंबकेश्वर प्रामाणिक वैदिक पूजा सेवा | कालसर्प और नारायण नागबलि';
      else if (activeTab === 'trimbakeshwar') title = 'त्र्यंबकेश्वर परिचय - पावन इतिहास और कथाएँ';
      else if (activeTab === 'about') title = 'पंडित बिनीत शास्त्रीजी एवं पीढ़ीगत परंपरा | त्र्यंबकेश्वर वैदिक पूजा';
      else if (activeTab === 'gallery') title = 'पावन पूजा गैलरी दर्शन | त्र्यंबकेश्वर';
      else if (activeTab === 'services') title = 'शास्त्रोक्त वैदिक अनुष्ठान एवं उपाय | त्र्यंबकेश्वर';
      else if (activeTab.startsWith('service-')) {
        const id = activeTab.replace('service-', '');
        const s = servicesData.find((serv) => serv.id === id);
        title = `${s ? s.title.hi : 'अनुष्ठान'} - संपूर्ण पूजा विधि | त्र्यंबकेश्वर`;
      } else if (activeTab === 'blog') title = 'वैदिक लेख एवं श्रद्धालु समीक्षाएं | त्र्यंबकेश्वर ब्लॉग';
      else if (activeTab.startsWith('blog-')) {
        const id = activeTab.replace('blog-', '');
        const p = blogPosts.find((post) => post.id === id);
        title = `${p ? p.title.hi : 'आध्यात्मिक लेख'} | त्र्यंबकेश्वर ब्लॉग`;
      } else if (activeTab === 'faq') title = 'अक्सर पूछे जाने वाले सवाल-जवाब | त्र्यंबकेश्वर';
    }
    document.title = title || 'Trimbakeshwar Vedic Puja Services';
  }, [lang, activeTab]);

  // Handle hash router synchronization for external links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash(); // Run once on startup
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = `#/${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (id: string) => {
    handleTabChange(`service-${id}`);
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    handleTabChange(`blog-${post.id}`);
  };

  // Render Section Helper
  const renderContent = () => {
    // 1. Dynamic Single Service Detail Page
    if (activeTab.startsWith('service-')) {
      const id = activeTab.replace('service-', '');
      const selectedService = servicesData.find((s) => s.id === id);
      if (selectedService) {
        return (
          <ServiceDetail
            service={selectedService}
            lang={lang}
            onBack={() => handleTabChange('services')}
          />
        );
      }
    }

    // 2. Dynamic Single Blog Detail Page
    if (activeTab.startsWith('blog-')) {
      const id = activeTab.replace('blog-', '');
      const post = blogPosts.find((p) => p.id === id) || selectedPost || blogPosts[0];
      return (
        <BlogDetail
          post={post}
          lang={lang}
          onBack={() => handleTabChange('blog')}
          onSelectPost={handleSelectPost}
        />
      );
    }

    // 3. Static standard route rendering
    switch (activeTab) {
      case 'trimbakeshwar':
        return (
          <div className="pt-16">
            <TrimbakeshwarSection lang={lang} />
            <ContactSection lang={lang} />
          </div>
        );

      case 'services':
        return (
          <div className="pt-24 pb-16 bg-[#FFFDF7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
                  {lang === 'en' ? 'Divine Remedial Services' : 'दैवीय पूजा अनुष्ठान'}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4">
                  {lang === 'en' ? 'Authentic Vedic Ritual Procedures' : 'प्रामाणिक वैदिक पूजा एवं दोष निवारण'}
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium">
                  {lang === 'en'
                    ? 'Explore complete preparation, durations, and scriptural procedures of sacred ceremonies conducted strictly in accordance with Sanskrit texts at our dedicated Puja Sthal.'
                    : 'हमारे समर्पित पूजा स्थल पर वेदों और संस्कृत ग्रंथों के नियमों के अनुसार संपन्न की जाने वाली पावन पूजाओं के मुहूर्त, अवधि एवं विधि की जानकारी प्राप्त करें।'}
                </p>
                <TempleDivider />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    lang={lang}
                    onSelect={handleSelectService}
                  />
                ))}
              </div>
            </div>
            <ContactSection lang={lang} />
          </div>
        );

      case 'about':
        return (
          <div className="pt-16">
            <AboutUsSection lang={lang} />
            <ContactSection lang={lang} />
          </div>
        );

      case 'gallery':
        return (
          <div className="pt-16">
            <GallerySection lang={lang} />
            <ContactSection lang={lang} />
          </div>
        );

      case 'blog':
        return (
          <div className="pt-16">
            <BlogSection lang={lang} onSelectPost={handleSelectPost} />
            {/* User request: "blog section for all the blogs and testimonies" */}
            <div className="border-t border-[#F2E6CE]/30">
              <TestimonialsCarousel lang={lang} />
            </div>
            <ContactSection lang={lang} />
          </div>
        );

      case 'faq':
        return (
          <div className="pt-16">
            <FAQSection lang={lang} />
            <ContactSection lang={lang} />
          </div>
        );

      case 'contact':
        return (
          <div className="pt-16">
            <ContactPage lang={lang} />
          </div>
        );

      case 'home':
      default:
        return (
          <>
            {/* Hero Main Gate Section */}
            <Hero lang={lang} setActiveTab={handleSelectService} />

            {/* Quick Informational Section on Temple Darshan VS Puja Sthal */}
            <section className="py-12 bg-[#FAF8F2] border-y border-[#F2E6CE]/50">
              <div className="max-w-5xl mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 bg-[#7A1E1E]/5 border border-[#7A1E1E]/15 rounded-full px-4 py-1.5 mb-4 shadow-inner">
                  <AlertTriangle className="w-4 h-4 text-[#E88921]" />
                  <span className="text-xs font-bold text-[#7A1E1E] uppercase tracking-wider">
                    {lang === 'en' ? 'Important Devotee Clarification' : 'श्रद्धालुओं के लिए महत्वपूर्ण सूचना'}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#7A1E1E] mb-3">
                  {lang === 'en' ? 'Temple Darshan & Ritual Venue are Separate' : 'मंदिर दर्शन और अनुष्ठान स्थल पूरी तरह अलग-अलग हैं'}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#7A1E1E]/75 max-w-3xl mx-auto leading-relaxed font-medium">
                  {lang === 'en'
                    ? 'In absolute alignment with the local administration rules and spiritual authenticity, all traditional Vedic pujas (like Kalsarpa Shanti & Narayan Nagbali) are performed exclusively at our dedicated private Puja Sthals inside the holy town. Standard temple entries are reserved strictly for simple darshan.'
                    : 'स्थानीय नियमों और आध्यात्मिक मर्यादा के अनुसार, सभी वैदिक पूजाएं (जैसे कालसर्प शांति एवं नारायण नागबलि) हमारे नगर स्थित समर्पित निजी पूजा स्थलों पर की जाती हैं। मुख्य मंदिर केवल दर्शन हेतु आरक्षित है। दोनों स्थल अलग-अलग हैं।'}
                </p>
              </div>
            </section>

            {/* Featured Ritual Services summary block */}
            <section className="py-20 bg-[#FAF8F2]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
                    {lang === 'en' ? 'Most Conducted' : 'अत्यंत आवश्यक'}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4">
                    {lang === 'en' ? 'Featured Vedic Remedies' : 'मुख्य पावन पूजा अनुष्ठान'}
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium">
                    {lang === 'en'
                      ? 'The three most critical Vedic ceremonies performed at Trimbakeshwar to pacify planets and relieve ancestor hardships.'
                      : 'पितृ दोष निवारण, ग्रहों की शांति और पारिवारिक समृद्धि के लिए त्र्यंबकेश्वर में कराए जाने वाले तीन सबसे महत्वपूर्ण अनुष्ठान।'}
                  </p>
                  <TempleDivider />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {servicesData.slice(0, 3).map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      lang={lang}
                      onSelect={handleSelectService}
                    />
                  ))}
                </div>

                {/* Direct CTA link to all services */}
                <div className="text-center mt-12">
                  <button
                    onClick={() => handleTabChange('services')}
                    className="inline-flex items-center gap-2 bg-[#7A1E1E] hover:bg-[#E88921] text-[#FFFDF7] text-sm font-bold py-3 px-8 rounded-full border border-[#D4AF37]/20 shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <span>{lang === 'en' ? 'View All 9 Vedic Rituals' : 'सभी 9 वैदिक पूजाओं की सूची देखें'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* Sacred Step Booking Process representation */}
            <section className="py-20 bg-[#FFFDF7] border-t border-[#F2E6CE]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
                    {lang === 'en' ? 'Seamless Process' : 'सरल प्रक्रिया'}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-1">
                    {lang === 'en' ? 'How to Book and Conduct Ritual' : 'पूजा बुकिंग एवं आयोजन की सरल विधि'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  
                  {/* Step 1 */}
                  <div className="text-center p-6 bg-[#FAF8F2] border border-[#F2E6CE]/40 rounded-2xl relative">
                    <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#E88921] text-[#FFFDF7] font-serif text-base font-bold flex items-center justify-center border border-[#D4AF37]">1</span>
                    <h4 className="font-serif text-base font-bold text-[#7A1E1E] mt-4 mb-2">{lang === 'en' ? 'Consult Pandit Bineet' : 'पंडित बिनीत जी से परामर्श'}</h4>
                    <p className="font-sans text-xs text-[#7A1E1E]/70 leading-relaxed font-medium">
                      {lang === 'en' 
                        ? 'Call or WhatsApp Panditji. Share your birth chart, planetary struggles, or name and gotra details.'
                        : 'कॉल या व्हाट्सएप के माध्यम से पंडितजी से बात करें। अपनी समस्या, गोत्र या कुंडली का विवरण साझा करें।'}
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="text-center p-6 bg-[#FAF8F2] border border-[#F2E6CE]/40 rounded-2xl relative">
                    <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#E88921] text-[#FFFDF7] font-serif text-base font-bold flex items-center justify-center border border-[#D4AF37]">2</span>
                    <h4 className="font-serif text-base font-bold text-[#7A1E1E] mt-4 mb-2">{lang === 'en' ? 'Auspicious Muhurat' : 'शुभ मुहूर्त निर्धारण'}</h4>
                    <p className="font-sans text-xs text-[#7A1E1E]/70 leading-relaxed font-medium">
                      {lang === 'en' 
                        ? 'Pandit Bineet Shastriji will personally analyze custom lunar calendars to suggest the most auspicious timing and date.'
                        : 'पंडित बिनीत शास्त्रीजी स्वयं पंचांग देखकर आपकी पूजा के लिए सबसे अनुकूल शुभ मुहूर्त और तारीख सुनिश्चित करेंगे।'}
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="text-center p-6 bg-[#FAF8F2] border border-[#F2E6CE]/40 rounded-2xl relative">
                    <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#E88921] text-[#FFFDF7] font-serif text-base font-bold flex items-center justify-center border border-[#D4AF37]">3</span>
                    <h4 className="font-serif text-base font-bold text-[#7A1E1E] mt-4 mb-2">{lang === 'en' ? 'Perform & Receive Prasad' : 'अनुष्ठान एवं महाप्रसाद'}</h4>
                    <p className="font-sans text-xs text-[#7A1E1E]/70 leading-relaxed font-medium">
                      {lang === 'en' 
                        ? 'Perform rituals physically at Panditji\'s private Puja Sthal, or attend remotely via live online stream. Consecrated Prasad is shipped to your door.'
                        : 'पंडितजी के पूजा स्थल पर आकर या वीडियो कॉल द्वारा घर बैठे संकल्प लें। पूजा के बाद सिद्ध प्रसाद आपके घर भेज दिया जाएगा।'}
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* Testimonials Carousel */}
            <TestimonialsCarousel lang={lang} />

            {/* Quick Preview of Blog posts */}
            <section className="py-20 bg-[#FAF8F2] border-t border-[#F2E6CE]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">{lang === 'en' ? 'Sacred Scripture' : 'वैदिक संहिता'}</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-1">{lang === 'en' ? 'Latest Scholarly Publications' : 'नवीनतम ज्ञानवर्धक लेख'}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => handleSelectPost(post)}
                      className="group cursor-pointer bg-[#FFFDF7] border border-[#F2E6CE]/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] text-[#E88921] uppercase tracking-wider font-sans font-bold">{post.category}</span>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[#7A1E1E] group-hover:text-[#E88921] transition-colors mt-1 mb-2 leading-snug">{post.title[lang]}</h4>
                        <p className="font-sans text-xs text-[#7A1E1E]/70 line-clamp-2">{post.excerpt[lang]}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E88921] mt-4">
                        <span>{lang === 'en' ? 'Read Article' : 'लेख पढ़ें'}</span>
                        <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Leads Generation form block */}
            <ContactSection lang={lang} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] selection:bg-[#E88921]/20 selection:text-[#7A1E1E] flex flex-col justify-between overflow-x-hidden">
      
      {/* Sticky responsive bilingual Header navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* Main viewport rendering context */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Persistent floating Phone and WhatsApp Lead buttons */}
      <FloatingButtons lang={lang} />

      {/* Traditional Silhouette Footer element */}
      <Footer
        lang={lang}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

    </div>
  );
}
