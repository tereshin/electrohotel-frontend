import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'large' | 'medium' | 'small';
}

const titleSizes = {
  large: 'text-4xl md:text-5xl',
  medium: 'text-2xl md:text-3xl',
  small: 'text-xl md:text-2xl',
}


const Title: React.FC<TitleProps> = ({ children, className = '', size = 'large' }) => {
  return (
    <h2 className={`uppercase ${className} ${titleSizes[size]}`}>{children}</h2>
  );
};

export default Title;