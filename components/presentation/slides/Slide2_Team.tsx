'use client';

import { TeamCard } from '../common/TeamCard';
import { presentationData } from '@/data/presentation';

export function Slide2Team() {
  return (
    <div className="flex flex-col h-full p-10 bg-gradient-to-b from-[#FAFAF7] to-[#f0faf0]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="font-playfair text-5xl font-bold text-[#0D3B1F] mb-2">
          Meet Our Team
        </h1>
        <p className="font-jakarta text-lg text-[#4A7C59] font-semibold">
          कोड (HUSTLERS) — B.Tech CSE 1st Year Students
        </p>
        <div className="flex justify-center gap-3 mt-4">
          <div className="h-1 w-12 bg-[#E8A020]"></div>
          <span className="text-[#0D3B1F] font-jakarta font-semibold">4 Passionate Innovators</span>
          <div className="h-1 w-12 bg-[#E8A020]"></div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-4 gap-6 flex-1">
        {presentationData.team.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            city={member.city}
            borderColor={member.borderColor}
            bgColor={member.bgColor}
            why={member.why}
          />
        ))}
      </div>
    </div>
  );
}
