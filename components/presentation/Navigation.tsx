'use client';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (slide: number) => void;
}

export function Navigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onDotClick,
}: NavigationProps) {
  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-8 bg-white bg-opacity-90 px-6 py-4 rounded-full shadow-lg backdrop-blur-sm z-40">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="w-10 h-10 rounded-full bg-[#1a5c1a] text-white flex items-center justify-center hover:bg-[#2d7f2d] transition-colors font-jakarta font-bold"
        aria-label="Previous slide"
      >
        ←
      </button>

      {/* Dot Navigation */}
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => onDotClick(i + 1)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === i + 1
                ? 'bg-[#1a5c1a] w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-10 h-10 rounded-full bg-[#1a5c1a] text-white flex items-center justify-center hover:bg-[#2d7f2d] transition-colors font-jakarta font-bold"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}
