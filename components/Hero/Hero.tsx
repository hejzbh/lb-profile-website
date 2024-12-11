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
        className="z-[-1]"
        alt="Background"
        draggable={false}
        objectFit="cover"
      />
      <div className="container flex flex-col justify-center items-start min-h-[80dvh]">
        <Title className="max-w-[730px] mb-4" variant="h1">
          PVC-PROFILSYSTEME FUR FENSTER UND TUREN, EINZELHANDEL
        </Title>
        <Button variant="primary">Click me</Button>
      </div>
    </section>
  );
};

export default Hero;
