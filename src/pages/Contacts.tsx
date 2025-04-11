import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import ContactMap from "@/components/sections/contact-map";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Контакты" />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Contacts; 