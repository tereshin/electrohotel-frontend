import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import ServicesList from "@/components/sections/services-list";

const Services = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Услуги" />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default Services; 