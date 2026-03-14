'use client';

interface ImpactCardProps {
  title: string;
  en: string;
  hi: string;
  color: string;
}

export function ImpactCard({ title, en, hi, color }: ImpactCardProps) {
  return (
    <div className={`bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg border-l-4 border-[#E8A020] p-6`}>
      <h3 className="font-playfair text-lg font-bold text-[#0D3B1F] mb-3">{title}</h3>
      <p className="text-sm text-gray-700 mb-2 font-jakarta leading-relaxed">{en}</p>
      <p className="text-sm italic text-[#4A7C59] font-jakarta">{hi}</p>
    </div>
  );
}
