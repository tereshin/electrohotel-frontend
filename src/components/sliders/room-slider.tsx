
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

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(current === rooms.length - 1 ? 0 : current + 1);
    setTimeout(() => setTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(current === 0 ? rooms.length - 1 : current - 1);
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
      <div className="flex transition-transform duration-300 ease-out h-full" style={{ transform: `translateX(-${current * 100}%)` }}>
        {rooms.map((room, index) => (
          <div key={room.id} className="min-w-full">
            <div className="grid md:grid-cols-2 gap-8 h-full">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-hotel-darkest-green">{room.title}</h3>
                <p className="text-gray-600 mb-6">{room.description}</p>
                <p className="text-xl font-medium text-hotel-dark-green mb-6">{room.price}</p>
                <div>
                  <CustomButton variant="base2">Book Now</CustomButton>
                </div>
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
        {rooms.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (transitioning) return;
              setTransitioning(true);
              setCurrent(index);
              setTimeout(() => setTransitioning(false), 300);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-hotel-dark-green w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to room ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomSlider;
