import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Promotions from "./pages/Promotions";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./hooks/scrollToTop";
import Cafeteria from "./pages/services/Cafeteria";
import EcoPark from "./pages/services/EcoPark";
import Laundry from "./pages/services/Laundry";
import Parking from "./pages/services/Parking";
import PrivateTerrace from "./pages/services/PrivateTerrace";
import RoomService from "./pages/services/RoomService";
import CheckIn from "./pages/services/CheckIn";
import Migration from "./pages/services/Migration";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// Room pages imports
import Comfort from "./pages/prices/Comfort";
import ComfortPlus from "./pages/prices/ComfortPlus";
import Deluxe from "./pages/prices/Deluxe";
import DeluxeSplit from "./pages/prices/DeluxeSplit";
import OdnomestnyiKomfort from "./pages/prices/OdnomestnyiKomfort";
import DvuhkomnatnyiLuks from "./pages/prices/DvuhkomnatnyiLuks";
import ComfortPlusSTerrasoi from "./pages/prices/ComfortPlusSTerrasoi";
import ComfortPlusSTerrasoiNa2Cheloveka from "./pages/prices/ComfortPlusSTerrasoiNa2Cheloveka";
import PricesPage from "./pages/prices";
import Pismo from "./pages/Pismo";
import EventsPage from "./pages/Events";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/cafeteria" element={<Cafeteria />} />
            <Route path="/services/parking" element={<Parking />} />
            <Route path="/services/eco-park" element={<EcoPark />} />
            <Route path="/services/laundry" element={<Laundry />} />
            <Route path="/services/private-terrace" element={<PrivateTerrace />} />
            <Route path="/services/room-service" element={<RoomService />} />
            <Route path="/services/check-in" element={<CheckIn />} />
            <Route path="/services/migration" element={<Migration />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/events" element={<EventsPage />} />
            {/* Room prices pages */}
            <Route path="/prices/comfort" element={<Comfort />} />
            <Route path="/prices/comfort-plus" element={<ComfortPlus />} />
            <Route path="/prices/delux" element={<Deluxe />} />
            <Route path="/prices/delux-split" element={<DeluxeSplit />} />
            <Route path="/prices/odnomestnyi-komfort" element={<OdnomestnyiKomfort />} />
            <Route path="/prices/dvuhkomnatnyi-luks" element={<DvuhkomnatnyiLuks />} />
            <Route path="/prices/comfort-plus-s-terrasoi" element={<ComfortPlusSTerrasoi />} />
            <Route path="/prices/comfort-plus-s-terrasoi-na-2-cheloveka" element={<ComfortPlusSTerrasoiNa2Cheloveka />} />
            <Route path="/pismo" element={<Pismo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
