import React, { useState, useEffect, TouchEvent } from 'react';
import { cn } from '@/lib/utils';
import SliderNavigation from '../ui/slider-navigation';
import StarIcon from '../icons/StarIcon';
import { useNavigate } from 'react-router-dom';

interface Testimonial {
  name: string;
  date: string;
  text: string;
  image: string;
  rating: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials, className }) => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const navigate = useNavigate();

  // Calculate number of testimonials to display
  let slidesToShow = 3;
  if(window.innerWidth < 1180) {
    slidesToShow = 2;
  }
  if(window.innerWidth < 768) {
    slidesToShow = 1;
  }
  const slideWidth = 100 / slidesToShow;

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((prev) => (prev >= testimonials.length - slidesToShow ? 0 : prev + 1));
    setTimeout(() => setTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((prev) => (prev <= 0 ? Math.max(0, testimonials.length - slidesToShow) : prev - 1));
    setTimeout(() => setTransitioning(false), 500);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
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

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className={cn("relative flex flex-col gap-8 md:gap-12", className)}>
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * slideWidth}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="pr-5 md:pr-14" 
            style={{ width: `${slideWidth}%`, flex: `0 0 ${slideWidth}%` }}
          >
            <div className="flex flex-col gap-8 h-full">
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-lg font-medium text-black">{testimonial.name}</h3>
                    <p className="text-sm text-[#021A13]">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-base text-[#021A13] line-clamp-5">{testimonial.text}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      className={`w-[18px] h-[18px] ${
                        index < testimonial.rating ? 'text-[#E0CEC5]' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <img
                  src="/assets/images/ya.svg"
                  alt="Source logo"
                  className="h-8 w-auto cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://yandex.ru/maps/org/elektrostal/1110996853/reviews/');
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <SliderNavigation onPrev={prevSlide} onNext={nextSlide} className="mx-auto" />
    </div>
  );
};

export default TestimonialSlider; 