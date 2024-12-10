import React from "react";
import Image from "next/image";
import bgImg from "@/public/images/hero-bg.webp";
import Title from "@/components/ui/Title";

type HeroProps = {
  className?: string;
};

const Hero = ({ className = "" }: HeroProps) => {
  return (
    <section className={`relative ${className}`}>
      <Image
        src={bgImg}
        fill
        className="z-[-1]"
        alt="Background"
        draggable={false}
        objectFit="cover"
      />
      <div className="container flex flex-col justify-center items-start min-h-[80dvh] ">
        <Title className="max-w-[730px]" variant="h1">
          PVC-PROFILSYSTEME FUR FENSTER UND TUREN, EINZELHANDEL
        </Title>
      </div>
    </section>
  );
};

export default Hero;
