import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import PromotionsList from "@/components/sections/promotions-list";

const Promotions = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Акции" />
      <PromotionsList />
      <Footer />
    </div>
  );
};

export default Promotions;
