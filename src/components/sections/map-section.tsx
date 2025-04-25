import React from 'react';
import Title from '../ui/Title';
import { CustomButton } from '../ui/custom-button';
import ArrowIcon from '../icons/ArrowIcon';

const MapSection = () => {
  // Render 5 stars for the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img 
          key={i} 
          src="/images/star.svg" 
          alt="Star" 
          className="w-5 h-5 opacity-90" 
        />
      );
    }
    return stars;
  };

  // Function to build route in external map application
  const handleBuildRoute = () => {
    const address = "Московская область, г. Электросталь, ул. Расковой, д. 6";
    
    // Try to detect the device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, try to open in native maps app
      window.open(`https://maps.google.com?q=${encodeURIComponent(address)}`);
    } else {
      // On desktop, open in Yandex Maps
      window.open(`https://yandex.ru/maps/?text=${encodeURIComponent(address)}`);
    }
  };

  return (
    
    <section className=" w-full h-[700px] md:h-[600px] lg:h-[700px] py-10 md:py-12 lg:py-[50px] px-5 md:px-10">
        <div className="max-w-content mx-auto h-full relative">
        {/* Map background image */}
        <div 
            className="absolute w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/map-background.jpg)' }}
        />

        {/* Content overlay */}
        <div className="absolute top-6 left-6">
            <div className="bg-white rounded-[4px] shadow-xl p-8 md:p-[50px] w-full max-w-[457px]">
            <div className="flex flex-col gap-[30px]">
                <div className="uppercase text-[#093024]">
                <Title>отзывы</Title>
                </div>
                
                <div className="flex flex-col gap-5 w-full">
                <div className="flex gap-1">
                    {renderStars()}
                </div>
                
                <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70">
                    Московская область, г. Электросталь,<br />
                    ул. Расковой, д. 6
                </p>
                </div>
                
                <CustomButton 
                onClick={handleBuildRoute}
                variant="base2"
                >
                 Построить маршрут
                 <ArrowIcon />
                </CustomButton>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default MapSection; 