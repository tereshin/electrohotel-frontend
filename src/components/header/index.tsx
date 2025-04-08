import React, { useState, useEffect } from 'react';
import { Phone, Calendar, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CustomButton } from '@/components/ui/custom-button';
import { useIsMobile } from '@/hooks/use-mobile';
import LogoIcon from '../icons/LogoIcon';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import TelegramIcon from '../icons/TelegramIcon';
import MenuIcon from '../icons/MenuIcon';

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
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-[60] w-full transition-all duration-300 px-4 md:px-10 py-7 md:py-11',
        isScrolled ? 'bg-hotel-darkest-green bg-opacity-90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      )}>
        <div className="max-w-site mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="relative z-10">
            <a href="/" className="text-hotel-off-white tracking-wide max-w-[182px] md:w-full block">
              <LogoIcon />
            </a>
          </div>

          {/* Desktop Menu */}
          {!isMobile && !isTablet && (
            <nav className="hidden lg:flex space-x-6 text-hotel-off-white">
              <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">О нас</a>
              <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">Номера</a>
              <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">Акции</a>
              <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">Услуги</a>
              <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">Контакты</a>
              <a href="#" className="hover:opacity-80 transition-opacity text-sm uppercase tracking-wider font-medium">FAQ</a>
            </nav>
          )}

          {/* Desktop & Tablet Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Booking Button - Desktop & Tablet only */}
            {!isMobile && (
              <CustomButton
                variant="small"
                size="sm"
                className="tracking-wide"
              >
                Забронировать 
              </CustomButton>
            )}

            {/* WhatsApp Button */}
            <CustomButton
              variant="smallIcon"
              size="icon"
              className="rounded-full"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </CustomButton>

            {/* Telegram Button */}
            <CustomButton
              variant="smallIcon"
              size="icon"
              className="rounded-full"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </CustomButton>

            {/* Phone - Desktop & Tablet only */}
            {!isMobile && (
              <div className="flex gap-4">
                <a href="tel:+7 496 574 42 72" className="text-hotel-off-white flex items-center text-sm font-medium">
                  <span className="hidden md:inline">+7 496 574 42 72</span>
                </a>
                <a href="tel:+7 996 365 23 30" className="text-hotel-off-white flex items-center text-sm font-medium">
                  <span className="hidden md:inline">+7 996 365 23 30</span>
                </a>
              </div>
            )}

            {/* Menu Button - Mobile & Tablet only */}
            {(isMobile || isTablet) && (
              <div className="flex items-center">
                <CustomButton
                  variant="menu"
                  size="icon"
                  className="ml-4"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon />}
                </CustomButton>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (isMobile || isTablet) && (
        <div className="fixed inset-0 z-50 bg-hotel-darkest-green bg-opacity-95 backdrop-blur-sm pt-24 px-6 pb-6 animate-fade-in">
          <nav className="flex flex-col space-y-6 text-hotel-off-white">
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">О нас</a>
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">Номера</a>
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">Акции</a>
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">Услуги</a>
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">Контакты</a>
            <a href="#" className="text-lg font-medium py-2 border-b border-hotel-off-white border-opacity-20">FAQ</a>
            
            {/* Mobile phone & booking button */}
            <div className="flex flex-col gap-4">
              <a href="tel:+7 496 574 42 72" className="text-hotel-off-white flex items-center text-sm font-medium">
                +7 496 574 42 72
              </a>
              <a href="tel:+7 996 365 23 30" className="text-hotel-off-white flex items-center text-sm font-medium">
                +7 996 365 23 30
              </a>
              <CustomButton
                variant="small"
                size="sm"
                className="tracking-wide mt-4"
              >
                Забронировать 
              </CustomButton>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
