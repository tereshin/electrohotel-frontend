import React from 'react';
import Header from '@/components/header';
import { BookingForm } from '@/components/booking-form';

interface FirstSectionProps {
  title?: string;
}

const FirstSection: React.FC<FirstSectionProps> = ({ title = 'Заголовок' }) => {
  return (
    <section className="relative bg-[#023D30] overflow-hidden px-4 md:px-10">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
      ></div>
      
      {/* Dark gradient overlay from bottom */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"
      ></div>
      
      {/* Header is positioned fixed, so it will be above this section */}
      <Header />
      
      {/* Content container */}
      <div className="relative z-10 pt-40 pb-16 flex flex-col items-center justify-between max-w-[1400px] mx-auto">
        {/* Title */}
        <h1 className="text-[#F3EEE7] text-4xl md:text-5xl lg:text-[56px] uppercase tracking-[0.06em] font-light text-center mb-16">
          {title}
        </h1>
        
        {/* Booking form at the bottom */}
        <div className="w-full mt-auto  text-white">
          <BookingForm  />
        </div>
      </div>
    </section>
  );
};

export default FirstSection; 