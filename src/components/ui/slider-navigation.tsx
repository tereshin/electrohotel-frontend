import React from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import { cn } from '@/lib/utils';

interface SliderNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({ onPrev, onNext, className }) => {
  return (
    <div className={cn("relative flex justify-center gap-4 items-center w-max", className)}>
        <button 
          onClick={onPrev}
          className="rounded-full border border-[#021A13] p-4 transition-colors"
          aria-label="Previous room"
        >
          <div className="rotate-180">
            <ArrowIcon />
          </div>
        </button>
        <button 
          onClick={onNext}
          className="rounded-full border border-[#021A13] p-4 transition-colors"
          aria-label="Next room"
        >
          <ArrowIcon />
        </button>
      </div>
  );
};

export default SliderNavigation; 