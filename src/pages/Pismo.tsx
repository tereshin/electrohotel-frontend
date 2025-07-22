import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";

import SEO from '@/components/ui/SEO';
import { seo_config } from '@/lib/seo-config';

const Pismo = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <SEO 
        title={seo_config.pismo.title}
        description={seo_config.pismo.description}
        keywords={seo_config.pismo.keywords}
        canonical_url={seo_config.pismo.canonical_url}
      />
      <FirstSection title="Быстрое бронирование" />

      <Footer />
    </div>
  );
};

export default Pismo;
