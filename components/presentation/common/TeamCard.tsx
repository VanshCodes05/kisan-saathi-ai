'use client';

interface TeamCardProps {
  name: string;
  role: string;
  city: string;
  borderColor: string;
  bgColor: string;
  why: string;
}

export function TeamCard({ name, role, city, borderColor, bgColor, why }: TeamCardProps) {
  return (
    <div className={`${bgColor} border-l-4 ${borderColor} p-5 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 bg-white`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-playfair text-lg font-bold text-[#0D3B1F]">{name}</h3>
          <p className="text-sm font-semibold text-[#E8A020] mt-1">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 mb-3">
        <span className="text-base">📍</span>
        <span className="text-xs text-gray-700">{city}</span>
      </div>
      <div className="h-px bg-[#E8A020] mb-3"></div>
      <p className="text-xs text-gray-700 leading-relaxed italic">{why}</p>
    </div>
  );
}
