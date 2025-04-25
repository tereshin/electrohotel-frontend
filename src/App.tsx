import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import TermsOfUse from "./pages/TermsOfUse" 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/promotions" element={<Promotions />} />
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
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
