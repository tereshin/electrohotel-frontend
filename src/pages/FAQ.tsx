import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import FAQSection from "@/components/sections/faq-section";
import SEO from '@/components/ui/SEO';
import { seo_config } from '@/lib/seo-config';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <SEO 
        title={seo_config.faq.title}
        description={seo_config.faq.description}
        keywords={seo_config.faq.keywords}
        canonical_url={seo_config.faq.canonical_url}
      />
      <FirstSection title="Вопросы и ответы" />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default FAQ; 