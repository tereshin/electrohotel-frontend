import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import ContactMap from "@/components/sections/contact-map";
import SEO from '@/components/ui/SEO';
import { seo_config } from '@/lib/seo-config';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <SEO 
        title={seo_config.contacts.title}
        description={seo_config.contacts.description}
        keywords={seo_config.contacts.keywords}
        canonical_url={seo_config.contacts.canonical_url}
        json_ld={seo_config.contacts.json_ld}
      />
      <FirstSection title="Контакты" />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Contacts; 