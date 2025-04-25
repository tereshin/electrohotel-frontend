import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import GroupDiscountSection from "@/components/sections/GroupDiscountSection";
import Gallery from "@/components/sliders/gallery";
import Title from "@/components/ui/Title";
import FeatureIcon from "@/components/ui/FeatureIcon";
import OperatingHoursSection from "@/components/sections/services/OperatingHoursSection";
import { ServiceContacts } from '../../components/ServiceContacts';
import { useState } from "react";
const Cafeteria = () => {
  const [showAllParagraphs, setShowAllParagraphs] = useState(false);
  const images = [
    "/images/services/cafeteria/2.jpg",
    "/images/services/cafeteria/3.webp",
    "/images/services/cafeteria/4.webp"
  ];
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Кафетерий 24/7 с полным пансионом" />
      <section className="bg-[#FAF6F1] py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col lg:flex-row gap-6">
              <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70 lg:w-full">
                Кафетерий отеля представляет собой уютное пространство, оформленное в современном минималистичном стиле. Здесь нет кухни, но гостям доступен автоматический кофейный аппарат, который готовит ароматный капучино и латте в любое время суток. На аккуратных стеллажах расставлены коробки с пакетиками чая, растворимым кофе, сахаром и солью, а также стопки одноразовой посуды для удобства посетителей. Небольшие столики у окон и приглушенное освещение создают атмосферу, идеальную для утреннего пробуждения или короткого перерыва между делами.
              </p>
              <div className={`${!showAllParagraphs ? 'hidden md:flex flex-col lg:flex-row gap-6 w-full' : 'flex flex-col lg:flex-row gap-6'}`}>
                <p className="text-[#021A13] text-sm md:text-[15px] leading-[1.73em] opacity-70">
                  Основное преимущество кафетерия — возможность заказать полноценные завтраки, обеды или ужины через ресепшн отеля. Это позволяет гостям насладиться свежей едой в спокойной обстановке. Здесь не нужно беспокоиться о сервировке: все необходимое — тарелки, стаканы, столовые приборы — уже ждут на полках. Пространство идеально подходит для тех, кто ценит комфорт без лишней суеты, сочетая самостоятельное обслуживание с оперативным сервисом отеля.
                </p>
              </div>
              {!showAllParagraphs ? (
                <span
                  onClick={() => setShowAllParagraphs(!showAllParagraphs)}
                  className="md:hidden text-[#021A13] text-sm hover:opacity-80 transition-opacity cursor-pointer underline"
                >
                  Читать далее
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <Gallery images={images} size="wide" />

      <section className="py-8 px-5 md:py-12 lg:py-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <Title>
              Вы сами можете <br className="hidden md:block" />
              выбрать тип питания
            </Title>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
            <FeatureIcon
              icon="/icons/location-icon.svg"
              text="Без питания"
            />
            <FeatureIcon
              icon="/icons/wifi-icon.svg"
              text="Только завтраки"
            />
            <FeatureIcon
              icon="/icons/park-icon.svg"
              text='Полупансион'
            />
            <FeatureIcon
              icon="/icons/park-icon.svg"
              text="Полный пансион"
            />
          </div>
        </div>
      </section>

      <OperatingHoursSection />

      <section className="py-8 px-5 md:pb-16 lg:pb-[70px]">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-10">
            <Title>
              уточнить стоимость <br className="hidden md:block" />
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

export default Cafeteria; 