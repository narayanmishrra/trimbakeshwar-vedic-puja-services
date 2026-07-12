import React from 'react';
import { ShieldCheck, Award, Heart, Star } from 'lucide-react';
import { Language } from '../types';
import TempleDivider from './TempleDivider';

interface WhyChooseUsProps {
  lang: Language;
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const reasons = [
    {
      icon: <Award className="w-8 h-8 text-[#E88921]" />,
      title: {
        en: '100% Authentic Vedic Lineage',
        hi: '100% प्रामाणिक वैदिक वंश'
      },
      desc: {
        en: 'Guided by Pandit Bineet Shastriji, an authorized Tamrapatradhari scholar with decades of ancestral expertise in Vedic scriptures.',
        hi: 'पंडित बिनीत शास्त्रीजी द्वारा निर्देशित, जो वैदिक शास्त्रों में दशकों की विशेषज्ञता वाले एक अधिकृत ताम्रपत्रधारी विद्वान हैं।'
      }
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#E88921]" />,
      title: {
        en: 'Private & Peaceful Puja Sthal',
        hi: 'निजी और शांतिपूर्ण पूजा स्थल'
      },
      desc: {
        en: 'Rituals are conducted safely away from temple crowds in a dedicated, highly pure venue ensuring deep spiritual connection.',
        hi: 'गहरे आध्यात्मिक जुड़ाव को सुनिश्चित करते हुए अनुष्ठान मंदिर की भीड़ से दूर एक समर्पित, अत्यंत शुद्ध स्थान पर सुरक्षित रूप से किए जाते हैं।'
      }
    },
    {
      icon: <Star className="w-8 h-8 text-[#E88921]" />,
      title: {
        en: 'Top-Rated by Devotees',
        hi: 'भक्तों द्वारा सर्वोच्च रेटिंग'
      },
      desc: {
        en: 'Consistently rated 4.9/5 stars by thousands of satisfied families for transparency, clear guidance, and powerful results.',
        hi: 'पारदर्शिता, स्पष्ट मार्गदर्शन और शक्तिशाली परिणामों के लिए हजारों संतुष्ट परिवारों द्वारा लगातार 4.9/5 स्टार का दर्जा दिया गया है।'
      }
    },
    {
      icon: <Heart className="w-8 h-8 text-[#E88921]" />,
      title: {
        en: 'Complete End-to-End Assistance',
        hi: 'संपूर्ण सहायता'
      },
      desc: {
        en: 'From free astrology consultation and Muhurat selection to arranging local stay and satvik meals, we manage everything.',
        hi: 'मुफ्त ज्योतिष परामर्श और मुहूर्त चयन से लेकर स्थानीय रहने और सात्विक भोजन की व्यवस्था करने तक, हम सब कुछ प्रबंधित करते हैं।'
      }
    }
  ];

  return (
    <section className="py-20 bg-[#FFFDF7] border-y border-[#F2E6CE]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-[#E88921] font-bold">
            {lang === 'en' ? 'Our Authority & Trust' : 'हमारा अधिकार और विश्वास'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1E1E] mt-2 mb-4">
            {lang === 'en' ? 'Why We Are The Best Choice For Your Rituals' : 'हम आपके अनुष्ठानों के लिए सबसे अच्छा विकल्प क्यों हैं?'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#7A1E1E]/70 font-medium">
            {lang === 'en'
              ? 'Recognized as the premier destination for Kalsarpa Shanti, Narayan Nagbali, and Pitru Dosh Nivaran in Trimbakeshwar.'
              : 'त्र्यंबकेश्वर में कालसर्प शांति, नारायण नागबलि और पितृ दोष निवारण के लिए प्रमुख स्थान के रूप में मान्यता प्राप्त।'}
          </p>
          <TempleDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-[#FAF8F2] p-8 rounded-2xl border border-[#F2E6CE]/40 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="mb-5 p-4 bg-[#FFFDF7] rounded-full border border-[#F2E6CE] shadow-inner inline-flex">
                {reason.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#7A1E1E] mb-3">
                {reason.title[lang]}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#7A1E1E]/75 leading-relaxed font-medium">
                {reason.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
