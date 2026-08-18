/**
 * High-Converting Kaal Sarp Puja Landing Page
 * Optimized for Google Ads: Kaal Sarp Puja in Trimbakeshwar
 */
import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ShieldCheck, Users, Calendar, Clock, MapPin, Check, ChevronDown, Star, Quote, Award, HeartHandshake, Compass, Plane, Train, Car, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { businessConfig, servicesData, testimonialsData } from '../data';
import { Language } from '../types';

interface KaalSarpLandingProps {
  lang: Language;
}

export default function KaalSarpLanding({ lang }: KaalSarpLandingProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', date: '', message: '', devotees: '' });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const kaalSarpService = servicesData.find(s => s.id === 'kalsarpa-shanti');

  const prefilledWhatsApp = lang === 'en'
    ? 'Hello, I want to enquire about Kaal Sarp Puja in Trimbakeshwar.'
    : 'नमस्ते, मुझे त्र्यंबकेश्वर में काल सर्प पूजा के बारे में जानकारी चाहिए।';
  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(prefilledWhatsApp)}`;
  const phoneHref = `tel:${businessConfig.phone}`;

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof (window as any).gtag_report_conversion === 'function') {
      e.preventDefault();
      (window as any).gtag_report_conversion(phoneHref);
    }
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', { 'send_to': 'AW-18301107881/mHjdCIve3s4cEKn90pZE' });
      (window as any).gtag('event', 'phone_click', { event_category: 'conversion', event_label: 'kaal_sarp_landing_phone' });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', { 'send_to': 'AW-18301107881/WhatsApp' });
      (window as any).gtag('event', 'whatsapp_click', { event_category: 'conversion', event_label: 'kaal_sarp_landing_whatsapp' });
    }
  };

  const handleBookingClick = (label: string) => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'booking_click', { event_category: 'conversion', event_label: label });
    }
    document.getElementById('kaal-sarp-booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !consent) return;

    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', { 'send_to': 'AW-18301107881/ZzB6CNLJ384cEKn90pZE' });
      (window as any).gtag('event', 'generate_lead', { event_category: 'conversion', event_label: 'kaal_sarp_booking_form' });
    }

    const msg = lang === 'en'
      ? `*Kaal Sarp Puja Booking Request - Trimbakeshwar*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Preferred Date:* ${form.date || 'Not specified'}\n*Devotees:* ${form.devotees || '1'}\n*Message:* ${form.message || 'Please share availability and price details for Kaal Sarp Puja in Trimbakeshwar.'}`
      : `*काल सर्प पूजा बुकिंग अनुरोध - त्र्यंबकेश्वर*\n\n*नाम:* ${form.name}\n*फ़ोन:* ${form.phone}\n*पसंदीदा तारीख:* ${form.date || 'निर्दिष्ट नहीं'}\n*श्रद्धालु:* ${form.devotees || '1'}\n*संदेश:* ${form.message || 'कृपया काल सर्प पूजा की उपलब्धता और शुल्क बताएं।'}`;

    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', date: '', message: '', devotees: '' });
    setConsent(false);
    setTimeout(() => setSubmitted(false), 7000);
  };

  // SEO: dynamic title + meta + structured data
  useEffect(() => {
    const title = lang === 'en'
      ? 'Kaal Sarp Puja in Trimbakeshwar | Trimbakeshwar Vedic Puja Services'
      : 'त्र्यंबकेश्वर में काल सर्प पूजा | त्र्यंबकेश्वर वैदिक पूजा सेवा';
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content',
      lang === 'en'
        ? 'Book Kaal Sarp Puja in Trimbakeshwar, Nashik. Get puja details, availability and booking assistance from experienced Pandit Ji. Clear process, direct contact.'
        : 'त्र्यंबकेश्वर, नाशिक में काल सर्प पूजा बुक करें। अनुभवी पंडित जी से पूजा विधि, मुहूर्त और बुकिंग सहायता प्राप्त करें।'
    );

    const ldId = 'kaal-sarp-ld';
    document.getElementById(ldId)?.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = ldId;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://trimbakeshwarpanditji.in/#localbusiness",
          "name": "Trimbakeshwar Vedic Puja Services",
          "image": "https://trimbakeshwarpanditji.in/images/main-photo.png",
          "telephone": businessConfig.phone,
          "email": businessConfig.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Trimbakeshwar, Nashik, Maharashtra",
            "addressLocality": "Trimbakeshwar",
            "addressRegion": "Maharashtra",
            "postalCode": "422212",
            "addressCountry": "IN"
          },
          "geo": { "@type": "GeoCoordinates", "latitude": 19.9419, "longitude": 73.5298 },
          "url": "https://trimbakeshwarpanditji.in/",
          "priceRange": "₹₹",
          "description": "Kaal Sarp Puja in Trimbakeshwar with experienced Pandit Ji. Booking assistance, clear puja process and guidance at Trimbakeshwar, Nashik."
        },
        {
          "@type": "Service",
          "@id": "https://trimbakeshwarpanditji.in/#kaal-sarp-service",
          "serviceType": "Kaal Sarp Puja",
          "name": "Kaal Sarp Puja in Trimbakeshwar",
          "provider": { "@id": "https://trimbakeshwarpanditji.in/#localbusiness" },
          "areaServed": { "@type": "City", "name": "Trimbakeshwar" },
          "description": "Book Kaal Sarp Puja at Trimbakeshwar with experienced Pandit Ji. Get guidance for the puja process, timing and booking. Location: Trimbakeshwar, Nashik, Maharashtra.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "lowPrice": "2100",
            "highPrice": "5100",
            "availability": "https://schema.org/InStock",
            "url": "https://trimbakeshwarpanditji.in/#kaal-sarp-booking"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": lang === 'en' ? "What is Kaal Sarp Puja?" : "काल सर्प पूजा क्या है?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": lang === 'en'
                  ? "Kaal Sarp Puja is a traditional Vedic ritual performed to address the Kaal Sarp Yog in a birth chart, where all seven planets are positioned between Rahu and Ketu. People traditionally perform it to seek relief from obstacles and for peace and stability."
                  : "काल सर्प पूजा एक पारंपरिक वैदिक अनुष्ठान है जो कुंडली में काल सर्प योग के निवारण हेतु किया जाता है।"
              }
            },
            {
              "@type": "Question",
              "name": lang === 'en' ? "Where is Kaal Sarp Puja performed in Trimbakeshwar?" : "त्र्यंबकेश्वर में काल सर्प पूजा कहाँ की जाती है?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": lang === 'en'
                  ? "Kaal Sarp Puja is performed in Trimbakeshwar, Nashik, Maharashtra — a Jyotirlinga town on the Godavari. Contact us for exact location guidance and Google Maps directions."
                  : "काल सर्प पूजा त्र्यंबकेश्वर, नाशिक, महाराष्ट्र में की जाती है।"
              }
            },
            {
              "@type": "Question",
              "name": lang === 'en' ? "How can I book Kaal Sarp Puja in Trimbakeshwar?" : "त्र्यंबकेश्वर में काल सर्प पूजा कैसे बुक करें?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": lang === 'en'
                  ? "You can book by calling, WhatsApp, or submitting the booking form. Our team will help you select a suitable date, explain the process and share preparation guidance."
                  : "आप कॉल, व्हाट्सएप या बुकिंग फॉर्म के माध्यम से बुक कर सकते हैं।"
              }
            },
            {
              "@type": "Question",
              "name": lang === 'en' ? "How much does Kaal Sarp Puja cost?" : "काल सर्प पूजा का शुल्क कितना है?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": lang === 'en'
                  ? "Kaal Sarp Puja dakshina generally starts from ₹2,100. The exact amount depends on the puja variant (Maha Puja ₹5,100). Contact us for transparent pricing and availability."
                  : "काल सर्प पूजा की दक्षिणा सामान्यतः ₹2,100 से शुरू होती है।"
              }
            },
            {
              "@type": "Question",
              "name": lang === 'en' ? "How long does Kaal Sarp Puja take?" : "काल सर्प पूजा में कितना समय लगता है?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": lang === 'en'
                  ? "The ritual is typically completed in 1 day, approximately 2 to 3 hours, including Sankalp, Rahu-Ketu mantras and visarjan."
                  : "यह अनुष्ठान सामान्यतः 1 दिन में लगभग 2-3 घंटे में पूर्ण होता है।"
              }
            },
            {
              "@type": "Question",
              "name": lang === 'en' ? "Can I contact the Pandit before booking?" : "क्या बुकिंग से पहले पंडित जी से बात कर सकते हैं?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": lang === 'en'
                  ? "Yes. You can directly call or WhatsApp Pandit Ji to discuss your birth details, preferred dates and preparation before confirming the booking."
                  : "हाँ, आप बुकिंग से पहले सीधे पंडित जी से कॉल या व्हाट्सएप पर बात कर सकते हैं।"
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trimbakeshwarpanditji.in/" },
            { "@type": "ListItem", "position": 2, "name": "Kaal Sarp Puja in Trimbakeshwar", "item": "https://trimbakeshwarpanditji.in/#kaal-sarp" }
          ]
        }
      ]
    });
    document.head.appendChild(script);
    return () => { document.getElementById(ldId)?.remove(); };
  }, [lang]);

  const faqs = [
    {
      id: 'f-what-is',
      q: lang === 'en' ? 'What is Kaal Sarp Puja?' : 'काल सर्प पूजा क्या है?',
      a: lang === 'en'
        ? 'Kaal Sarp Puja is a traditional Vedic ritual associated with Kaal Sarp Yog — when all seven planets are positioned between Rahu and Ketu in a birth chart. Devotees traditionally perform it to seek relief from repeated obstacles, delays and instability, and to invite peace and steadiness. The ritual involves Sankalp, Rahu-Ketu mantras, Nag-Nagin rituals and havan, performed with Vedic discipline.'
        : 'काल सर्प पूजा एक पारंपरिक वैदिक अनुष्ठान है जो कुंडली में राहु-केतु के बीच सभी ग्रहों के आने से बनने वाले काल सर्प योग के निवारण हेतु किया जाता है। इसमें संकल्प, राहु-केतु मंत्र जाप, नाग-नागिन पूजन और हवन शामिल होते हैं।'
    },
    {
      id: 'f-where',
      q: lang === 'en' ? 'Where is Kaal Sarp Puja performed in Trimbakeshwar?' : 'त्र्यंबकेश्वर में काल सर्प पूजा कहाँ की जाती है?',
      a: lang === 'en'
        ? 'Kaal Sarp Puja is performed in Trimbakeshwar, Nashik, Maharashtra — home to the Trimbakeshwar Jyotirlinga and the origin of the Godavari. The town is traditionally regarded as highly suitable for such remedial rituals. We provide clear location guidance, address and Google Maps support after booking. Location: Trimbakeshwar, Pin- 422212.'
        : 'काल सर्प पूजा त्र्यंबकेश्वर, नाशिक, महाराष्ट्र में — त्र्यंबकेश्वर ज्योतिर्लिंग और गोदावरी के उद्गम स्थल पर — की जाती है। बुकिंग के बाद हम स्पष्ट स्थान मार्गदर्शन और गूगल मैप सहायता प्रदान करते हैं। स्थान: त्र्यंबकेश्वर, पिन- 422212।'
    },
    {
      id: 'f-book',
      q: lang === 'en' ? 'How can I book Kaal Sarp Puja in Trimbakeshwar?' : 'त्र्यंबकेश्वर में काल सर्प पूजा कैसे बुक करें?',
      a: lang === 'en'
        ? 'Booking is simple: 1) Call or WhatsApp us, or submit the booking form with your name, phone and preferred date. 2) We help you select a suitable muhurat based on Panchami, Amavasya or Monday. 3) You receive clear preparation guidance. You can speak directly to Pandit Ji before confirming.'
        : 'बुकिंग सरल है: 1) कॉल/व्हाट्सएप या फॉर्म के माध्यम से नाम, फोन और पसंदीदा तारीख भेजें। 2) हम पंचमी/अमावस्या/सोमवार के अनुसार उपयुक्त मुहूर्त चुनने में सहायता करते हैं। 3) तैयारी संबंधी स्पष्ट मार्गदर्शन प्रदान किया जाता है।'
    },
    {
      id: 'f-cost',
      q: lang === 'en' ? 'How much does Kaal Sarp Puja cost?' : 'काल सर्प पूजा की दक्षिणा कितनी है?',
      a: lang === 'en'
        ? 'The dakshina for Kaal Sarp Puja in Trimbakeshwar generally starts from ₹2,100 (Kaal Sarp Puja) and ₹5,100 for Maha Puja with Rahu-Ketu. This includes Samagri where specified. For exact, transparent pricing for your chosen date and variant, contact us — we share complete details without hidden charges.'
        : 'त्र्यंबकेश्वर में काल सर्प पूजा की दक्षिणा सामान्यतः ₹2,100 (काल सर्प पूजा) और महापूजा हेतु ₹5,100 से शुरू होती है। सटीक जानकारी के लिए संपर्क करें।'
    },
    {
      id: 'f-duration',
      q: lang === 'en' ? 'How long does the puja take?' : 'पूजा में कितना समय लगता है?',
      a: lang === 'en'
        ? 'Kaal Sarp Puja is generally a 1-day ritual taking approximately 2–3 hours. You can typically arrive in the morning and complete the ritual the same day. The procedure includes Ganesh Puja, Punyahavachan, worship of Nag-Nagin replicas, Rahu-Ketu mantras, havan and visarjan.'
        : 'यह सामान्यतः 1 दिन का अनुष्ठान है जो लगभग 2-3 घंटे में पूर्ण होता है। इसमें गणेश पूजा, पुण्याहवाचन, नाग-नागिन पूजन, राहु-केतु जाप, हवन और विसर्जन शामिल हैं।'
    },
    {
      id: 'f-bring',
      q: lang === 'en' ? 'What should I bring for the puja?' : 'पूजा के लिए क्या लाना चाहिए?',
      a: lang === 'en'
        ? 'Wear newly purchased traditional attire — white dhoti / light kurta for men, saree for women. Avoid black/green. All main Samagri (flowers, silver Nag-Nagin, havan items) is arranged. Bring a valid ID, and if available, birth details for Sankalp. We share a detailed preparation checklist after booking.'
        : 'नवीन पारंपरिक वस्त्र पहनें — पुरुषों के लिए सफेद धोती/हल्का कुर्ता, महिलाओं के लिए साड़ी। काले/हरे वस्त्रों से बचें। मुख्य सामग्री व्यवस्थित की जाती है। संकल्प हेतु जन्म विवरण साथ लाएं।'
    },
    {
      id: 'f-date',
      q: lang === 'en' ? 'How do I choose a puja date?' : 'पूजा की तारीख कैसे चुनें?',
      a: lang === 'en'
        ? 'Auspicious dates often include Amavasya, Panchami (especially Nag Panchami on 17 Aug 2026), Mondays and certain nakshatras. Share your preferred travel dates and, if you wish, your birth details — Pandit Ji will suggest the most suitable muhurat from the 2026 calendar and help you lock the date.'
        : 'शुभ तिथियों में अमावस्या, पंचमी (विशेषतः नाग पंचमी 17 अगस्त 2026), सोमवार और विशिष्ट नक्षत्र शामिल हैं। अपनी पसंदीदा तारीख भेजें — पंडित जी पंचांग अनुसार उपयुक्त मुहूर्त सुझाएंगे।'
    },
    {
      id: 'f-contact-pandit',
      q: lang === 'en' ? 'Can I contact the Pandit before booking?' : 'क्या बुकिंग से पहले पंडित जी से बात हो सकती है?',
      a: lang === 'en'
        ? 'Yes, direct contact is encouraged. Call or WhatsApp Pandit Ji to discuss your horoscope, queries, process, timing and price before you decide. Contact: +91 70206 82622.'
        : 'हाँ, बुकिंग से पहले सीधे पंडित जी से कॉल/व्हाट्सएप पर बात कर सकते हैं। संपर्क: +91 70206 82622'
    },
  ];

  return (
    <div className="bg-[#FFFDF7] text-[#1a1a1a] overflow-x-hidden">

      {/* ============================================================
          MOBILE HERO (< md) — full-bleed cinematic background image,
          headline, short description and ONE primary CTA, all above
          the fold on 360x800 / 375x812 / 390x844 / 412x915.
          Desktop/tablet hero is untouched and rendered below.
         ============================================================ */}
      <section
        className="md:hidden hero-mobile relative w-full flex flex-col justify-end overflow-hidden bg-[#2b1a12]"
        aria-labelledby="kaal-sarp-h1-mobile"
      >
        {/* Background photograph — object-cover / center, prioritised for LCP */}
        <picture>
          <source srcSet="/images/hero-mobile.webp" type="image/webp" />
          <img
            src="/images/hero-mobile.jpg"
            alt="Shri Trimbakeshwar Jyotirlinga Temple, Nashik — where Kaal Sarp Puja is performed"
            width={900}
            height={1200}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[center_28%] select-none pointer-events-none"
          />
        </picture>

        {/* Dark cinematic gradient — keeps the photo visible, text readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(20,10,6,0.55) 0%, rgba(20,10,6,0.12) 26%, rgba(20,10,6,0.45) 58%, rgba(20,10,6,0.88) 86%, rgba(20,10,6,0.95) 100%)',
          }}
        />
        {/* Warm temple glow at the base */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#7A1E1E]/35 to-transparent pointer-events-none" />

        {/* Content — anchored to the bottom, clear of the floating buttons */}
        {/* justify-end anchors this block to the bottom, so the distance from the
            bottom edge (pb + content) is what guarantees the photo stays visible above it. */}
        <div className="relative z-10 w-full px-5 pt-10 pb-[calc(72px+env(safe-area-inset-bottom))]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-black/30 backdrop-blur-[2px] px-3 py-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E88921]" aria-hidden />
            <span className="text-[10px] font-bold tracking-[0.18em] text-[#F5E3C0] uppercase">
              {lang === 'en' ? 'Trimbakeshwar • Nashik' : 'त्र्यंबकेश्वर • नाशिक'}
            </span>
          </div>

          {/* Headline — responsive clamp, no forced line breaks */}
          <h1
            id="kaal-sarp-h1-mobile"
            className="font-serif font-bold text-white text-[clamp(1.7rem,8.2vw,2.35rem)] leading-[1.12] tracking-tight max-w-[16ch]"
            style={{ textShadow: '0 2px 18px rgba(0,0,0,0.55)' }}
          >
            {lang === 'en' ? (
              <>Kaal Sarp Puja <span className="text-[#F0A94A]">in Trimbakeshwar</span></>
            ) : (
              <>त्र्यंबकेश्वर में <span className="text-[#F0A94A]">काल सर्प पूजा</span></>
            )}
          </h1>

          {/* Short description */}
          <p
            className="mt-2.5 font-sans text-[clamp(0.82rem,3.7vw,0.95rem)] leading-relaxed text-white/85 font-medium max-w-[38ch]"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}
          >
            {lang === 'en'
              ? 'Authentic Vedic ritual at the Jyotirlinga with experienced Pandit Ji. Muhurat, samagri and booking arranged.'
              : 'ज्योतिर्लिंग नगरी में अनुभवी पंडित जी द्वारा शास्त्रोक्त अनुष्ठान। मुहूर्त एवं बुकिंग की पूर्ण व्यवस्था।'}
          </p>

          {/* ONE primary CTA */}
          <a
            href={phoneHref}
            onClick={handlePhoneClick}
            className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-sm bg-[#E88921] px-6 py-4 font-bold text-[15px] text-white shadow-[0_10px_30px_rgba(232,137,33,0.35)] border border-[#D4AF37]/40 active:scale-[0.985] transition-transform"
          >
            <Phone className="w-[18px] h-[18px] fill-current shrink-0" />
            <span className="tracking-wide">{lang === 'en' ? 'Call Now' : 'अभी कॉल करें'}</span>
            <span className="font-sans font-semibold text-white/85 text-[13px]">{businessConfig.phoneDisplay}</span>
          </a>

          {/* Micro reassurance — single quiet line, not a CTA */}
          <p className="mt-3 text-[11px] font-semibold tracking-wide text-white/60 text-center">
            {lang === 'en' ? 'Available 4:30 AM – 8:00 PM • Direct Pandit Ji contact' : 'उपलब्ध: सुबह 4:30 – रात 8:00 • सीधा पंडित संपर्क'}
          </p>
        </div>
      </section>

      {/* HERO - Above the fold: H1 must match search intent (tablet & desktop) */}
      <section className="hidden md:block relative bg-gradient-to-b from-[#FFFDF7] via-[#FAF8F2] to-[#FAF8F2] pt-28 pb-8 lg:pb-14 overflow-hidden" aria-labelledby="kaal-sarp-h1">
        {/* subtle background */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#E88921]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-[#7A1E1E]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-[#7A1E1E]/5 border border-[#7A1E1E]/10 rounded-full px-3 py-1.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#E88921] animate-pulse" aria-hidden />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#7A1E1E] uppercase">
                  {lang === 'en' ? 'Kaal Sarp Puja • Trimbakeshwar' : 'काल सर्प पूजा • त्र्यंबकेश्वर'}
                </span>
              </div>

              <h1 id="kaal-sarp-h1" className="font-serif text-[32px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.05] tracking-tight text-[#7A1E1E]">
                {lang === 'en' ? (
                  <>
                    Kaal Sarp Puja <span className="font-normal italic text-[#E88921]">in</span> <br className="hidden sm:block" />
                    Trimbakeshwar
                  </>
                ) : (
                  <>
                    त्र्यंबकेश्वर में<br />
                    <span className="text-[#E88921]">काल सर्प पूजा</span>
                  </>
                )}
              </h1>

              <p className="font-sans text-[15px] sm:text-[17px] leading-relaxed text-[#1a1a1a]/80 mt-4 max-w-xl mx-auto lg:mx-0 font-medium">
                {lang === 'en'
                  ? 'Book Kaal Sarp Puja at Trimbakeshwar with experienced Pandit Ji. Get guidance for the puja process, timing and booking.'
                  : 'त्र्यंबकेश्वर में अनुभवी पंडित जी के साथ काल सर्प पूजा बुक करें। पूजा विधि, मुहूर्त और बुकिंग के लिए स्पष्ट मार्गदर्शन प्राप्त करें।'}
              </p>

              {/* CTAs - never hidden */}
              <div className="flex flex-col sm:flex-row gap-3 mt-7 justify-center lg:justify-start">
                <button
                  onClick={() => handleBookingClick('hero_book')}
                  className="inline-flex items-center justify-center gap-2 bg-[#7A1E1E] hover:bg-[#5a1616] text-white font-bold text-sm sm:text-[15px] px-7 py-[14px] rounded-sm shadow-lg border border-[#D4AF37]/20 transition-all hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                  aria-label="Book Kaal Sarp Puja"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Book Kaal Sarp Puja' : 'काल सर्प पूजा बुक करें'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={phoneHref}
                  onClick={handlePhoneClick}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF8F2] text-[#7A1E1E] font-bold text-sm sm:text-[15px] px-7 py-[14px] rounded-sm border border-[#7A1E1E]/15 shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Call Now' : 'अभी कॉल करें'}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb857] text-white font-bold text-sm sm:text-[15px] px-7 py-[14px] rounded-sm shadow-md transition-all hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* micro trust */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mt-4 text-[12px] text-[#7A1E1E]/70 font-semibold">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#E88921]" /> {lang === 'en' ? 'Clear process' : 'स्पष्ट विधि'}</span>
                <span className="w-1 h-1 bg-[#E88921] rounded-full" />
                <span className="inline-flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#E88921]" /> {lang === 'en' ? 'Direct Pandit contact' : 'सीधा पंडित संपर्क'}</span>
                <span className="w-1 h-1 bg-[#E88921] rounded-full" />
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#E88921]" /> Trimbakeshwar, Nashik</span>
              </div>

              {/* Phone prominent */}
              <p className="mt-3 text-sm font-bold text-[#7A1E1E]">
                <a href={phoneHref} onClick={handlePhoneClick} className="hover:text-[#E88921] underline underline-offset-4 decoration-[#E88921]/30">
                  {businessConfig.phoneDisplay}
                </a>
                <span className="font-medium text-[#7A1E1E]/60 ml-2">{lang === 'en' ? '• Available 4:30 AM – 8:00 PM' : '• उपलब्ध: सुबह 4:30 – रात 8:00'}</span>
              </p>
            </div>

            {/* Right: Premium visual - optimized LCP */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-xl bg-white">
                {/* Top gold line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E88921] to-[#D4AF37] z-10" />
                {/* Desktop/tablet hero visual. The 1px source keeps phones from
                    downloading this (hidden) image — mobile has its own hero. */}
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  />
                  <img
                    src="/images/kalsarp puja.jpeg"
                    alt="Kaal Sarp Puja in Trimbakeshwar - Pandit Ji performing ritual"
                    width={640}
                    height={480}
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover"
                  />
                </picture>
                {/* overlay caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 pt-12">
                  <p className="text-white text-xs font-bold tracking-widest uppercase opacity-90">Trimbakeshwar • Nashik • Maharashtra</p>
                  <p className="text-white font-serif text-sm font-semibold mt-1">Kaal Sarp Puja • Trimbakeshwar Jyotirlinga</p>
                </div>
              </div>
              {/* floating card */}
              <div className="absolute -bottom-4 -left-2 sm:left-auto sm:-right-3 bg-white border border-[#F2E6CE] rounded-sm shadow-lg p-3 flex items-center gap-3 max-w-[260px]">
                <div className="w-10 h-10 rounded-sm bg-[#E88921]/10 flex items-center justify-center text-[#E88921] border border-[#E88921]/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#7A1E1E] leading-none">{lang === 'en' ? 'Experienced Pandit Ji' : 'अनुभवी पंडित जी'}</p>
                  <p className="text-[11px] text-[#7A1E1E]/60 font-medium mt-1">{lang === 'en' ? 'Trimbakeshwar-based service' : 'त्र्यंबकेश्वर स्थित सेवा'}</p>
                </div>
              </div>
              <p className="sr-only">Kaal Sarp Puja Trimbakeshwar hero visual loads eagerly for LCP optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR - immediately below hero */}
      <section className="bg-white border-y border-[#F2E6CE] py-4" aria-label="Trust signals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            {[
              { icon: MapPin, label: lang === 'en' ? 'Trimbakeshwar-based\nPuja Service' : 'त्र्यंबकेश्वर स्थित\nपूजा सेवा' },
              { icon: Users, label: lang === 'en' ? 'Experienced\nPandit Ji' : 'अनुभवी\nपंडित जी' },
              { icon: Calendar, label: lang === 'en' ? 'Booking\nAssistance' : 'बुकिंग\nसहायता' },
              { icon: ShieldCheck, label: lang === 'en' ? 'Clear Puja\nProcess' : 'स्पष्ट पूजा\nप्रक्रिया' },
              { icon: Phone, label: lang === 'en' ? 'Direct\nContact' : 'सीधा\nसंपर्क' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-[#FAF8F2] border border-[#F2E6CE]/60 rounded-sm py-4 px-2">
                <item.icon className="w-5 h-5 text-[#E88921]" />
                <span className="text-[11px] font-bold text-[#7A1E1E] whitespace-pre leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PERFORM AT TRIMBAKESHWAR */}
      <section className="py-14 lg:py-20 bg-[#FFFDF7]" id="why-trimbakeshwar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-[#E88921] uppercase">{lang === 'en' ? 'Why Trimbakeshwar' : 'क्यों त्र्यंबकेश्वर'}</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-2">
              {lang === 'en' ? 'Why Perform Kaal Sarp Puja at Trimbakeshwar?' : 'त्र्यंबकेश्वर में काल सर्प पूजा क्यों करें?'}
            </h2>
            {lang === 'en' && (
              <span className="block font-serif text-sm sm:text-base font-bold text-[#E88921]/80 mt-1">
                त्र्यंबकेश्वर में काल सर्प पूजा क्यों करें?
              </span>
            )}
            {lang === 'hi' && (
              <span className="block font-serif text-sm sm:text-base font-bold text-[#E88921]/80 mt-1">
                Why Perform Kaal Sarp Puja at Trimbakeshwar?
              </span>
            )}
            <div className="w-12 h-0.5 bg-[#E88921] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white border border-[#F2E6CE] rounded-sm p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#7A1E1E] mb-3">{lang === 'en' ? 'What is Kaal Sarp Puja traditionally understood to address?' : 'काल सर्प पूजा का पारंपरिक महत्व'}</h3>
                <p className="text-sm leading-relaxed text-[#1a1a1a]/80 font-medium">
                  {lang === 'en'
                    ? 'In Vedic astrology, Kaal Sarp Yog is described when all seven planets are positioned between Rahu (the head) and Ketu (the tail). People traditionally associate this yog with recurring delays in career or education, instability, marriage obstacles, financial struggles and health concerns. Kaal Sarp Puja is a Vedic ritual of pacification — involving Sankalp, Rahu-Ketu mantras, Nag-Nagin worship and havan — performed to seek relief, steadiness and peace. It is a spiritual practice, not a guaranteed cure for medical, financial or legal matters.'
                    : 'वैदिक ज्योतिष में काल सर्प योग तब माना जाता है जब सभी सात ग्रह राहु और केतु के बीच हों। इसे करियर, विवाह, आर्थिक और स्वास्थ्य बाधाओं से जोड़ा जाता है। काल सर्प पूजा संकल्प, राहु-केतु जाप, नाग-नागिन पूजन और हवन के माध्यम से शांति और स्थिरता हेतु किया जाने वाला पारंपरिक वैदिक अनुष्ठान है।'}
                </p>
              </div>

              <div className="bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm p-6">
                <h3 className="font-serif text-lg font-bold text-[#7A1E1E] mb-3">{lang === 'en' ? 'Why Trimbakeshwar for Kaal Sarp Puja?' : 'त्र्यंबकेश्वर ही क्यों?'}</h3>
                <p className="text-sm leading-relaxed text-[#1a1a1a]/80 font-medium mb-3">
                  {lang === 'en'
                    ? 'Trimbakeshwar, in Nashik, Maharashtra, is home to the revered Trimbakeshwar Jyotirlinga and the sacred Godavari River originating at Brahmagiri. The confluence of the Jyotirlinga, Kushavarta Kund and Godavari gives the town its strong spiritual significance. For generations, devotees have chosen Trimbakeshwar for ancestral and planetary remedial rituals such as Kaal Sarp Puja, Narayan Nagbali and Tripindi Shraddha.'
                    : 'नाशिक, महाराष्ट्र का त्र्यंबकेश्वर ज्योतिर्लिंग और गोदावरी के उद्गम के कारण विशेष आध्यात्मिक महत्व रखता है। यहीं कुशावर्त कुंड और ब्रह्मगिरि का संगम है। इसी कारण पीढ़ियों से श्रद्धालु यहाँ काल सर्प, नारायण नागबलि जैसे निवारण अनुष्ठान करना पसंद करते हैं।'}
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#E88921] mt-0.5" /><span className="font-medium text-[#1a1a1a]/80">Jyotirlinga town with deep scriptural heritage</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#E88921] mt-0.5" /><span className="font-medium text-[#1a1a1a]/80">Godavari & Kushavarta Kund — sacred context for remedies</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#E88921] mt-0.5" /><span className="font-medium text-[#1a1a1a]/80">Experienced local Pandit Ji with clear guidance</span></li>
                </ul>
              </div>

              <div className="bg-white border border-[#F2E6CE] rounded-sm p-6 shadow-sm">
                <h3 className="font-serif text-base font-bold text-[#7A1E1E] mb-2">{lang === 'en' ? 'What to expect & how booking works' : 'क्या अपेक्षा करें और बुकिंग कैसे होती है'}</h3>
                <p className="text-sm leading-relaxed text-[#1a1a1a]/80 font-medium">
                  {lang === 'en'
                    ? 'After you contact us, we check available dates (often Amavasya, Panchami, Monday or Nag Panchami) and share a simple preparation list. On the day, you take Sankalp and participate in the 2–3 hour ritual. All main Samagri can be arranged. We share location guidance and keep the process transparent.'
                    : 'संपर्क के बाद हम उपलब्ध तिथियाँ (अमावस्या, पंचमी, सोमवार, नाग पंचमी) देखते हैं और तैयारी सूची भेजते हैं। पूजा दिवस पर संकल्प के साथ 2-3 घंटे का अनुष्ठान होता है। मुख्य सामग्री व्यवस्थित की जा सकती है।'}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-[#7A1E1E] to-[#400F0F] text-white rounded-sm p-6 border border-[#D4AF37]/30 shadow-lg">
                <h3 className="font-serif text-lg font-bold mb-3">Trimbakeshwar • Nashik</h3>
                <p className="text-sm text-white/85 leading-relaxed font-medium mb-4">
                  {lang === 'en'
                    ? 'A town of pilgrimage, heritage and the Godavari — chosen by devotees for Kaal Sarp Puja for its spiritual setting.'
                    : 'तीर्थ, परंपरा और गोदावरी का संगम — काल सर्प पूजा के लिए श्रद्धालुओं की पसंद।'}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2"><MapPin className="w-4 h-4 text-[#D4AF37]" /> <span>{businessConfig.address.en}</span></div>
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> <span>{businessConfig.workingHours.en}</span></div>
                </div>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(businessConfig.address.en)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 bg-white text-[#7A1E1E] font-bold text-xs px-4 py-2.5 rounded-sm hover:bg-[#FAF8F2] transition-colors cursor-pointer">
                  <Compass className="w-4 h-4" /> View on Google Maps
                </a>
              </div>
              <img
                src="/images/bramahagiri.webp"
                alt="Brahmagiri Hills Trimbakeshwar - sacred origin of Godavari"
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-[220px] object-cover rounded-sm border border-[#F2E6CE] shadow-sm"
              />
              <p className="text-xs text-[#7A1E1E]/60 font-medium text-center">Brahmagiri Hills & Godavari origin — Trimbakeshwar</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS - 5 steps */}
      <section className="py-14 lg:py-18 bg-[#FAF8F2] border-y border-[#F2E6CE]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#E88921] uppercase">{lang === 'en' ? 'Simple Process' : 'सरल प्रक्रिया'}</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-2">{lang === 'en' ? 'Kaal Sarp Puja Process' : 'काल सर्प पूजा प्रक्रिया'}</h2>
            {lang === 'en' && (
              <span className="block font-serif text-sm font-bold text-[#E88921]/80 mt-1">
                काल सर्प पूजा प्रक्रिया
              </span>
            )}
            {lang === 'hi' && (
              <span className="block font-serif text-sm font-bold text-[#E88921]/80 mt-1">
                Kaal Sarp Puja Process
              </span>
            )}
            <p className="text-sm text-[#7A1E1E]/60 font-medium mt-2">{lang === 'en' ? 'Clear steps from booking to completion — designed for first-time devotees.' : 'बुकिंग से पूर्णता तक स्पष्ट चरण।'}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: lang === 'en' ? 'Contact / Booking' : 'संपर्क / बुकिंग', desc: lang === 'en' ? 'Call, WhatsApp or fill the booking form.' : 'कॉल, व्हाट्सएप या फॉर्म भेजें।', icon: Phone },
              { num: '02', title: lang === 'en' ? 'Select Puja Date' : 'तारीख चुनें', desc: lang === 'en' ? 'We suggest muhurat: Amavasya / Panchami / Monday.' : 'अमावस्या/पंचमी/सोमवार से मुहूर्त।', icon: Calendar },
              { num: '03', title: lang === 'en' ? 'Receive Guidance' : 'मार्गदर्शन प्राप्त करें', desc: lang === 'en' ? 'Preparation list, time & location details.' : 'तैयारी सूची, समय और स्थान विवरण।', icon: HeartHandshake },
              { num: '04', title: lang === 'en' ? 'Perform Puja at Trimbakeshwar' : 'त्र्यंबकेश्वर में पूजा', desc: lang === 'en' ? 'Attend the 2–3 hr ritual in Trimbakeshwar.' : 'त्र्यंबकेश्वर में 2-3 घंटे का अनुष्ठान।', icon: MapPin },
              { num: '05', title: lang === 'en' ? 'Complete the Ritual' : 'अनुष्ठान पूर्ण', desc: lang === 'en' ? 'Visarjan, blessings and prasad guidance.' : 'विसर्जन, आशीर्वाद और प्रसाद।', icon: Check },
            ].map((step) => (
              <div key={step.num} className="bg-white border border-[#F2E6CE] rounded-sm p-5 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-3 left-5 bg-[#E88921] text-white text-xs font-bold px-2.5 py-1 rounded-sm border border-[#D4AF37]">{step.num}</div>
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F2] border border-[#F2E6CE] flex items-center justify-center mt-2 mb-3">
                  <step.icon className="w-5 h-5 text-[#E88921]" />
                </div>
                <h3 className="font-serif text-sm font-bold text-[#7A1E1E] mb-1">{step.title}</h3>
                <p className="text-xs text-[#1a1a1a]/70 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button onClick={() => handleBookingClick('process_book')} className="inline-flex items-center gap-2 bg-[#7A1E1E] hover:bg-[#5a1616] text-white font-bold text-sm px-6 py-3 rounded-sm border border-[#D4AF37]/20 cursor-pointer transition-colors">
              <Calendar className="w-4 h-4" /> {lang === 'en' ? 'Check Available Dates' : 'उपलब्ध तिथियाँ देखें'}
            </button>
          </div>
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-widest text-[#E88921] uppercase">{lang === 'en' ? 'What’s Included' : 'क्या शामिल है'}</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-2">{lang === 'en' ? 'What’s Included in Kaal Sarp Puja' : 'काल सर्प पूजा में क्या शामिल है'}</h2>
              <p className="text-sm text-[#7A1E1E]/60 font-medium mt-3 leading-relaxed">
                {lang === 'en' ? 'Only services we actually provide — transparent and verified.' : 'केवल वही सेवाएँ जो हम वास्तव में प्रदान करते हैं।'}
              </p>
              <div className="mt-6 p-4 bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm">
                <p className="text-xs font-bold text-[#7A1E1E] mb-1">{lang === 'en' ? 'Note' : 'ध्यान दें'}</p>
                <p className="text-xs text-[#1a1a1a]/70 font-medium leading-relaxed">
                  {lang === 'en' ? 'All Samagri can be arranged locally. You do not need to bring heavy ritual items. Just follow the preparation guidance we share after booking.' : 'मुख्य सामग्री स्थानीय रूप से व्यवस्थित की जा सकती है। बुकिंग के बाद भेजी गई तैयारी सूची का पालन करें।'}
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  lang === 'en' ? 'Pandit Ji assistance' : 'पंडित जी सहायता',
                  lang === 'en' ? 'Puja coordination' : 'पूजा समन्वय',
                  lang === 'en' ? 'Date / time guidance' : 'तिथि/समय मार्गदर्शन',
                  lang === 'en' ? 'Trimbakeshwar location guidance' : 'त्र्यंबकेश्वर स्थान मार्गदर्शन',
                  lang === 'en' ? 'Puja process information' : 'पूजा प्रक्रिया जानकारी',
                  lang === 'en' ? 'Booking assistance' : 'बुकिंग सहायता',
                  lang === 'en' ? 'Sankalp with name & gotra' : 'नाम-गोत्र संकल्प',
                  lang === 'en' ? 'Samagri arrangement support' : 'सामग्री व्यवस्था सहायता',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm p-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#E88921] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-[#1a1a1a]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUJA DETAILS */}
      <section className="py-14 lg:py-18 bg-[#FAF8F2] border-y border-[#F2E6CE]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-[#E88921] uppercase">{lang === 'en' ? 'Puja Details' : 'पूजा विवरण'}</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-2">{lang === 'en' ? 'Kaal Sarp Puja Details' : 'काल सर्प पूजा विवरण'}</h2>
            {lang === 'en' && (
              <span className="block font-serif text-sm font-bold text-[#E88921]/80 mt-1">
                काल सर्प पूजा विवरण
              </span>
            )}
            {lang === 'hi' && (
              <span className="block font-serif text-sm font-bold text-[#E88921]/80 mt-1">
                Kaal Sarp Puja Details
              </span>
            )}
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-[#F2E6CE] rounded-sm shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {[
                { label: lang === 'en' ? 'Puja name' : 'पूजा का नाम', value: 'Kaal Sarp Puja / Kaalsarp Puja' },
                { label: lang === 'en' ? 'Location' : 'स्थान', value: 'Trimbakeshwar, Nashik, Maharashtra' },
                { label: lang === 'en' ? 'Duration' : 'अवधि', value: kaalSarpService?.duration[lang] || '1 Day (approx. 2–3 hours)' },
                { label: lang === 'en' ? 'Ideal timing' : 'उत्तम मुहूर्त', value: lang === 'en' ? 'Amavasya, Panchami (Nag Panchami), Mondays' : 'अमावस्या, पंचमी, सोमवार' },
                { label: lang === 'en' ? 'Booking process' : 'बुकिंग प्रक्रिया', value: lang === 'en' ? 'Call / WhatsApp / Form → date selection → guidance' : 'कॉल/व्हाट्सएप/फॉर्म → तिथि चयन → मार्गदर्शन' },
                { label: lang === 'en' ? 'Required info' : 'आवश्यक जानकारी', value: lang === 'en' ? 'Name, phone, preferred date (birth details optional)' : 'नाम, फोन, पसंदीदा तिथि (जन्म विवरण वैकल्पिक)' },
                { label: lang === 'en' ? 'What to bring' : 'क्या लाएँ', value: lang === 'en' ? 'Traditional attire, ID; Samagri arranged' : 'पारंपरिक वस्त्र, पहचान पत्र; सामग्री व्यवस्थित' },
                { label: lang === 'en' ? 'Preparation' : 'तैयारी', value: lang === 'en' ? 'Light, new traditional wear; avoid black/green' : 'हल्के नए पारंपरिक वस्त्र; काले/हरे से बचें' },
              ].map((row, i) => (
                <div key={i} className={`p-4 flex flex-col border-b ${i % 2 === 0 ? 'md:border-r' : ''} border-[#F2E6CE]/60 ${i >= 6 ? 'border-b-0 md:border-b-0' : ''}`}>
                  <span className="text-[11px] font-bold tracking-widest text-[#7A1E1E]/60 uppercase">{row.label}</span>
                  <span className="text-sm font-semibold text-[#1a1a1a]/85 mt-1">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#FAF8F2] border-t border-[#F2E6CE] p-4 text-center">
              <p className="text-xs text-[#7A1E1E]/60 font-medium">
                {lang === 'en' ? 'Need exact dates for 2026? Use the booking form or call us — we share the 2026 muhurat calendar.' : '2026 के सटीक मुहूर्त चाहिए? फॉर्म या कॉल के माध्यम से संपर्क करें।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE / BOOKING */}
      <section className="py-14 lg:py-18 bg-white" id="price">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-[#E88921] uppercase">{lang === 'en' ? 'Booking' : 'बुकिंग'}</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-2">{lang === 'en' ? 'Kaal Sarp Puja Booking' : 'काल सर्प पूजा बुकिंग'}</h2>
            {lang === 'en' && (
              <span className="block font-serif text-sm font-bold text-[#E88921]/80 mt-1">
                काल सर्प पूजा बुकिंग
              </span>
            )}
            {lang === 'hi' && (
              <span className="block font-serif text-sm font-bold text-[#E88921]/80 mt-1">
                Kaal Sarp Puja Booking
              </span>
            )}
            <p className="text-sm text-[#7A1E1E]/60 font-medium mt-2">{lang === 'en' ? 'Transparent pricing — no hidden charges' : 'पारदर्शी शुल्क — कोई छिपा खर्च नहीं'}</p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm p-6 text-center shadow-sm">
              <p className="text-xs font-bold tracking-widest text-[#7A1E1E]/60 uppercase">{lang === 'en' ? 'Starting From' : 'प्रारंभ'}</p>
              <p className="font-serif text-3xl font-bold text-[#7A1E1E] mt-1">₹2,100</p>
              <p className="text-xs text-[#1a1a1a]/60 font-medium mt-1">{lang === 'en' ? 'Kaal Sarp Puja' : 'काल सर्प पूजा'}</p>
              <p className="text-[11px] text-[#7A1E1E]/50 mt-2">{lang === 'en' ? 'Maha Puja with Rahu-Ketu: ₹5,100' : 'महापूजा (राहु-केतु): ₹5,100'}</p>
              <button onClick={() => handleBookingClick('price_card')} className="mt-4 w-full bg-[#7A1E1E] hover:bg-[#5a1616] text-white font-bold text-sm py-3 rounded-sm border border-[#D4AF37]/20 cursor-pointer transition-colors">
                {lang === 'en' ? 'Check Availability' : 'उपलब्धता देखें'}
              </button>
              <p className="text-[11px] text-[#7A1E1E]/60 mt-2 font-medium">{lang === 'en' ? 'Contact us for available dates and complete booking details.' : 'उपलब्ध तिथियों और बुकिंग विवरण हेतु संपर्क करें।'}</p>
            </div>

            <div className="bg-white border border-[#F2E6CE] rounded-sm p-6 shadow-sm">
              <h3 className="font-serif text-base font-bold text-[#7A1E1E]">{lang === 'en' ? 'Get Puja Price & Availability' : 'पूजा शुल्क और उपलब्धता जानें'}</h3>
              <p className="text-sm text-[#1a1a1a]/70 font-medium mt-2 leading-relaxed">
                {lang === 'en' ? 'Prices may vary by puja variant and Samagri. Share your preferred date — we confirm availability and share total cost before you decide.' : 'शुल्क पूजा के प्रकार और सामग्री पर निर्भर करता है। अपनी पसंदीदा तिथि साझा करें — हम उपलब्धता और कुल शुल्क की पुष्टि करते हैं।'}
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E88921]" /> <span className="font-medium">{lang === 'en' ? 'No advance hidden fees' : 'कोई छिपा शुल्क नहीं'}</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E88921]" /> <span className="font-medium">{lang === 'en' ? 'Date confirmation before payment guidance' : 'भुगतान से पहले तिथि पुष्टि'}</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#E88921]" /> <span className="font-medium">{lang === 'en' ? 'Direct Pandit Ji contact' : 'सीधा पंडित जी संपर्क'}</span></div>
              </div>
              <a href={phoneHref} onClick={handlePhoneClick} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#E88921] hover:text-[#7A1E1E]">
                <Phone className="w-4 h-4" /> {businessConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-14 lg:py-20 bg-[#FAF8F2] border-y border-[#F2E6CE]/50" id="location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-[#E88921] uppercase">Location</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-2">Kaal Sarp Puja in Trimbakeshwar, Nashik</h2>
            <p className="text-sm text-[#7A1E1E]/60 font-medium mt-2">Trimbakeshwar • Nashik • Maharashtra • 422212</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-white border border-[#F2E6CE] rounded-sm p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#7A1E1E] flex items-center gap-2"><MapPin className="w-5 h-5 text-[#E88921]" /> {lang === 'en' ? 'Service Location' : 'सेवा स्थान'}</h3>
              <p className="text-sm font-semibold text-[#1a1a1a]/80 mt-3 leading-relaxed">{businessConfig.address[lang]}</p>
              <p className="text-xs text-[#7A1E1E]/60 font-medium mt-2">{lang === 'en' ? 'Landmark: Near Swami Samarth Kendra, Trimbakeshwar ring road' : 'निकट: स्वामी समर्थ केंद्र, त्र्यंबकेश्वर रिंग रोड'}</p>

              <div className="mt-6 space-y-3">
                <a href={`https://maps.google.com/?q=${encodeURIComponent(businessConfig.address.en)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#7A1E1E] hover:bg-[#5a1616] text-white font-bold text-sm py-3 rounded-sm border border-[#D4AF37]/20 cursor-pointer transition-colors">
                  <Compass className="w-4 h-4" /> Open in Google Maps
                </a>
                <a href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent('Hello, please share Google Maps location for Kaal Sarp Puja in Trimbakeshwar.')}`} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="flex items-center justify-center gap-2 bg-white hover:bg-[#FAF8F2] text-[#7A1E1E] font-bold text-sm py-3 rounded-sm border border-[#F2E6CE] cursor-pointer transition-colors">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" /> Get Location on WhatsApp
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-[#F2E6CE] space-y-3">
                <h4 className="font-serif text-sm font-bold text-[#7A1E1E]">{lang === 'en' ? 'How to Reach Trimbakeshwar' : 'त्र्यंबकेश्वर कैसे पहुँचें'}</h4>
                <div className="space-y-2 text-xs font-medium text-[#1a1a1a]/80">
                  <div className="flex gap-2 bg-[#FAF8F2] border border-[#F2E6CE] p-2.5 rounded-sm"><Plane className="w-4 h-4 text-[#E88921] shrink-0" /><span><strong>Air:</strong> {businessConfig.howToReach.byAir[lang]}</span></div>
                  <div className="flex gap-2 bg-[#FAF8F2] border border-[#F2E6CE] p-2.5 rounded-sm"><Train className="w-4 h-4 text-[#E88921] shrink-0" /><span><strong>Train:</strong> {businessConfig.howToReach.byTrain[lang]}</span></div>
                  <div className="flex gap-2 bg-[#FAF8F2] border border-[#F2E6CE] p-2.5 rounded-sm"><Car className="w-4 h-4 text-[#E88921] shrink-0" /><span><strong>Road:</strong> {businessConfig.howToReach.byRoad[lang]}</span></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-[#F2E6CE] rounded-sm overflow-hidden shadow-sm">
                <iframe
                  title="Kaal Sarp Puja Trimbakeshwar Location Map"
                  src="https://maps.google.com/maps?q=Trimbakeshwar%20Nashik%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
                <div className="p-3 bg-[#FAF8F2] border-t border-[#F2E6CE] flex items-center justify-between text-xs font-medium">
                  <span className="text-[#7A1E1E]/60">Trimbakeshwar, Nashik, Maharashtra</span>
                  <a href={`https://maps.google.com/?q=Trimbakeshwar%20Nashik`} target="_blank" rel="noopener noreferrer" className="text-[#E88921] font-bold hover:underline">Open Larger Map</a>
                </div>
              </div>
              <p className="text-xs text-[#7A1E1E]/60 font-medium mt-3 text-center">{lang === 'en' ? 'Exact Google Maps pin is shared after booking confirmation.' : 'बुकिंग के बाद सटीक लोकेशन शेयर की जाती है।'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-[#E88921] uppercase">{lang === 'en' ? 'Devotee Experiences' : 'श्रद्धालु अनुभव'}</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-2">{lang === 'en' ? 'Trusted by Devotees' : 'श्रद्धालुओं का विश्वास'}</h2>
            <p className="text-sm text-[#7A1E1E]/60 font-medium mt-2">{lang === 'en' ? 'Genuine experiences — we do not fabricate reviews.' : 'वास्तविक अनुभव — हम फर्जी समीक्षाएँ नहीं बनाते।'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {testimonialsData.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm p-5 shadow-sm relative">
                <Quote className="w-8 h-8 text-[#E88921]/15 absolute top-4 right-4" />
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#E88921] fill-[#E88921]" />)}
                </div>
                <p className="text-sm text-[#1a1a1a]/80 italic leading-relaxed font-medium">“{t.review[lang]}”</p>
                <div className="mt-4 border-t border-[#F2E6CE] pt-3">
                  <p className="text-sm font-bold text-[#7A1E1E]">{t.name[lang]}</p>
                  <p className="text-xs text-[#E88921] font-bold uppercase tracking-wider">{t.location[lang]} • {t.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* placeholder for when no reviews */}
          <div className="max-w-2xl mx-auto mt-8 bg-white border border-dashed border-[#D4AF37]/40 rounded-sm p-4 text-center">
            <p className="text-xs font-bold text-[#7A1E1E]">{lang === 'en' ? 'Have you performed Kaal Sarp Puja with us? Share your experience.' : 'क्या आपने हमारे साथ पूजा की है? अपना अनुभव साझा करें।'}</p>
            <p className="text-xs text-[#7A1E1E]/60 font-medium mt-1">{lang === 'en' ? 'Your genuine testimonial helps other devotees make informed decisions.' : 'आपकी वास्तविक समीक्षा अन्य श्रद्धालुओं की सहायता करती है।'}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-20 bg-[#FFFDF7] border-y border-[#F2E6CE]/50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#E88921] uppercase">{lang === 'en' ? 'FAQ' : 'सवाल-जवाब'}</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-2">{lang === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}</h2>
            {lang === 'en' && (
              <span className="block font-serif text-sm font-bold text-[#E88921]/80 mt-1">
                अक्सर पूछे जाने वाले प्रश्न
              </span>
            )}
            {lang === 'hi' && (
              <span className="block font-serif text-sm font-bold text-[#E88921]/80 mt-1">
                Frequently Asked Questions
              </span>
            )}
            <p className="text-sm text-[#7A1E1E]/60 font-medium mt-2">{lang === 'en' ? 'Clear answers to real booking concerns.' : 'बुकिंग से जुड़े स्पष्ट उत्तर।'}</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="bg-white border border-[#F2E6CE] rounded-sm overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left p-4 sm:p-5 cursor-pointer group"
                  >
                    <span className="font-serif text-sm sm:text-[15px] font-bold text-[#7A1E1E] pr-4 leading-snug group-hover:text-[#E88921] transition-colors">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#7A1E1E]/40 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <div className="px-4 sm:px-5 pb-4 pt-0 border-t border-[#F2E6CE]/40 text-sm text-[#1a1a1a]/75 leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="py-14 lg:py-20 bg-[#FAF8F2]" id="kaal-sarp-booking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-widest text-[#E88921] uppercase">{lang === 'en' ? 'Booking Form' : 'बुकिंग फॉर्म'}</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#7A1E1E] mt-2">{lang === 'en' ? 'Request Kaal Sarp Puja Booking' : 'काल सर्प पूजा बुकिंग अनुरोध'}</h2>
              <p className="text-sm text-[#1a1a1a]/70 font-medium mt-3 leading-relaxed">
                {lang === 'en' ? 'Fill in your details — we will check available dates and share complete guidance on call or WhatsApp. No long forms.' : 'अपना विवरण भेजें — हम उपलब्ध तिथियाँ जाँच कर कॉल/व्हाट्सएप पर संपूर्ण मार्गदर्शन देंगे।'}
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 bg-white border border-[#F2E6CE] p-3 rounded-sm">
                  <div className="w-9 h-9 rounded-sm bg-[#E88921]/10 flex items-center justify-center text-[#E88921]"><Phone className="w-4 h-4" /></div>
                  <div>
                    <p className="text-xs font-bold text-[#7A1E1E]/60 uppercase tracking-wider">{lang === 'en' ? 'Call for instant help' : 'तुरंत सहायता हेतु कॉल'}</p>
                    <a href={phoneHref} onClick={handlePhoneClick} className="text-sm font-bold text-[#7A1E1E] hover:text-[#E88921]">{businessConfig.phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white border border-[#F2E6CE] p-3 rounded-sm">
                  <div className="w-9 h-9 rounded-sm bg-[#25D366]/10 flex items-center justify-center text-[#25D366]"><MessageSquare className="w-4 h-4" /></div>
                  <div>
                    <p className="text-xs font-bold text-[#7A1E1E]/60 uppercase tracking-wider">WhatsApp</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="text-sm font-bold text-[#7A1E1E] hover:text-[#E88921]">{businessConfig.whatsappDisplay}</a>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#7A1E1E]/50 font-medium mt-4">
                {lang === 'en' ? 'Your info is used only for puja booking coordination. See Privacy Policy.' : 'आपकी जानकारी केवल पूजा बुकिंग समन्वय हेतु उपयोग की जाती है।'}
              </p>
            </div>

            <div className="lg:col-span-7 bg-white border border-[#F2E6CE] rounded-sm p-6 sm:p-8 shadow-sm relative">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#E88921]/40" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E88921]/40" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E88921]/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#E88921]/40" />

              <h3 className="font-serif text-lg font-bold text-[#7A1E1E] mb-5">{lang === 'en' ? 'Send your details' : 'अपना विवरण भेजें'}</h3>

              <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="ks-name" className="text-xs font-bold text-[#7A1E1E] uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input id="ks-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Ramesh Kumar" className="bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-semibold text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="ks-phone" className="text-xs font-bold text-[#7A1E1E] uppercase tracking-wider mb-1.5">Phone Number *</label>
                    <input id="ks-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-semibold text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="ks-date" className="text-xs font-bold text-[#7A1E1E] uppercase tracking-wider mb-1.5">{lang === 'en' ? 'Preferred Date' : 'पसंदीदा तारीख'}</label>
                    <input id="ks-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-semibold text-[#1a1a1a] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="ks-devotees" className="text-xs font-bold text-[#7A1E1E] uppercase tracking-wider mb-1.5">{lang === 'en' ? 'Devotees (optional)' : 'श्रद्धालु संख्या (वैकल्पिक)'}</label>
                    <input id="ks-devotees" type="number" min={1} value={form.devotees} onChange={(e) => setForm({ ...form, devotees: e.target.value })} placeholder="1" className="bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-semibold text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="ks-message" className="text-xs font-bold text-[#7A1E1E] uppercase tracking-wider mb-1.5">{lang === 'en' ? 'Message / Requirement' : 'संदेश / आवश्यकता'}</label>
                  <textarea id="ks-message" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={lang === 'en' ? 'Share your preferred travel dates or any questions about Kaal Sarp Puja...' : 'अपनी यात्रा तिथि या प्रश्न लिखें...'} className="bg-[#FAF8F2] border border-[#F2E6CE] rounded-sm px-4 py-2.5 text-sm font-semibold text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors resize-none" />
                </div>

                <div className="flex items-start gap-2.5 bg-[#FAF8F2] border border-[#F2E6CE] p-3 rounded-sm">
                  <input id="ks-consent" type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="w-4 h-4 mt-0.5 accent-[#7A1E1E] cursor-pointer" />
                  <label htmlFor="ks-consent" className="text-[11px] leading-relaxed text-[#1a1a1a]/70 font-medium cursor-pointer select-none">
                    {lang === 'en' ? 'I consent to share my details for Kaal Sarp Puja booking assistance in Trimbakeshwar and agree to be contacted on phone/WhatsApp. My information is handled per Privacy Policy.' : 'मैं त्र्यंबकेश्वर में काल सर्प पूजा बुकिंग सहायता हेतु अपना विवरण साझा करने और फोन/व्हाट्सएप पर संपर्क की सहमति देता हूँ।'}
                  </label>
                </div>

                <button type="submit" disabled={!consent} className="w-full bg-[#7A1E1E] hover:bg-[#E88921] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold text-sm py-4 rounded-sm border border-[#D4AF37]/20 shadow-md transition-colors cursor-pointer">
                  {lang === 'en' ? 'Request Puja Booking' : 'पूजा बुकिंग अनुरोध भेजें'}
                </button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-sm text-sm font-medium">
                      {lang === 'en' ? '✓ Request sent! We will contact you shortly on phone/WhatsApp with dates and booking details.' : '✓ अनुरोध भेजा गया! हम शीघ्र ही आपसे संपर्क करेंगे।'}
                    </motion.div>
                  )}
                </AnimatePresence>
                <p className="text-[11px] text-[#7A1E1E]/50 font-medium text-center">{lang === 'en' ? 'Usually responds within a few hours • 4:30 AM – 8:00 PM' : 'आमतौर पर कुछ घंटों में उत्तर • सुबह 4:30 – रात 8:00'}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 lg:py-18 bg-gradient-to-br from-[#7A1E1E] to-[#3d0f0f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FFFDF7_1px,transparent_1px)] bg-[size:20px_20px] opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            {lang === 'en' ? 'Planning Kaal Sarp Puja at Trimbakeshwar?' : 'त्र्यंबकेश्वर में काल सर्प पूजा की योजना?'}
          </h2>
          {lang === 'en' && (
            <span className="block font-serif text-base sm:text-lg font-bold text-[#D4AF37] mt-1">
              त्र्यंबकेश्वर में काल सर्प पूजा की योजना बनाएं
            </span>
          )}
          {lang === 'hi' && (
            <span className="block font-serif text-base sm:text-lg font-bold text-[#D4AF37] mt-1">
              Planning Kaal Sarp Puja at Trimbakeshwar?
            </span>
          )}
          <p className="text-sm sm:text-base text-white/80 font-medium mt-3 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en' ? 'Speak with us about available dates, puja details and booking. Direct Pandit Ji contact — clear guidance, no confusion.' : 'उपलब्ध तिथियों, पूजा विवरण और बुकिंग के बारे में बात करें। सीधा पंडित संपर्क — स्पष्ट मार्गदर्शन।'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
            <button onClick={() => handleBookingClick('final_book')} className="bg-white text-[#7A1E1E] hover:bg-[#FAF8F2] font-bold text-sm px-7 py-3.5 rounded-sm shadow-lg border border-[#D4AF37]/20 cursor-pointer transition-colors inline-flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" /> {lang === 'en' ? 'Book Kaal Sarp Puja' : 'काल सर्प पूजा बुक करें'}
            </button>
            <a href={phoneHref} onClick={handlePhoneClick} className="bg-[#E88921] hover:bg-[#c97416] text-white font-bold text-sm px-7 py-3.5 rounded-sm shadow-md cursor-pointer transition-colors inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> {lang === 'en' ? 'Call Now' : 'अभी कॉल करें'}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="bg-[#25D366] hover:bg-[#1fb857] text-white font-bold text-sm px-7 py-3.5 rounded-sm shadow-md cursor-pointer transition-colors inline-flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp
            </a>
          </div>
          <p className="text-xs text-white/60 font-medium mt-4">{businessConfig.phoneDisplay} • Trimbakeshwar, Nashik, Maharashtra</p>
        </div>
      </section>

      {/* Sticky mobile CTA bar intentionally removed — the hero carries the
          single primary CTA and the floating Call/WhatsApp buttons remain. */}

    </div>
  );
}
