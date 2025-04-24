import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import GroupDiscountSection from "@/components/sections/GroupDiscountSection";
import Gallery from "@/components/sliders/gallery";
import Title from "@/components/ui/Title";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { BookingButton } from "@/components/ui/booking-button";
import { ServiceContacts } from '../../components/ServiceContacts';

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


const Laundry = () => {
  const images = [
    "/images/services/laundry/1.webp",
    "/images/services/laundry/3.webp",
    "/images/services/laundry/2.webp"
  ];
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Прачечная" />
      <section className="bg-[#FAF6F1] py-8 px-5 lg:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 lg:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 lg:gap-10">
            <div className="flex flex-col lg:flex-row gap-6">
              <p className="text-[#021A13] text-sm lg:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Часто случается так, что во время поездки у отдыхающих «заканчиваются» чистые вещи. И если вы остановились в отеле, стирать их приходится вручную, что отнимает время, силы и нервы. Благо, гости Гостиничного комплекса Электросталь могут воспользоваться услугами гостиничной прачечной и заказать стирку вещей с последующей доставкой в номер!
              </p>
              <p className="text-[#021A13] text-sm lg:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Сотрудники гостиницы заберут грязные вещи, а по завершении - доставят их обратно в номер, согласовав время с гостем. Благодаря современным стиральным машинам, обладающим функцией очистки деликатных тканей, мы можем предложить бережную стирку и сушку ваших вещей. </p>
            </div>
          </div>
        </div>
      </section>
      <Gallery images={images} size="wide" />

      <section className="py-8 px-5 lg:pt-[70px]">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-20 max-w-[1400px] mx-auto items-center">
          <img src="/images/services/laundry/image.jpg" alt="cafe" className="w-full h-full lg:w-[50%] lg:h-[50%] object-cover" />
          <div className="flex flex-col gap-6 lg:gap-10">
            <Title size='medium'>
            стоимость
            </Title>
            
            <div className="flex flex-col gap-5"> 
              <div className="grid grid-cols-1 gap-5">
                <PriceItem price="От 500 ₽" label="Стирка, сушка (1 загрузка до 3 кг) " />
              </div>
              <p className="font-ttNorms text-[15px] leading-[1.35] text-[#021A13] opacity-70 max-w-[600px]">
                При этом стоит отметить, что используя качественные моющие средства, гипоаллергенные стиральные порошки, а также элитные кондиционеры и смягчители, мы можем гарантировать абсолютно безопасную и эффективную стирку любых вещей.
              </p>
              <BookingButton />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8 px-5 lg:pb-[70px]">
        <div className="flex flex-col gap-8 lg:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 lg:gap-10">
            <Title>
            уточнить стоимость <br className="hidden lg:block" />
и заказать услугу можно:
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

export default Laundry; 