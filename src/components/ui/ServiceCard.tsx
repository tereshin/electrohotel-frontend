import React from 'react';
import { CustomButton } from './custom-button';
import ArrowIcon from '../icons/ArrowIcon';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-8 lg:gap-8 w-full h-full">
      <div className="w-full h-[260px] lg:h-[440px]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover lg:h-[435px]"
        />
      </div>
      <div className="w-full flex flex-col gap-6 h-full md:gap-10">
        <div className="flex flex-col gap-5">
          <Title size="medium" className="w-full md:w-[70%]">
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
        
        <CustomButton onClick={() => navigate(link)} variant="base1" className="w-max mt-auto">
          Узнать подробнее 
          <ArrowIcon />
        </CustomButton>
      </div>
    </div>
  );
};

export default ServiceCard; 