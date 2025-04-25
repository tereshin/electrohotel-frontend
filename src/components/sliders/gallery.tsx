import React, { useState, useEffect } from 'react';
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselApi
} from "@/components/ui/carousel";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import SliderNavigation from '@/components/ui/slider-navigation';
import { cn } from "@/lib/utils";

interface GalleryProps {
    className?: string;
    images: string[];
    size?: 'wide' | 'narrow';
}

const Gallery: React.FC<GalleryProps> = ({ className, images, size = 'wide' }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    
    const handleSelect = React.useCallback(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
    }, [api, current]);

    React.useEffect(() => {
        if (!api) return;
        api.on("select", handleSelect);
        return () => {
            api.off("select", handleSelect);
        };
    }, [api, handleSelect]);

    useEffect(() => {
        if (!api || images.length === 0) return;
        
        const interval = setInterval(() => {
            api.scrollTo((current + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [api, current, images.length]);

    const goToSlide = (index: number) => {
        api?.scrollTo(index);
    };

    return (
        <div className={cn("relative bg-[#01362A] w-full", className)}>
            <Carousel
                setApi={setApi}
                className="h-full"
            >
                <CarouselContent className="h-full">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="h-full">
                            <div className={cn("h-full relative", size === 'narrow' ? 'pb-[100%]' : 'pb-[100%] md:pb-[35%]')}>
                                <img 
                                    src={image} 
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover absolute"
                                    loading="lazy"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            
            <div className="absolute bottom-10 md:bottom-24 inset-x-0 flex flex-col items-center gap-4 ">
                <SliderNavigation 
                    className="text-hotel-off-white w-full justify-between absolute -bottom-4 max-w-[calc(100%-40px)] md:max-w-[calc(100%-200px)] mx-auto"
                    onPrev={() => api?.scrollPrev()}
                    onNext={() => api?.scrollNext()}
                />
                
                <Pagination>
                    <PaginationContent className="gap-2">
                        {images.map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        goToSlide(index);
                                    }}
                                    isActive={current === index}
                                    className={cn(
                                        "w-2 h-2 p-0 rounded-full",
                                        current === index ? "bg-hotel-off-white" : "bg-hotel-off-white/50"
                                    )}
                                />
                            </PaginationItem>
                        ))}
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default Gallery;
