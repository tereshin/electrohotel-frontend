import React from 'react';

interface MenuIconProps {
  className?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ className }) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="3" y1="12.5" x2="31" y2="12.5" stroke="currentColor"/>
        <line x1="3" y1="20.5" x2="31" y2="20.5" stroke="currentColor"/>
    </svg>
  );
};

export default MenuIcon;
