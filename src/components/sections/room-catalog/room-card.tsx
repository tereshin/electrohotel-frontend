import React from 'react';
import { Button } from '@/components/ui/button';
import { CustomButton } from '@/components/ui/custom-button';
import ArrowIcon from '@/components/icons/ArrowIcon';

interface RoomProps {
  id: number;
  title: string;
  description: string;
  capacity: string;
  bed: string;
  price: string;
  area: string;
  image: string;
}

interface RoomCardProps {
  room: RoomProps;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="flex flex-col max-w-[670px] w-full">
      {/* Room image and details */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={room.image}
          alt={`${room.title} room`}
          className="w-full h-full object-cover"
        />
        
        {/* Room features overlay */}
        <div className="absolute bottom-4 left-4 flex flex-row gap-2">
          {/* Area info */}
          <div className="flex items-center bg-black bg-opacity-50 text-white px-6 py-3 rounded-full">
            <img src="/images/rooms/area-icon-1.svg" className="w-5 h-5 mr-2" alt="Area" />
            <span className="text-sm">{room.area} м²</span>
          </div>
          
          {/* Bed info */}
          <div className="flex items-center justify-center bg-black bg-opacity-50 text-white p-3 rounded-full w-10 h-10">
            <img src="/images/rooms/bed-icon.svg" className="w-5 h-5" alt="Bed" />
          </div>
          
          {/* WiFi info */}
          <div className="flex items-center justify-center bg-black bg-opacity-50 text-white p-3 rounded-full w-10 h-10">
            <img src="/images/rooms/wifi-icon.svg" className="w-5 h-5" alt="WiFi" />
          </div>
          
          {/* Bath info */}
          <div className="flex items-center justify-center bg-black bg-opacity-50 text-white p-3 rounded-full w-10 h-10">
            <img src="/images/rooms/bath-icon.svg" className="w-5 h-5" alt="Bath" />
          </div>
        </div>
      </div>
      
      {/* Room info */}
      <div className="flex flex-col mt-8 gap-6">
        {/* Room title */}
        <h2 className="text-xl uppercase font-normal text-[#021A13]">{room.title}</h2>
        
        {/* Room description */}
        <div className="flex flex-col gap-3">
          <p className="text-black opacity-70 text-[15px] leading-[1.7em]">{room.description}</p>
          <ul className="flex flex-col gap-3 text-sm md:text-[15px] leading-[1.73em] lg:w-1/2 ml-2">
              <li className="text-[15px] leading-[1.35em] opacity-70 flex gap-3">
                <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                {room.capacity}
              </li>
              <li className="text-[15px] leading-[1.35em] opacity-70 flex gap-3">
                <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                {room.bed}
              </li>
            </ul>
        </div>
        
        {/* Price and booking button */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#093024] text-[30px] font-light uppercase tracking-[0.6px]">{room.price}</span>
            <span className="text-black opacity-50 text-[15px]">за 1 ночь</span>
          </div>
          
          <CustomButton
            variant="base2"
            size="default"
            onClick={() => window.scrollTo({ top: document.getElementById('booking')?.offsetTop, behavior: 'smooth' })}
          >
            <span className="flex items-center gap-4">
              забронировать
              <ArrowIcon />
            </span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default RoomCard; 