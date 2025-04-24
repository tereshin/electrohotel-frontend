import React, { useState, useEffect, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ArrowIcon from '../icons/ArrowIcon';
import Title from '../ui/Title';
import SliderNavigation from '../ui/slider-navigation';

interface TextHeroSlide {
  id?: number;
  title: string;
  subtitle: string;
  text: string;
  image: string;
  href: string;
}

interface TextHeroSliderProps {
  slides: TextHeroSlide[];
  className?: string;
  navigate: (path: string) => void;
}

const TextHeroSlider: React.FC<TextHeroSliderProps> = ({ slides, className, navigate }) => {
  const [current, setCurrent] = useState(0);
  const currentSlide = slides[current]
  const href = currentSlide?.href
  const [transitioning, setTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!transitioning) {
        setTransitioning(true);
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
        setTimeout(() => setTransitioning(false), 500);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [current, slides.length, transitioning]);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

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

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => new Set(prev).add(imageUrl));
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex lg:h-[700px] w-full flex-col lg:flex-row">
        {/* Image section */}
        <div className="relative overflow-hidden h-[370px] lg:h-auto w-full lg:w-[calc(100%-400px)]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-all w-full h-full duration-700 ease-in-out bg-hotel-cream",
                index === current 
                  ? "opacity-100 transform scale-100" 
                  : "opacity-0 transform scale-105"
              )}
            >
              <div className="lg:hidden bg-hotel-cream pt-12 pb-8 px-4"
               onClick={(e) => {
                e.preventDefault();
                navigate(href);
              }}
              ><Title>{slide.subtitle}</Title></div>
              {href ? (
                  <a href={href} onClick={(e) => {
                    e.preventDefault();
                    navigate(href);
                  }}>
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className={cn(
                        "w-full lg:h-full object-cover max-w-[calc(100%-40px)] lg:max-w-none mx-auto",
                        !loadedImages.has(slide.image) && "opacity-0"
                      )}
                      loading="lazy"
                      onLoad={() => handleImageLoad(slide.image)}
                    />
                  </a>
                ) : (
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className={cn(
                      "w-full lg:h-full object-cover max-w-[calc(100%-40px)] lg:max-w-none mx-auto",
                      !loadedImages.has(slide.image) && "opacity-0"
                    )}
                    loading="lazy"
                    onLoad={() => handleImageLoad(slide.image)}
                  />
                )}
            </div>
          ))}
        </div>
        
        {/* Content section */}
        <div className="bg-hotel-cream px-4 py-8 lg:p-12 lg:p-16 flex flex-col justify-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "transition-opacity duration-500 max-w-[365px]",
                index === current ? "opacity-100" : "opacity-0 absolute"
              )}
              style={{ display: index === current ? 'block' : 'none' }}
            >
              <div className="flex flex-col gap-8">
                <div className="hidden lg:block"
                 onClick={(e) => {
                  e.preventDefault();
                  navigate(href);
                }}
                ><Title>{slide.subtitle}</Title></div>
                <div className="flex flex-col gap-4">
                {href ? (<h3  onClick={(e) => {
                        e.preventDefault();
                        navigate(href);
                      }}  className="text-2xl lg:text-3xl text-hotel-darkest-green uppercase">{slide.title}</h3> ) : (<h3 className="text-2xl lg:text-3xl text-hotel-darkest-green uppercase">{slide.title}</h3>)}
                  {href ? (
                      <a href={href} onClick={(e) => {
                        e.preventDefault();
                        navigate(href);
                      }}>
                        <p className="text-gray-600">{slide.text}</p>
                      </a>
                    ) : (
                      <p className="text-gray-600">{slide.text}</p>
                    )}
                </div>
              
                {/* Navigation */}
                <SliderNavigation onPrev={prevSlide} onNext={nextSlide} className="mx-auto lg:mx-0 mb-5 lg:mb-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextHeroSlider;
