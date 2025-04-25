import React from 'react';
import promotions from '@/lib/promotions';
import PromotionCard from '../ui/PromotionCard';

const PromotionsList: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-5">
      <div className="max-w-content mx-auto ">
        <div className="flex flex-col gap-10 md:gap-[60px]">
          {promotions.map((promotion, index) => (
            <div key={promotion.id} className="flex flex-col gap-10 md:gap-[60px]">
              <PromotionCard
                title={promotion.title}
                description={promotion.description}
                conditions={promotion.conditions}
                image={promotion.image}
                link={promotion.link}
            />

            {index !== promotions.length - 1 && (
              <div className="w-full h-[1px] border-t border-[#021A13] opacity-20" />
            )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsList; 