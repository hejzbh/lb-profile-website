import React from "react";
import Image from "next/image";
import bgImg from "@/public/images/hero-bg.webp";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";

type HeroProps = {
  className?: string;
};

const Hero = ({ className = "" }: HeroProps) => {
  return (
    <section className={`relative ${className}`}>
      <Image
        src={bgImg}
        fill
        className="z-[-2] object-cover"
        alt="Background"
        draggable={false}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white z-[-1] opacity-10"></div>
      <div className="container flex flex-col justify-center items-start min-h-[80dvh]">
        <Title size="xl" className="max-w-[730px] mb-4" variant="h1">
          PVC-PROFILSYSTEME FUR FENSTER UND TUREN, EINZELHANDEL
        </Title>
        <Button variant="primary" className="font-semibold">
          Mehr
        </Button>
      </div>
    </section>
  );
};

export default Hero;
