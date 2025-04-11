import React, { useState, useRef, useEffect } from "react";
import Title from "../ui/Title";
import SliderNavigation from "../ui/slider-navigation";
import { CustomButton } from "../ui/custom-button";

interface EventData {
  id: number;
  image: string;
  type: string;
  title: string;
  dates: string;
  price: string;
}

const eventsData: EventData[] = [
  {
    id: 1,
    image: "/images/events/event-standup.jpg",
    type: "концерт",
    title: "StandUp: Валентин Сидоров",
    dates: "20 и 25 апреля, На 2 площадках",
    price: "От 1500 ₽",
  },
  {
    id: 2,
    image: "/images/events/event-film.jpg",
    type: "фильм",
    title: "Пальма 2",
    dates: "Россия, 2024",
    price: "От 1500 ₽",
  },
  {
    id: 3,
    image: "/images/events/event-burito.jpg",
    type: "концерт",
    title: "burito",
    dates: "29 марта, 12 и 13 апреля, На 3 площадках",
    price: "От 1500 ₽",
  },
];

const EventsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gap = 60; // Gap between slides
        const availableWidth = containerWidth - (gap * (visibleSlides - 1));
        const newSlideWidth = availableWidth / visibleSlides;
        setSlideWidth(newSlideWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [visibleSlides]);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? eventsData.length - visibleSlides : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev === eventsData.length - visibleSlides ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-[50px] md:py-[75px] lg:py-[100px] px-5 md:px-10">
      <div className="flex flex-col gap-[30px] md:gap-[60px] max-w-content mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Title>афиша мероприятий</Title>
          <SliderNavigation 
            onPrev={handlePrev} 
            onNext={handleNext} 
            className="text-[#021A13]"
            ariaLabelPrev="Предыдущее мероприятие"
            ariaLabelNext="Следующее мероприятие"
          />
        </div>

        <div ref={containerRef} className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex gap-[60px] transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (slideWidth + 60)}px)`,
            }}
          >
            {eventsData.map((event) => (
              <div 
                key={event.id}
                className="flex-shrink-0"
                style={{ width: slideWidth > 0 ? `${slideWidth}px` : '100%' }}
              >
                <div className="flex flex-col gap-8">
                  <div 
                    className="relative w-full h-[500px] rounded-xl overflow-hidden"
                    style={{
                      backgroundImage: `
                        linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%),
                        url(${event.image})
                      `,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute top-6 left-6">
                      <div className="bg-black/50 text-[#F3EEE7] uppercase text-sm py-2 px-3 rounded-full border border-[#F3EEE7]">
                        <span className="opacity-70">{event.type}</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[#F3EEE7] uppercase text-2xl md:text-[30px] font-light tracking-[0.06em] leading-[1.15em]">
                          {event.title}
                        </h3>
                        <p className="text-[#F3EEE7] opacity-70 text-base leading-[1.625em]">
                          {event.dates}
                        </p>
                        <div className="inline-block">
                          <CustomButton variant="base1" >
                            {event.price}
                          </CustomButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSlider; 