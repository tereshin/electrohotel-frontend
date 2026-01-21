import React, { useState, useEffect, TouchEvent } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ArrowIcon from '../icons/ArrowIcon';
import SliderNavigation from '../ui/slider-navigation';
import { useNavigate } from 'react-router-dom';

interface PromotionSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface PromotionsSliderProps {
  promotions: PromotionSlide[];
  className?: string;
}

const PromotionsSlider: React.FC<PromotionsSliderProps> = ({ promotions, className }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Calculate number of promotions to display
  let slidesToShow = 2.8;
  if(window.innerWidth < 1180) {
    slidesToShow = 2;
  }
  if(window.innerWidth < 768) {
    slidesToShow = 1.1;
  }
  const slideWidth = 100 / slidesToShow;

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((prev) => (prev >= promotions.length - slidesToShow ? 0 : prev + 1));
    setTimeout(() => setTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((prev) => (prev <= 0 ? Math.max(0, promotions.length - slidesToShow) : prev - 1));
    setTimeout(() => setTransitioning(false), 500);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  if (!promotions || promotions.length === 0) return null;

  return (
    <div className={cn("relative flex flex-col gap-8 md:gap-12", className)}>
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * slideWidth}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {promotions.map((promo) => (
          <div 
            key={promo.id} 
            className="pr-5 md:pr-14" 
            style={{ width: `${slideWidth}%`, flex: `0 0 ${slideWidth}%` }}
          >
            <a onClick={() => navigate('/promotions')} className="cursor-pointer block group  max-w-[450px]">
              <div className="rounded-lg flex flex-col gap-6">
                <div className="rounded-t-lg">
                  <img 
                    src={promo.image} 
                    alt={promo.title} 
                    className="w-full h-[339px] md:h-[456px] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white flex flex-col gap-4 items-start">
                  <h3 className="text-xl font-normal font-medium text-hotel-darkest-green uppercase flex gap-4 items-center ">
                    {promo.title}
                    <ArrowIcon />
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{promo.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <SliderNavigation onPrev={prevSlide} onNext={nextSlide} className="mx-auto" />
    </div>
  );
};

export default PromotionsSlider;