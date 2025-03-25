
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

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(current === promotions.length - 1 ? 0 : current + 1);
    setTimeout(() => setTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(current === 0 ? promotions.length - 1 : current - 1);
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
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {promotions.map((promo, index) => (
          <div key={promo.id} className="min-w-full">
            <a href={promo.link} className="block group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={promo.image} 
                    alt={promo.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-hotel-dark-green group-hover:text-hotel-darker-green transition-colors">{promo.title}</h3>
                  <p className="text-gray-600">{promo.description}</p>
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
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (transitioning) return;
              setTransitioning(true);
              setCurrent(index);
              setTimeout(() => setTransitioning(false), 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-hotel-dark-green w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to promotion ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionsSlider;
