import React from "react";
import TitleLarge from "../ui/TitleLarge";
const FeatureItem = ({ 
  icon, 
  text 
}: { 
  icon: string | React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex items-center gap-4 md:gap-9">
      {typeof icon === 'string' ? (
        <div className="min-w-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#021A13] flex items-center justify-center">
          <img src={icon} alt={text} className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      ) : (
        <div className="min-w-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#021A13] flex items-center justify-center">
          {icon}
        </div>
      )}
      <p className="uppercase text-[#021A13] text-sm md:text-base tracking-[0.02em] leading-[1.4em]">{text}</p>
    </div>
  );
};

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
    <section className="bg-[#FAF6F1] py-8 px-5 md:py-16 lg:py-[100px] md:px-10 lg:px-[100px]">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-6 md:gap-10">
          <TitleLarge>
          уютное и современное пространство для тех,<br className="hidden md:block" />
          кто ценит комфорт без лишней суеты
          </TitleLarge>
          
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
          <FeatureItem 
            icon="/icons/location-icon.svg" 
            text="Центр города со своей территорией <4400 м" 
          />
          <FeatureItem 
            icon="/icons/wifi-icon.svg" 
            text="Бесплатный Wi-FI" 
          />
          <FeatureItem 
            icon="/icons/park-icon.svg" 
            text='60 Га площадь парка "Авангард" (2 мн пешком)' 
          />
          <FeatureItem 
            icon={cafeIcon} 
            text="Уютное кафе (завтраки, обеды, ужины)" 
          />
        </div>
      </div>
    </section>
  );
};

export default HotelDescription; 