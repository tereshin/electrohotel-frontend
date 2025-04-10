import React from 'react';
import TitleLarge from '../ui/TitleLarge';

interface FeatureItemProps {
  iconSrc: string;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ iconSrc, text }) => {
  return (
    <div className="flex items-center gap-6 md:gap-9">
      <div className="min-w-10 w-10 h-10 md:min-w-12 md:w-12 md:h-12 rounded-full border border-[#021A13] flex items-center justify-center">
        <img src={iconSrc} alt={text} className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <p className="text-[#021A13] uppercase text-sm md:text-base tracking-[0.02em] leading-[1.4em]">{text}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const firstColumnFeatures = [
    {
      id: 1,
      icon: '/icons/features/wifi-icon.svg',
      text: 'Wi-Fi на всей территории отеля и в номерах'
    },
    {
      id: 2,
      icon: '/icons/features/business-icon.svg',
      text: 'Бизнес услуги: сканирование, отправка e-mail'
    },
    {
      id: 3,
      icon: '/icons/features/food-icon.svg',
      text: 'Питание, согласно выбранного тарифа'
    },
    {
      id: 4,
      icon: '/icons/features/parking-icon.svg',
      text: 'Парковка на территории отеля'
    }
  ];

  const secondColumnFeatures = [
    {
      id: 5,
      icon: '/icons/features/water-icon.svg',
      text: 'Вода и круассаны в каждом номере'
    },
    {
      id: 6,
      icon: '/icons/features/iron-icon.svg',
      text: 'Утюг и гладильная доска на каждом этаже'
    },
    {
      id: 7,
      icon: '/icons/features/surveillance-icon.svg',
      text: 'Круглосуточное наружное видеонаблюдение'
    },
    {
      id: 8,
      icon: '/icons/features/excursion-icon.svg',
      text: 'Заказ экскурсии'
    }
  ];

  return (
    <section className="bg-white py-10 md:py-16 lg:py-[50px] lg:pb-[100px] px-5 md:px-10">
      <div className="flex flex-col gap-8 md:gap-[40px] lg:gap-[60px] max-w-content mx-auto">
        <TitleLarge>Также вы всегда можете<br className="hidden md:block" /> рассчитывать на:</TitleLarge>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-[40px] flex-wrap">
          <div className="w-full md:w-[calc(50%-20px)] flex flex-col gap-10">
            {firstColumnFeatures.map((feature) => (
              <FeatureItem 
                key={feature.id}
                iconSrc={feature.icon}
                text={feature.text}
              />
            ))}
          </div>
          
          <div className="w-full md:w-[calc(50%-20px)] flex flex-col gap-10">
            {secondColumnFeatures.map((feature) => (
              <FeatureItem 
                key={feature.id}
                iconSrc={feature.icon}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 