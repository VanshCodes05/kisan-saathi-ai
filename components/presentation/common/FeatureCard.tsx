'use client';

interface FeatureCardProps {
  emoji: string;
  en: string;
  hi: string;
}

export function FeatureCard({ emoji, en, hi }: FeatureCardProps) {
  return (
    <div className="bg-white border-2 border-[#1a5c1a] p-4 rounded-lg text-center hover:bg-[#f0faf0] transition-colors">
      <div className="text-3xl mb-2">{emoji}</div>
      <p className="font-jakarta font-semibold text-gray-900 text-sm mb-1">{en}</p>
      <p className="text-xs italic text-gray-600">{hi}</p>
    </div>
  );
}
