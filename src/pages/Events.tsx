import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import EventsSlider from "@/components/sliders/events-slider";
import SEO from '@/components/ui/SEO';
import { seo_config } from '@/lib/seo-config';

const EventsPage = () => {
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <SEO 
        title={seo_config.events.title}
        description={seo_config.events.description}
        keywords={seo_config.events.keywords}
        canonical_url={seo_config.events.canonical_url}
        json_ld={seo_config.events.json_ld}
      />
      <FirstSection title="Мероприятия" />
      
       {/* Events */}
       <EventsSlider />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage;
