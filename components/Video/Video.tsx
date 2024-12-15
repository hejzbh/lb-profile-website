"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import bgImg from "@/public/images/video-bg.webp";
let timeout: any;

type VideoProps = {
  className?: string;
};

const Video = ({ className = "" }: VideoProps) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    timeout = setTimeout(() => {
      setIsClicked(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []); // eslint-disable-line

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
      <div className="relative cursor-pointer w-full">
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
            <span className="text-white text-xl">Loading...</span>
          </div>
        ) : (
          <iframe
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
