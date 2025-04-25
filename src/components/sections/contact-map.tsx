import React from 'react';
import { CustomButton } from '../ui/custom-button';
import ArrowIcon from '../icons/ArrowIcon';
import FeatureIcon from '../ui/FeatureIcon';
const ContactMap: React.FC = () => {
  return (
    <section className="w-full py-10 md:py-[100px] px-4 bg-white">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="w-full flex flex-col items-center gap-[60px]">
          {/* Map container */}
          <div className="w-full relative h-[700px] md:h-[500px] rounded-md overflow-hidden">
            {/* Background Map Image */}
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/map-background.jpg)' }}
            >
              {/* You can replace with an actual Google Maps embed */}
            </div>
            
            {/* Map overlay with location info */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white p-8 md:p-[50px] flex flex-col gap-[30px] max-w-md">
              <h3 className="text-[30px] uppercase tracking-[0.06em] font-light text-[#093024]">
                как нас найти
              </h3>
              
              <div className="flex flex-col gap-5">
                <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
                  Московская область, г. Электросталь,<br />
                  ул. Расковой, д. 6
                </p>
              </div>
              
              <CustomButton variant="base1" className="w-max" onClick={() => window.open('https://yandex.ru/maps/org/gostinitsa_elektrostal/1110996853?si=qbb2f19ukeajhyx839mfd3krzc', '_blank')}>
                построить маршрут
                <ArrowIcon />
              </CustomButton>
            </div>
          </div>
          
          {/* Contact information items */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Phone */}
            <FeatureIcon 
                icon="/icons/phone-icon.svg" 
                text="+7 496 574 42 72"
                caption="Звоните по бронированию отеля"
              />
            <FeatureIcon 
                icon="/icons/phone-icon.svg" 
                text="+7 996 365 23 30"
                caption="Пишите в WhatsApp и Telegram"
              />
            <FeatureIcon 
                icon="/icons/email-icon.svg" 
                text="UTShotel@yandex.ru"
              />
           
           <FeatureIcon 
                icon="/icons/location-icon.svg" 
                text="мо, г. Электросталь, ул. Расковой, д. 6"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap; 