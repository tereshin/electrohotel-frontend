import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import RoomCatalog from "@/components/sections/room-catalog";
import SEO from '@/components/ui/SEO';
import { seo_config } from '@/lib/seo-config';

const Rooms = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <SEO 
        title={seo_config.rooms.title}
        description={seo_config.rooms.description}
        keywords={seo_config.rooms.keywords}
        canonical_url={seo_config.rooms.canonical_url}
        json_ld={seo_config.rooms.json_ld}
      />
      <FirstSection title="Номерной фонд" />
      <RoomCatalog />
      <Footer />
    </div>
  );
};

export default Rooms;
