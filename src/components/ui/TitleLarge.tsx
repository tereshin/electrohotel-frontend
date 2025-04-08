import React from 'react';

interface TitleLargeProps {
  children: React.ReactNode;
}

const TitleLarge: React.FC<TitleLargeProps> = ({ children }) => {
  return (
    <h2 className="text-4xl md:text-5xl uppercase">{children}</h2>
  );
};

export default TitleLarge;