import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CustomButton } from '../ui/custom-button';

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  className?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides, className }) => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
    setTimeout(() => setTransitioning(false), 750);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
    setTimeout(() => setTransitioning(false), 750);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current, slides.length, transitioning]);

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => ({ ...prev, [imageUrl]: true }));
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className={cn("relative overflow-hidden h-[100dvh] max-h-[1000px] w-full", className)}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-in-out",
            index === current 
              ? "opacity-100 transform scale-100" 
              : "opacity-0 transform scale-105"
          )}
        >
          <div 
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onLoad={() => handleImageLoad(slide.image)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative h-full max-h-[60dvh] max-w-content mx-auto flex flex-col items-center justify-center px-6 md:px-10 md:max-h-[100%]">
            {/* Pagination */}
            <div className="relative -top-4 left-0 right-0 flex justify-center space-x-2 z-10 w-max mx-auto">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (transitioning) return;
                    setTransitioning(true);
                    setCurrent(index);
                    setTimeout(() => setTransitioning(false), 750);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-hotel-off-white scale-150' : 'bg-hotel-off-white bg-opacity-40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <h1 className="text-hotel-off-white text-4xl md:text-5xl lg:text-7xl uppercase text-center max-w-4xl mb-6 tracking-wide animate-fade-in">
              {slide.title}
              <span className="block text-4xl md:text-7xl lg:text-8xl">{slide.subtitle}</span>
            </h1>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="hidden md:block absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm rounded-full transition-all"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-hotel-off-white" />
      </button>
      <button
        className="hidden md:block absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm rounded-full transition-all"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-hotel-off-white" />
      </button>
    </div>
  );
};

export default HeroSlider;
