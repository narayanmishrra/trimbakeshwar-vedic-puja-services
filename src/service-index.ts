/**
 * Tiny id → title index used by the shell (Footer links, document titles).
 * Avoids pulling the full 100 KB+ `data.ts` catalogue into the initial bundle.
 */
export interface ServiceIndexEntry {
  id: string;
  title: { en: string; hi: string };
}

export const serviceIndex: ServiceIndexEntry[] = [
  { id: 'narayan-nagbali', title: { en: 'Narayan Nagbali Puja', hi: 'नारायण नागबलि पूजा' } },
  { id: 'kalsarpa-shanti', title: { en: 'Kalsarpa Shanti Puja', hi: 'कालसर्प शांति पूजा' } },
  { id: 'rudrabhishek', title: { en: 'Rudrabhishek Puja', hi: 'रुद्राभिषेक पूजा' } },
  { id: 'mahamrityunjaya', title: { en: 'Mahamrityunjaya Jaap', hi: 'महामृत्युंजय जाप' } },
  { id: 'tripindi-shraddha', title: { en: 'Tripindi Shraddha Puja', hi: 'त्रिपिंडी श्राद्ध पूजा' } },
  { id: 'pitru-dosh', title: { en: 'Pitru Dosh Nivaran Puja', hi: 'पितृ दोष निवारण पूजा' } },
  { id: 'mangal-dosh', title: { en: 'Mangal Dosh Puja', hi: 'मगल दोष पूजा (भाट पूजा)' } },
  { id: 'navagraha-shanti', title: { en: 'Navagraha Shanti Puja', hi: 'नवग्रह शांति पूजा' } },
];
