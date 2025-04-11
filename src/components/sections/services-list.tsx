import React from 'react';
import services from '@/lib/services';
import ServiceCard from '../ui/ServiceCard';

const ServicesList: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10 md:gap-[60px]">
          {services.map((service, index) => (
            <div className="flex flex-col gap-10 md:gap-[60px]">
                <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    image={service.image || `https://source.unsplash.com/random/800x600?hotel,service&${index}`}
                    link={service.link}
                />
                {index < services.length - 1 && (
                    <div className="w-full h-[1px] border-t border-[#021A13] opacity-20" />
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList; 