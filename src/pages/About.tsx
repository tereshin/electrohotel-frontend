import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import FeaturesSection from "@/components/sections/features-section";
import HotelDescription from "@/components/sections/hotel-description";
import MapSection from "@/components/sections/map-section";
import EventsSlider from "@/components/sliders/events-slider";
import Gallery from "@/components/sliders/gallery";
import AttractionsSection from "@/components/sections/attractions-section";

const About = () => {
  const images = [
    "/images/home/1.webp",
    "/images/home/6.webp", 
    "/assets/images/front.jpg",
    "/images/home/3.webp",
    "/images/home/4.webp",
    "/images/home/5.webp",
    "/images/home/2.webp"
  ];
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto">
      <FirstSection title="Об отеле" />
      
      {/* About us */}
      <HotelDescription />
      
      {/* Gallery */}
      <Gallery images={images} size="wide" />

      {/* Events */}
      <EventsSlider />
      
      {/* Map Section */}
      <MapSection />
      
      {/* Features Section */}
      <FeaturesSection />

      <AttractionsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
