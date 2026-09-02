/**
 * Mobile-first Google Ads landing page for Trimbakeshwar Vedic Puja inquiries.
 * Visual-first, bilingual hero, direct call conversion, lightweight sections.
 */
import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone } from 'lucide-react';
import { businessConfig } from '../data';
import { Language } from '../types';

interface KaalSarpLandingProps {
  lang: Language;
}

const heroSlides = [
  {
    src: '/images/gallery1.jpeg',
    alt: 'Trimbakeshwar Jyotirlinga Temple photo placeholder for authentic temple image',
    label: 'Trimbakeshwar Temple',
  },
  {
    src: '/images/kalsarp puja.jpeg',
    alt: 'Vedic ritual ceremony photo placeholder for Kaalsarp Puja at Trimbakeshwar',
    label: 'Vedic Rituals',
  },
  {
    src: '/images/gallery3.jpeg',
    alt: 'Pandit performing puja photo placeholder for authentic ceremony image',
    label: 'Pandit Performing Puja',
  },
];

const serviceCards = [
  {
    id: 'kaalsarp',
    image: '/images/kalsarp puja.jpeg',
    titleHi: 'कालसर्प पूजा',
    titleEn: 'Kaalsarp Puja at Trimbakeshwar',
    description:
      'कुंडली में राहु-केतु से संबंधित कालसर्प दोष की शांति हेतु शास्त्रोक्त संकल्प, मंत्र जाप और पूजा विधि। Trimbakeshwar is traditionally preferred for this remedial ritual.',
    link: 'Know more about Kaalsarp Puja →',
  },
  {
    id: 'narayan-nagbali',
    image: '/images/narayan naagbali.jpg',
    titleHi: 'नारायण नागबली पूजा',
    titleEn: 'Narayan Nagbali Puja at Trimbakeshwar',
    description:
      'पितृ दोष, अपूर्ण इच्छाओं और नाग संबंधित दोषों की शांति के लिए त्र्यंबकेश्वर में की जाने वाली पावन वैदिक पूजा। Guidance, samagri and date coordination are arranged.',
    link: 'Know more about Narayan Nagbali Puja →',
  },
];

const questionCards = [
  'What is Kaalsarp Puja?',
  'Who performs the rituals?',
  'What is the duration of Narayan Nagbali Puja?',
  'What arrangements and samagri are provided?',
];

