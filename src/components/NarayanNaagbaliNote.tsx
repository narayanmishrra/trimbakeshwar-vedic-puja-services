/**
 * Bilingual authenticity/information note for Narayan Naagbali Puja only.
 */
import React from 'react';

interface NarayanNaagbaliNoteProps {
  compact?: boolean;
  onDark?: boolean;
  className?: string;
}

export default function NarayanNaagbaliNote({ compact = false, onDark = false, className = '' }: NarayanNaagbaliNoteProps) {
  const containerClass = onDark
    ? 'bg-white/10 border border-[#D4AF37]/45 text-white backdrop-blur-sm'
    : 'bg-[#FAF8F2] border border-[#D4AF37]/35 text-[#7A1E1E]';

  return (
    <div className={`${containerClass} rounded-sm border-l-4 border-l-[#E88921] ${compact ? 'p-3' : 'p-4 sm:p-5'} ${className}`}>
      <p className={`font-serif ${compact ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'} leading-relaxed font-bold`}>
        <strong>महत्वपूर्ण सूचना:</strong> त्र्यंबकेश्वर में नारायण नागबली पूजा निर्धारित घाटों पर अधिकृत <strong>ताम्रपत्रधारी पंडितों</strong> द्वारा संपन्न की जाती है।
      </p>
      <p className={`font-sans ${compact ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-sm'} leading-relaxed font-semibold ${onDark ? 'text-white/82' : 'text-[#1a1a1a]/70'} mt-2`}>
        <strong>Important Note:</strong> Narayan Naagbali Puja at Trimbakeshwar is performed at the designated ghats by authorised <strong>Tamrapatradhari Pandits</strong>.
      </p>
    </div>
  );
}
