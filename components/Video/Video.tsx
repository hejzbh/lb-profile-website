import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import bgImg from "@/public/images/video-bg.webp";

type VideoProps = {
  className?: string;
};

const Video = ({ className = "" }: VideoProps) => {
  return (
    <section className={`relative container py-20 ${className}`}>
      <Image
        src={bgImg}
        fill
        className="z-[-2] object-cover"
        alt="Background"
        draggable={false}
      />
      <Title variant="h2" className="text-center mb-5">
        Video
      </Title>
      <iframe
        src="https://www.youtube.com/embed/SozfKGqfsUE?start=99"
        title="LB Profile Video"
        loading="lazy"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full rounded-2xl h-[360px] md:h-[500px] lg:h-[630px]"
      ></iframe>
    </section>
  );
};

export default Video;
