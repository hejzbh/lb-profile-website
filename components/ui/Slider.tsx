"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  autoplay,
  blackOverlay,
  children,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(autoSlide, 2000);

    return () => clearInterval(interval);
  }, [autoplay]);

  function autoSlide() {
    setActiveIndex((index) => (index === urls.length - 1 ? 0 : index + 1));
  }

  return (
    <div className={`relative  py-[7rem] overflow-hidden ${className}`}>
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
    </div>
  );
};

export default Slider;
