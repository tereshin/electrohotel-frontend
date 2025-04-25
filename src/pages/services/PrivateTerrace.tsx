import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import GroupDiscountSection from "@/components/sections/GroupDiscountSection";
import Title from "@/components/ui/Title";
import { ServiceContacts } from "@/components/ServiceContacts";
import Gallery from "@/components/sliders/gallery";
const PrivateTerrace = () => {
  const images = [
    "/images/services/private-terrace/1.webp",
    "/images/services/private-terrace/2.webp",
    "/images/services/private-terrace/3.webp"
  ];
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Приватная территория" />
      <section className="bg-[#FAF6F1] py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col lg:flex-row gap-6">
              <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              Гостям нашего комплекса обеспечены тишина и спокойствие на собственной приватной территории в более чем 4400 м². Многолетние ёлки и клёны, ухоженный газон и асфальтированные тротуары, лавочки и наружное освещение дополнят Ваше путешествие столь необходимым уютом.
              </p>
              <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-1/2">
              А круглосуточное видеонаблюдение обеспечит полный контроль и безопасность. Также вы можете провести время за чтением книжки или игрой в настольные игры в уличной беседке прямо на территории комплекса.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Gallery images={images} size="wide" />
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

export default PrivateTerrace; 