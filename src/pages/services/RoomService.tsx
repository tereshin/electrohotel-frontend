import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import GroupDiscountSection from "@/components/sections/GroupDiscountSection";
import Title from "@/components/ui/Title";
import { ServiceContacts } from "@/components/ServiceContacts";
import Gallery from "@/components/sliders/gallery";
import { BookingButton } from "@/components/ui/booking-button";

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

const RoomService = () => {
  const images = [
    "/images/services/room-service/1.webp",
    "/images/services/room-service/2.webp",
    "/images/services/room-service/3.webp"
  ];
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Обслуживание номеров" />
      <section className="bg-[#FAF6F1] py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col lg:flex-row gap-6 text-[#021A13] ">
              <p className="text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Поддержание чистоты и порядка в номерах является одной из основных услуг гостиницы и входит в стоимость номера. Мытье поверхностей проводится регулярно, в отсутствие или присутствие гостей. При этом вы можете:
              </p>
              <ul className="flex flex-col gap-3 text-sm md:text-[15px] leading-[1.73em] lg:w-1/2">
                <li className="text-[15px] leading-[1.35em] opacity-70 flex gap-3">
                  <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                  Заказать внеплановую замену постельного белья;
                </li>
                <li className="text-[15px] leading-[1.35em] opacity-70 flex gap-3">
                  <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                  Запросить новые полотенца, гигиенические принадлежности;
                </li>
                <li className="text-[15px] leading-[1.35em] opacity-70 flex gap-3">
                  <div className="min-w-1 h-1 bg-[#021A13] rounded-full relative top-2" />
                  Инициировать уборку после проведения праздников.
                </li>
              </ul>
              <p className="text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Также вы можете воспользоваться гостиничной прачечной: сотрудники отеля заберут ваши вещи и позаботятся о том, чтобы они были доставлены в номер в строго оговоренное время.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Gallery images={images} size="wide" />

      <section className="py-8 px-5 md:pt-16 lg:pt-[100px]">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 max-w-[1400px] mx-auto items-center">
          <img src="/images/services/room-service/image.jpg" alt="cafe" className="w-full h-full md:w-[50%] md:h-[50%] object-cover" />
          <div className="flex flex-col gap-6 md:gap-10">
            <Title size='medium'>
            Мы ценим каждого гостя
            </Title>
            
            <div className="flex flex-col gap-5"> 
              <div className="grid grid-cols-1 gap-5">
                <PriceItem price="От 550 ₽" label="Стирка, сушка (1 загрузка до 3 кг)" />
              </div>
              <p className="font-ttNorms text-[15px] leading-[1.35] text-[#021A13] opacity-70 max-w-[600px]">
               При этом стоит отметить, что используя качественные моющие средства, гипоаллергенные стиральные порошки, а также элитные кондиционеры и смягчители, мы можем гарантировать абсолютно безопасную и эффективную стирку любых вещей.
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

export default RoomService; 