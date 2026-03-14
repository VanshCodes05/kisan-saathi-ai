'use client';

import { presentationData } from '@/data/presentation';

export function Slide8Research() {
  return (
    <div className="flex flex-col h-full p-10 bg-gradient-to-b from-[#FAFAF7] to-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="font-playfair text-5xl font-bold text-[#0D3B1F] mb-2">
          Our Research Foundation
        </h1>
        <p className="font-jakarta text-lg text-[#4A7C59] font-semibold mb-2">
          हमारी शोध नींव
        </p>
        <div className="h-1 w-20 bg-[#E8A020] mx-auto mb-4"></div>
        <p className="font-jakarta text-base text-gray-700">
          Built on credible data sources and industry expertise
        </p>
      </div>

      {/* Research Cards Grid - 2x3 */}
      <div className="grid grid-cols-3 gap-6 flex-1">
        {presentationData.research.map((research) => (
          <div
            key={research.id}
            className="bg-white border-2 border-[#1a5c1a] p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-[#e8b84b] rounded-lg flex items-center justify-center text-xl mb-4">
              📊
            </div>
            <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2">
              {research.title}
            </h3>
            <p className="text-sm text-gray-700 mb-3">{research.en}</p>
            <p className="text-xs italic text-gray-600 mb-4">{research.hi}</p>
            <div className="pt-3 border-t border-gray-200">
              <span className="text-xs font-jakarta font-bold text-[#1a5c1a] bg-[#f0faf0] px-2 py-1 rounded">
                {research.source}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
