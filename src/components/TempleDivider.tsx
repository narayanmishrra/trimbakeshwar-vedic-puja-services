/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function TempleDivider() {
  return (
    <div className="flex items-center justify-center py-6 md:py-10 select-none overflow-hidden w-full">
      <div className="flex items-center gap-4 max-w-lg w-full px-4">
        {/* Left Ornate Line */}
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#E88921]/40 to-[#D4AF37]" />
        
        {/* Traditional Center Emblem (Lotus-Om-Inspired Sacred Geometric SVG) */}
        <div className="relative flex items-center justify-center w-12 h-12">
          {/* Outer Sunburst Accent */}
          <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }} />
          <div className="absolute inset-1 border border-dashed border-[#E88921]/20 rounded-full" />
          
          {/* Inner Sacred Lotus Mandala SVG */}
          <svg
            className="w-8 h-8 text-[#E88921]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Center seed */}
            <circle cx="12" cy="12" r="2" className="fill-[#D4AF37]" />
            {/* Top Petal */}
            <path d="M12 12 C12 7, 10 4, 12 2 C14 4, 12 7, 12 12" className="fill-[#7A1E1E]/5" />
            {/* Bottom Petal */}
            <path d="M12 12 C12 17, 14 20, 12 22 C10 20, 12 17, 12 12" className="fill-[#7A1E1E]/5" />
            {/* Right Petal */}
            <path d="M12 12 C17 12, 20 14, 22 12 C20 10, 17 12, 12 12" className="fill-[#7A1E1E]/5" />
            {/* Left Petal */}
            <path d="M12 12 C7 12, 4 10, 2 12 C4 14, 7 12, 12 12" className="fill-[#7A1E1E]/5" />
            {/* Diagonals */}
            <path d="M12 12 C15 9, 18 8, 19 5 C16 6, 15 9, 12 12" />
            <path d="M12 12 C9 15, 6 16, 5 19 C8 18, 9 15, 12 12" />
            <path d="M12 12 C9 9, 6 8, 5 5 C8 6, 9 9, 12 12" />
            <path d="M12 12 C15 15, 18 16, 19 19 C16 18, 15 15, 12 12" />
          </svg>
        </div>

        {/* Right Ornate Line */}
        <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-[#E88921]/40 to-[#D4AF37]" />
      </div>
    </div>
  );
}
