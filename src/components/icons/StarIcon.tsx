import React from 'react';

interface StarIconProps {
  className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ className = '' }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M9 0L11.0208 6.97917L18 9L11.0208 11.0208L9 18L6.97917 11.0208L0 9L6.97917 6.97917L9 0Z" />
    </svg>
  );
};

export default StarIcon; 