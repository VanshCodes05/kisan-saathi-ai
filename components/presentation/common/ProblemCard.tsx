'use client';

interface ProblemCardProps {
  icon: string;
  title: string;
  hindi: string;
  deepExplanation: string;
  stat: string;
  whyFails: string;
}

export function ProblemCard({ icon, title, hindi, deepExplanation, stat, whyFails }: ProblemCardProps) {
  return (
    <div className="bg-white border-l-4 border-[#C4501A] rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 h-full flex flex-col">
      {/* Header with icon and title */}
      <div className="flex items-start gap-2 mb-2">
        <span className="text-2xl flex-shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-playfair font-bold text-gray-900 text-sm leading-tight">{title}</h3>
        </div>
      </div>
      
      {/* Hindi title */}
      <p className="text-xs text-[#4A7C59] italic mb-2 font-medium">{hindi}</p>
      
      {/* Deep explanation */}
      <p className="text-xs text-gray-700 leading-relaxed mb-2 flex-1 line-clamp-3">{deepExplanation}</p>
      
      {/* Stat badge */}
      <div className="bg-[#C4501A] text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
        {stat}
      </div>
      
      {/* Why current solutions fail */}
      <p className="text-xs text-gray-600 border-t border-gray-200 pt-2">
        <span className="font-semibold text-gray-800">Why it fails: </span>
        <span className="line-clamp-2">{whyFails}</span>
      </p>
    </div>
  );
}
