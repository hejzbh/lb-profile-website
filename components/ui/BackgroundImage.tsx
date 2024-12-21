import React from "react";
import Image, { StaticImageData } from "next/image";

type BackgroundImageProps = {
  className?: string;
  src: StaticImageData;
  children: React.ReactNode;
};

const BackgroundImage = ({
  className = "",
  src,
  children,
}: BackgroundImageProps) => {
  return (
    <div className={`relative z-[1]  ${className}`}>
      <Image
        src={src}
        fill
        objectFit="cover"
        className="z-[-2]"
        loading="lazy"
        alt="LB-Profile"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>
      <div className="container mx-auto min-h-[37dvh] md:min-h-[50dvh] pt-28 py-10 z-[2] flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
