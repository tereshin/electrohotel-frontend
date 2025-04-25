import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import GroupDiscountSection from "@/components/sections/GroupDiscountSection";
import Title from "@/components/ui/Title";
import { ServiceContacts } from "@/components/ServiceContacts";
import Gallery from "@/components/sliders/gallery";
import { BookingButton } from "@/components/ui/booking-button";

const CheckIn = () => {
  const images = [
    "/images/services/check-in/2.jpeg",
    "/images/services/check-in/2.webp",
    "/images/services/check-in/3.webp"
  ];
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Ранний заезд / поздний выезд" />
      <section className="bg-[#FAF6F1] py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col lg:flex-row gap-6 text-[#021A13] ">
              <p className="text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
                При наличии свободных мест, вы сможете заселиться без предварительного бронирования на время, пока выбранные номера не станут доступны для заезда. При этом мы предлагаем почасовую модель оплаты проживания в номерах. 
              </p>
              <p className="text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Пребывание от 6 до 12 часов до заезда или выезда оценивается в  половину суток, от 12 часов и более – оплата за полные сутки. При этом во время проживания по системе вы можете пользоваться всеми услугами отеля – парковкой, кафе, прачечной, территорией комплекса и т.д.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Gallery images={images} size="wide" />

      <section className="py-8 px-5 md:pt-16 lg:pt-[100px]">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 max-w-[1400px] mx-auto items-center">
          <img src="/images/services/check-in/image.jpg" alt="cafe" className="w-full h-full md:w-[50%] md:h-[50%] object-cover" />
          <div className="flex flex-col gap-6 md:gap-10">
            <Title size='medium'>
            не бронируется заранее
            </Title>
            
            <div className="flex flex-col gap-5">
              <p className="font-ttNorms text-[15px] leading-[1.35] text-[#021A13] opacity-70 max-w-[600px]">
              Услуга ранний заезд и поздний выезд не бронируется заранее и оказывается по факту при наличии возможности.
              </p>
              <BookingButton />
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <Title>
            Уточнить стоимость <br className="hidden md:block" />
            и заказать услугу можно
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

export default CheckIn; 