export default function KaalSarpLanding({ lang }: KaalSarpLandingProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const whatsappHref = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
    'Namaste, I want to enquire about Kaalsarp Puja and Narayan Nagbali Puja at Trimbakeshwar.'
  )}`;

  useEffect(() => {
    const title = 'त्र्यंबकेश्वर में कालसर्प पूजा एवं नारायण नागबली पूजा | Trimbakeshwar Vedic Puja Services';
    document.title = title;

    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute(
      'content',
      'Call now for Kaalsarp Puja and Narayan Nagbali Puja at Trimbakeshwar. Authentic Vedic rituals, direct Pandit guidance, samagri and booking assistance.'
    );
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, []);
  const smoothScroll = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToServicesPage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.hash = '#/services';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="bg-[#FFFDF7] text-[#1f1b16] overflow-x-hidden">
      <section className="relative min-h-[92svh] pt-28 pb-12 flex items-end md:items-center overflow-hidden" aria-labelledby="landing-heading">
        <div className="absolute inset-0 bg-[#2a1710]" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt=""
              width={1440}
              height={960}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                activeSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Black-glass overlay: uniform ~45% dark keeps imagery visible while content pops */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#7A1E1E]/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 bg-white/10 border border-[#D4AF37]/45 text-[#F5E3C0] backdrop-blur-sm px-3 py-2 text-[11px] font-bold tracking-[0.22em] uppercase">
              <MapPin className="h-3.5 w-3.5 text-[#E88921]" /> Trimbakeshwar • Nashik • Jyotirlinga Kshetra
            </p>

            <h1 id="landing-heading" className="mt-5 font-serif text-[2.2rem] sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white drop-shadow-lg">
              त्र्यंबकेश्वर में कालसर्प पूजा एवं नारायण नागबली पूजा
            </h1>
            <h2 className="mt-3 font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-[#F0A94A]">
              Kaalsarp Puja & Narayan Nagbali Puja at Trimbakeshwar
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/86 font-medium">
              अनुभवी वैदिक पंडितों के मार्गदर्शन में त्र्यंबकेश्वर तीर्थ क्षेत्र में शास्त्रोक्त पूजा विधि। Get clear guidance for muhurat, samagri, ritual duration and direct booking support.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+917020682622"
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#E88921] hover:bg-[#cf7618] text-white px-6 py-4 font-bold text-base shadow-xl border border-[#D4AF37]/50 transition-colors"
                aria-label={`Call Now ${businessConfig.phoneDisplay}`}
              >
                <Phone className="h-5 w-5 fill-current" /> Call Now: {businessConfig.phoneDisplay}
              </a>
              <a
                href="#services"
                onClick={smoothScroll('services')}
                className="inline-flex min-h-14 items-center justify-center gap-2 bg-white/95 hover:bg-white text-[#7A1E1E] px-6 py-4 font-bold text-sm shadow-lg border border-white/40 transition-colors"
              >
                View Puja Services <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2" aria-label="Hero image carousel status">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${activeSlide === index ? 'w-9 bg-[#E88921]' : 'w-2.5 bg-white/55'}`}
                  aria-label={`Show ${slide.label}`}
                />
              ))}
              <span className="ml-2 text-xs font-semibold text-white/70">{heroSlides[activeSlide].label}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-[#F2E6CE]" aria-label="Trust highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Direct phone inquiry', 'Traditional Vedic vidhi', 'Samagri guidance', 'Trimbakeshwar location'].map((item) => (
            <div key={item} className="flex items-center gap-2 bg-[#FAF8F2] border border-[#F2E6CE] px-3 py-3">
              <CheckCircle2 className="h-4 w-4 text-[#E88921] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#7A1E1E]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-14 sm:py-18 lg:py-20 bg-[#FFFDF7] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#E88921]">Core Ritual Services</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E]">मुख्य पूजा सेवाएं</h2>
            <p className="mt-3 text-sm sm:text-base text-[#1f1b16]/70 leading-relaxed">Visual-first service cards with quick call access. Choose the puja and speak directly for date, duration and arrangements.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {serviceCards.map((service) => (
              <section key={service.id} className="bg-white border border-[#F2E6CE] shadow-sm overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.titleEn} ceremony image placeholder`}
                  width={760}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 sm:h-72 object-cover bg-[#F2E6CE]"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#7A1E1E]">{service.titleHi}</h3>
                  <p className="mt-1 text-sm font-bold text-[#E88921]">{service.titleEn}</p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#1f1b16]/72">{service.description}</p>
                  <div className="mt-5 flex flex-col xs:flex-row sm:flex-row gap-3 sm:items-center">
                    <a
                      href="tel:+917020682622"
                      className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#7A1E1E] hover:bg-[#5a1616] text-white px-5 py-3 text-sm font-bold transition-colors"
                    >
                      <Phone className="h-4 w-4 fill-current" /> Call Now: {businessConfig.phoneDisplay}
                    </a>
                    <a href="#questions" onClick={smoothScroll('questions')} className="inline-flex min-h-12 items-center text-sm font-bold text-[#7A1E1E] hover:text-[#E88921]">
                      {service.link}
                    </a>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#/services"
              onClick={goToServicesPage}
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#7A1E1E] hover:bg-[#5a1616] text-white px-8 py-4 font-bold text-base shadow-lg border border-[#D4AF37]/50 transition-colors"
            >
              View More Puja Services • सभी पूजा सेवाएं <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="trimbakeshwar" className="py-14 sm:py-18 lg:py-20 bg-white border-y border-[#F2E6CE] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <img
            src="/images/bramahagiri.webp"
            alt="Trimbakeshwar temple and sacred Jyotirlinga location imagery placeholder"
            width={780}
            height={520}
            loading="lazy"
            decoding="async"
            className="w-full h-72 sm:h-96 object-cover border border-[#F2E6CE] shadow-sm bg-[#F2E6CE]"
          />
          <div>
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#E88921]">Sacred Jyotirlinga Location</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E]">त्र्यंबकेश्वर तीर्थ क्षेत्र में पूजा</h2>
            <p className="mt-4 text-base leading-relaxed text-[#1f1b16]/75">
              Trimbakeshwar, Nashik is revered as a holy Teerth Kshetra associated with the Jyotirlinga and sacred Godavari origin. Devotees traditionally choose this place for Kaalsarp Shanti, Narayan Nagbali and ancestral remedial rituals under qualified Pandit guidance.
            </p>
            <a href="#questions" onClick={smoothScroll('questions')} className="mt-5 inline-flex min-h-12 items-center gap-2 text-[#7A1E1E] hover:text-[#E88921] font-bold">
              Explore Trimbakeshwar →
            </a>
          </div>
        </div>
      </section>

      <section id="questions" className="py-14 sm:py-18 lg:py-20 bg-[#FAF8F2] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#E88921]">Quick Inquiry Teasers</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E]">पूजा से जुड़े सामान्य प्रश्न</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {questionCards.map((question) => (
              <a
                key={question}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-[#F2E6CE] p-5 min-h-32 flex flex-col justify-between hover:border-[#E88921]/60 hover:shadow-md transition-all"
              >
                <span className="text-base font-bold text-[#7A1E1E] group-hover:text-[#E88921]">{question} →</span>
                <span className="mt-4 text-xs font-semibold text-[#1f1b16]/55">Tap to ask on WhatsApp</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#7A1E1E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">Need guidance for puja date or booking?</h2>
          <p className="mt-3 text-white/78 leading-relaxed">Call now for direct inquiry about Kaalsarp Puja, Narayan Nagbali Puja, samagri and arrangements at Trimbakeshwar.</p>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <a href="tel:+917020682622" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#E88921] hover:bg-[#cf7618] text-white px-6 py-4 font-bold transition-colors">
              <Phone className="h-5 w-5 fill-current" /> Call Now: {businessConfig.phoneDisplay}
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb857] text-white px-6 py-4 font-bold transition-colors">
              <MessageCircle className="h-5 w-5 fill-current" /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
