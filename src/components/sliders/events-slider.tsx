import React, { useState, useRef, useEffect } from "react";
import Title from "../ui/Title";
import SliderNavigation from "../ui/slider-navigation";
import { CustomButton } from "../ui/custom-button";
import { fetchAfishaEvents } from "@/lib/events-service";

interface EventData {
  id: number;
  image: string;
  type: string;
  title: string;
  dates: string;
  price: string;
  link: string;
}

const EventsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);
  const [eventsData, setEventsData] = useState<EventData[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      const events = await fetchAfishaEvents();
      setEventsData(events);
      //trigger window resize
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    };
    loadEvents();
  }, []);

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

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? eventsData.length - visibleSlides : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === eventsData.length - visibleSlides ? 0 : prev + 1
    );
  };

  const translateX = -(currentSlide * (slideWidth + 60));

  if (eventsData.length === 0) {
    return null;
  }
  
  return (
    <section className="bg-white py-[50px] lg:py-[75px] lg:py-[70px] px-5 lg:px-10">
      <div className="flex flex-col-reverse lg:flex-col gap-[30px] lg:gap-[60px] max-w-content mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <Title className="hidden lg:block">Афиша мероприятий</Title>
          <SliderNavigation 
            onPrev={handlePrev} 
            onNext={handleNext} 
            className="text-[#021A13]"
            ariaLabelPrev="Предыдущее мероприятие"
            ariaLabelNext="Следующее мероприятие"
          />
        </div>

        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={sliderRef}
            className="flex touch-pan-y gap-[60px] transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {eventsData.map((event) => {
              return (
                <div
                  key={event.id}
                  className="flex-shrink-0"
                  style={{ width: slideWidth > 0 ? `${slideWidth}px` : "100%" }}
                >
                  <div className="flex flex-col gap-8">
                    <div
                      className="relative w-full h-[500px] rounded-xl overflow-hidden"
                      style={{
                        backgroundImage: `
                        linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%),
                        url(${event.image})
                      `,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute top-6 left-6">
                        <div className="bg-black/50 text-[#F3EEE7] uppercase text-sm py-2 px-3 rounded-full border border-[#F3EEE7]">
                          <span className="opacity-70">{event.type}</span>
                        </div>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-col gap-4">
                          <h3 className="text-[#F3EEE7] uppercase text-2xl lg:text-[30px] font-light tracking-[0.06em] leading-[1.15em]">
                            {event.title}
                          </h3>
                          <p className="text-[#F3EEE7] opacity-70 text-base leading-[1.625em]">
                            {event.dates}
                          </p>
                          <div className="inline-block">
                            <CustomButton variant="base1" onClick={() => window.open('https://www.afisha.ru'+event.link, '_blank')}>
                              {event.price}
                            </CustomButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex lg:hidden items-center justify-between gap-8">
          <Title>Афиша мероприятий</Title>
        </div>
      </div>
    </section>
  );
};

export default EventsSlider; 