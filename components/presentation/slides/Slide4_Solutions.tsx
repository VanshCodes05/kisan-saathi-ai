'use client';

import Image from 'next/image';
import { FeatureCard } from '../common/FeatureCard';
import { presentationData } from '@/data/presentation';

export function Slide4Solutions() {
  return (
    <div className="flex h-full bg-gradient-to-b from-[#FAFAF7] to-white">
      {/* LEFT: Mobile App Image (30%) */}
      <div className="w-[30%] relative overflow-hidden flex items-center justify-center p-8">
        <Image
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
          alt="Mobile app interface"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B1F]/40 to-transparent"></div>
      </div>

      {/* RIGHT: Solutions Grid (70%) */}
      <div className="w-[70%] flex flex-col p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="font-playfair text-5xl font-bold text-[#0D3B1F] mb-2">
            Our AI-Powered Solutions
          </h1>
          <p className="font-jakarta text-lg text-[#4A7C59] font-semibold mb-2">
            हमारे कृत्रिम बुद्धिमत्ता समाधान
          </p>
          <div className="h-1 w-20 bg-[#E8A020] mx-auto mb-2"></div>
          <p className="text-center text-gray-700 font-jakarta font-medium">
            23 intelligent features to empower every Indian farmer
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-6 gap-3 flex-1">
          {presentationData.features.map((feature, index) => (
            <FeatureCard
              key={index}
              emoji={feature.emoji}
              en={feature.en}
              hi={feature.hi}
            />
          ))}
        </div>

        {/* Bottom Gold Bar */}
        <div className="bg-gradient-to-r from-[#E8A020] to-[#B8760A] text-white p-5 rounded-lg mt-6 text-center font-jakarta shadow-lg">
          <p className="font-bold text-base">Building tomorrow's agriculture today</p>
          <p className="text-sm italic mt-1">कल की कृषि आज बना रहे हैं</p>
        </div>
      </div>
    </div>
  );
}
