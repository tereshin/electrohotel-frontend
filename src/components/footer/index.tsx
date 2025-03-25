
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { CustomButton } from '../ui/custom-button';

const Footer = () => {
  return (
    <footer className="bg-hotel-darkest-green text-hotel-off-white pt-16 pb-8">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hotel Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 font-playfair">Restful Nights</h2>
            <p className="text-gray-300 mb-6">Experience unparalleled luxury and comfort in our boutique hotel, where every detail is designed for your relaxation.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Our Rooms</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Facilities</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>+1 (234) 567-89</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:info@restfulnights.com" className="hover:text-gray-300 transition-colors">
                  info@restfulnights.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1" />
                <span>123 Tranquility Road<br />Serenity City, SC 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to receive updates and special offers.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
              />
              <CustomButton variant="small" type="submit" className="w-full">
                Subscribe
              </CustomButton>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Restful Nights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
