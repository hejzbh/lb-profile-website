"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  className?: string;
  urls: string[];
  blackOverlay?: boolean;
  autoplay?: boolean;
  children?: React.ReactNode;
}

const Slider = ({
  className = "",
  urls = [],
  autoplay: initialAutoplay,
  blackOverlay,
  children,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean | undefined>(
    initialAutoplay
  );

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(autoSlide, 2000);
    return () => clearInterval(interval);
  }, [autoplay, activeIndex]); // eslint-disable-line

  function autoSlide() {
    setActiveIndex((index) => (index === urls.length - 1 ? 0 : index + 1));
  }

  function handlePrev() {
    setAutoplay(true);
    setActiveIndex((index) => (index === 0 ? urls.length - 1 : index - 1));
  }

  function handleNext() {
    setAutoplay(true);
    setActiveIndex((index) => (index === urls.length - 1 ? 0 : index + 1));
  }

  return (
    <div className={`relative py-[7rem] overflow-hidden group ${className}`}>
      {urls?.map((url, i) => (
        <Image
          key={i}
          src={url}
          loading="eager"
          alt="Slider photo item"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 object-cover w-full h-full transition-all z-[-2] duration-300 ease-in-out"
          style={{
            transform: `translateX(${100 * (i - activeIndex)}%)`,
          }}
        />
      ))}

      {children}

      {blackOverlay && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[-1]"></div>
      )}

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="opacity-0 group-hover:opacity-100 transition absolute left-4 top-[55%] transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="opacity-0 group-hover:opacity-100 transition  absolute right-4 top-[55%] transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Slider;
