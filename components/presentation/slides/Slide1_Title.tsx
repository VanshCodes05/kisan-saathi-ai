'use client';

import Image from 'next/image';

export function Slide1Title() {
  return (
    <div className="flex h-full">
      {/* Left Panel - Deep Green with wheat field image */}
      <div className="w-1/2 bg-[#0D3B1F] flex flex-col items-center justify-center p-10 text-white relative overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80"
          alt="Golden wheat field"
          fill
          className="object-cover opacity-30"
          priority
        />
        
        {/* Content overlay */}
        <div className="relative z-10 text-center">
          <h1 className="font-playfair text-6xl font-bold mb-6 drop-shadow-lg">
            KISAN<br />SAATHI<br />AI
          </h1>
          <p className="text-xl text-center mb-8 font-jakarta drop-shadow-md">
            Empowering Farmers with AI-Driven Solutions
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-[#E8A020] text-[#0D3B1F] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🤖 AI Features
            </span>
            <span className="bg-[#E8A020] text-[#0D3B1F] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🎙️ Voice
            </span>
            <span className="bg-[#E8A020] text-[#0D3B1F] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🚫 Zero Middlemen
            </span>
          </div>
        </div>
      </div>

      {/* Right Panel - Ivory with details */}
      <div className="w-1/2 bg-[#FAFAF7] flex flex-col items-center justify-center p-10">
        <div className="mb-6">
          <span className="text-5xl">🌾</span>
        </div>
        <h2 className="font-playfair text-4xl font-bold text-[#0D3B1F] text-center mb-2">
          Graph-e-thon 3.0
        </h2>
        <p className="font-jakarta text-sm text-[#4A7C59] text-center mb-6 font-semibold">
          ग्राफ़-ई-थॉन 3.0
        </p>
        <p className="text-center text-gray-700 mb-8 max-w-xs font-jakarta text-sm">
          Team CODE (HUSTLERS) | 4 B.Tech CSE 1st Year Students
        </p>
        <div className="border-l-4 border-[#E8A020] bg-white p-6 rounded-lg shadow-md w-full">
          <p className="text-center font-jakarta font-bold text-[#0D3B1F] mb-4 text-lg">
            Track 4: Climate Action & AgriTech
          </p>
          <div className="h-px bg-[#E8A020] mb-4"></div>
          <p className="text-sm text-center text-gray-800 mb-3 font-jakarta">
            Empowering Indian farmers with AI-driven agricultural solutions
          </p>
          <p className="text-sm text-center text-[#4A7C59] font-jakarta italic">
            किसानों को AI से सशक्त करना
          </p>
        </div>
      </div>
    </div>
  );
}
