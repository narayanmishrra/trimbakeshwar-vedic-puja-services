/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'hi';

export interface LocalizedString {
  en: string;
  hi: string;
}

export interface Service {
  id: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  longDesc: LocalizedString;
  whoShouldPerform: LocalizedString;
  importance: LocalizedString;
  benefits: LocalizedString[];
  procedure: LocalizedString[];
  preparation: LocalizedString[];
  itemsRequired: LocalizedString[];
  duration: LocalizedString;
  idealTiming: LocalizedString;
  dakshina?: LocalizedString;
  faqs: { question: LocalizedString; answer: LocalizedString }[];
}

export interface Testimonial {
  id: string;
  name: LocalizedString;
  location: LocalizedString;
  rating: number;
  review: LocalizedString;
  date: string;
}

export interface FAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

export interface BlogPost {
  id: string;
  title: LocalizedString;
  slug: string;
  excerpt: LocalizedString;
  content: LocalizedString;
  category: string;
  readTime: LocalizedString;
  date: string;
  author: LocalizedString;
  faqs?: { question: LocalizedString; answer: LocalizedString }[];
}

export interface GalleryItem {
  id: string;
  title: LocalizedString;
  category: 'temple' | 'venue' | 'rituals' | 'priests' | 'devotees';
  placeholderLabel: string;
  colorPreset: string; // Tailored gradients mimicking spiritual motifs
  image?: string;
}

export interface BusinessConfig {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: LocalizedString;
  workingHours: LocalizedString;
  howToReach: {
    byAir: LocalizedString;
    byTrain: LocalizedString;
    byRoad: LocalizedString;
  };
}
