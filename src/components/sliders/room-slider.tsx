
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CustomButton } from '../ui/custom-button';
import { cn } from '@/lib/utils';

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
  const slidesToShow = 2.5;
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
      className={cn("relative overflow-hidden", className)}
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
            className="px-2" 
            style={{ width: `${slideWidth}%`, flex: `0 0 ${slideWidth}%` }}
          >
            <div className="rounded-lg overflow-hidden hover-lift">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-48 object-cover hover-scale"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold mb-2 text-hotel-darkest-green truncate">{room.title}</h3>
                <p className="text-gray-600 mb-3 text-sm line-clamp-2">{room.description}</p>
                <p className="text-lg font-medium text-hotel-dark-green mb-4">{room.price}</p>
                <CustomButton variant="base2" className="w-full">Book Now</CustomButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button 
          onClick={prevSlide}
          className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors"
          aria-label="Previous room"
        >
          <ChevronLeft className="w-5 h-5 text-hotel-darkest-green" />
        </button>
        <button 
          onClick={nextSlide}
          className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors"
          aria-label="Next room"
        >
          <ChevronRight className="w-5 h-5 text-hotel-darkest-green" />
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
        {Array.from({ length: Math.ceil(rooms.length - slidesToShow + 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (transitioning) return;
              setTransitioning(true);
              setCurrent(index);
              setTimeout(() => setTransitioning(false), 300);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === Math.floor(current) ? 'bg-hotel-dark-green w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to room set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomSlider;
