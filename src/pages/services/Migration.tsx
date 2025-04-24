import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import GroupDiscountSection from "@/components/sections/GroupDiscountSection";
import Title from "@/components/ui/Title";
import { ServiceContacts } from "@/components/ServiceContacts";
import Gallery from "@/components/sliders/gallery";
import { BookingButton } from "@/components/ui/booking-button";

const Migration = () => {
  const images = [
    "/images/services/migration/1.webp",
    "/images/services/migration/2.webp",
    "/images/services/migration/3.webp"
  ];
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Миграционная поддержка" />
      <section className="bg-[#FAF6F1] py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col lg:flex-row gap-6 text-[#021A13] ">
              <p className="text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Добро пожаловать в нашу гостиницу, где забота о вашем комфорте начинается с первых минут вашего пребывания! Мы понимаем, что, находясь вдали от дома, вы хотите чувствовать себя защищённо и уверенно. Именно поэтому мы предлагаем услугу миграционного учета, чтобы сделать ваше пребывание максимально легким и удобным.
              </p>
              <p className="text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Наши опытные сотрудники помогут вам заполнить все необходимые документы, чтобы вы могли полностью сосредоточиться на своих делах и отдыхе. Мы гарантируем, что процесс миграционного учета пройдет без задержек и лишних хлопот. А Вам не придется тратить время на посещение ведомств.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Gallery images={images} size="wide" />

      <section className="py-8 px-5 md:pt-16 lg:pt-[100px]">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 max-w-[1400px] mx-auto items-center">
          <img src="/images/services/migration/image.jpg" alt="cafe" className="w-full h-full md:w-[50%] md:h-[50%] object-cover" />
          <div className="flex flex-col gap-6 md:gap-10">
            <Title size='medium'>
            Для успешного оформления миграционного учета вам понадобятся документы:
            </Title>
            
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-3">
                <li className="text-[15px] leading-[1.35em] text-[#021A13] opacity-70 flex gap-3">
                  <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                  Паспорт — основной документ, удостоверяющий личность.
                </li>
                <li className="text-[15px] leading-[1.35em] text-[#021A13] opacity-70 flex gap-3">
                  <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                  Миграционная карта— документ, получаемый при въезде в страну.
                </li>
                <li className="text-[15px] leading-[1.35em] text-[#021A13] opacity-70 flex gap-3">
                  <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                  Виза — при наличии, если ваша страна требует визу для въезда.
                </li>
              </ul>
              <p className="font-ttNorms text-[15px] leading-[1.35] text-[#021A13] opacity-70 max-w-[600px]">
              Важно! Для того чтобы мы могли качественно и своевременно оказать данную услугу, пожалуйста, предупреждайте нас о необходимости миграционного учета заранее при бронировании номера. Это позволит избежать лишних хлопот и спокойно наслаждаться вашим отдыхом.
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

export default Migration; 