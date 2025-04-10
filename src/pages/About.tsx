import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import FeaturesSection from "@/components/sections/features-section";
import HotelDescription from "@/components/sections/hotel-description";
import MapSection from "@/components/sections/map-section";
import EventsSlider from "@/components/sliders/events-slider";
import Gallery from "@/components/sliders/gallery";

const About = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <FirstSection title="Об отеле" />
      
      {/* About us */}
      <HotelDescription />
      
      {/* Gallery */}
      <Gallery/>

      {/* Events */}
      <EventsSlider />
      
      {/* Map Section */}
      <MapSection />
      
      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
