import SEO from '@/components/ui/SEO';
import FirstSection from '@/components/sections/first-section';
import RoomCatalog from '@/components/sections/room-catalog';
import Footer from '@/components/footer';
import { seo_config } from '@/lib/seo-config';

const PricesPage = () => (
<div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
    <SEO
      title="Наши номера и цены"
      description="Актуальные цены и категории номеров гостиничного комплекса Электросталь. Выберите подходящий номер и узнайте подробности."
      canonical_url="/prices"
      json_ld={seo_config.rooms.json_ld}
    />
    <FirstSection title="Наши номера и цены" />
    <RoomCatalog show_links={true} />
    <Footer />
  </div>
);

export default PricesPage; 