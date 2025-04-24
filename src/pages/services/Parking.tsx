import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import GroupDiscountSection from "@/components/sections/GroupDiscountSection";
import { ServiceContacts } from "@/components/ServiceContacts";
import Gallery from "@/components/sliders/gallery";
import Title from "@/components/ui/Title";
import { BookingButton } from "@/components/ui/booking-button";
const images = [
  "/images/services/parking/1.webp",
  "/images/services/parking/2.webp",
  "/images/services/parking/3.webp"
];
const Parking = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Бесплатная парковка" />
      <section className="bg-[#FAF6F1] py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col lg:flex-row gap-6">
              <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
               Наша гостиница предоставляет гостям бесплатную охраняемую парковку, расположенную на территории и оснащенную автоматическими воротами, которые закрываются на ночь для усиления безопасности.
              </p>
              <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
                Пространство освещается в темное время суток, обеспечивая видимость и комфорт, а круглосуточное видеонаблюдение фиксирует все происходящее, гарантируя защиту автомобилей.
              </p>
              <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Это позволяет гостям не беспокоиться о сохранности транспорта даже во время поздних возвращений или ранних выездов. </p>
            </div>
          </div>
        </div>
      </section>
      <Gallery images={images} size="wide" />
      <section className="py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 max-w-[1400px] mx-auto items-center">
          <img src="/assets/images/3.jpg" alt="cafe" className="w-full h-full md:w-[50%] md:h-[50%] object-cover" />
          <div className="flex flex-col gap-6 md:gap-10 w-full">
            <Title size='medium'>
            Мы гарантируем
            </Title>
            
            <div className="flex flex-col gap-5"> 
              <ul className="flex flex-col gap-3">
                <li className="text-[15px] leading-[1.35em] text-[#021A13] opacity-70 flex gap-3">
                  <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                  Круглосуточное наблюдение
                </li>
                <li className="text-[15px] leading-[1.35em] text-[#021A13] opacity-70 flex gap-3">
                  <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                  Более 15 парковочных мест
                </li>
                <li className="text-[15px] leading-[1.35em] text-[#021A13] opacity-70 flex gap-3">
                  <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                  Беспрепятственный въезд/выезд с территории
                </li>
              </ul>
              
              <BookingButton />
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <Title>
            задать вопросы можно
            </Title>
            
          </div>
          
          <ServiceContacts />
        </div>
      </section>
      <GroupDiscountSection />
      <Footer />
    </div>
  );
};

export default Parking; 