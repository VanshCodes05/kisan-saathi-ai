'use client';

import Image from 'next/image';
import { ProblemCard } from '../common/ProblemCard';
import { presentationData } from '@/data/presentation';

export function Slide3Problems() {
  return (
    <div className="flex h-full bg-white">
      {/* LEFT: Farmer Image (35%) */}
      <div className="w-[35%] relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
          alt="Indian farmer in field"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      {/* RIGHT: Problems Content (65%) */}
      <div className="w-[65%] flex flex-col p-8 bg-gradient-to-b from-white to-[#f0faf0]">
        {/* Headline Banner */}
        <div className="bg-[#0D3B1F] text-white p-6 rounded-lg mb-6 -mx-8 px-8">
          <h2 className="font-playfair text-2xl font-bold mb-2">
            India has 140M+ farmers — yet in 2026,
          </h2>
          <p className="font-jakarta text-lg font-semibold">they still fight problems that AI can solve TODAY</p>
          <p className="font-jakarta text-base mt-2 text-[#E8A020]">भारत में 14 करोड़ किसान — फिर भी आज भी वही पुरानी समस्याएं</p>
        </div>

        {/* 6 Problems in 3x2 compact grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 flex-1">
          {presentationData.problems.map((problem) => (
            <ProblemCard
              key={problem.id}
              icon={problem.icon}
              title={problem.title}
              hindi={problem.hindi}
              deepExplanation={problem.deepExplanation}
              stat={problem.stat}
              whyFails={problem.whyFails}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
