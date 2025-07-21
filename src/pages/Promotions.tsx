import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import PromotionsList from "@/components/sections/promotions-list";
import SEO from '@/components/ui/SEO';
import { seo_config } from '@/lib/seo-config';

const Promotions = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <SEO 
        title={seo_config.promotions.title}
        description={seo_config.promotions.description}
        keywords={seo_config.promotions.keywords}
        canonical_url={seo_config.promotions.canonical_url}
        json_ld={seo_config.promotions.json_ld}
      />
      <FirstSection title="Акции" />
      <PromotionsList />
      <Footer />
    </div>
  );
};

export default Promotions;
