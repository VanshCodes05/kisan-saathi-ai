'use client';

import { useState, useEffect } from 'react';
import { Slide1Title } from './slides/Slide1_Title';
import { Slide2Team } from './slides/Slide2_Team';
import { Slide3Problems } from './slides/Slide3_Problems';
import { Slide4Solutions } from './slides/Slide4_Solutions';
import { Slide5Technical } from './slides/Slide5_Technical';
import { Slide6Impact } from './slides/Slide6_Impact';
import { Slide7Prototype } from './slides/Slide7_Prototype';
import { Slide8Research } from './slides/Slide8_Research';
import { Slide9ThankYou } from './slides/Slide9_ThankYou';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

const TOTAL_SLIDES = 9;

const slides = [
  Slide1Title,
  Slide2Team,
  Slide3Problems,
  Slide4Solutions,
  Slide5Technical,
  Slide6Impact,
  Slide7Prototype,
  Slide8Research,
  Slide9ThankYou,
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Home') {
        setCurrentSlide(1);
      } else if (e.key === 'End') {
        setCurrentSlide(TOTAL_SLIDES);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === TOTAL_SLIDES ? 1 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 1 ? TOTAL_SLIDES : prev - 1));
  };

  const handleDotClick = (slide: number) => {
    setCurrentSlide(slide);
  };

  const CurrentSlide = slides[currentSlide - 1];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Main Slide Area */}
      <div className="flex-1 overflow-hidden transition-all duration-300">
        <div className="w-full h-full">
          <CurrentSlide />
        </div>
      </div>

      {/* Navigation */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onDotClick={handleDotClick}
      />

      {/* Footer */}
      <Footer currentSlide={currentSlide} totalSlides={TOTAL_SLIDES} />
    </div>
  );
}
