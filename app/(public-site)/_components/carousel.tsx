"use client";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1 * 1000 }),
  ]);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="overflow-hidden w-full h-full relative" ref={emblaRef}>
      <div className="flex w-full h-full">
        <div className="bg-green-600 flex-[0_0_100%] flex justify-center items-center text-white text-8xl">
          1
        </div>
        <div className="bg-pink-600 flex-[0_0_100%] flex justify-center items-center text-white text-8xl">
          2
        </div>
        <div className="bg-yellow-600 flex-[0_0_100%] flex justify-center items-center text-white text-8xl">
          3
        </div>
      </div>
      <button
        onClick={() => scrollPrev()}
        disabled={prevBtnDisabled}
        className="z-10 absolute top-1/2 -translate-y-1/2 left-2 w-10 h-10 rounded-lg flex justify-center items-center bg-white/50 hover:bg-white/70 cursor-pointer"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scrollNext()}
        disabled={nextBtnDisabled}
        className="z-10 absolute top-1/2 -translate-y-1/2 right-2 w-10 h-10 rounded-lg flex justify-center items-center bg-white/50 hover:bg-white/70 cursor-pointer"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-0 pb-2 w-full flex justify-center gap-4 z-20">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-4 h-4 rounded-full",
              index === selectedIndex ? "bg-teal-500" : "bg-white"
            )}
          />
        ))}
      </div>
    </div>
  );
}
