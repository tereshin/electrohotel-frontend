
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TextHeroSlide {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  image: string;
}

interface TextHeroSliderProps {
  slides: TextHeroSlide[];
  className?: string;
}

const TextHeroSlider: React.FC<TextHeroSliderProps> = ({ slides, className }) => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
    setTimeout(() => setTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
    setTimeout(() => setTransitioning(false), 500);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        {/* Image section */}
        <div className="relative overflow-hidden h-[40vh] md:h-auto">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-in-out",
                index === current 
                  ? "opacity-100 transform scale-100" 
                  : "opacity-0 transform scale-105"
              )}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Content section */}
        <div className="bg-hotel-cream p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "transition-opacity duration-500",
                index === current ? "opacity-100" : "opacity-0 absolute"
              )}
              style={{ display: index === current ? 'block' : 'none' }}
            >
              <span className="text-hotel-dark-green text-sm font-medium uppercase tracking-wide">{slide.subtitle}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-hotel-darkest-green">{slide.title}</h2>
              <p className="text-gray-600 mb-8">{slide.text}</p>
              
              <div className="flex space-x-3">
                <button 
                  onClick={prevSlide}
                  className="border border-hotel-dark-green rounded-full p-2 hover:bg-hotel-dark-green hover:text-white transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="border border-hotel-dark-green rounded-full p-2 hover:bg-hotel-dark-green hover:text-white transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextHeroSlider;
