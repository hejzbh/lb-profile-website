"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import bgImg from "@/public/images/video-bg.webp";
import Button from "@/components/ui/Button";

type VideoProps = {
  className?: string;
};

const Video = ({ className = "" }: VideoProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const iframeRef: any = useRef(null);

  // Handle mouseover to preconnect to third-party resources (YouTube)
  const handleMouseOver = () => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://www.youtube.com";
    document.head.appendChild(link);
  };

  // Handle click to replace facade with iframe
  const handleClick = () => {
    setIsClicked(true);
  };

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
      <div
        onMouseOver={handleMouseOver}
        onClick={handleClick}
        className="relative cursor-pointer w-full"
      >
        {!isClicked ? (
          <div
            className="w-full h-[360px] md:h-[500px] lg:h-[630px] bg-gray-200 rounded-2xl flex items-center justify-center"
            style={{
              backgroundImage:
                'url("https://img.youtube.com/vi/SozfKGqfsUE/hqdefault.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Button variant="secondary">Load Video</Button>
          </div>
        ) : (
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/SozfKGqfsUE?start=99"
            title="LB Profile Video"
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full rounded-2xl h-[360px] md:h-[500px] lg:h-[630px]"
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default Video;
