
import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CustomButton } from '@/components/ui/custom-button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = window.innerWidth < 1024 && window.innerWidth >= 768;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-6 md:px-10 py-4 md:py-5',
      isScrolled ? 'bg-hotel-darkest-green bg-opacity-90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-site mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative z-10">
          <a href="/" className="text-hotel-off-white font-playfair font-bold text-2xl md:text-3xl tracking-wide">
            Restful Nights
          </a>
        </div>

        {/* Desktop Menu */}
        {!isMobile && !isTablet && (
          <nav className="hidden lg:flex space-x-6 text-hotel-off-white">
            <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">Home</a>
            <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">Rooms</a>
            <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">Facilities</a>
            <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">Gallery</a>
            <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">Contact</a>
          </nav>
        )}

        {/* Desktop & Tablet Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Booking Button - Desktop & Tablet only */}
          {!isMobile && (
            <CustomButton
              variant="small"
              size="sm"
              className="tracking-wide"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </CustomButton>
          )}

          {/* WhatsApp Button */}
          <CustomButton
            variant="smallIcon"
            size="icon"
            className="rounded-full"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </CustomButton>

          {/* Telegram Button */}
          <CustomButton
            variant="smallIcon"
            size="icon"
            className="rounded-full"
            aria-label="Telegram"
          >
            <MessageSquare className="w-4 h-4" />
          </CustomButton>

          {/* Phone - Desktop & Tablet only */}
          {!isMobile && (
            <a href="tel:+123456789" className="text-hotel-off-white flex items-center text-sm font-medium">
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">+1 (234) 567-89</span>
            </a>
          )}

          {/* Menu Button - Mobile & Tablet only */}
          {(isMobile || isTablet) && (
            <CustomButton
              variant="menu"
              size="icon"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </CustomButton>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (isMobile || isTablet) && (
        <div className="fixed inset-0 z-40 bg-hotel-darkest-green bg-opacity-95 backdrop-blur-sm pt-24 px-6 pb-6 animate-fade-in">
          <nav className="flex flex-col space-y-6 text-hotel-off-white">
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">Home</a>
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">Rooms</a>
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">Facilities</a>
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">Gallery</a>
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">Contact</a>
            
            {/* Mobile phone & booking button */}
            <div className="mt-8 flex flex-col space-y-4">
              <a href="tel:+123456789" className="text-hotel-off-white flex items-center justify-center text-lg font-medium p-3 border border-hotel-off-white border-opacity-30 rounded-md">
                <Phone className="w-5 h-5 mr-3" />
                +1 (234) 567-89
              </a>
              <CustomButton
                variant="base2"
                size="lg"
                className="w-full justify-center text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </CustomButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
