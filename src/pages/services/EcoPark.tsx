import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import GroupDiscountSection from "@/components/sections/GroupDiscountSection";
import Gallery from "@/components/sliders/gallery";
import Title from "@/components/ui/Title";
import { CustomButton } from "@/components/ui/custom-button";
import ArrowIcon from "@/components/icons/ArrowIcon";

const EcoPark = () => {
  const images = [
    "/images/services/eco-park/3.webp",
    "/images/services/eco-park/4.webp",
    "/images/services/eco-park/5.webp",
    "/images/services/eco-park/6.webp",
    "/images/services/eco-park/7.webp"
    
  ];
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="ЭКОПАРК «АВАНГАРД» НАПРОТИВ ОТЕЛЯ" />
      <Gallery images={images} size="wide" />
      <section className="py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <Title>
            Гостиничный комплекс <br className="hidden md:block" />
Электросталь находится <br className="hidden md:block" />
в 3 минутах ходьбы от экопарка
            </Title>
            <img src="/images/services/eco-park/1.jpg" alt="eco-park" className="hidden md:block w-full h-full object-cover" />
            <img src="/images/services/eco-park/2.jpg" alt="eco-park" className="block md:hidden w-full object-cover" />
          </div>
          
          
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="flex flex-col md:flex-row-reverse">
          {/* Image side */}
          <div className="w-full md:w-1/2 h-[0px] pb-[80%] md:pb-[50%] relative">
            <img 
              src="/images/services/eco-park/3.jpg" 
              alt="eco-park" 
              className="w-full h-full object-cover absolute top-0 left-0"
            />
          </div>
          
          {/* Content side */}
          <div className="w-full md:w-1/2 bg-[#FAF6F1] py-10 md:py-12 px-5 md:px-10 lg:px-[100px] flex flex-col justify-center">
            <div className="flex flex-col gap-10">
              <Title>
              Экопарк<br className="hidden md:block" />
  Авангард
              </Title>
              
              <div className="flex flex-col gap-5">
              <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
              Одно из лучших мест для отдыха в городе Электросталь. В 2022 году в парке были проведены работы по благоустройству, здесь с минимальным вмешательством преобразили территорию в 60 гектаров.
              </p>
              
              <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
              На территории расположились пешеходные и велосипедные дорожки, игровые и спортивные площадки, а также площадка для выгула собак. Кроме того, в парке открыты кафе и павильоны для мастер-классов, а также многое другое. 
              </p>
              <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
              В парке приятно не только проводить время на природе, но и участвовать в культурном досуге города.
              </p>
              <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
              В летние месяцы посетители могут покататься на лодках, расслабиться на пляже, позаниматься на спортивных площадках. Также действуют специальные зоны для проведения пикников. В пляжной зоне недавно появились шезлонги и раздевалки, а также завезли новый песок.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Image side */}
          <div className="w-full md:w-1/2 h-[0px] pb-[80%] md:pb-[50%] relative">
            <img 
              src="/images/services/eco-park/4.jpg" 
              alt="eco-park" 
              className="w-full h-full object-cover absolute top-0 left-0"
            />
          </div>
          
          {/* Content side */}
          <div className="w-full md:w-1/2 bg-[#FAF6F1] py-10 md:py-12 px-5 md:px-10 lg:px-[100px] flex flex-col justify-center">
            <div className="flex flex-col gap-10">
              <Title>
              Зимой горожане приходят сюда кататься на лыжах и санках
              </Title>
              
              <div className="flex flex-col gap-5">
                <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
                Еженедельно проходят развлекательные мероприятия различной направленности: посетить их смогут и взрослые, и дети. 
                </p>
                
                <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
                Сегодня экопарк продолжает развиваться и совершенствоваться, приглашая отдохнуть и горожан, и туристов. Интересно здесь в любое время года. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*История парка*/}
      <section className="w-full bg-white py-12 md:py-[100px] px-4">
        <div className="flex flex-col gap-8 md:gap-[60px] max-w-[1400px] mx-auto">
          <Title>История парка</Title>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-[60px]">
            {/* 1930 */}
            <div className="flex flex-col gap-[40px] flex-1">
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-[30px] font-light tracking-[6%] uppercase text-[#093024]">1930</h3>
                <h4 className="text-[18px] font-light tracking-[6%] uppercase text-[#093024]">Лесной массив</h4>
                <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
                  В этом месте был сплошной лес, куда жители строящегося города ходили по грибы и ягоды. С началом строительства прилегающих к Фрязевскому шоссе улиц, Советской и Жулябина возникла идея, обустроить зону отдыха и занятием спорта для трудящихся.
                </p>
              </div>
            </div>
            
            {/* 1950 */}
            <div className="flex flex-col gap-[40px] flex-1">
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-[30px] font-light tracking-[6%] uppercase text-[#093024]">1950</h3>
                <h4 className="text-[18px] font-light tracking-[6%] uppercase text-[#093024]">Построен спортивный комплекс «Авангард»</h4>
                <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
                  Стадион Электростальского завода тяжелого машиностроения (ЭЗТМ) много лет собирал на своих площадках сотни заводчан, которые занимались различными видами спорта. Зимой можно было кататься по освещенной лыжной дорожке.
                </p>
              </div>
            </div>
            
            {/* 1970 */}
            <div className="flex flex-col gap-[40px] flex-1">
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-[30px] font-light tracking-[6%] uppercase text-[#093024]">1970</h3>
                <h4 className="text-[18px] font-light tracking-[6%] uppercase text-[#093024]">Открыт искусственный водоем «Западный»</h4>
                <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
                  На территории проходили массовые народные гуляния, концерты с участием московских певцов и киноартистов, таких как Зои Федоровой, Ноны Мордюковой, Веры Васильевой, смотры художественной самодеятельности, праздники.
                </p>
              </div>
            </div>
            
            {/* 2025 */}
            <div className="flex flex-col gap-[40px] flex-1">
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-[30px] font-light tracking-[6%] uppercase text-[#093024]">2025</h3>
                <h4 className="text-[18px] font-light tracking-[6%] uppercase text-[#093024]">Парк сегодня</h4>
                <p className="text-[15px] leading-[1.73em] text-[#021A13] opacity-70">
                  Парк «Авангард» постоянно развивается. Для жителей города парк был и остается любимым местом отдыха.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <GroupDiscountSection />
      <Footer />
    </div>
  );
};

export default EcoPark; 