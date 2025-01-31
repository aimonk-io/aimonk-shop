import React, { useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { CarouselProps } from "@/libs/Types/Carousel/Index";

const Carousel: React.FC<CarouselProps> = ({ children, autoPlay = false, delay = 3000, itemsPerSlide = 3 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setSlides] = useState<number>(itemsPerSlide);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) setSlides(1); // Mobile view: 1 item per slide
        else if (window.innerWidth < 1024) setSlides(2); // Tablet view: 2 items per slide
        else setSlides(itemsPerSlide); // Desktop view: 4 items per slide
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [itemsPerSlide]);

    const totalSlides = Math.ceil(children.length / slides);

    useEffect(() => {
      if (autoPlay) {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, delay);
        return () => clearInterval(interval);
      }
    }, [autoPlay, delay, totalSlides]);

    const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);

    return (
      <div className="relative w-full overflow-hidden">
        <button onClick={prevSlide} className="absolute left-[5%] top-[45%] transform -translate-y-1/2 text-black p-2 ">
          <MoveLeft />
        </button>
       
       
        <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div key={index} className="flex w-full flex-shrink-0 gap-4 justify-center">
              {children.slice(index * slides, index * slides + slides).map((child, i) => (
                <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">{child}</div>
              ))}
            </div>
          ))}
        </div>

 
        <button onClick={nextSlide} className="absolute right-[5%] top-[45%] transform -translate-y-1/2 text-black p-2 ">
          <MoveRight />
        </button>
      </div>
    );
};

export default Carousel;
