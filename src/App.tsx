/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useState, useEffect } from 'react';

// Data & Types
import { Language, BlogPost } from './types';
import { serviceIndex } from './service-index';

// Custom Reusable Components
import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButtons';
import TempleDivider from './components/TempleDivider';
import Footer from './components/Footer';
import KaalSarpLanding from './components/KaalSarpLanding';

// Route-level code splitting: the landing hero ships in the initial bundle, everything else loads on demand.
const TrimbakeshwarSection = lazy(() => import('./components/TrimbakeshwarSection'));
const AboutUsSection = lazy(() => import('./components/AboutUsSection'));
const ServicesGrid = lazy(() => import('./components/ServicesGrid'));
const ServiceDetailRoute = lazy(() => import('./components/ServiceDetailRoute'));
const GallerySection = lazy(() => import('./components/GallerySection'));
const BlogSection = lazy(() => import('./components/BlogSection'));
const BlogDetailRoute = lazy(() => import('./components/BlogDetailRoute'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const ContactPage = lazy(() => import('./components/ContactPage'));

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
  const NARAYAN_ROUTES = ['narayan-nagbali-puja-trimbakeshwar', 'narayan-nagbali-puja', 'narayan-nagbali', 'narayan-naagbali'];
  const KAALSARP_ROUTES = ['kaal-sarp-puja-trimbakeshwar', 'kaal-sarp-puja', 'kaalsarp-puja', 'kaalsarp-puja-trimbakeshwar', 'kaal-sarp'];

  const [activeTab, setActiveTab] = useState<string>(() => {
    const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
    const hash = window.location.hash.replace('#/', '');
    if (NARAYAN_ROUTES.includes(hash) || NARAYAN_ROUTES.includes(path)) return 'narayan-nagbali-home';
    return 'home';
  });

  useEffect(() => {
    // Warm only the images the visitor is likely to see next, and only when the browser is idle.
    const secondaryImages = [
      '/images/gallery2.jpeg', '/images/gallery3.jpeg', '/images/kalsarp puja.jpeg', '/images/narayan naagbali.jpg', '/images/bramahagiri.webp',
    ];
    const prefetch = () => secondaryImages.forEach((src) => { const img = new Image(); img.src = src; });
    const idle = (window as any).requestIdleCallback;
    if (idle) idle(prefetch, { timeout: 3000 });
    else setTimeout(prefetch, 2000);
  }, []);

  useEffect(() => {
    if (activeTab === 'home' || activeTab === 'narayan-nagbali-home' || activeTab === 'kaal-sarp-puja' || activeTab === 'kaal-sarp-puja-trimbakeshwar' || activeTab === 'kaalsarp-puja') return;
    let title = '';
    if (lang === 'en') {
      if (activeTab === 'trimbakeshwar') title = 'About Trimbakeshwar - Town History & Legend';
      else if (activeTab === 'about') title = 'About Panditji | Trimbakeshwar Puja';
      else if (activeTab === 'gallery') title = 'Puja Gallery | Trimbakeshwar';
      else if (activeTab === 'services') title = 'Scriptural Vedic Rituals | Trimbakeshwar';
      else if (activeTab.startsWith('service-')) {
        const id = activeTab.replace('service-', '');
        const s = serviceIndex.find(serv => serv.id === id);
        title = `${s ? `${s.title.en} (${s.title.hi})` : 'Ritual'} - Complete Guide | Trimbakeshwar`;
      } else if (activeTab === 'blog') title = 'Puja Guides & Devotee Testimonials';
      else if (activeTab.startsWith('blog-')) {
        title = 'Puja Guide | Trimbakeshwar Blog';
      } else if (activeTab === 'faq') title = 'Frequently Answered Questions | Trimbakeshwar Puja';
    } else {
      if (activeTab === 'trimbakeshwar') title = 'त्र्यंबकेश्वर परिचय - पावन इतिहास और कथाएँ';
      else if (activeTab === 'about') title = 'पंडित बिनीत शास्त्रीजी एवं पीढ़ीगत परंपरा | त्र्यंबकेश्वर वैदिक पूजा';
      else if (activeTab === 'gallery') title = 'पावन पूजा गैलरी दर्शन | त्र्यंबकेश्वर';
      else if (activeTab === 'services') title = 'शास्त्रोक्त वैदिक अनुष्ठान| त्र्यंबकेश्वर';
      else if (activeTab.startsWith('service-')) {
        const id = activeTab.replace('service-', '');
        const s = serviceIndex.find(serv => serv.id === id);
        title = `${s ? s.title.hi : 'अनुष्ठान'} - संपूर्ण पूजा विधि | त्र्यंबकेश्वर`;
      } else if (activeTab === 'blog') title = 'वैदिक लेख एवं श्रद्धालु समीक्षाएं | त्र्यंबकेश्वर ब्लॉग';
      else if (activeTab.startsWith('blog-')) {
        title = 'आध्यात्मिक लेख | त्र्यंबकेश्वर ब्लॉग';
      } else if (activeTab === 'faq') title = 'अक्सर पूछे जाने वाले सवाल-जवाब | त्र्यंबकेश्वर';
    }
    if (title) document.title = title;
  }, [lang, activeTab]);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '');
      const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
      if (hash) {
        if (NARAYAN_ROUTES.includes(hash)) {
          setActiveTab('narayan-nagbali-home');
          return;
        }
        if (KAALSARP_ROUTES.includes(hash)) {
          setActiveTab('home');
          return;
        }
        setActiveTab(hash);
      } else if (NARAYAN_ROUTES.includes(path)) {
        setActiveTab('narayan-nagbali-home');
      } else if (KAALSARP_ROUTES.includes(path)) {
        setActiveTab('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab === 'narayan-nagbali-home' ? '#/narayan-nagbali-puja-trimbakeshwar' : `#/${tab}`;
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
    handleTabChange(`blog-${post.id}`);
  };

  const renderContent = () => {
    if (activeTab.startsWith('service-')) {
      return <ServiceDetailRoute id={activeTab.replace('service-', '')} lang={lang} onBack={() => handleTabChange('services')} />;
    }
    if (activeTab.startsWith('blog-')) {
      return <BlogDetailRoute id={activeTab.replace('blog-', '')} lang={lang} onBack={() => handleTabChange('blog')} onSelectPost={handleSelectPost} />;
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
              <ServicesGrid lang={lang} onSelect={handleSelectService} />
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
      case 'narayan-nagbali-home':
        return <KaalSarpLanding lang={lang} variant="narayan-nagbali" />;
      case 'home':
      case 'kaal-sarp-puja':
      case 'kaal-sarp-puja-trimbakeshwar':
      case 'kaalsarp-puja':
      case 'kaalsarp-puja-trimbakeshwar':
      default:
        return <KaalSarpLanding lang={lang} variant="kaalsarp" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] selection:bg-[#E88921]/20 selection:text-[#7A1E1E] flex flex-col justify-between overflow-x-hidden">
      <Navbar lang={lang} setLang={handleLanguageChange} activeTab={activeTab} setActiveTab={handleTabChange} />
      <main className="flex-1"><Suspense fallback={<div className="min-h-[60vh]" />}>{renderContent()}</Suspense></main>
      <FloatingButtons lang={lang} />
      <Footer lang={lang} activeTab={activeTab} setActiveTab={handleTabChange} />
    </div>
  );
}
