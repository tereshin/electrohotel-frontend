import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import ArrowIcon from '@/components/icons/ArrowIcon';
import { useIsMobile } from '@/hooks/use-mobile';

const GroupDiscountSection: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section className="max-w-content border border-[rgba(2,26,19,0.2)] mb-[60px] lg:mb-[100px] mx-4 lg:mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 lg:gap-[60px] p-4 lg:py-10 lg:py-[60px] lg:px-6 lg:px-[60px]">
        {/* Left image column */}
        <div className="w-full lg:w-1/2 relative">
          <div className="w-full bg-cover bg-center" style={{ backgroundImage: isMobile ? "url('/assets/images/group_discount_image-sm.jpg')" : "url('/assets/images/group_discount_image.jpg')" }}>
            <div className="pt-[85%]"></div>
          </div>
        </div>
        
        {/* Right content column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col gap-4 lg:gap-8">
            <h2 className="text-2xl lg:text-[30px] text-[#093024] uppercase tracking-[0.06em] font-light leading-tight">
              Наш отель с радостью<br />
              принимает группы гостей,
            </h2>
            
            <div className="flex flex-col gap-5">
              <p className="text-[15px] text-[#021A13] opacity-70 leading-relaxed">
                приехавших в город как по рабочим вопросам, так и для знакомства с его достопримечательностями. Мы готовы помочь с организацией комфортного размещения, координацией трансферов, бронированием экскурсий или подготовкой деловых встреч.  
                <span className="hidden lg:inline">Для туристов предложим советы по маршрутам, а командированным гостям обеспечим всё необходимое для продуктивной работы.</span>
              </p>
              
              <p className="text-[15px] text-[#021A13] opacity-70 leading-relaxed">
                При групповом бронировании действуют специальные условия и скидки, делая ваш визит не только удобным, но и выгодным – <span className="font-semibold">ПРЕДОСТАВЛЯЕМ СКИДКУ ДО 20%</span>
              </p>
            </div>
          </div>
          
          <CustomButton 
            variant="base1" 
            size="default" 
            className="mr-auto uppercase"
            onClick={() => {
              window.open('https://wa.clck.bar/79963652330?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%BE%D0%B6%D0%BD%D0%BE%20%D0%BB%D0%B8%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%20%D0%BD%D0%B0%20', '_blank');
            }}
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