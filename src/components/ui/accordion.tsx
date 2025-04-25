import React, { useState } from 'react';
import Title from './Title';
import ArrowIcon from '../icons/ArrowIcon';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Split answer by \n to create paragraphs
  const paragraphs = answer.split('\n').filter(Boolean);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5">
        <div 
          className="flex items-center justify-between gap-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Title size="medium">
            {question}
          </Title>
          <div className="relative w-14 h-14 flex-shrink-0">
            <div className="w-full h-full rounded-full border border-[#093024] absolute"></div>
            <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <div className="rotate-90">
              <ArrowIcon/>
              </div>
            </div>
          </div>
        </div>
        
        {isOpen && (
          <div className="pl-0 pr-12 pb-2 transition-all duration-300 opacity-70">
            <div className="flex flex-col gap-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[15px] leading-[1.35em] text-[#021A13]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-[1px] bg-[#CCD1D0] mt-8"></div>
    </div>
  );
};

export default Accordion;
