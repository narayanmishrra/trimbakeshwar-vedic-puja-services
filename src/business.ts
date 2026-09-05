/**
 * Small, always-needed business/contact constants.
 * Kept separate from data.ts so the heavy content catalogue is never in the critical bundle.
 */
import { BusinessConfig } from './types';

export const businessConfig: BusinessConfig = {
  phone: '+917020682622',
  phoneDisplay: '+91 70206 82622',
  whatsapp: '917020682622',
  whatsappDisplay: '+91 70206 82622',
  email: 'trimbakeshwarpanditji.in@gmail.com',
  address: {
    en: 'Trimbakeshwar, Pin- 422212',
    hi: 'त्र्यंबकेश्वर, पिन- 422212'
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
