import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import FAQSection from "@/components/sections/faq-section";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Вопросы и ответы" />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default FAQ; 