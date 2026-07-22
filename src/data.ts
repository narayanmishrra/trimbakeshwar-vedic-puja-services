/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BusinessConfig, Service, BlogPost, Testimonial, FAQItem, GalleryItem } from './types';

export const businessConfig: BusinessConfig = {
  phone: '+917020682622',
  phoneDisplay: '+91 70206 82622',
  whatsapp: '917020682622',
  whatsappDisplay: '+91 70206 82622',
  email: 'trimbakeshwarpanditji.in@gmail.com',
  address: {
    en: 'Krushna Villa, Kailas raja Nagar, Near swami Samarth kendra, Trimbakeshwar ring road, Trimbakeshwar, Pin- 422212',
    hi: 'कृष्णा विला, कैलाश राजा नगर, स्वामी समर्थ केंद्र के पास, त्र्यंबकेश्वर रिंग रोड, त्र्यंबकेश्वर, पिन- 422212'
  },
  workingHours: {
    en: '4:30 AM - 8:00 PM (Everyday)',
    hi: 'सुबह 4:30 बजे - रात 8:00 बजे (प्रतिदिन)'
  },
  howToReach: {
    byAir: {
      en: 'Nashik Airport (Ozar) is the nearest airport (approx. 50 km). Mumbai International Airport is about 180 km away.',
      hi: 'नासिक हवाई अड्डा (ओझर) निकटतम हवाई अड्डा है (लगभग 50 किमी)। मुंबई अंतर्राष्ट्रीय हवाई अड्डा लगभग 180 किमी दूर है।'
    },
    byTrain: {
      en: 'Nashik Road Railway Station (NK) is well connected to all major cities in India (approx. 40 km from Trimbakeshwar).',
      hi: 'नासिक रोड रेलवे स्टेशन (NK) भारत के सभी प्रमुख शहरों से अच्छी तरह जुड़ा हुआ है (त्र्यंबकेश्वर से लगभग 40 किमी)।'
    },
    byRoad: {
      en: 'Frequent state transport buses and private cabs run regularly from Nashik, Mumbai, and Pune to Trimbakeshwar.',
      hi: 'नासिक, मुंबई और पुणे से त्र्यंबकेश्वर के लिए लगातार राज्य परिवहन की बसें और निजी टैक्सियां नियमित रूप से चलती हैं।'
    }
  }
};

