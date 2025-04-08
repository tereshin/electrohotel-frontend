
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CustomButton } from '../ui/custom-button';
import { cn } from '@/lib/utils';
import ArrowIcon from '../icons/ArrowIcon';
import SliderNavigation from '../ui/slider-navigation';

interface RoomSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

interface RoomSliderProps {
  rooms: RoomSlide[];
  className?: string;
}

const RoomSlider: React.FC<RoomSliderProps> = ({ rooms, className }) => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [touching, setTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  // Calculate number of rooms to display
  let slidesToShow = 1.9;
  if(window.innerWidth < 768) {
    slidesToShow = 1.1;
  }
  const slideWidth = 100 / slidesToShow;

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((prev) => (prev >= rooms.length - slidesToShow ? 0 : prev + 1));
    setTimeout(() => setTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((prev) => (prev <= 0 ? Math.max(0, rooms.length - slidesToShow) : prev - 1));
    setTimeout(() => setTransitioning(false), 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouching(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touching) return;
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50) {
      nextSlide();
      setTouching(false);
    } else if (diff < -50) {
      prevSlide();
      setTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setTouching(false);
  };

  if (!rooms || rooms.length === 0) return null;

  return (
    <div 
      className={cn("relative flex flex-col gap-8 md:gap-12", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${current * slideWidth}%)` }}
      >
        {rooms.map((room) => (
          <div 
            key={room.id} 
            className="pr-5 md:pr-14" 
            style={{ width: `${slideWidth}%`, flex: `0 0 ${slideWidth}%` }}
          >
            <div className="rounded-lg flex flex-col gap-6 max-w-[670px]">
              <div className=" rounded-t-lg">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-[227px] md:h-[446px] object-cover hover-scale"
                />
              </div>
              <div className="bg-white flex flex-col gap-4 items-start">
                <h3 className="text-xl font-normal font-medium text-hotel-darkest-green truncate uppercase">{room.title}</h3>
                <p className="text-gray-600line-clamp-2 mb-4">{room.description}</p>
          
                <CustomButton variant="base2">
                  Забронировать номер
                  <ArrowIcon />
                </CustomButton>
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

export default RoomSlider;
