import Footer from "@/components/footer";
import FirstSection from "@/components/sections/first-section";
import RoomCatalog from "@/components/sections/room-catalog";

const Rooms = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <FirstSection title="Номерной фонд" />
      <RoomCatalog />
      <Footer />
    </div>
  );
};

export default Rooms;