export const servicesData: Service[] = [
  {
    id: 'narayan-nagbali',
    title: {
      en: 'Narayan Nagbali Puja',
      hi: 'नारायण नागबलि पूजा'
    },
    shortDesc: {
      en: 'A highly significant ritual performed to resolve ancestral troubles (Pitru Dosh) and liberate souls of departed ancestors.',
      hi: 'पितृ दोष के निवारण और पूर्वजों की आत्माओं की मुक्ति के लिए की जाने वाली एक अत्यंत महत्वपूर्ण पूजा।'
    },
    longDesc: {
      en: 'Narayan Nagbali consists of two major rituals: Narayan Bali (to cure ancestral troubles and satisfy unfulfilled desires of souls) and Nagbali (to seek forgiveness for killing a snake, a sacred symbol of spiritual energy). This traditional ritual is performed strictly according to instructions in the ancient scripture "Garuḍa Purāṇa" at his dedicated private Puja Sthal under Pandit Bineet Shastriji.',
      hi: 'नारायण नागबलि में दो मुख्य अनुष्ठान होते हैं: नारायण बलि (पितृ दोष के निवारण के लिए) और नागबलि (नाग हत्या के दोष से मुक्ति के लिए)। यह पारंपरिक अनुष्ठान पंडित बिनीत शास्त्रीजी के सान्निध्य में उनके समर्पित निजी पूजा स्थल पर प्राचीन ग्रंथ "गरुड़ पुराण" के अनुसार किया जाता है।'
    },
    whoShouldPerform: {
      en: 'Devotees experiencing persistent blockages in career, child birth issues, chronic health ailments, or frequent bad dreams related to ancestors and snakes are advised to perform this ritual.',
      hi: 'करियर में लगातार बाधाओं, संतान प्राप्ति में कठिनाई, पुराने स्वास्थ्य रोगों, या पूर्वजों और सांपों से संबंधित बार-बार बुरे सपने देखने वाले भक्तों को यह अनुष्ठान करने की सलाह दी जाती है।'
    },
    importance: {
      en: 'It is a special multi-day ritual performed only at holy places like Trimbakeshwar. It must be noted that this ritual is performed at Pandit Bineet Shastriji\'s private Puja Sthal outside the main temple, keeping the temple darshan separate.',
      hi: 'यह एक विशेष बहु-दिवसीय अनुष्ठान है जो केवल त्र्यंबकेश्वर जैसे पवित्र स्थानों पर ही किया जाता है। यह ध्यान रखना महत्वपूर्ण है कि यह अनुष्ठान मुख्य मंदिर के बाहर पंडितजी के निजी पूजा स्थल पर किया जाता है, जिससे मंदिर दर्शन अलग रहता है।'
    },
    benefits: [
      {
        en: 'Resolves obstacles in business, family expansion, and financial growth.',
        hi: 'व्यवसाय, वंश वृद्धि और वित्तीय विकास में आ रही बाधाओं को दूर करता है।'
      },
      {
        en: 'Brings immense peace, mental stability, and harmony in household relationships.',
        hi: 'घर-परिवार में अत्यधिक शांति, मानसिक स्थिरता और सामंजस्य लाता है।'
      },
      {
        en: 'Absolves the family from ancestral debts and curses (Pitru Shaap).',
        hi: 'परिवार को पितृ ऋण और श्राप से मुक्ति दिलाता है।'
      }
    ],
    procedure: [
      {
        en: 'Day 1: Taking the formal Sankalp (sacred resolution) in Trimbakeshwar, and starting Narayan Bali rituals.',
        hi: 'पहला दिन: त्र्यंबकेश्वर में औपचारिक संकल्प और नारायण बलि अनुष्ठान का प्रारंभ।'
      },
      {
        en: 'Day 2: Performance of Nagbali rituals, offering wheat flour snake images, and specialized fire oblations (Havan).',
        hi: 'दूसरा दिन: नागबलि अनुष्ठान, आटे के बने नाग की पूजा और विशेष हवन।'
      },
      {
        en: 'Day 3: Final Ganesh Puja, offering charity to Panditji and brahmins, and concluding prayers for peace.',
        hi: 'तीसरा दिन: अंतिम गणेश पूजा, पंडितजी और ब्राह्मणों को दान-दक्षिणा और शांति के लिए समापन प्रार्थना।'
      }
    ],
    preparation: [
      {
        en: 'Devotees are requested to wear traditional dhotis (for men) and sarees (for women). Avoid black and green clothes.',
        hi: 'भक्तों से अनुरोध है कि वे पारंपरिक धोती (पुरुषों के लिए) और साड़ी (महिलाओं के लिए) पहनें। काले और हरे रंग के कपड़ों से बचें।'
      },
      {
        en: 'A fast should be observed on the first morning until the primary Sankalp is completed.',
        hi: 'पहले दिन सुबह प्राथमिक संकल्प पूरा होने तक उपवास रखना चाहिए।'
      }
    ],
    itemsRequired: [
      {
        en: 'All ceremonial items (flowers, sacred threads, copper pots, organic offerings) are completely arranged by Panditji and his assistants at the Puja Sthal.',
        hi: 'सभी पूजा सामग्री (फूल, पवित्र धागे, तांबे के बर्तन, जैविक सामग्री) पूजा स्थल पर पंडितजी और उनके सहायकों द्वारा व्यवस्थित की जाती है।'
      }
    ],
    duration: {
      en: '3 Days (approx. 3-4 hours each day)',
      hi: '3 दिन (लगभग 3-4 घंटे प्रतिदिन)'
    },
    idealTiming: {
      en: 'Performed on auspicious tithis (lunar days), particularly during Pitru Paksha, Amavasya, or custom nakshatra combinations.',
      hi: 'शुभ तिथियों पर किया जाता है, विशेष रूप से पितृ पक्ष, अमावस्या या विशिष्ट नक्षत्रों के दौरान।'
    },
    dakshina: {
      en: '₹8,100/- (Group Puja) | ₹15,000/- (Separate Puja)',
      hi: '₹8,100/- (सामूहिक पूजा) | ₹15,000/- (स्वतंत्र/व्यक्तिगत पूजा)'
    },
    auspiciousDates: [
      { month: { en: 'January 2026', hi: 'जनवरी २०२६' }, dates: '2, 5, 8, 11, 16, 20, 26, 29' },
      { month: { en: 'February 2026', hi: 'फरवरी २०२६' }, dates: '1, 4, 7, 10, 13, 16' },
      { month: { en: 'March 2026', hi: 'मार्च २०२६' }, dates: '1, 5, 8, 11, 15, 21, 25, 28, 31' },
      { month: { en: 'April 2026', hi: 'अप्रैल २०२६' }, dates: '3, 6, 9, 12, 16, 20, 24, 27, 30' },
      { month: { en: 'May 2026', hi: 'मई २०२६' }, dates: '3, 6, 9, 15 (No muhurat after 15 May due to Adhik Maas)' },
      { month: { en: 'June 2026', hi: 'जून २०२६' }, dates: '(No muhurat during Adhik Maas), 15, 18, 22, 25, 28' },
      { month: { en: 'July 2026', hi: 'जुलाई २०२६' }, dates: '2, 9, 12, 15, 18, 21, 24, 27, 30' },
      { month: { en: 'August 2026', hi: 'अगस्त २०२६' }, dates: '5, 8, 11, 14, 18, 21, 26' },
      { month: { en: 'September 2026', hi: 'सितंबर २०२६' }, dates: '1, 4, 8, 17, 20, 22, 28' },
      { month: { en: 'October 2026', hi: 'अक्टूबर २०२६' }, dates: '1, 5, 8, 26, 29' },
      { month: { en: 'November 2026', hi: 'नवंबर २०२६' }, dates: '1, 4, 13, 16, 22, 26, 29' },
      { month: { en: 'December 2026', hi: 'दिसंबर २०२६' }, dates: '3, 6, 10, 13, 20, 23, 26, 29' }
    ],
    faqs: [
      {
        question: {
          en: 'Is this puja performed inside the main Trimbakeshwar Temple?',
          hi: 'क्या यह पूजा मुख्य त्र्यंबकेश्वर मंदिर के अंदर की जाती है?'
        },
        answer: {
          en: 'No. Traditional Vedic rituals are performed by Pandit Bineet Shastriji at his dedicated private Puja Sthal nearby. Temple darshan and ritual venues are separate.',
          hi: 'नहीं। पारंपरिक वैदिक अनुष्ठान पंडित बिनीत शास्त्रीजी द्वारा पास के उनके समर्पित निजी पूजा स्थल पर किए जाते हैं। मंदिर दर्शन और अनुष्ठान स्थल अलग-अलग हैं।'
        }
      }
    ]
  },
  {
    id: 'kalsarpa-shanti',
    title: {
      en: 'Kalsarpa Shanti Puja',
      hi: 'कालसर्प शांति पूजा'
    },
    shortDesc: {
      en: 'A powerful Vedic ritual to pacify the negative alignments of Rahu and Ketu in one\'s astrological birth chart.',
      hi: 'राहु और केतु के नकारात्मक प्रभावों को शांत करने के लिए एक अत्यंत शक्तिशाली वैदिक अनुष्ठान।'
    },
    longDesc: {
      en: 'Kalsarpa Yog occurs when all seven planetary bodies are aligned between Rahu (the snake\'s head) and Ketu (the snake\'s tail). This alignment creates obstacles, instability, and delays. The Kalsarpa Shanti puja utilizes potent Vedic mantras, special offering rites to Snake deities (Nagas), and customized resolution formulas to restore balance and abundance. This is conducted by Pandit Bineet Shastriji at his specialized private Puja Sthal in Trimbakeshwar with pure Vedic integrity.',
      hi: 'कालसर्प योग तब बनता है जब कुंडली में सभी सात ग्रह राहु और केतु के बीच आ जाते हैं। यह स्थिति जीवन में अस्थिरता, संघर्ष और देरी पैदा करती है। कालसर्प शांति पूजा पंडित बिनीत शास्त्रीजी द्वारा उनके समर्पित निजी पूजा स्थल पर शक्तिशाली वैदिक मंत्रों, नाग देवताओं की पूजा और अनुकूलित संकल्पों के माध्यम से संपन्न की जाती है।'
    },
    whoShouldPerform: {
      en: 'Anyone suffering from severe hurdles in education, career delays, constant health struggles, or whose astrological chart has been identified by an astrologer as containing Kalsarpa Dosha.',
      hi: 'शिक्षा में अत्यधिक रुकावटों, करियर में देरी, लगातार स्वास्थ्य समस्याओं से पीड़ित व्यक्ति, या जिनकी कुंडली में कालसर्प दोष पाया गया है, उन्हें यह पूजा करनी चाहिए।'
    },
    importance: {
      en: 'Trimbakeshwar is highly revered for Kalsarpa Shanti because of the presence of the divine Jyotirlinga. The ritual is completed safely and transparently by Pandit Bineet Shastriji at his private Puja Sthal.',
      hi: 'दिव्य ज्योतिर्लिंग की उपस्थिति के कारण कालसर्प शांति के लिए त्र्यंबकेश्वर को अत्यधिक पूजनीय माना जाता है। अनुष्ठान पंडित बिनीत शास्त्रीजी के सान्निध्य में उनके निजी पूजा स्थल पर सुरक्षित और पारदर्शी रूप से पूरा किया जाता है।'
    },
    benefits: [
      {
        en: 'Eliminates stagnation and triggers sudden positive transformations in career.',
        hi: 'करियर में स्थिरता को समाप्त करता है और अचानक सकारात्मक परिवर्तन लाता है।'
      },
      {
        en: 'Protects against sudden accidents, losses, and negative energies.',
        hi: 'अचानक होने वाली दुर्घटनाओं, नुकसान और नकारात्मक ऊर्जाओं से रक्षा करता।'
      },
      {
        en: 'Provides extreme mental clarity, peace, and strengthens willpower.',
        hi: 'अत्यधिक मानसिक स्पष्टता, शांति प्रदान करता है और इच्छाशक्ति को मजबूत करता है।'
      }
    ],
    procedure: [
      {
        en: 'Ganesh Puja, Punyahavachan, and worship of gold-silver snake replicas.',
        hi: 'गणेश पूजा, पुण्याहवाचन और सोने-चांदी की नाग प्रतिमाओं की पूजा।'
      },
      {
        en: 'Recitation of Rahu-Ketu peace mantras and offering sacred herbs to the Havan fire.',
        hi: 'राहु-केतु शांति मंत्रों का पाठ और हवन कुंड में पवित्र जड़ी-बूटियों की आहुति।'
      },
      {
        en: 'Visarjan (holy immersion) of the silver snake in Trimbakeshwar and seeking blessings.',
        hi: 'त्र्यंबकेश्वर में चांदी के नाग का विसर्जन और आशीर्वाद प्राप्त करना।'
      }
    ],
    preparation: [
      {
        en: 'Wear newly purchased traditional wear. Men are advised to wear white dhotis or light-colored kurtas.',
        hi: 'नए खरीदे गए पारंपरिक वस्त्र पहनें। पुरुषों को सफेद धोती या हल्के रंग का कुर्ता पहनने की सलाह दी जाती है।'
      }
    ],
    itemsRequired: [
      {
        en: 'All items, including consecrated silver Nag-Nagin replicas, are prepared beforehand at our Puja Sthal.',
        hi: 'पूजा स्थल पर अभिमंत्रित चांदी के नाग-नागिन के जोड़ों सहित सभी सामग्रियां पहले से ही तैयार रखी जाती हैं।'
      }
    ],
    duration: {
      en: '1 Day (approx. 2-3 hours)',
      hi: '1 दिन (लगभग 2-3 घंटे)'
    },
    idealTiming: {
      en: 'Auspicious days include Amavasya, Panchami (especially Naag Panchami), eclipses, and Mondays.',
      hi: 'अमावस्या, पंचमी (विशेष रूप से नागपंचमी), ग्रहण और सोमवार इस पूजा के लिए सर्वोत्तम माने जाते हैं।'
    },
    dakshina: {
      en: '₹2,100/- (Kaalsarp Puja) | ₹5,100/- (Maha Puja with Rahu-Ketu)',
      hi: '₹2,100/- (कालसर्प पूजा) | ₹5,100/- (राहु-केतु महापूजा)'
    },
    auspiciousDates: [
      { month: { en: 'January 2026', hi: 'जनवरी २०२६' }, dates: '4, 7, 10, 18, 19, 23, 28' },
      { month: { en: 'February 2026', hi: 'फरवरी २०२६' }, dates: '3, 6, 9, 12, 15, 19' },
      { month: { en: 'March 2026', hi: 'मार्च २०२६' }, dates: '3, 7, 10, 13, 17, 19, 23, 27, 30' },
      { month: { en: 'April 2026', hi: 'अप्रैल २०२६' }, dates: '2, 5, 8, 11, 14, 16, 19, 22, 26, 29' },
      { month: { en: 'May 2026', hi: 'मई २०२६' }, dates: '2, 5, 6, 11, 13, 17, 19, 21, 23, 24, 26, 28' },
      { month: { en: 'June 2026', hi: 'जून २०२६' }, dates: '1, 3, 4, 7, 9, 11, 13, 14, 17, 20, 24, 27, 30' },
      { month: { en: 'July 2026', hi: 'जुलाई २०२६' }, dates: '4, 6, 8, 11, 14, 17, 20, 23, 26, 29' },
      { month: { en: 'August 2026', hi: 'अगस्त २०२६' }, dates: '3, 7, 10, 13, 17 (Nag Panchami), 20, 22, 25, 29, 30' },
      { month: { en: 'September 2026', hi: 'सितंबर २०२६' }, dates: '3, 6, 10, 13, 22, 24, 26' },
      { month: { en: 'October 2026', hi: 'अक्टूबर २०२६' }, dates: '23, 28, 31' },
      { month: { en: 'November 2026', hi: 'नवंबर २०२६' }, dates: '3, 7, 15, 19, 22, 24, 28' },
      { month: { en: 'December 2026', hi: 'दिसंबर २०२६' }, dates: '1, 5, 8, 12, 16, 18, 22, 25, 28, 31' }
    ],
    faqs: [
      {
        question: {
          en: 'How many days do we need to stay in Trimbakeshwar for this?',
          hi: 'इसके लिए हमें त्र्यंबकेश्वर में कितने दिन रुकना होगा?'
        },
        answer: {
          en: 'The Kalsarpa Shanti ritual takes just 1 day (about 3 hours). You can easily arrive in the morning and return by evening.',
          hi: 'कालसर्प शांति अनुष्ठान में केवल 1 दिन (लगभग 3 घंटे) का समय लगता है। आप आसानी से सुबह आ सकते हैं और शाम तक वापस जा सकते हैं।'
        }
      }
    ]
  },
  {
    id: 'rudrabhishek',
    title: {
      en: 'Rudrabhishek Puja',
      hi: 'रुद्राभिषेक पूजा'
    },
    shortDesc: {
      en: 'A sacred bathing ritual of Lord Shiva, accompanied by the energetic chanting of Sri Rudram from Yajurveda.',
      hi: 'यजुर्वेद के श्री रुद्रम के ऊर्जावान पाठ के साथ भगवान शिव का पवित्र अभिषेक अनुष्ठान।'
    },
    longDesc: {
      en: 'Rudrabhishek is one of the most powerful and purifying spiritual rituals in Hinduism. It involves offering continuous libations of sacred fluids—milk, honey, sugarcane juice, curd, coconut water, and pure water—to the Shiva Linga. This is done while chanting vedic mantras to invoke Lord Shiva in his majestic "Rudra" form, eliminating negative karmic impressions and seeking global prosperity.',
      hi: 'रुद्राभिषेक हिंदू धर्म में सबसे शक्तिशाली और शुद्ध करने वाले आध्यात्मिक अनुष्ठानों में से एक है। इसमें शिव लिंग पर दूध, शहद, गन्ने का रस, दही, नारियल पानी और पवित्र जल जैसी दिव्य सामग्रियों से निरंतर अभिषेक किया जाता है। यह भगवान शिव के "रुद्र" रूप का आह्वान करने के लिए वैदिक मंत्रों के उच्चारण के साथ किया जाता है।'
    },
    whoShouldPerform: {
      en: 'Recommended for those seeking overall health wellness, relief from chronic diseases, planetary peace, and direct divine blessings of Lord Shiva.',
      hi: 'समग्र स्वास्थ्य कल्याण, पुरानी बीमारियों से राहत, ग्रहों की शांति और भगवान शिव का सीधा आशीर्वाद चाहने वालों के लिए अनुशंसित।'
    },
    importance: {
      en: 'Conducted under the spiritual atmosphere of Trimbakeshwar at our consecrated ritual hall, giving devotees a serene environment to absorb the powerful Vedic vibrations.',
      hi: 'त्र्यंबकेश्वर के आध्यात्मिक वातावरण में हमारे पवित्र अनुष्ठान हॉल में आयोजित किया जाता है, जिससे भक्तों को शक्तिशाली वैदिक कंपनों को ग्रहण करने के लिए एक शांत वातावरण मिलता है।'
    },
    benefits: [
      {
        en: 'Purifies your planetary afflictions and dissolves accumulated negative karma.',
        hi: 'ग्रहों के प्रतिकूल प्रभाव को शुद्ध करता है और संचित नकारात्मक कर्मों को नष्ट करता है।'
      },
      {
        en: 'Promotes deep inner peace, heals mental depression, and brings physical rejuvenation.',
        hi: 'गहरी आंतरिक शांति को बढ़ावा देता है, मानसिक तनाव को ठीक करता है और शारीरिक रूप से नवजीवन प्रदान करता है।'
      },
      {
        en: 'Creates a powerful protective aura around the devotee and their family.',
        hi: 'भक्त और उनके परिवार के चारों ओर एक शक्तिशाली सुरक्षा कवच बनाता है।'
      }
    ],
    procedure: [
      {
        en: 'Sankalp for the family\'s wellbeing and introductory Shiv Pooja.',
        hi: 'परिवार के कल्याण के लिए संकल्प और प्रारंभिक शिव पूजा।'
      },
      {
        en: 'Continuous sacred abhisheka (bathing) with 11 ingredients while chanting Sri Rudram.',
        hi: 'श्री रुद्रम का पाठ करते हुए 11 पवित्र सामग्रियों के साथ निरंतर अभिषेक।'
      },
      {
        en: 'Arti, Prasad offering, and distribution of holy tirth and ash.',
        hi: 'आरती, प्रसाद अर्पण और पवित्र तीर्थ एवं भस्म का वितरण।'
      }
    ],
    preparation: [
      {
        en: 'Devotees should clean themselves with a holy bath, wear traditional clothes, and prepare their minds with simple chants.',
        hi: 'भक्तों को पवित्र स्नान करना चाहिए, पारंपरिक कपड़े पहनने चाहिए और सरल शिव मंत्रों के साथ मन को शांत रखना चाहिए।'
      }
    ],
    itemsRequired: [
      {
        en: 'Fresh milk, organic honey, Bilva leaves, and and other liquid offerings are arranged on-site by our organization.',
        hi: 'ताजा दूध, जैविक शहद, बिल्व पत्र और अन्य तरल सामग्रियां हमारे संस्थान द्वारा स्थल पर व्यवस्थित की जाती हैं।'
      }
    ],
    duration: {
      en: '1 Day (approx. 1.5 to 2 hours)',
      hi: '1 दिन (लगभग 1.5 से 2 घंटे)'
    },
    idealTiming: {
      en: 'Mondays, Pradosh days, Shivratri, and the entire holy month of Shravan are highly auspicious.',
      hi: 'सोमवार, प्रदोष व्रत, शिवरात्रि और सावन का पूरा पवित्र महीना इसके लिए अत्यधिक शुभ माना जाता है।'
    },
    dakshina: {
      en: '₹1,100/-',
      hi: '₹1,100/-'
    },
    faqs: [
      {
        question: {
          en: 'Can we perform this puja online through video call?',
          hi: 'क्या हम वीडियो कॉल के माध्यम से यह पूजा ऑनलाइन कर सकते हैं?'
        },
        answer: {
          en: 'Yes. For devotees who cannot visit physically, we offer live online Rudrabhishek with a personalized Sankalp taken in your name and gotra.',
          hi: 'हाँ। जो भक्त शारीरिक रूप से आने में असमर्थ हैं, उनके लिए हम लाइव ऑनलाइन रुद्राभिषेक की सुविधा प्रदान करते हैं, जिसमें आपके नाम और गोत्र के साथ संकल्प लिया जाता है।'
        }
      }
    ]
  },
  {
    id: 'mahamrityunjaya',
    title: {
      en: 'Mahamrityunjaya Jaap',
      hi: 'महामृत्युंजय जाप'
    },
    shortDesc: {
      en: 'A powerful life-saving Vedic chant of Lord Shiva to overcome chronic illnesses, terminal disease, and untimely deaths.',
      hi: 'क्रोनिक और गंभीर बीमारियों पर विजय पाने और अकाल मृत्यु से रक्षा के लिए भगवान शिव का एक अत्यंत शक्तिशाली जीवन रक्षक मंत्र जाप।'
    },
    longDesc: {
      en: 'The Mahamrityunjaya mantra is from the Rigveda, dedicated to Tryambaka (The Three-Eyed One) Lord Shiva. It is chanted to ward off physical and mental ailments, secure longevity, and achieve liberation. Our learned Vedic scholars perform this intense japa chanting (usually 11,000, 21,000, or 1,25,000 recitations) followed by a grand Havan, ensuring direct planetary healing for the devotee.',
      hi: 'महामृत्युंजय मंत्र ऋग्वेद से लिया गया है, जो त्र्यंबक (तीन आंखों वाले) भगवान शिव को समर्पित है। यह शारीरिक और मानसिक व्याधियों को दूर करने, दीर्घायु प्राप्त करने और मोक्ष की प्राप्ति के लिए किया जाता है। हमारे विद्वान वैदिक पंडित इस सघन जाप (आमतौर पर 11,000, 21,000 या 1,25,000 आवृतियां) के साथ हवन संपन्न करते हैं।'
    },
    whoShouldPerform: {
      en: 'Devotees or family members suffering from severe life-threatening illness, negative astrological periods (Maraka dasha), or extreme fear of mortality.',
      hi: 'गंभीर या जानलेवा बीमारी से पीड़ित व्यक्ति, कुंडली में मारक दशा के प्रभाव वाले लोग, या मृत्यु के अत्यधिक भय से पीड़ित भक्तों के लिए यह अत्यंत लाभकारी है।'
    },
    importance: {
      en: 'Conducted at our private, peaceful Puja Sthal in Trimbakeshwar under absolute spiritual discipline.',
      hi: 'पूर्ण आध्यात्मिक अनुशासन के तहत त्र्यंबकेश्वर में हमारे निजी, शांत पूजा स्थल पर आयोजित किया जाता है।'
    },
    benefits: [
      {
        en: 'Acts as a protective shield against accidents and untimely misfortunes.',
        hi: 'दुर्घटनाओं और अकाल विपत्तियों के खिलाफ एक सुरक्षा कवच के रूप में कार्य करता है।'
      },
      {
        en: 'Accelerates physical healing, eliminates disease-causing pathogens, and increases vital energy.',
        hi: 'शारीरिक उपचार को गति देता है, रोग पैदा करने वाले कारणों को दूर करता है और प्राण शक्ति बढ़ाता है।'
      },
      {
        en: 'Removes deep-seated anxieties, insomnia, and sub-conscious fears.',
        hi: 'गहरी चिंता, अनिद्रा और अवचेतन मन के भयों को दूर करता है।'
      }
    ],
    procedure: [
      {
        en: 'Taking a formal Sankalp specifying the health intent of the devotee.',
        hi: 'भक्त के स्वास्थ्य उद्देश्यों को निर्दिष्ट करते हुए एक औपचारिक संकल्प लेना।'
      },
      {
        en: 'Rudra worship and continuous chanting of the Mahamrityunjaya Mantra by a group of certified Brahmins.',
        hi: 'रुद्र पूजन और प्रमाणित ब्राह्मणों के समूह द्वारा महामृत्युंजय मंत्र का निरंतर जाप।'
      },
      {
        en: 'Concluding Havan, offering sweet herbs, and taking blessings.',
        hi: 'हवन, मीठी जड़ी-बूटियों की आहुति और आशीर्वाद के साथ समापन।'
      }
    ],
    preparation: [
      {
        en: 'Clean, light clothing. Devotees can sit in the ceremony or provide their birth details to be represented.',
        hi: 'स्वच्छ, हल्के कपड़े पहनें। भक्त स्वयं अनुष्ठान में बैठ सकते हैं या अपने जन्म का विवरण देकर प्रतिनिधि के माध्यम से भी करवा सकते।'
      }
    ],
    itemsRequired: [
      {
        en: 'Specific wood, dry fruits, medicinal herbs, and pure cow ghee are arranged by our team.',
        hi: 'विशिष्ट समिधा (लकड़ी), सूखे मेवे, औषधीय जड़ी-बूटियाँ और शुद्ध गाय का घी हमारी टीम द्वारा व्यवस्थित किया जाता है।'
      }
    ],
    duration: {
      en: '3 to 7 Days (depends on the number of mantra chantings selected)',
      hi: '3 से 7 दिन (जाप संख्या के चयन पर निर्भर करता है)'
    },
    idealTiming: {
      en: 'Auspicious lunar days, Mondays, or immediately during critical medical phases.',
      hi: 'शुभ चंद्र तिथियां, सोमवार या गंभीर चिकित्सा चरणों के दौरान तुरंत कराया जाता है।'
    },
    dakshina: {
      en: '₹35,000/-',
      hi: '₹35,000/-'
    },
    faqs: [
      {
        question: {
          en: 'Can we perform this puja on behalf of a family member who is hospitalized?',
          hi: 'क्या हम अस्पताल में भर्ती परिवार के किसी सदस्य की ओर से यह पूजा करवा सकते हैं?'
        },
        answer: {
          en: 'Yes. We take a special Sankalp mentioning the patient\'s name, birth details, and current health condition. They can join online via live streaming.',
          hi: 'हाँ। हम रोगी का नाम, जन्म विवरण और वर्तमान स्वास्थ्य स्थिति का उल्लेख करते हुए एक विशेष संकल्प लेते हैं। वे लाइव स्ट्रीमिंग के माध्यम से ऑनलाइन शामिल हो सकते हैं।'
        }
      }
    ]
  },
  {
    id: 'tripindi-shraddha',
    title: {
      en: 'Tripindi Shraddha Puja',
      hi: 'त्रिपिंडी श्राद्ध पूजा'
    },
    shortDesc: {
      en: 'An ultimate multi-generational ancestral rite to pacify souls of ancestors who passed away prematurely.',
      hi: 'अकाल मृत्यु को प्राप्त हुए पूर्वजों की आत्माओं की शांति के लिए बहु-पीढ़ीगत अंतिम पैतृक अनुष्ठान।'
    },
    longDesc: {
      en: 'If the annual shraddha (ancestral offering) has been neglected for three consecutive years, ancestors experience immense spiritual distress. Tripindi Shraddha is an extraordinary remedy to address this gap. In this puja, pindas (sacred food balls) made of rice, barley, and sesame seeds are offered to three generations of ancestors representing different energy states, bringing ultimate peace to the bloodline.',
      hi: 'यदि लगातार तीन वर्षों तक वार्षिक श्राद्ध की उपेक्षा की जाती है, तो पूर्वजों को अत्यधिक कष्ट होता है। त्रिपिंडी श्राद्ध इस बाधा को दूर करने का एक अचूक उपाय है। इसमें चावल, जौ और तिल से बने पिंडों का दान पूर्वजों को किया जाता है।'
    },
    whoShouldPerform: {
      en: 'Sons or family representatives facing continuous family conflicts, unexplained wealth loss, delays in marriage, or who wish to offer supreme peace to ancestors.',
      hi: 'पारिवारिक कलह, धन की अज्ञात हानि, विवाह में देरी का सामना करने वाले पुत्रों या परिवार के प्रतिनिधियों को यह श्राद्ध करना चाहिए।'
    },
    importance: {
      en: 'Trimbakeshwar is highly revered globally for ancestral offerings. The ritual takes place at Pandit Bineet Shastriji\'s private Puja Sthal under standard vedic parameters.',
      hi: 'पैतृक तर्पण के लिए त्र्यंबकेश्वर धाम विश्व स्तर पर पूजनीय है। यह अनुष्ठान मानक वैदिक मानदंडों के तहत पंडित बिनीत शास्त्रीजी के निजी पूजा स्थल पर संपन्न होता है।'
    },
    benefits: [
      {
        en: 'Frees ancestors from lower atmospheric realms and guides them towards spiritual liberation.',
        hi: 'पूर्वजों को निम्न लोकों से मुक्त कर उन्हें मोक्ष की ओर अग्रसर करता है।'
      },
      {
        en: 'Resolves long-standing disputes and brings happiness, unity, and lineage expansion.',
        hi: 'लंबे समय से चले आ रहे विवादों को सुलझाता है और परिवार में सुख, एकता और वंश वृद्धि लाता है।'
      },
      {
        en: 'Releases the devotee from psychological guilt of neglecting ancestral duties.',
        hi: 'पैतृक कर्तव्यों की उपेक्षा के मनोवैज्ञानिक अपराध बोध से भक्त को मुक्त करता है।'
      }
    ],
    procedure: [
      {
        en: 'Purification baths and drawing three spiritual circles symbolizing Creator, Protector, and Dissolver.',
        hi: 'शुद्धि स्नान और सृजनकर्ता, संरक्षक एवं संहारक का प्रतीक तीन आध्यात्मिक मंडल बनाना।'
      },
      {
        en: 'Preparation and offering of three pindas representing fatherly, grandfatherly, and ancient ancestral souls.',
        hi: 'पिता, दादा और अति-प्राचीन पूर्वजों की आत्माओं का प्रतिनिधित्व करने वाले तीन पिंडों को तैयार कर उनका दान करना।'
      },
      {
        en: 'Tarpan (water offerings) and distribution of food and charity.',
        hi: 'तर्पण (जल तर्पण) और भोजन व दान-दक्षिणा।'
      }
    ],
    preparation: [
      {
        en: 'Performers should avoid consuming non-vegetarian food, alcohol, and onion/garlic for at least three days prior.',
        hi: 'पूजा करने वाले भक्तों को कम से कम तीन दिन पहले से मांसाहार, शराब और प्याज/लहसुन के सेवन से बचना चाहिए।'
      }
    ],
    itemsRequired: [
      {
        en: 'Organic barley flour, pure honey, black sesame seeds, and specific sacred grasses (Kusha) are prepared by us.',
        hi: 'जैविक जौ का आटा, शुद्ध शहद, काले तिल और विशिष्ट पवित्र कुश घास हमारे द्वारा तैयार की जाती है।'
      }
    ],
    duration: {
      en: '1 Day (approx. 2 to 3 hours)',
      hi: '1 दिन (लगभग 2 से 3 घंटे)'
    },
    idealTiming: {
      en: 'Auspicious days during Shradh Paksha, Pitru Amavasya, or custom planetary transits.',
      hi: 'श्राद्ध पक्ष, पितृ अमावस्या या विशिष्ट ग्रहों के गोचर के दौरान अनुकूल तिथियां।'
    },
    dakshina: {
      en: '₹5,100/-',
      hi: '₹5,100/-'
    },
    auspiciousDates: [
      { month: { en: 'January 2026', hi: 'जनवरी २०२६' }, dates: '2, 5, 8, 11, 16, 20, 26, 29' },
      { month: { en: 'February 2026', hi: 'फरवरी २०२६' }, dates: '1, 4, 7, 10, 13, 16' },
      { month: { en: 'March 2026', hi: 'मार्च २०२६' }, dates: '1, 5, 8, 11, 15, 21, 25, 28, 31' },
      { month: { en: 'April 2026', hi: 'अप्रैल २०२६' }, dates: '3, 6, 9, 12, 16, 20, 24, 27, 30' },
      { month: { en: 'May 2026', hi: 'मई २०२६' }, dates: '3, 6, 9, 15 (No muhurat after 15 May due to Adhik Maas)' },
      { month: { en: 'June 2026', hi: 'जून २०२६' }, dates: '(No muhurat during Adhik Maas), 15, 18, 22, 25, 28' },
      { month: { en: 'July 2026', hi: 'जुलाई २०२६' }, dates: '2, 9, 12, 15, 18, 21, 24, 27, 30' },
      { month: { en: 'August 2026', hi: 'अगस्त २०२६' }, dates: '5, 8, 11, 14, 18, 21, 26' },
      { month: { en: 'September 2026', hi: 'सितंबर २०२६' }, dates: '1, 4, 8, 17, 20, 22, 28' },
      { month: { en: 'October 2026', hi: 'अक्टूबर २०२६' }, dates: '1, 5, 8, 26, 29' },
      { month: { en: 'November 2026', hi: 'नवंबर २०२६' }, dates: '1, 4, 13, 16, 22, 26, 29' },
      { month: { en: 'December 2026', hi: 'दिसंबर २०२६' }, dates: '3, 6, 10, 13, 20, 23, 26, 29' }
    ],
    faqs: [
      {
        question: {
          en: 'Can a single woman perform Tripindi Shraddha?',
          hi: 'क्या कोई अकेली महिला त्रिपिंडी श्राद्ध कर सकती है?'
        },
        answer: {
          en: 'Yes, according to Vedic shastras, if there is no male heir in the family, women can perform these rites with complete authenticity to satisfy ancestral souls.',
          hi: 'हाँ, वैदिक शास्त्रों के अनुसार, यदि परिवार में कोई पुरुष उत्तराधिकारी नहीं है, तो महिलाएं पूर्वजों की संतुष्टि के लिए पूर्ण प्रामाणिकता के साथ यह संस्कार कर सकती हैं।'
        }
      }
    ]
  },
  {
    id: 'pitru-dosh',
    title: {
      en: 'Pitru Dosh Nivaran Puja',
      hi: 'पितृ दोष निवारण पूजा'
    },
    shortDesc: {
      en: 'A dedicated spiritual pacification to neutralize the planetary curses or unresolved debts of ancestors.',
      hi: 'पूर्वजों के अनसुलझे ऋणों या कुंडली में स्थित पितृ दोष के प्रभावों को शांत करने के लिए एक विशेष पूजा।'
    },
    longDesc: {
      en: 'When ancestors depart with unfulfilled desires or due to untimely deaths without proper rites, it reflects as Pitru Dosh in the birth charts of descendants (typically in the 9th house of Sun/Rahu alignments). This puja involves special tarpans, cow feeding rituals (Gau Seva), chanting peace prayers, and donation of grains. It is conducted at our specialized Puja Sthal in Trimbakeshwar.',
      hi: 'जब पूर्वज अधूरी इच्छाओं के साथ या उचित संस्कारों के बिना चले जाते हैं, तो यह वंशजों की कुंडली में पितृ दोष (आमतौर पर सूर्य/राहु के युति से 9वें घर में) के रूप में दिखाई देता है। इस पूजा में विशेष तर्पण, गौ सेवा, शांति मंत्रों का जाप और अनाज दान शामिल है।'
    },
    whoShouldPerform: {
      en: 'Those experiencing constant health issues, childlessness, repetitive setbacks, or delays in life events.',
      hi: 'लगातार स्वास्थ्य समस्याओं, निःसंतानता, बार-बार असफलता या जीवन की घटनाओं में अत्यधिक देरी का सामना करने वाले लोगों को यह पूजा करानी चाहिए।'
    },
    importance: {
      en: 'Trimbakeshwar is highly auspicious for Pitru Dosh Nivaran. Pandit Bineet Shastriji provides personalized guidance and a transparent, pure process.',
      hi: 'पितृ दोष निवारण के लिए त्र्यंबकेश्वर अत्यंत शुभ है। पंडित बिनीत शास्त्रीजी व्यक्तिगत मार्गदर्शन और एक पारदर्शी, शुद्ध प्रक्रिया प्रदान करते हैं।'
    },
    benefits: [
      {
        en: 'Resolves relationship issues, children\'s education, and marriage obstacles.',
        hi: 'पारिवारिक संबंधों की समस्याओं, बच्चों की शिक्षा और विवाह की बाधाओं को दूर करता है।'
      },
      {
        en: 'Brings stability to family finances and sudden professional growth.',
        hi: 'पारिवारिक वित्त में स्थिरता और अचानक व्यावसायिक प्रगति लाता है।'
      },
      {
        en: 'Restores the blessings of elders and departed souls upon the family.',
        hi: 'परिवार पर बड़ों और दिवंगत आत्माओं का आशीर्वाद पुनः स्थापित करता है।'
      }
    ],
    procedure: [
      {
        en: 'Sankalp with family names and gotras.',
        hi: 'पारिवारिक नामों और गोत्रों के साथ संकल्प।'
      },
      {
        en: 'Vedic chants for ancestor appeasement and water oblations (Tarpan).',
        hi: 'पितृ प्रसन्नता के लिए वैदिक मंत्रोच्चार और जल तर्पण।'
      },
      {
        en: 'Donation of food, clothing, and feeding sacred cows.',
        hi: 'भोजन, वस्त्र का दान और पवित्र गौ माता को भोजन कराना।'
      }
    ],
    preparation: [
      {
        en: 'Devotees should clean their hearts and minds, keep simple fasts, and wear traditional attire.',
        hi: 'भक्तों को अपने मन और हृदय को शुद्ध रखना चाहिए, साधारण उपवास रखना चाहिए और पारंपरिक पोशाक पहननी चाहिए।'
      }
    ],
    itemsRequired: [
      {
        en: 'Fresh food for cow feeding, clothing for charity, and tirth items are provided.',
        hi: 'गौ ग्रास (गाय के लिए भोजन), दान के लिए कपड़े और तीर्थ सामग्रियां प्रदान की जाती हैं।'
      }
    ],
    duration: {
      en: '1 Day (approx. 2 hours)',
      hi: '1 दिन (लगभग 2 घंटे)'
    },
    idealTiming: {
      en: 'Amavasya, Pitru Paksha, or specific transit dates.',
      hi: 'अमावस्या, पितृ पक्ष, या विशिष्ट गोचर तिथियां।'
    },
    dakshina: {
      en: '₹3,100/-',
      hi: '₹3,100/-'
    },
    auspiciousDates: [
      { month: { en: 'January 2026', hi: 'जनवरी २०२६' }, dates: '2, 5, 8, 11, 16, 20, 26, 29' },
      { month: { en: 'February 2026', hi: 'फरवरी २०२६' }, dates: '1, 4, 7, 10, 13, 16' },
      { month: { en: 'March 2026', hi: 'मार्च २०२६' }, dates: '1, 5, 8, 11, 15, 21, 25, 28, 31' },
      { month: { en: 'April 2026', hi: 'अप्रैल २०२६' }, dates: '3, 6, 9, 12, 16, 20, 24, 27, 30' },
      { month: { en: 'May 2026', hi: 'मई २०२६' }, dates: '3, 6, 9, 15 (No muhurat after 15 May due to Adhik Maas)' },
      { month: { en: 'June 2026', hi: 'जून २०२६' }, dates: '(No muhurat during Adhik Maas), 15, 18, 22, 25, 28' },
      { month: { en: 'July 2026', hi: 'जुलाई २०२६' }, dates: '2, 9, 12, 15, 18, 21, 24, 27, 30' },
      { month: { en: 'August 2026', hi: 'अगस्त २०२६' }, dates: '5, 8, 11, 14, 18, 21, 26' },
      { month: { en: 'September 2026', hi: 'सितंबर २०२६' }, dates: '1, 4, 8, 17, 20, 22, 28' },
      { month: { en: 'October 2026', hi: 'अक्टूबर २०२६' }, dates: '1, 5, 8, 26, 29' },
      { month: { en: 'November 2026', hi: 'नवंबर २०२६' }, dates: '1, 4, 13, 16, 22, 26, 29' },
      { month: { en: 'December 2026', hi: 'दिसंबर २०२६' }, dates: '3, 6, 10, 13, 20, 23, 26, 29' }
    ],
    faqs: [
      {
        question: {
          en: 'How does Pitru Dosha affect children?',
          hi: 'पितृ दोष बच्चों को कैसे प्रभावित करता है?'
        },
        answer: {
          en: 'It can cause delays in education, behavioral challenges, or overall health blockages. Performing this puja opens spiritual paths of wisdom and prosperity.',
          hi: 'यह शिक्षा में देरी, व्यवहार संबंधी चुनौतियों या समग्र स्वास्थ्य बाधाओं का कारण बन सकता है। यह पूजा करने से बुद्धि और समृद्धि के आध्यात्मिक मार्ग खुलते हैं।'
        }
      }
    ]
  },
  {
    id: 'mangal-dosh',
    title: {
      en: 'Mangal Dosh Puja',
      hi: 'मगल दोष पूजा (भाट पूजा)'
    },
    shortDesc: {
      en: 'A specialized Mars pacification ritual to clear delays in marriage and create marital harmony.',
      hi: 'विवाह में होने वाले विलंब को दूर करने और सुखी वैवाहिक जीवन के लिए मंगल ग्रह की शांति का एक विशेष अनुष्ठान।'
    },
    longDesc: {
      en: 'Mangal Dosha occurs when Mars (Mangal) sits in the 1st, 4th, 7th, 8th, or 12th house of a horoscope. It causes fierce temperament, financial loss, delays in marriage, and post-marital struggles. The Mangal Dosh Nivaran puja features chants of Kartikeya and Mangal mantras, offering red lentils, and resolving the fiery energy of Mars. This is done with extreme spiritual accuracy by our experienced pandits at Trimbakeshwar.',
      hi: 'मंगल दोष तब बनता है जब कुंडली के प्रथम, चतुर्थ, सप्तम, अष्टम या द्वादश भाव में मंगल स्थित हो। इससे स्वभाव में उग्रता, विवाह में देरी और वैवाहिक जीवन में कलह उत्पन्न होती है। मंगल दोष निवारण पूजा में कार्तिकेय और मंगल मंत्रों का जाप किया जाता है।'
    },
    whoShouldPerform: {
      en: 'Individuals identified as "Manglik" who face obstacles in finding a suitable life partner or experience intense marital discord.',
      hi: 'वे लोग जो "मांगलिक" हैं और जिन्हें मनपसंद जीवनसाथी खोजने में बाधाएं आ रही हैं या जिनके वैवाहिक जीवन में तनाव है।'
    },
    importance: {
      en: 'Conducted at our private, peaceful Puja Sthal in Trimbakeshwar using traditional Vedic protocols.',
      hi: 'पारंपरिक वैदिक नियमों का पालन करते हुए त्र्यंबकेश्वर में हमारे निजी, शांत पूजा स्थल पर आयोजित किया जाता है।'
    },
    benefits: [
      {
        en: 'Removes astrological blockages, accelerating marriage proposals.',
        hi: 'ज्योतिषीय बाधाओं को दूर करता है, जिससे विवाह के प्रस्तावों में तेजी आती है।'
      },
      {
        en: 'Brings soft temperaments, emotional balance, and understanding between partners.',
        hi: 'स्वभाव में सौम्यता, भावनात्मक संतुलन और भागीदारों के बीच समझ लाता है।'
      },
      {
        en: 'Neutralizes negative energy affecting health and career progress.',
        hi: 'स्वास्थ्य और करियर की प्रगति को प्रभावित करने वाली नकारात्मक ऊर्जा को समाप्त करता है।'
      }
    ],
    procedure: [
      {
        en: 'Ganesh Gauri Puja and Mangal Yantra installation.',
        hi: 'गणेश गौरी पूजा और मंगल यंत्र की स्थापना।'
      },
      {
        en: 'Recitation of 108 names of Mangal Dev and Manglik Dosha Shanti mantras.',
        hi: 'मंगल देव के 108 नामों का पाठ और मांगलिक दोष शांति मंत्रों का जाप।'
      },
      {
        en: 'Red floral offerings, deep-red cloth donation, and fire oblation.',
        hi: 'लाल फूलों का अर्पण, गहरे लाल रंग के वस्त्र का दान और हवन।'
      }
    ],
    preparation: [
      {
        en: 'Wear clean red or white traditional clothes. Keep a mild fast on the morning of the ritual.',
        hi: 'साफ लाल या सफेद पारंपरिक कपड़े पहनें। अनुष्ठान की सुबह हल्का उपवास रखें।'
      }
    ],
    itemsRequired: [
      {
        en: 'Red flowers, copper plates, Mangal yantras, and red lentils are organized by us.',
        hi: 'लाल फूल, तांबे की प्लेट, मंगल यंत्र और लाल मसूर की दाल हमारे द्वारा व्यवस्थित की जाती है।'
      }
    ],
    duration: {
      en: '1 Day (approx. 2 hours)',
      hi: '1 दिन (लगभग 2 घंटे)'
    },
    idealTiming: {
      en: 'Tuesdays are highly auspicious for Mangal Dosh Puja.',
      hi: 'मंगलवार का दिन मंगल दोष पूजा के लिए अत्यधिक शुभ माना जाता है।'
    },
    dakshina: {
      en: '₹2,100/-',
      hi: '₹2,100/-'
    },
    faqs: [
      {
        question: {
          en: 'Is Bhat Puja different from Mangal Dosh Puja?',
          hi: 'क्या भात पूजा और मंगल दोष पूजा अलग हैं?'
        },
        answer: {
          en: 'No, Bhat Puja (offering cooked rice over Shiva Linga) is a highly recommended and integrated part of Mangal peace rituals in this region.',
          hi: 'नहीं, भात पूजा (शिवलिंग पर पके हुए चावल चढ़ाना) इस क्षेत्र में मंगल शांति अनुष्ठानों का एक अत्यधिक अनुशंसित और एकीकृत हिस्सा है।'
        }
      }
    ]
  },
  {
    id: 'navagraha-shanti',
    title: {
      en: 'Navagraha Shanti Puja',
      hi: 'नवग्रह शांति पूजा'
    },
    shortDesc: {
      en: 'A comprehensive ritual to balance all nine planetary bodies, inviting luck, harmony, and prosperity.',
      hi: 'सभी नौ ग्रहों को संतुलित करने, भाग्य, सद्भाव और समृद्धि को आमंत्रित करने का एक व्यापक अनुष्ठान।'
    },
    longDesc: {
      en: 'Our lives are profoundly influenced by the movements of the nine planets (Navagraha: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu). A malefic position of any planet can trigger chaos. Navagraha Shanti involves invoking each deity individually, chanting cosmic seed (Beej) mantras, offering planetary grains, and conducting a powerful fire ceremony. This is performed at our dedicated Puja Sthal with absolute authenticity.',
      hi: 'हमारा जीवन नौ ग्रहों (सूर्य, चंद्रमा, मंगल, बुध, गुरु, शुक्र, शनि, राहु और केतु) की चाल से गहराई से प्रभावित होता है। नवग्रह शांति में प्रत्येक ग्रह देवता का आह्वान किया जाता है, उनके बीज मंत्रों का जाप किया जाता है और शक्तिशाली हवन किया जाता है।'
    },
    whoShouldPerform: {
      en: 'Highly recommended before starting new businesses, constructing a house, experiencing repetitive backlashes, or during difficult planetary phases like Shani Sade Sati.',
      hi: 'नया व्यवसाय शुरू करने, गृह निर्माण से पहले, बार-बार मिल रही असफलताओं के दौरान, या शनि साढ़े साती जैसे कठिन ग्रहों के चरणों में अत्यधिक अनुशंसित।'
    },
    importance: {
      en: 'Balancing the planets in a sacred destination like Trimbakeshwar magnifies the spiritual rewards. Rituals are done at our independent Puja Sthal.',
      hi: 'त्र्यंबकेश्वर जैसे पवित्र स्थान पर ग्रहों को संतुलित करने से आध्यात्मिक फल कई गुना बढ़ जाता है। अनुष्ठान हमारे स्वतंत्र पूजा स्थल पर किए जाते हैं।'
    },
    benefits: [
      {
        en: 'Brings complete balance in life, protecting your career and health.',
        hi: 'जीवन में पूर्ण संतुलन लाता है, आपके करियर और स्वास्थ्य की रक्षा करता है।'
      },
      {
        en: 'Minimizes planetary malefic effects and amplifies your good fortune.',
        hi: 'ग्रहों के प्रतिकूल प्रभावों को कम करता है और आपके सौभाग्य को बढ़ाता है।'
      },
      {
        en: 'Creates immense harmony within the family and working environments.',
        hi: 'परिवार और कार्यक्षेत्र में अत्यधिक तालमेल स्थापित करता है।'
      }
    ],
    procedure: [
      {
        en: 'Installation of the sacred Navagraha Mandala.',
        hi: 'पवित्र नवग्रह मंडल की स्थापना।'
      },
      {
        en: 'Individual planetary invocations and chanting of specific Vedic Shanti mantras.',
        hi: 'व्यक्तिगत ग्रह आह्वान और विशिष्ट वैदिक शांति मंत्रों का पाठ।'
      },
      {
        en: 'Offering nine types of distinct grains and clothes, followed by Havan.',
        hi: 'नौ प्रकार के अलग-अलग अनाजों और वस्त्रों का अर्पण, जिसके बाद हवन किया जाता है।'
      }
    ],
    preparation: [
      {
        en: 'Prepare yourself mentally. Avoid heavy food, keep clean thoughts, and wear light-colored traditional clothes.',
        hi: 'मानसिक रूप से तैयार रहें। गरिष्ठ भोजन से बचें, विचार शुद्ध रखें और हल्के रंग के पारंपरिक कपड़े पहनें।'
      }
    ],
    itemsRequired: [
      {
        en: 'Nine different grains (Navadhanya), planetary colored clothes, and specific yantras are completely arranged by us.',
        hi: 'नौ अलग-अलग अनाज (नवधान्य), ग्रहों के अनुकूल रंगीन कपड़े और विशिष्ट यंत्र हमारे द्वारा पूर्ण रूप से व्यवस्थित किए जाते हैं।'
      }
    ],
    duration: {
      en: '1 Day (approx. 2.5 hours)',
      hi: '1 दिन (लगभग 2.5 घंटे)'
    },
    idealTiming: {
      en: 'Saturdays, Sundays, or any auspicious date calculated using the devotee\'s birth chart.',
      hi: 'शनिवार, रविवार, या भक्त की कुंडली के आधार पर निकाली गई कोई भी शुभ तिथि।'
    },
    dakshina: {
      en: '₹5,100/-',
      hi: '₹5,100/-'
    },
    faqs: [
      {
        question: {
          en: 'Can we perform this puja for the entire family together?',
          hi: 'क्या हम पूरे परिवार के लिए एक साथ यह पूजा कर सकते हैं?'
        },
        answer: {
          en: 'Yes. Navagraha Shanti can be performed combining the names and birth charts of all family members to secure collective prosperity.',
          hi: 'हाँ। सामूहिक समृद्धि और सुरक्षा सुनिश्चित करने के लिए सभी परिवार के सदस्यों के नाम और कुंडली को मिलाकर नवग्रह शांति की जा सकती है।'
        }
      }
    ]
  },
  {
    id: 'online-puja',
    title: {
      en: 'Online Vedic Puja Services',
      hi: 'ऑनलाइन वैदिक पूजा सेवा'
    },
    shortDesc: {
      en: 'Authentic distance Vedic rituals performed by Pandit Bineet Shastriji at his Puja Sthal with a live video call and personalized Sankalp.',
      hi: 'पंडित बिनीत शास्त्रीजी के पूजा स्थल पर लाइव वीडियो कॉल और आपके व्यक्तिगत संकल्प के साथ आयोजित की जाने वाली प्रामाणिक ऑनलाइन पूजा।'
    },
    longDesc: {
      en: 'For devotees who cannot travel to Trimbakeshwar due to health, distance, or international boundaries, Pandit Bineet Shastriji offers Online Puja Services. These are conducted with the exact same Vedic authenticity. Panditji connects with you via video call (Zoom/WhatsApp/Skype) for the formal Sankalp, and the entire ritual is live-streamed. Consecrated Prasad, holy water, and protective threads are securely couriered to your address.',
      hi: 'जो भक्त स्वास्थ्य, दूरी या अंतरराष्ट्रीय सीमाओं के कारण त्र्यंबकेश्वर की यात्रा नहीं कर सकते, उनके लिए पंडित बिनीत शास्त्रीजी ऑनलाइन पूजा सेवाएं प्रदान करते हैं। पंडितजी औपचारिक संकल्प के लिए वीडियो कॉल के माध्यम से आपसे जुड़ते हैं, और पूरे अनुष्ठान का सीधा प्रसारण किया जाता है।'
    },
    whoShouldPerform: {
      en: 'Devotees living abroad or those facing travel restrictions who require immediate spiritual remedies.',
      hi: 'विदेशों में रहने वाले भक्तों या यात्रा प्रतिबंधों का सामना करने वाले लोगों के लिए जिन्हें तत्काल आध्यात्मिक उपचार की आवश्यकता है।'
    },
    importance: {
      en: 'Vedic scriptures permit representative rituals (Pratinidhi Puja) when travel is impossible, keeping the spiritual efficacy fully intact.',
      hi: 'वैदिक शास्त्र यात्रा असंभव होने पर प्रतिनिधि पूजा (प्रतिनिधि पूजा) की अनुमति देते हैं, जिससे आध्यात्मिक प्रभाव पूरी तरह से बना रहता है।'
    },
    benefits: [
      {
        en: 'Participate comfortably from any country, ensuring zero travel fatigue.',
        hi: 'बिना किसी यात्रा की थकान के किसी भी देश से आराम से भाग लें।'
      },
      {
        en: 'Direct personal interaction with Pandit Bineet Shastriji for the Sankalp.',
        hi: 'संकल्प के लिए पंडित बिनीत शास्त्रीजी के साथ सीधा व्यक्तिगत संवाद।'
      },
      {
        en: 'Receive energized Prasad, Rudraksha, and sacred ashes securely at your doorstep.',
        hi: 'ऊर्जावान प्रसाद, रुद्राक्ष और पवित्र भस्म सुरक्षित रूप से अपने घर पर प्राप्त करें।'
      }
    ],
    procedure: [
      {
        en: 'Panditji sends a detailed calendar and instruction list prior to the call.',
        hi: 'पंडितजी कॉल से पहले एक विस्तृत कैलेंडर और निर्देशों की सूची भेजते हैं।'
      },
      {
        en: 'Panditji calls you via video link to take your name, gotra, and specific resolution (Sankalp).',
        hi: 'पंडितजी आपका नाम, गोत्र और विशिष्ट संकल्प लेने के लिए वीडियो लिंक के माध्यम से आपसे जुड़ते हैं।'
      },
      {
        en: 'You keep a small diya lit at home while Panditji performs the extensive ritual at his Puja Sthal in Trimbakeshwar.',
        hi: 'जब पंडितजी त्र्यंबकेश्वर में अपने पूजा स्थल पर अनुष्ठान करते हैं, तो आप घर पर एक छोटा दीया जलाकर रखते हैं।'
      }
    ],
    preparation: [
      {
        en: 'Set up a clean space at home with a picture of Lord Shiva, light an oil lamp, and sit facing East.',
        hi: 'घर पर भगवान शिव की तस्वीर के साथ एक साफ जगह तैयार करें, एक तेल का दीपक जलाएं और पूर्व दिशा की ओर मुंह करके बैठें।'
      }
    ],
    itemsRequired: [
      {
        en: 'No major items needed at your end. Just keep a water pot, incense stick, and flowers handy.',
        hi: 'आपके अंत में किसी बड़ी सामग्री की आवश्यकता नहीं है। बस एक जल का पात्र, अगरबत्ती और फूल तैयार रखें।'
      }
    ],
    duration: {
      en: '1 Day (approx. 1.5 to 3 hours based on the selected puja)',
      hi: '1 दिन (चयनित पूजा के आधार पर लगभग 1.5 से 3 घंटे)'
    },
    idealTiming: {
      en: 'Scheduled according to suitable custom planetary alignments.',
      hi: 'उपयुक्त अनुकूल ग्रहों के संरेखण के अनुसार निर्धारित।'
    },
    faqs: [
      {
        question: {
          en: 'Is an online puja as spiritually effective as physical presence?',
          hi: 'क्या ऑनलाइन पूजा शारीरिक उपस्थिति जितनी ही आध्यात्मिक रूप से प्रभावी है?'
        },
        answer: {
          en: 'Yes. The power of a ritual lies in the vocal vibration of Vedic mantras, the purity of the priest, and the mental devotion of your Sankalp. Shastras fully support this.',
          hi: 'हाँ। अनुष्ठान की शक्ति वैदिक मंत्रों के उच्चारण, पुजारी की शुद्धता और आपके संकल्प के मानसिक समर्पण में निहित है। शास्त्र इसका पूर्ण समर्थन करते हैं।'
        }
      }
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'trimbakeshwar-jyotirlinga-history',
    title: {
      en: 'The Spiritual Significance of Trimbakeshwar Jyotirlinga',
      hi: 'त्र्यंबकेश्वर ज्योतिर्लिंग का आध्यात्मिक महत्व और इतिहास'
    },
    slug: 'trimbakeshwar-jyotirlinga-history',
    excerpt: {
      en: 'Discover the ancient history, legends, and unique three-faced structure of Lord Shiva at Trimbakeshwar.',
      hi: 'त्र्यंबकेश्वर में भगवान शिव के प्राचीन इतिहास, किंवदंतियों और अद्वितीय तीन-मुखी संरचना की खोज करें।'
    },
    content: {
      en: `Trimbakeshwar is ancient, serene, and deeply mystical. Located at the source of the sacred Godavari River near Nashik, Maharashtra, it houses one of the twelve divine Jyotirlingas.

### The Unique Three-Faced Linga
Unlike other Jyotirlingas where Lord Shiva alone is worshipped, the Linga at Trimbakeshwar has a unique feature: three small thumbs (pillars) inside the hollow structure, representing the Holy Trinity of Hindu pantheon:
1. **Lord Brahma** (The Creator)
2. **Lord Vishnu** (The Preserver)
3. **Lord Shiva / Mahesh** (The Dissolver)

This unique aspect makes Trimbakeshwar an incredibly powerful point of cosmic energy, uniting all aspects of creation, preservation, and transformation.

### The Legend of Sage Gautama and River Godavari
Ancient texts reveal that Sage Gautama lived on the Brahmagiri hills with his wife, Ahilya. To relieve a severe famine, he prayed to Lord Shiva, who commanded the holy river Ganga to descend on earth. River Ganga flowed here under the name Godavari (also known as Gautami). Lord Shiva agreed to reside here eternally as Tryambakeshwar (The Lord of Three Eyes).

### Ideal Destination for Remedies
Due to the intense convergence of the Trinity and the sacred river Godavari, performing remedial prayers here releases extreme karmic burdens. It must be noted that while devotees visit the main temple for darshan, specialized Vedic rituals are conducted by authorized traditional priests like Pandit Bineet Shastriji at his dedicated private Puja Sthal outside the main temple.`,
      hi: `त्र्यंबकेश्वर प्राचीन, शांत और अत्यंत रहस्यमयी है। महाराष्ट्र के नासिक के पास पवित्र गोदावरी नदी के उद्गम स्थल पर स्थित, यह बारह दिव्य ज्योतिर्लिंगों में से एक है।

### अद्वितीय तीन-मुखी लिंग
अन्य ज्योतिर्लिंगों के विपरीत, जहां केवल भगवान शिव की पूजा की जाती है, त्र्यंबकेश्वर के लिंग की एक अनूठी विशेषता है: खाली संरचना के भीतर तीन छोटे अंगूठे (स्तंभ), जो हिंदू धर्म के पवित्र त्रिदेवों का प्रतिनिधित्व करते हैं:
1. **भगवान ब्रह्मा** (सृजनकर्ता)
2. **भगवान विष्णु** (संरक्षक)
3. **भगवान शिव / महेश** (संहारक)

यह अद्वितीय पहलू त्र्यंबकेश्वर को ब्रह्मांडीय ऊर्जा का एक अविश्वसनीय रूप से शक्तिशाली केंद्र बनाता है।

### ऋषि गौतम और गोदावरी नदी की कथा
प्राचीन ग्रंथों से पता चलता है कि ऋषि गौतम अपनी पत्नी अहिल्या के साथ ब्रह्मगिरि पहाड़ियों पर रहते थे। एक गंभीर अकाल को दूर करने के लिए, उन्होंने भगवान शिव से प्रार्थना की, जिन्होंने पवित्र गंगा को धरती पर उतरने का आदेश दिया। गंगा नदी यहाँ गोदावरी (गौतमी के रूप में भी जानी जाती है) के नाम से बही। भगवान शिव यहाँ त्र्यंबकेश्वर के रूप में शाश्वत निवास करने के लिए सहमत हुए।

### शांति अनुष्ठानों के लिए आदर्श स्थान
त्रिदेवों के मिलन और पवित्र गोदावरी नदी के प्रवाह के कारण, यहाँ उपचारात्मक प्रार्थना करने से संचित कर्मों के बोझ से मुक्ति मिलती है। यह ध्यान दिया जाना चाहिए कि जहाँ भक्त दर्शन के लिए मुख्य मंदिर जाते हैं, वहीं विशिष्ट वैदिक अनुष्ठान मुख्य मंदिर के बाहर पंडित बिनीत शास्त्रीजी के अपने समर्पित निजी पूजा स्थल पर आयोजित किए जाते हैं।`
    },
    category: 'Temple History',
    readTime: {
      en: '4 min read',
      hi: '4 मिनट पठन'
    },
    date: '2026-06-25',
    author: {
      en: 'Pandit Bineet Shastriji',
      hi: 'पंडित बिनीत शास्त्रीजी'
    }
  },
  {
    id: 'kalsarpa-dosha-symptoms-remedies',
    title: {
      en: 'Understanding Kalsarpa Dosha: Symptoms and Remedies',
      hi: 'कालसर्प दोष को समझना: लक्षण, प्रभाव और वैदिक उपचार'
    },
    slug: 'kalsarpa-dosha-symptoms-remedies',
    excerpt: {
      en: 'Is your progress stalled? Learn about the symptoms of Kalsarpa yog and how Vedic Shanti puja can help you.',
      hi: 'क्या आपकी प्रगति रुकी हुई है? कालसर्प योग के लक्षणों और वैदिक शांति पूजा से मिलने वाली सहायता के बारे में जानें।'
    },
    content: {
      en: `Kalsarpa Dosha is an astrological configuration in Vedic Astrology that is often feared, yet with proper spiritual understanding, can be perfectly pacified.

### What is Kalsarpa Yog?
When all seven major planets (Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn) reside between the shadow planets Rahu and Ketu in a horoscope, Kalsarpa Yog is formed. 

### The 12 Types of Kalsarpa Dosha:
Depending on the houses occupied by Rahu and Ketu, there are 12 distinct varieties of this Yog:
1. **Anant Kalsarpa Dosh** (Rahu in 1st, Ketu in 7th House): Causes self-identity & relationship struggles.
2. **Kulika Kalsarpa Dosh** (Rahu in 2nd, Ketu in 8th House): Leads to financial losses & speech friction.
3. **Vasuki Kalsarpa Dosh** (Rahu in 3rd, Ketu in 9th House): Strains sibling relations & delays fortune.
4. **Shankhapal Kalsarpa Dosh** (Rahu in 4th, Ketu in 10th House): Disturbs home peace & professional growth.
5. **Padma Kalsarpa Dosh** (Rahu in 5th, Ketu in 11th House): Delays education & progeny happiness.
6. **Mahapadma Kalsarpa Dosh** (Rahu in 6th, Ketu in 12th House): Brings health concerns & secret enemies.
7. **Takshak Kalsarpa Dosh** (Rahu in 7th, Ketu in 1st House): Prolongs marriage delays & partnership hurdles.
8. **Karkotak Kalsarpa Dosh** (Rahu in 8th, Ketu in 2nd House): Causes risk of minor accidents & speech troubles.
9. **Shankhachur Kalsarpa Dosh** (Rahu in 9th, Ketu in 3rd House): Restricts luck & creates relationship gaps with mentors.
10. **Ghatak Kalsarpa Dosh** (Rahu in 10th, Ketu in 4th House): Hampers political power, career, & domestic harmony.
11. **Vishdhar Kalsarpa Dosh** (Rahu in 11th, Ketu in 5th House): Inhibits expected business profits & financial gains.
12. **Sheshnag Kalsarpa Dosh** (Rahu in 12th, Ketu in 6th House): Causes high expenditure & continuous worries.

### Common Symptoms of Kalsarpa Affliction:
* **Persistent Stagnation**: Career progress stops unexpectedly despite hard work.
* **Intense Struggle**: Delays in educational accomplishments and marriage.
* **Disturbed Subconscious**: Frequent dreams of snakes, water bodies, or height falls.
* **Sudden Hardships**: Unforeseen health emergencies or heavy financial losses.

### The Vedic Remedy: Kalsarpa Shanti Puja
The ultimate remedy described in Vedic astrology is the Kalsarpa Shanti Puja. Trimbakeshwar is highly revered for this because Rahu-Ketu are pacified powerfully in the proximity of the Jyotirlinga.

Conducted at his dedicated private Puja Sthal, Pandit Bineet Shastriji chants the powerful Rahu and Ketu Beej mantras, consecrates silver Nag-Nagin replicas, and offers prayers for immediate planetary relief. If you are experiencing these symptoms, contacting Panditji can help arrange a custom consultation to determine the ideal planetary timing for your ritual.`,
      hi: `वैदिक ज्योतिष में कालसर्प दोष एक ऐसी कुंडली स्थिति है जिससे अक्सर लोग डरते हैं, फिर भी उचित आध्यात्मिक समझ के साथ इसे पूरी तरह से शांत किया जा सकता है।

### कालसर्प योग क्या है?
जब कुंडली में सभी सात मुख्य ग्रह (सूर्य, चंद्रमा, बुध, शुक्र, मंगल, गुरु, शनि) राहु और केतु के बीच आ जाते हैं, तो कालसर्प योग का निर्माण होता है।

### कालसर्प दोष के १२ प्रकार:
राहु और केतु के भाव स्थानों के आधार पर इसके १२ भेद होते हैं:
1. **अनंत कालसर्प दोष** (राहु प्रथम, केतु सप्तम भाव में): शारीरिक कष्ट, मानसिक अशांति और वैवाहिक कलह।
2. **कुलिक कालसर्प दोष** (राहु द्वितीय, केतु अष्टम भाव में): संचित धन की हानि और वाणी दोष।
3. **वासुकि कालसर्प दोष** (राहु तृतीय, केतु नवम भाव में): भाई-बहनों से अनबन और भाग्य का साथ न मिलना।
4. **शंखपाल कालसर्प दोष** (राहु चतुर्थ, केतु दशम भाव में): संपत्ति विवाद और मानसिक शांति का अभाव।
5. **पद्म कालसर्प दोष** (राहु पंचम, केतु एकादश भाव में): संतान सुख में विलंब और शैक्षणिक असफलताएं।
6. **महापद्म कालसर्प दोष** (राहु षष्ठ, केतु द्वादश भाव में): गुप्त शत्रुओं का उदय और पुराना कर्ज।
7. **तक्षक कालसर्प दोष** (राहु सप्तम, केतु प्रथम भाव में): विवाह में अत्यधिक देरी और साझेदारी में नुकसान।
8. **कर्कोटक कालसर्प दोष** (राहु अष्टम, केतु द्वितीय भाव में): अचानक दुर्घटनाओं का भय और पैतृक संपत्ति हानि।
9. **शंखचूड़ कालसर्प दोष** (राहु नवम, केतु तृतीय भाव में): गुरुओं से मतभेद और निरंतर जीवन संघर्ष।
10. **घातक कालसर्प दोष** (राहु दशम, केतु चतुर्थ भाव में): करियर में मान-प्रतिष्ठा की हानि और घरेलू अशांति।
11. **विषधर कालसर्प दोष** (राहु एकादश, केतु पंचम भाव में): व्यापारिक लाभ में अवरोध और सट्टेबाजी में नुकसान।
12. **शेषनाग कालसर्प दोष** (राहु द्वादश, केतु षष्ठ भाव में): अत्यधिक व्यय और अदालती विवाद।

### कालसर्प दोष के सामान्य लक्षण:
* **लगातार ठहराव**: कड़ी मेहनत के बावजूद करियर की प्रगति अचानक रुक जाती है।
* **अत्यधिक संघर्ष**: शिक्षा और विवाह के मामलों में अकारण देरी।
* **अशांत अवचेतन**: बार-बार सांप, पानी या ऊंचाई से गिरने के सपने आना।
* **अचानक कठिनाइयां**: अनपेक्षित स्वास्थ्य समस्याएं या भारी वित्तीय नुकसान।

### वैदिक समाधान: कालसर्प शांति पूजा
वैदिक ज्योतिष में वर्णित अंतिम समाधान कालसर्प शांति पूजा है। त्र्यंबकेश्वर इसके लिए अत्यधिक पूजनीय है क्योंकि ज्योतिर्लिंग के सानिध्य में राहु-केतु का प्रभाव शांत होता है।

पंडित बिनीत शास्त्रीजी के अपने समर्पित पूजा स्थल पर आयोजित, वह शक्तिशाली राहु और केतु बीज मंत्रों का जाप करते हैं, चांदी के नाग-नागिन के जोड़ों को अभिमंत्रित करते हैं और तुरंत राहत के लिए प्रार्थना करते हैं। यदि आप इन लक्षणों का सामना कर रहे हैं, तो पंडितजी से संपर्क करके आप अपनी पूजा के लिए सही समय जान सकते हैं।`
    },
    category: 'Puja Guides',
    readTime: {
      en: '5 min read',
      hi: '5 मिनट पठन'
    },
    date: '2026-06-18',
    author: {
      en: 'Pandit Bineet Shastriji',
      hi: 'पंडित बिनीत शास्त्रीजी'
    }
  },
  {
    id: 'narayan-nagbali-muhurat',
    title: {
      en: 'Auspicious Narayan Nagbali Puja Muhurats & Dates 2026',
      hi: 'नारायण नागबलि पूजा शुभ मुहूर्त एवं तिथियां २०२६'
    },
    slug: 'narayan-nagbali-muhurat',
    excerpt: {
      en: 'Plan your 3-day Pitru Dosh Shanti ritual. Explore the complete 2026 Auspicious Muhurats for Narayan Nagbali Puja in Trimbakeshwar.',
      hi: 'त्र्यंबकेश्वर में अपनी ३-दिवसीय नारायण नागबलि पूजा की योजना बनाएं। २०२६ के सभी शुभ मुहूर्त एवं तिथियों का पूरा विवरण यहां देखें।'
    },
    content: {
      en: `Narayan Nagbali Puja is a sacred 3-day ceremony performed at Trimbakeshwar. Choosing the correct lunar days (tithis) and constellations (nakshatras) is vital for Ancestor Peace (Pitru Dosh Shanti).

### 2026 Auspicious Narayan Nagbali Dates
Here are the carefully calculated auspicious dates for the 3-day Pitru Dosh rituals (including Narayan Nagbali, Nagbali, and Tripindi Shraddha) in 2026:

| Month (2026) | Auspicious Dates |
|---|---|
| **January 2026** | 2, 5, 8, 11, 16, 20, 26, 29 |
| **February 2026** | 1, 4, 7, 10, 13, 16 |
| **March 2026** | 1, 5, 8, 11, 15, 21, 25, 28, 31 |
| **April 2026** | 3, 6, 9, 12, 16, 20, 24, 27, 30 |
| **May 2026** | 3, 6, 9, 15 (Note: No auspicious muhurats after 15 May due to Adhik Maas) |
| **June 2026** | 15, 18, 22, 25, 28 (Note: No auspicious muhurats before 15 June due to Adhik Maas) |
| **July 2026** | 2, 9, 12, 15, 18, 21, 24, 27, 30 |
| **August 2026** | 5, 8, 11, 14, 18, 21, 26 |
| **September 2026** | 1, 4, 8, 17, 20, 22, 28 |
| **October 2026** | 1, 5, 8, 26, 29 |
| **November 2026** | 1, 4, 13, 16, 22, 26, 29 |
| **December 2026** | 3, 6, 10, 13, 20, 23, 26, 29 |

### Important Note on Adhik Maas (Extra Lunar Month)
Due to the occurrence of Adhik Maas in 2026, there are no auspicious muhurats for Narayan Nagbali Puja starting from May 16th to June 14th. Plan your visit accordingly.

### 3-Day Vidhi Breakdown
* **Day 1**: Formal Sankalp at Kushavarta Kund and beginning of Narayan Bali rituals with wheat flour pind daan.
* **Day 2**: Specialized Nagbali rituals to seek forgiveness from Snake Deities.
* **Day 3**: Concluding Tarpan, Brahmin Bhojan, and charities for peace.

For customized dates based on your horoscope or to book the puja, contact Pandit Bineet Shastriji directly.`,
      hi: `नारायण नागबलि पूजा त्र्यंबकेश्वर में की जाने वाली ३ दिवसीय अत्यंत फलदायी पवित्र पूजा है। पितृ शांति (पितृ दोष निवारण) के लिए सही तिथि और नक्षत्र का चयन बहुत आवश्यक है।

### २०२६ नारायण नागबलि पूजा शुभ मुहूर्त तिथियां
वर्ष २०२६ के लिए ३ दिवसीय पैतृक शांति अनुष्ठान (नारायण नागबलि, नागबलि और त्रिपिंडी श्राद्ध) की शुभ तिथियां इस प्रकार हैं:

| महीना (२०२६) | शुभ मुहूर्त तिथियां |
|---|---|
| **जनवरी २०२६** | 2, 5, 8, 11, 16, 20, 26, 29 |
| **फरवरी २०२६** | 1, 4, 7, 10, 13, 16 |
| **मार्च २०२६** | 1, 5, 8, 11, 15, 21, 25, 28, 31 |
| **अप्रैल २०२६** | 3, 6, 9, 12, 16, 20, 24, 27, 30 |
| **मई २०२६** | 3, 6, 9, 15 (विशेष: अधिक मास के कारण १५ मई के बाद कोई मुहूर्त नहीं है) |
| **जून २०२६** | 15, 18, 22, 25, 28 (विशेष: अधिक मास के कारण १५ जून से पहले कोई मुहूर्त नहीं है) |
| **जुलाई २०२६** | 2, 9, 12, 15, 18, 21, 24, 27, 30 |
| **अगस्त २०२६** | 5, 8, 11, 14, 18, 21, 26 |
| **सितंबर २०२६** | 1, 4, 8, 17, 20, 22, 28 |
| **अक्टूबर २०२६** | 1, 5, 8, 26, 29 |
| **नवंबर २०२६** | 1, 4, 13, 16, 22, 26, 29 |
| **दिसंबर २०२६** | 3, 6, 10, 13, 20, 23, 26, 29 |

### अधिक मास (अतिरिक्त चंद्र मास) विशेष सूचना
वर्ष २०२६ में अधिक मास लगने के कारण, १६ मई से १४ जून तक नारायण नागबलि पूजा के लिए कोई भी शुभ मुहूर्त उपलब्ध नहीं है। अतः इस अवधि को छोड़कर अपनी यात्रा की योजना बनाएं।

### ३-दिवसीय पूजा विधि विवरण
* **प्रथम दिन**: कुशावर्त कुंड पर पवित्र स्नान और संकल्प के साथ गरुड़ पुराण के अनुसार नारायण बलि अनुष्ठान का आरंभ।
* **द्वितीय दिन**: नाग देवता से क्षमा याचना हेतु विशिष्ट नागबलि अनुष्ठान।
* **तृतीय दिन**: कुशावर्त कुंड पर अंतिम तर्पण, ब्राह्मण भोजन और दान-दक्षिणा।

अपनी कुंडली के अनुसार मुहूर्त सुनिश्चित करने या बुकिंग के लिए सीधे पंडित बिनीत शास्त्रीजी से संपर्क करें।`
    },
    category: 'Puja Guides',
    readTime: {
      en: '4 min read',
      hi: '4 मिनट पठन'
    },
    date: '2026-07-22',
    author: {
      en: 'Pandit Bineet Shastriji',
      hi: 'पंडित बिनीत शास्त्रीजी'
    }
  },
  {
    id: 'kaalsarp-puja-muhurat',
    title: {
      en: 'Auspicious Kaal Sarp Puja Muhurats & Dates 2026',
      hi: 'कालसर्प शांति पूजा शुभ मुहूर्त एवं तिथियां २०२६'
    },
    slug: 'kaalsarp-puja-muhurat',
    excerpt: {
      en: 'Find the most auspicious dates for Kaal Sarp Dosh Nivaran Puja in 2026 at Trimbakeshwar to pacify Rahu & Ketu.',
      hi: 'राहु और केतु की शांति के लिए त्र्यंबकेश्वर में वर्ष २०२६ में आयोजित होने वाली कालसर्प दोष निवारण पूजा के सभी शुभ मुहूर्त जानें।'
    },
    content: {
      en: `Kaal Sarp Dosh Nivaran is a powerful 1-day ritual. Executing this shanti puja on auspicious days such as Panchami, Amavasya, Mondays, or specific Nakshatras brings rapid relief.

### 2026 Auspicious Kaal Sarp Puja Dates
Here are the auspicious dates for Kaal Sarp Shanti and other birth-related shanti rituals in 2026:

| Month (2026) | Auspicious Dates |
|---|---|
| **January 2026** | 4, 7, 10, 18, 19, 23, 28 |
| **February 2026** | 3, 6, 9, 12, 15, 19 |
| **March 2026** | 3, 7, 10, 13, 17, 19, 23, 27, 30 |
| **April 2026** | 2, 5, 8, 11, 14, 16, 19, 22, 26, 29 |
| **May 2026** | 2, 5, 6, 11, 13, 17, 19, 21, 23, 24, 26, 28 |
| **June 2026** | 1, 3, 4, 7, 9, 11, 13, 14, 17, 20, 24, 27, 30 |
| **July 2026** | 4, 6, 8, 11, 14, 17, 20, 23, 26, 29 |
| **August 2026** | 3, 7, 10, 13, 17 (Nag Panchami - Highly Auspicious), 20, 22, 25, 29, 30 |
| **September 2026** | 3, 6, 10, 13, 22, 24, 26 |
| **October 2026** | 23, 28, 31 |
| **November 2026** | 3, 7, 15, 19, 22, 24, 28 |
| **December 2026** | 1, 5, 8, 12, 16, 18, 22, 25, 28, 31 |

### Critical Days for Kaal Sarp Puja
* **Nag Panchami (17 August 2026)**: Considered the most powerful day of the year for snake-related dosha pacification.
* **Amavasya**: Lunar dark moon days are highly recommended for Rahu and Ketu rituals.
* **Mondays**: The sacred day of Lord Shiva, the ultimate controller of Rahu-Ketu.

For bookings or custom planetary analysis, connect with Pandit Bineet Shastriji.`,
      hi: `कालसर्प दोष निवारण एक दिवसीय अत्यंत शक्तिशाली अनुष्ठान है। इस शांति पूजा को पंचमी, अमावस्या, सोमवार या विशिष्ट नक्षत्रों में करने से जातकों को तुरंत राहत मिलती है।

### २०२६ कालसर्प शांति पूजा शुभ मुहूर्त तिथियां
वर्ष २०२६ के लिए कालसर्प शांति और अन्य जन्म-संबंधी शांति अनुष्ठानों की शुभ तिथियां इस प्रकार हैं:

| महीना (२०२६) | शुभ मुहूर्त तिथियां |
|---|---|
| **जनवरी २०२६** | 4, 7, 10, 18, 19, 23, 28 |
| **फरवरी २०२६** | 3, 6, 9, 12, 15, 19 |
| **मार्च २०२६** | 3, 7, 10, 13, 17, 19, 23, 27, 30 |
| **अप्रैल २०२६** | 2, 5, 8, 11, 14, 16, 19, 22, 26, 29 |
| **मई २०२६** | 2, 5, 6, 11, 13, 17, 19, 21, 23, 24, 26, 28 |
| **जून २०२६** | 1, 3, 4, 7, 9, 11, 13, 14, 17, 20, 24, 27, 30 |
| **जुलाई २०२६** | 4, 6, 8, 11, 14, 17, 20, 23, 26, 29 |
| **अगस्त २०२६** | 3, 7, 10, 13, 17 (नागपंचमी - अत्यंत शुभ मुहूर्त), 20, 22, 25, 29, 30 |
| **सितंबर २०२६** | 3, 6, 10, 13, 22, 24, 26 |
| **अक्टूबर २०२६** | 23, 28, 31 |
| **नवंबर २०२६** | 3, 7, 15, 19, 22, 24, 28 |
| **दिसंबर २०२६** | 1, 5, 8, 12, 16, 18, 22, 25, 28, 31 |

### कालसर्प पूजा के लिए विशेष दिन
* **नागपंचमी (१७ अगस्त २०२६)**: नाग देवताओं की विशेष कृपा प्राप्त करने और कालसर्प शांति के लिए वर्ष का सबसे पवित्र दिन।
* **अमावस्या**: राहु-केतु पूजा के लिए अमावस्या तिथि को बहुत फलदायी माना जाता है।
* **सोमवार**: भगवान शिव का दिन, जो कालसर्प योग के दुष्चक्र को काटने वाले एकमात्र देव हैं।

मुहूर्त की जानकारी या बुकिंग के लिए सीधे पंडित बिनीत शास्त्रीजी से संपर्क करें।`
    },
    category: 'Puja Guides',
    readTime: {
      en: '3 min read',
      hi: '3 मिनट पठन'
    },
    date: '2026-07-22',
    author: {
      en: 'Pandit Bineet Shastriji',
      hi: 'पंडित बिनीत शास्त्रीजी'
    }
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: {
      en: 'Rajesh Sharma',
      hi: 'राजेश शर्मा'
    },
    location: {
      en: 'Delhi',
      hi: 'दिल्ली'
    },
    rating: 5,
    review: {
      en: 'We had an incredibly authentic experience performing Kalsarpa Shanti. The panditji explained every mantra\'s meaning in detail. The entire arrangement at the private Puja Sthal was very clean and well-organized. High recommendations!',
      hi: 'कालसर्प शांति पूजा करने का हमारा अनुभव बेहद प्रामाणिक था। पंडितजी ने हर मंत्र का अर्थ विस्तार से समझाया। हमारे निजी पूजा स्थल पर पूरी व्यवस्था बहुत साफ और व्यवस्थित थी। अत्यधिक अनुशंसित!'
    },
    date: 'June 2026'
  },
  {
    id: 't2',
    name: {
      en: 'Meera Patel',
      hi: 'मीरा पटेल'
    },
    location: {
      en: 'Gujarat',
      hi: 'गुजरात'
    },
    rating: 5,
    review: {
      en: 'Due to travel difficulties, we opted for their Online Rudrabhishek. The audio and video quality was perfect. Panditji took our name and gotra sankalp beautifully. We received the consecrated Prasad by courier within 4 days. Blessed!',
      hi: 'यात्रा की कठिनाइयों के कारण, हमने उनके ऑनलाइन रुद्राभिषेक का विकल्प चुना। ऑडियो और वीडियो की गुणवत्ता एकदम सही थी। पंडितजी ने हमारे नाम और गोत्र का संकल्प बहुत सुंदर ढंग से लिया। हमें 4 दिनों के भीतर कूरियर द्वारा प्रसाद प्राप्त हुआ।'
    },
    date: 'May 2026'
  },
  {
    id: 't3',
    name: {
      en: 'Amit Deshmukh',
      hi: 'अमित देशमुख'
    },
    location: {
      en: 'Mumbai',
      hi: 'मुंबई'
    },
    rating: 5,
    review: {
      en: 'I performed Tripindi Shraddha here last month. The organization was highly transparent. No hidden charges, pure Vedic ritual procedures, and excellent lodging guidance. Felt immense peace after completion.',
      hi: 'मैंने पिछले महीने यहाँ त्रिपिंडी श्राद्ध किया था। व्यवस्था अत्यधिक पारदर्शी थी। कोई छिपा हुआ शुल्क नहीं, शुद्ध वैदिक अनुष्ठान प्रक्रियाएं और आवास के लिए बेहतरीन मार्गदर्शन मिला। पूरा होने के बाद अत्यधिक शांति महसूस हुई।'
    },
    date: 'April 2026'
  }
];

export const faqsData: FAQItem[] = [
  {
    id: 'f1',
    question: {
      en: 'Are these pujas performed inside the main Trimbakeshwar Temple premises?',
      hi: 'क्या ये पूजा मुख्य त्र्यंबकेश्वर मंदिर परिसर के अंदर की जाती हैं?'
    },
    answer: {
      en: 'No. Traditional Vedic rituals are performed by experienced priests like Pandit Bineet Shastriji at his dedicated private Puja Sthal nearby. The main temple is strictly reserved for standard darshan and simple offerings. The ritual venues and temple darshans are completely separate.',
      hi: 'नहीं। पारंपरिक वैदिक अनुष्ठान पंडित बिनीत शास्त्रीजी जैसे अनुभवी पुरोहितों द्वारा पास के उनके समर्पित निजी पूजा स्थलों पर किए जाते हैं। मुख्य मंदिर केवल दर्शन और साधारण पूजा के लिए आरक्षित है। अनुष्ठान स्थल और मंदिर दर्शन पूरी तरह से अलग हैं।'
    }
  },
  {
    id: 'f2',
    question: {
      en: 'How can we book a puja and get guidance from Panditji?',
      hi: 'हम पूजा कैसे बुक कर सकते हैं और पंडितजी से मार्गदर्शन कैसे प्राप्त कर सकते हैं?'
    },
    answer: {
      en: 'You can easily click the "Call Panditji" or "WhatsApp Consultation" buttons visible across our website to directly connect with Pandit Bineet Shastriji. He will analyze your horoscope, suggest the right remedial ritual, and book a suitable auspicious date.',
      hi: 'आप सीधे पंडित बिनीत शास्त्रीजी से जुड़ने के लिए हमारी वेबसाइट पर उपलब्ध "पंडितजी से संपर्क करें" या "व्हाट्सएप परामर्श" बटन पर क्लिक कर सकते हैं। वे आपकी कुंडली देखकर सही अनुष्ठान सुझाएंगे और तारीख बुक करेंगे।'
    }
  },
  {
    id: 'f3',
    question: {
      en: 'What clothing guidelines should we follow during the ritual?',
      hi: 'अनुष्ठान के दौरान हमें किन कपड़ों के नियमों का पालन करना चाहिए?'
    },
    answer: {
      en: 'Traditional outfits are mandatory. Men should wear clean dhotis and drapes (Uparane) or simple kurtas, and women should wear sarees. Clothes of black or green colors are strictly prohibited during auspicious remedial rituals.',
      hi: 'पारंपरिक पोशाक पहनना अनिवार्य है। पुरुषों को धोती या साधारण कुर्ता और महिलाओं को साड़ी पहननी चाहिए। शुभ उपचारात्मक अनुष्ठानों के दौरान काले या हरे रंग के कपड़े पहनना सख्त मना है।'
    }
  },
  {
    id: 'f4',
    question: {
      en: 'Is lodging and boarding arranged for devotees visiting Trimbakeshwar?',
      hi: 'त्र्यंबकेश्वर आने वाले भक्तों के लिए रहने और भोजन की व्यवस्था की जाती है?'
    },
    answer: {
      en: 'Yes. Panditji and his assistants provide complete assistance in booking clean dharmashalas or premium hotels close to the Puja Sthal, along with arranging pure satvik (vegetarian) meals during your stay.',
      hi: 'हाँ। पंडितजी और उनके सहयोगी पूजा स्थल के करीब साफ धर्मशालाओं या होटलों की बुकिंग में पूरी सहायता प्रदान करते हैं, साथ ही ठहरने के दौरान सात्विक (शुद्ध शाकाहारी) भोजन की व्यवस्था भी करते हैं।'
    }
  },
  {
    id: 'f5',
    question: {
      en: 'Why is Trimbakeshwar considered the best place for Kalsarpa Shanti?',
      hi: 'कालसर्प शांति के लिए त्र्यंबकेश्वर को सबसे अच्छा स्थान क्यों माना जाता है?'
    },
    answer: {
      en: 'Trimbakeshwar is home to a unique Jyotirlinga representing the Holy Trinity (Brahma, Vishnu, Mahesh). According to ancient scriptures, performing Kalsarpa Shanti or Narayan Nagbali here under the guidance of certified Vedic pandits like Pandit Bineet Shastriji yields immediate and powerful results due to the concentrated cosmic energy.',
      hi: 'त्र्यंबकेश्वर एक अद्वितीय ज्योतिर्लिंग का घर है जो पवित्र त्रिदेव (ब्रह्मा, विष्णु, महेश) का प्रतिनिधित्व करता है। प्राचीन शास्त्रों के अनुसार, पंडित बिनीत शास्त्रीजी जैसे प्रमाणित वैदिक पंडितों के मार्गदर्शन में यहां कालसर्प शांति या नारायण नागबलि करने से केंद्रित ब्रह्मांडीय ऊर्जा के कारण तत्काल और शक्तिशाली परिणाम मिलते हैं।'
    }
  },
  {
    id: 'f6',
    question: {
      en: 'How to find the most authentic Pandit for Narayan Nagbali in Trimbakeshwar?',
      hi: 'त्र्यंबकेश्वर में नारायण नागबलि के लिए सबसे प्रामाणिक पंडित कैसे खोजें?'
    },
    answer: {
      en: 'Always look for traditional Tamrapatradhari (copper-plate holding) lineage or certified Vedic scholars. Pandit Bineet Shastriji is recognized as one of the top-rated and highly trusted pandits in Trimbakeshwar, known for performing rituals with 100% scriptural authenticity at a private and peaceful Puja Sthal.',
      hi: 'हमेशा पारंपरिक ताम्रपत्रधारी वंश या प्रमाणित वैदिक विद्वानों की तलाश करें। पंडित बिनीत शास्त्रीजी को त्र्यंबकेश्वर में सबसे उच्च श्रेणी के और अत्यधिक विश्वसनीय पंडितों में से एक माना जाता है, जिन्हें एक निजी और शांतिपूर्ण पूजा स्थल पर 100% शास्त्रोक्त प्रामाणिकता के साथ अनुष्ठान करने के लिए जाना जाता है।'
    }
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: { en: 'Sacred Trimbakeshwar Temple', hi: 'पवित्र त्र्यंबकेश्वर मंदिर' },
    category: 'temple',
    placeholderLabel: 'Trimbakeshwar Temple',
    colorPreset: 'from-[#7A1E1E]/20 to-[#E88921]/10',
    image: '/images/gallery1.jpeg'
  },
  {
    id: 'g2',
    title: { en: 'Vedic Puja Sthal Setup', hi: 'वैदिक पूजा स्थल व्यवस्था' },
    category: 'venue',
    placeholderLabel: 'Puja Sthal Setup',
    colorPreset: 'from-[#D4AF37]/20 to-[#E88921]/10',
    image: '/images/gallery2.jpeg'
  },
  {
    id: 'g3',
    title: { en: 'Pandit Bineet Shastriji Performing Puja', hi: 'पूजा करते पंडित बिनीत शास्त्रीजी' },
    category: 'priests',
    placeholderLabel: 'Panditji',
    colorPreset: 'from-[#7A1E1E]/20 to-[#D4AF37]/10',
    image: '/images/gallery3.jpeg'
  },
  {
    id: 'g4',
    title: { en: 'Kalsarpa Shanti Ceremony', hi: 'कालसर्प शांति अनुष्ठान' },
    category: 'rituals',
    placeholderLabel: 'Kalsarpa Shanti',
    colorPreset: 'from-[#E88921]/20 to-[#7A1E1E]/10',
    image: '/images/kalsarp puja.jpeg'
  },
  {
    id: 'g5',
    title: { en: 'Vedic Havan Kund and Samagri', hi: 'वैदिक हवन कुंड एवं सामग्री' },
    category: 'venue',
    placeholderLabel: 'Havan Setup',
    colorPreset: 'from-[#FAF8F2] to-[#F2E6CE]',
    image: '/images/galllery4.jpeg'
  },
  {
    id: 'g6',
    title: { en: 'Narayan Nagbali Puja Vidhi', hi: 'नारायण नागबलि पूजा विधि' },
    category: 'rituals',
    placeholderLabel: 'Narayan Nagbali',
    colorPreset: 'from-[#7A1E1E]/20 to-[#E88921]/10',
    image: '/images/gallery7.jpeg'
  },
  {
    id: 'g7',
    title: { en: 'Online Sankalp & Vidhi via Video Call', hi: 'वीडियो कॉल द्वारा ऑनलाइन संकल्प एवं पूजा विधि' },
    category: 'rituals',
    placeholderLabel: 'Online Puja',
    colorPreset: 'from-[#E88921]/20 to-[#7A1E1E]/10',
    image: '/images/online.jpeg'
  }
];
