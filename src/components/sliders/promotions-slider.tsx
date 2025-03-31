
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Calculate number of promotions to display
  const slidesToShow = 3;
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  if (!promotions || promotions.length === 0) return null;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * slideWidth}%)` }}
      >
        {promotions.map((promo) => (
          <div 
            key={promo.id} 
            className="px-2"
            style={{ width: `${slideWidth}%`, flex: `0 0 ${slideWidth}%` }}
          >
            <a href={promo.link} className="block group hover-lift">
              <div className="rounded-lg overflow-hidden">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={promo.image} 
                    alt={promo.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white rounded-b-lg">
                  <h3 className="text-lg font-bold mb-2 text-hotel-dark-green group-hover:text-hotel-darker-green transition-colors truncate">{promo.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{promo.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button 
          onClick={prevSlide}
          className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors"
          aria-label="Previous promotion"
        >
          <ChevronLeft className="w-5 h-5 text-hotel-darkest-green" />
        </button>
        <button 
          onClick={nextSlide}
          className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors"
          aria-label="Next promotion"
        >
          <ChevronRight className="w-5 h-5 text-hotel-darkest-green" />
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-4">
        {Array.from({ length: Math.ceil(promotions.length - slidesToShow + 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (transitioning) return;
              setTransitioning(true);
              setCurrent(index);
              setTimeout(() => setTransitioning(false), 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === Math.floor(current) ? 'bg-hotel-dark-green w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to promotion set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionsSlider;
