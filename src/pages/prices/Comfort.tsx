import React, { useEffect } from 'react';
import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import RoomSlider from "@/components/sliders/room-slider";
import SEO from '@/components/ui/SEO';
import rooms from '@/lib/rooms';
import { seo_config } from '@/lib/seo-config';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const Comfort = () => {
  // Комната "Комфорт" имеет ID 2
  const current_room = rooms.find(room => room.id === 2);
  // Остальные комнаты для слайдера (исключаем текущую)
  const other_rooms = rooms.filter(room => room.id !== 2);

  useEffect(() => {
    Fancybox.bind('[data-fancybox]', {
      // Customize Fancybox options here
      Thumbs: false,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ['close'],
        },
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  if (!current_room) {
    return <div>Комната не найдена</div>;
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <SEO 
        title={seo_config['prices/comfort'].title}
        description={seo_config['prices/comfort'].description}
        keywords={seo_config['prices/comfort'].keywords}
        canonical_url={seo_config['prices/comfort'].canonical_url}
      />
      
      <FirstSection title={current_room.title} />
      
      {/* Детальная информация о комнате */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Изображение комнаты */}
            <div className="rounded-lg overflow-hidden">
              <a
                href={current_room.image}
                data-fancybox={`room-main-${current_room.id}`}
                data-caption={`${current_room.title} - основное фото`}
              >
                <img 
                  src={current_room.image} 
                  alt={current_room.title}
                  className="w-full h-[400px] md:h-[500px] object-cover cursor-pointer"
                />
              </a>
            </div>
            
            {/* Информация о комнате */}
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-normal text-hotel-darkest-green uppercase">
                {current_room.title}
              </h2>
              
              <p className="text-lg leading-relaxed opacity-80">
                {current_room.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-normal font-commissioner text-hotel-darkest-green mb-3">Размещение</h3>
                  <p className="opacity-70">{current_room.capacity}</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-normal font-commissioner text-hotel-darkest-green mb-3">Спальное место</h3>
                  <p className="opacity-70">{current_room.bed}</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-normal font-commissioner text-hotel-darkest-green mb-3">Площадь</h3>
                  <p className="opacity-70">{current_room.area} м²</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-normal font-commissioner text-hotel-darkest-green mb-3">Цена</h3>
                  <p className="text-2xl font-normal text-hotel-darkest-green font-viaoda-libre">{current_room.price}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Галерея комнаты */}
          {current_room.gallery && current_room.gallery.length > 0 && (
            <div className="mb-16">
              <h3 className="uppercase  text-4xl md:text-5xl mb-8 lg:mb-12 text-center">Фотогалерея</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {current_room.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <a
                      href={image}
                      data-fancybox={`room-gallery-${current_room.id}`}
                      data-caption={`${current_room.title} - фото ${index + 1}`}
                    >
                      <img 
                        src={image} 
                        alt={`${current_room.title} - фото ${index + 1}`}
                        className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Слайдер с другими комнатами */}
      <section className="py-16 px-4">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="uppercase  text-4xl md:text-5xl mb-8 lg:mb-12 text-center">
            Другие номера
          </h3>
          <RoomSlider rooms={other_rooms} />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Comfort; 