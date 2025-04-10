
import React, { useState } from 'react';
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselApi
} from "@/components/ui/carousel";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import SliderNavigation from '@/components/ui/slider-navigation';
import { cn } from "@/lib/utils";

const images = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
];

interface GalleryProps {
    className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    
    const handleSelect = React.useCallback(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
    }, [api]);

    React.useEffect(() => {
        if (!api) return;
        api.on("select", handleSelect);
        return () => {
            api.off("select", handleSelect);
        };
    }, [api, handleSelect]);

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
                            <div className="h-full relative pb-[100%]">
                                <img 
                                    src={image} 
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover absolute"
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
