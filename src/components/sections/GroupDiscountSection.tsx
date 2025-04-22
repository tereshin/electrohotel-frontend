import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import ArrowIcon from '@/components/icons/ArrowIcon';

const GroupDiscountSection: React.FC = () => {
  return (
    <section className="max-w-content border border-[rgba(2,26,19,0.2)] mb-[60px] lg:mb-[100px] mx-4 md:mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 md:gap-[60px] p-4 md:py-10 md:py-[60px] md:px-6 md:px-[60px]">
        {/* Left image column */}
        <div className="w-full md:w-1/2 relative">
          <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/group_discount_image.png')" }}>
            <div className="pt-[85%]"></div>
          </div>
        </div>
        
        {/* Right content column */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl md:text-[30px] text-[#093024] uppercase tracking-[0.06em] font-light leading-tight">
              Наш отель с радостью<br />
              принимает группы гостей,
            </h2>
            
            <div className="flex flex-col gap-5">
              <p className="text-[15px] text-[#021A13] opacity-70 leading-relaxed">
                приехавших в город как по рабочим вопросам, так и для знакомства с его достопримечательностями. Мы готовы помочь с организацией комфортного размещения, координацией трансферов, бронированием экскурсий или подготовкой деловых встреч.  
                <span className="hidden md:inline">Для туристов предложим советы по маршрутам, а командированным гостям обеспечим всё необходимое для продуктивной работы.</span>
              </p>
              
              <p className="text-[15px] text-[#021A13] opacity-70 leading-relaxed">
                При групповом бронировании действуют специальные условия и скидки, делая ваш визит не только удобным, но и выгодным – ПРЕДОСТАВЛЯЕМ СКИДКУ ДО 20%
              </p>
            </div>
          </div>
          
          <CustomButton 
            variant="base1" 
            size="default" 
            className="mr-auto uppercase"
          >
            забронировать по акции
            <ArrowIcon />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default GroupDiscountSection; 