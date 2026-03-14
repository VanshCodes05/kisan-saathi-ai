'use client';

interface FooterProps {
  currentSlide: number;
  totalSlides: number;
}

export function Footer({ currentSlide, totalSlides }: FooterProps) {
  return (
    <div className="bg-[#0D3B1F] text-white p-4 flex items-center justify-between border-t-4 border-[#E8A020] shadow-lg">
      <div className="flex items-center gap-2">
        <span className="text-sm font-jakarta">🌾</span>
        <span className="font-jakarta font-bold">KISAN SAATHI AI</span>
      </div>

      <div className="text-sm font-jakarta">
        Team CODE (HUSTLERS) • Graph-e-thon 3.0 • Climate Action
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs font-jakarta">Track 4: SDG 13</span>
        <div className="w-10 h-10 bg-[#E8A020] rounded-full flex items-center justify-center text-[#0D3B1F] font-jakarta font-bold text-sm shadow-md">
          {currentSlide}/{totalSlides}
        </div>
      </div>
    </div>
  );
}
