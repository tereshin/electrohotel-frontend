import React, { useState } from 'react';
import { CustomButton } from './custom-button';
import ArrowIcon from '../icons/ArrowIcon';
import Title from './Title';
import BookingDialog from '../booking-dialog';
import { BookingButton } from './booking-button';

interface PromotionProps {
  title: string;
  description: string;
  conditions: string[];
  image: string;
  link: string;
}

const PromotionCard: React.FC<PromotionProps> = ({
  title,
  description,
  conditions,
  image,
  link
}) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Split description by \n to create paragraphs
  const paragraphs = description.split('\n').filter(Boolean);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 w-full">
        <div className="w-full lg:w-1/2 h-[260px] lg:h-[440px]">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <Title size="medium">
              {title}
            </Title>
            
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-[15px] leading-[1.35em] text-[#021A13] opacity-70">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {conditions.length > 0 && (
                <>
                  <h4 className="text-[18px] uppercase tracking-[0.06em] font-light text-[#093024]">
                    Условия
                  </h4>
                  
                  <ul className="flex flex-col gap-3">
                    {conditions.map((condition, index) => (
                      <li key={index} className="text-[15px] leading-[1.35em] text-[#021A13] opacity-70 flex gap-3">
                        <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                        {condition}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          <BookingButton variant="base1"/>
        </div>
      </div>

      <BookingDialog
        open={isBookingOpen}
        onOpenChange={setIsBookingOpen}
        roomTitle={title}
      />
    </>
  );
};

export default PromotionCard; 