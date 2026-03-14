'use client';

import Image from 'next/image';
import { presentationData } from '@/data/presentation';

export function Slide9ThankYou() {
  const avatarColors = ['bg-[#0D3B1F]', 'bg-[#B8760A]', 'bg-[#C4501A]', 'bg-[#6B3A1F]'];

  return (
    <div className="flex h-full">
      {/* Left Panel - Deep Green with harvest image */}
      <div className="w-1/2 bg-[#0D3B1F] flex flex-col items-center justify-center p-10 text-white relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?w=1200&q=80"
          alt="Harvest sunset"
          fill
          className="object-cover opacity-20"
          priority
        />
        
        <div className="relative z-10 text-center">
          <h1 className="font-playfair text-6xl font-bold mb-2 drop-shadow-lg">
            Thank You!
          </h1>
          <p className="font-playfair text-4xl mb-8 drop-shadow-md">धन्यवाद! 🙏</p>
          <div className="border-l-4 border-[#E8A020] bg-black/30 backdrop-blur rounded-lg p-6 max-w-sm text-center mb-8">
            <p className="font-jakarta text-base italic mb-4">
              {"\"Together we can transform agriculture and empower every farmer in India\""}
            </p>
            <p className="font-jakarta text-sm text-gray-200">
              - Team CODE (HUSTLERS)
            </p>
          </div>
          <p className="font-jakarta text-base text-[#E8A020] font-semibold drop-shadow-md">
            Let's build the future of farming together! 🌾
          </p>
        </div>
      </div>

      {/* Right Panel - Ivory Premium */}
      <div className="w-1/2 bg-[#FAFAF7] flex flex-col items-center justify-center p-10">
        <p className="font-jakarta text-sm font-bold text-[#0D3B1F] mb-2">4 B.Tech CSE Students</p>
        <p className="font-jakarta text-xs text-gray-600 mb-8">Team CODE (HUSTLERS)</p>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          {presentationData.team.map((member, index) => (
            <div key={member.id} className="text-center">
              <div className={`w-24 h-24 ${avatarColors[index]} rounded-full flex items-center justify-center mx-auto mb-3 text-white font-playfair text-3xl font-bold shadow-lg`}>
                {member.name.charAt(0)}
              </div>
              <p className="font-jakarta font-bold text-[#0D3B1F] text-sm">{member.name}</p>
              <p className="text-xs text-[#4A7C59]">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-[#E8A020] pt-6 w-full text-center">
          <p className="font-jakarta font-bold text-[#0D3B1F] text-sm">
            Graph-e-thon 3.0 • Track 4: Climate Action
          </p>
          <p className="text-xs text-gray-600 mt-2 font-jakarta">
            Building sustainable futures through innovation
          </p>
        </div>
      </div>
    </div>
  );
}
