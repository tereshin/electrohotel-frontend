import React from 'react';
import { CustomButton } from './custom-button';
import ArrowIcon from '../icons/ArrowIcon';
import Title from './Title';

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceProps> = ({
  title,
  description,
  image,
  link
}) => {
  // Split description by \n to create paragraphs
  const paragraphs = description.split('\n').filter(Boolean);

  return (
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
          
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[15px] leading-[1.35em] text-[#021A13] opacity-70">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        <CustomButton variant="base1" className="w-max">
          подробнее
          <ArrowIcon />
        </CustomButton>
      </div>
    </div>
  );
};

export default ServiceCard; 