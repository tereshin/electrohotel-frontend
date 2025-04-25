import React from 'react';
import Title from '../ui/Title';

interface FeatureItemProps {
  icon: string;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 md:gap-9 min-w-[25%]">
      {typeof icon === 'string' ? (
        <div className="min-w-[82px] w-[82px] h-[82px] rounded-full border border-[#021A13] flex items-center justify-center">
          <img src={icon} alt={text} className="w-12 h-12" />
        </div>
      ) : (
        <div className="min-w-[82px] w-[82px] h-[82px] rounded-full border border-[#021A13] flex items-center justify-center">
          {icon}
        </div>
      )}
      <p className="uppercase text-[#021A13] text-sm md:text-base tracking-[0.02em] leading-[1.4em]">{text}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const firstColumnFeatures = [
    {
      id: 1,
      icon: '/icons/wifi-icon.svg',
      text: 'Wi-Fi на всей территории отеля и в номерах'
    },
    {
      id: 2,
      icon: '/icons/business-icon.svg',
      text: 'Бизнес услуги: сканирование, отправка e-mail'
    },
    {
      id: 3,
      icon: '/icons/food-icon.svg',
      text: 'Питание, согласно выбранного тарифа'
    },
    {
      id: 4,
      icon: '/icons/parking-icon.svg',
      text: 'Парковка на территории отеля'
    }
  ];

  const secondColumnFeatures = [
    {
      id: 5,
      icon: '/icons/water-icon.svg',
      text: 'Вода и круассаны в каждом номере'
    },
    {
      id: 6,
      icon: '/icons/iron-icon.svg',
      text: 'Утюг и гладильная доска на каждом этаже'
    },
    {
      id: 7,
      icon: '/icons/surveillance-icon.svg',
      text: 'Круглосуточное наружное видеонаблюдение'
    },
    {
      id: 8,
      icon: '/icons/excursion-icon.svg',
      text: 'Заказ экскурсии'
    }
  ];

  return (
    <section className="bg-white py-10 md:py-12 lg:py-[50px] lg:pb-[70px] px-5 md:px-10">
      <div className="flex flex-col gap-8 md:gap-[40px] lg:gap-[60px] max-w-content mx-auto">
        <Title>Также вы всегда можете<br className="hidden md:block" /> рассчитывать на:</Title>
        
        <div className="flex flex-col gap-10 md:gap-[40px] flex-wrap">
          <div className="w-full flex flex-col md:flex-row gap-10">
            {firstColumnFeatures.map((feature) => (
              <FeatureItem 
                key={feature.id}
                icon={feature.icon}
                text={feature.text}
              />
            ))}
          </div>
          
          <div className="w-full flex flex-col md:flex-row gap-10">
            {secondColumnFeatures.map((feature) => (
              <FeatureItem 
                key={feature.id}
                icon={feature.icon}
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