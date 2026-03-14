'use client';

import { StatBox } from '../common/StatBox';
import { ImpactCard } from '../common/ImpactCard';
import { presentationData } from '@/data/presentation';

export function Slide6Impact() {
  return (
    <div className="flex flex-col h-full p-10 bg-gradient-to-b from-[#FAFAF7] to-white">
      <div className="text-center mb-10">
        <h1 className="font-playfair text-5xl font-bold text-[#0D3B1F] mb-2">
          Our Impact
        </h1>
        <p className="font-jakarta text-lg text-[#4A7C59] font-semibold">
          हमारा प्रभाव
        </p>
        <div className="h-1 w-20 bg-[#E8A020] mx-auto mt-2"></div>
      </div>

      {/* Stats Banner */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        {presentationData.impact.stats.map((stat) => (
          <StatBox
            key={stat.label}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>

      {/* Impact Cards */}
      <div className="grid grid-cols-2 gap-6 flex-1">
        {presentationData.impact.cards.map((card) => (
          <ImpactCard
            key={card.id}
            title={card.title}
            en={card.en}
            hi={card.hi}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
}
