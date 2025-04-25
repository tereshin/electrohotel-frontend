import React from 'react';
import Title from '../../ui/Title';
import { BookingButton } from '@/components/ui/booking-button';

interface PriceItemProps {
  price: string;
  label: string;
}

const PriceItem: React.FC<PriceItemProps> = ({ price, label }) => (
  <div className="flex flex-col gap-1">
    <span className="font-ttDrugs text-[18px] leading-[1.15] tracking-[0.06em] uppercase text-[#093024]">
      {price}
    </span>
    <span className="font-ttNorms text-[15px] leading-[1.35] text-[#021A13] opacity-70">
      {label}
    </span>
  </div>
);

const OperatingHoursSection: React.FC = () => {
  return (
    <section className="py-8 px-5 md:pb-16 lg:pb-[70px]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 max-w-[1400px] mx-auto items-center">
        <img src="/images/services/cafeteria/1.jpg" alt="cafe" className="w-full h-full md:w-[50%] md:h-[50%] object-cover" />
        <div className="flex flex-col gap-6 md:gap-10">
          <Title size='medium'>
            Время работы <br className="hidden md:block" />
            круглосуточно
          </Title>
          
          <div className="flex flex-col gap-5">
            <p className="font-ttNorms text-[15px] leading-[1.35] text-[#021A13] opacity-70 max-w-[600px]">
              Мы используем только свежие продукты и работаем с проверенными партнерами - ведь именно качественные и свежие ингредиенты позволяют создавать вкусные блюда.
            </p>
            
            <div className="grid grid-cols-3 gap-5">
              <PriceItem price="350 ₽" label="Стоимость завтрака" />
              <PriceItem price="750 ₽" label="Стоимость обеда" />
              <PriceItem price="650 ₽" label="Стоимость ужина" />
            </div>
            <BookingButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingHoursSection; 