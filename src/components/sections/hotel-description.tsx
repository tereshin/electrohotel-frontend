import React from "react";
import Title from "../ui/Title";

import FeatureIcon from "../ui/FeatureIcon";

const HotelDescription = () => {
  const cafeIcon = (
    <div className="relative w-5 h-5 md:w-6 md:h-6">
      <img src="/icons/cafe-icon-1.svg" alt="Cafe icon" className="absolute inset-0 w-full h-full" />
      <img src="/icons/cafe-icon-2.svg" alt="Cafe icon" className="absolute inset-0 w-full h-full" />
      <img src="/icons/cafe-icon-3.svg" alt="Cafe icon" className="absolute inset-0 w-full h-full" />
      <img src="/icons/cafe-icon-4.svg" alt="Cafe icon" className="absolute inset-0 w-full h-full" />
    </div>
  );

  return (
    <section className="bg-[#FAF6F1] py-8 px-5 md:py-16 lg:py-[100px]">
      <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-10">
          <Title>
          уютное и современное пространство для тех,<br className="hidden md:block" />
          кто ценит комфорт без лишней суеты
          </Title>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Отель расположен в самом центре города, в шаге от исторического, промышленного и делового центра Электростали. 
              Здесь вас ждут уютные номера с лаконичным дизайном, бесплатным Wi-Fi и всем необходимым для отдыха: круглосуточный кафетерий, 
              закрытая парковка, приватная территория и безупречный сервис. Небольшой формат позволяет создать камерную атмосферу, 
              столь необходимую для командировок, туристических поездок или семейного отдыха.
            </p>
            <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Все 25 номеров отеля оформлены в современном стиле с акцентом на функциональность: мощный Wi-Fi, рабочие зоны с ergo-стульями, 
              мини-холодильники и Smart-телевизоры. Для гостей доступен круглосуточный кафетерий с кофемашиной премиум-класса, 
              где можно быстро перекусить или взять напиток с собой.
            </p>
            <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Уникальное преимущество — приватная территория с видеонаблюдением и автоматическими воротами, что особенно ценно для тех, 
              кто путешествует на авто или приезжает в город по рабочим задачам. Мы фокусируемся на вашем комфорте: поможем организовать 
              трансфер до соседних городов или Москвы, заказать доставку блюд, а при долгосрочном размещении предложим персональные условия.
            </p>
            <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Здесь нет лишней суеты — только практичность, безопасность и забота, чтобы Вы чувствовали себя как дома даже вдали от него. 
              Мы сделаем все, чтобы Ваш визит в Электросталь стал приятным и продуктивным!
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
          <FeatureIcon 
            icon="/icons/location-icon.svg" 
            text="Центр города со своей территорией <4400 м" 
          />
          <FeatureIcon 
            icon="/icons/wifi-icon.svg" 
            text="Бесплатный Wi-FI" 
          />
          <FeatureIcon 
            icon="/icons/park-icon.svg" 
            text='60 Га площадь парка "Авангард" (2 мн пешком)' 
          />
          <FeatureIcon 
            icon={cafeIcon} 
            text="Уютное кафе (завтраки, обеды, ужины)" 
          />
        </div>
      </div>
    </section>
  );
};

export default HotelDescription; 