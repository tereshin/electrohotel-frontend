import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import ServicesList from "@/components/sections/services-list";
import SEO from '@/components/ui/SEO';
import { seo_config } from '@/lib/seo-config';

const Services = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <SEO 
        title={seo_config.services.title}
        description={seo_config.services.description}
        keywords={seo_config.services.keywords}
        canonical_url={seo_config.services.canonical_url}
        json_ld={seo_config.services.json_ld}
      />
      <FirstSection title="Услуги" />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default Services; 