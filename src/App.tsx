/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

// Data & Types
import { Language, BlogPost } from './types';
import { servicesData, blogPosts } from './data';

// Custom Reusable Components
import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButtons';
import TempleDivider from './components/TempleDivider';
import TrimbakeshwarSection from './components/TrimbakeshwarSection';
import AboutUsSection from './components/AboutUsSection';
import ServiceCard from './components/ServiceCard';
import ServiceDetail from './components/ServiceDetail';
import GallerySection from './components/GallerySection';
import BlogSection from './components/BlogSection';
import BlogDetail from './components/BlogDetail';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import KaalSarpLanding from './components/KaalSarpLanding';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'en' || langParam === 'hi') {
      return langParam as Language;
    }
    if (window.location.pathname.startsWith('/hi')) {
      return 'hi';
    }
    return 'en';
  });
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    // The mobile hero image is preloaded in index.html; avoid re-fetching heavy desktop art on phones.
    const criticalImages = isMobile ? ['/images/hero-mobile.webp'] : ['/images/bramahagiri.webp'];
    const secondaryImages = [
      '/images/gallery1.jpeg','/images/gallery2.jpeg','/images/gallery3.jpeg','/images/kalsarp puja.jpeg','/images/galllery4.jpeg','/images/gallery7.jpeg','/images/online.jpeg',
      '/images/mahamrityunjay.jpg','/images/navgrah.jpg','/images/pitrudosh.jpg','/images/narayan naagbali.jpg','/images/tripindi.jpg','/images/rudrabhishek.jpg','/images/mangal dosh.png'
    ];
    const loadImages = (urls: string[]) => Promise.all(urls.map(src => new Promise<void>(resolve => { const img = new Image(); img.src = src; img.onload = () => resolve(); img.onerror = () => resolve(); })));
    loadImages(criticalImages).then(() => {
      setTimeout(() => {
        if ('requestIdleCallback' in window) (window as any).requestIdleCallback(() => { loadImages(secondaryImages); });
        else loadImages(secondaryImages);
      }, 1500);
    });
  }, []);

  useEffect(() => {
    if (activeTab === 'home' || activeTab === 'kaal-sarp-puja' || activeTab === 'kaal-sarp-puja-trimbakeshwar' || activeTab === 'kaalsarp-puja') return;
    let title = '';
    if (lang === 'en') {
      if (activeTab === 'trimbakeshwar') title = 'About Trimbakeshwar - Town History & Legend';
      else if (activeTab === 'about') title = 'About Panditji | Trimbakeshwar Puja';
      else if (activeTab === 'gallery') title = 'Puja Gallery | Trimbakeshwar';
      else if (activeTab === 'services') title = 'Scriptural Vedic Rituals | Trimbakeshwar';
      else if (activeTab.startsWith('service-')) {
        const id = activeTab.replace('service-', '');
        const s = servicesData.find(serv => serv.id === id);
        title = `${s ? `${s.title.en} (${s.title.hi})` : 'Ritual'} - Complete Guide | Trimbakeshwar`;
      } else if (activeTab === 'blog') title = 'Puja Guides & Devotee Testimonials';
      else if (activeTab.startsWith('blog-')) {
        const id = activeTab.replace('blog-', '');
        const p = blogPosts.find(post => post.id === id);
        title = `${p ? p.title.en : 'Puja Guide'} | Trimbakeshwar Blog`;
      } else if (activeTab === 'faq') title = 'Frequently Answered Questions | Trimbakeshwar Puja';
    } else {
      if (activeTab === 'trimbakeshwar') title = 'त्र्यंबकेश्वर परिचय - पावन इतिहास और कथाएँ';
      else if (activeTab === 'about') title = 'पंडित बिनीत शास्त्रीजी एवं पीढ़ीगत परंपरा | त्र्यंबकेश्वर वैदिक पूजा';
      else if (activeTab === 'gallery') title = 'पावन पूजा गैलरी दर्शन | त्र्यंबकेश्वर';
      else if (activeTab === 'services') title = 'शास्त्रोक्त वैदिक अनुष्ठान| त्र्यंबकेश्वर';
      else if (activeTab.startsWith('service-')) {
        const id = activeTab.replace('service-', '');
        const s = servicesData.find(serv => serv.id === id);
        title = `${s ? s.title.hi : 'अनुष्ठान'} - संपूर्ण पूजा विधि | त्र्यंबकेश्वर`;
      } else if (activeTab === 'blog') title = 'वैदिक लेख एवं श्रद्धालु समीक्षाएं | त्र्यंबकेश्वर ब्लॉग';
      else if (activeTab.startsWith('blog-')) {
        const id = activeTab.replace('blog-', '');
        const p = blogPosts.find(post => post.id === id);
        title = `${p ? p.title.hi : 'आध्यात्मिक लेख'} | त्र्यंबकेश्वर ब्लॉग`;
      } else if (activeTab === 'faq') title = 'अक्सर पूछे जाने वाले सवाल-जवाब | त्र्यंबकेश्वर';
    }
    if (title) document.title = title;
  }, [lang, activeTab]);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash) {
        if (['kaal-sarp-puja', 'kaal-sarp-puja-trimbakeshwar', 'kaalsarp-puja', 'kaalsarp-puja-trimbakeshwar', 'kaal-sarp'].includes(hash)) {
          setActiveTab('home');
          return;
        }
        setActiveTab(hash);
      } else {
        const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
        if (['kaal-sarp-puja-trimbakeshwar', 'kaal-sarp-puja', 'kaalsarp-puja', 'kaalsarp-puja-trimbakeshwar'].includes(path)) {
          setActiveTab('home');
        }
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = `#/${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.replaceState({}, '', url.toString());
  };

  const handleSelectService = (id: string) => {
    handleTabChange(`service-${id}`);
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    handleTabChange(`blog-${post.id}`);
  };

  const renderContent = () => {
    if (activeTab.startsWith('service-')) {
      const id = activeTab.replace('service-', '');
      const selectedService = servicesData.find(s => s.id === id);
      if (selectedService) {
        return <ServiceDetail service={selectedService} lang={lang} onBack={() => handleTabChange('services')} />;
      }
    }
    if (activeTab.startsWith('blog-')) {
      const id = activeTab.replace('blog-', '');
      const post = blogPosts.find(p => p.id === id) || selectedPost || blogPosts[0];
      return <BlogDetail post={post} lang={lang} onBack={() => handleTabChange('blog')} onSelectPost={handleSelectPost} />;
    }
    switch (activeTab) {
      case 'trimbakeshwar':
        return (
          <section className="pt-16">
            <TrimbakeshwarSection lang={lang} />
            <ContactSection lang={lang} />
          </section>
        );
      case 'services':
        return (
          <section className="pt-24 pb-16 bg-[#FFFDF7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
                  {lang === 'en' ? 'Divine Remedial Services • दैवीय पूजा अनुष्ठान' : 'दैवीय पूजा अनुष्ठान'}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-2">
                  {lang === 'en' ? 'Authentic Vedic Ritual Procedures' : 'प्रामाणिक वैदिक पूजा एवं दोष निवारण'}
                </h1>
                {lang === 'en' && <p className="font-serif text-base sm:text-lg font-bold text-[#E88921] mb-4">(कालसर्प दोष शांति, नारायण नागबलि एवं पितृ दोष निवारण)</p>}
                <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium">
                  {lang === 'en'
                    ? 'Explore complete preparation, durations, and scriptural procedures of sacred ceremonies conducted strictly in accordance with Sanskrit texts in the holy town of Trimbakeshwar.'
                    : 'वेदों और संस्कृत ग्रंथों के नियमों के अनुसार त्र्यंबकेश्वर में संपन्न की जाने वाली पावन पूजाओं के मुहूर्त, अवधि एवं विधि की जानकारी प्राप्त करें।'}
                </p>
                <TempleDivider />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map(service => (
                  <ServiceCard key={service.id} service={service} lang={lang} onSelect={handleSelectService} />
                ))}
              </div>
            </div>
            <ContactSection lang={lang} />
          </section>
        );
      case 'about':
        return (
          <section className="pt-16">
            <AboutUsSection lang={lang} />
            <ContactSection lang={lang} />
          </section>
        );
      case 'gallery':
        return (
          <section className="pt-16">
            <GallerySection lang={lang} />
            <ContactSection lang={lang} />
          </section>
        );
      case 'blog':
        return (
          <section className="pt-16">
            <BlogSection lang={lang} onSelectPost={handleSelectPost} />
            <div className="border-t border-[#F2E6CE]/30">
            </div>
            <ContactSection lang={lang} />
          </section>
        );
      case 'faq':
        return (
          <section className="pt-16">
            <FAQSection lang={lang} />
            <ContactSection lang={lang} />
          </section>
        );
      case 'contact':
        return (
          <section className="pt-16">
            <ContactPage lang={lang} />
          </section>
        );
      case 'home':
      case 'kaal-sarp-puja':
      case 'kaal-sarp-puja-trimbakeshwar':
      case 'kaalsarp-puja':
      case 'kaalsarp-puja-trimbakeshwar':
      default:
        return <KaalSarpLanding lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] selection:bg-[#E88921]/20 selection:text-[#7A1E1E] flex flex-col justify-between overflow-x-hidden">
      <Navbar lang={lang} setLang={handleLanguageChange} activeTab={activeTab} setActiveTab={handleTabChange} />
      <main className="flex-1">{renderContent()}</main>
      <FloatingButtons lang={lang} />
      <Footer lang={lang} activeTab={activeTab} setActiveTab={handleTabChange} />
    </div>
  );
}
