
import React from 'react';
import Header from '@/components/header';
import HeroSlider from '@/components/sliders/hero-slider';
import RoomSlider from '@/components/sliders/room-slider';
import PromotionsSlider from '@/components/sliders/promotions-slider';
import TextHeroSlider from '@/components/sliders/text-hero-slider';
import BookingForm from '@/components/booking-form';
import Footer from '@/components/footer';

// Sample data - In a real application, this would come from an API
const heroSlides = [
  {
    title: "Experience Luxury and Comfort",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Your Perfect Getaway",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Unforgettable Moments",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

const rooms = [
  {
    id: 1,
    title: "Deluxe Ocean View Suite",
    description: "Experience luxury with breathtaking ocean views, a private balcony, and premium amenities.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    price: "From $299 per night"
  },
  {
    id: 2,
    title: "Executive Garden Suite",
    description: "Immerse yourself in tranquility with direct garden access and a private outdoor seating area.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    price: "From $259 per night"
  },
  {
    id: 3,
    title: "Premium Family Room",
    description: "Spacious accommodation perfect for families, featuring connecting rooms and children's amenities.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    price: "From $399 per night"
  }
];

const promotions = [
  {
    id: 1,
    title: "Summer Escape Package",
    description: "Enjoy 20% off on stays of 3 nights or more, including breakfast and spa access.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Romantic Getaway",
    description: "Special couple's package including champagne, dinner, and late checkout.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Early Bird Special",
    description: "Book 60 days in advance and save 25% on your stay.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "#"
  }
];

const experienceSlides = [
  {
    id: 1,
    title: "Luxury Spa Experience",
    subtitle: "Wellness & Relaxation",
    text: "Indulge in our world-class spa treatments, designed to rejuvenate your body and mind.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 2,
    title: "Fine Dining",
    subtitle: "Culinary Excellence",
    text: "Experience exquisite cuisine prepared by our award-winning chefs using the finest ingredients.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider slides={heroSlides} />
        <div className="absolute inset-x-0 bottom-0 z-10">
          <BookingForm />
        </div>
      </section>

      {/* Our Rooms Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hotel-darkest-green mb-4">Our Rooms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the perfect blend of luxury and comfort in our thoughtfully designed rooms and suites.</p>
          </div>
          <RoomSlider rooms={rooms} />
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20 px-6 md:px-10 bg-hotel-cream">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hotel-darkest-green mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our exclusive packages and special offers designed to make your stay even more memorable.</p>
          </div>
          <PromotionsSlider promotions={promotions} />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <TextHeroSlider slides={experienceSlides} />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
