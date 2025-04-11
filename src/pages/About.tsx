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
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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
