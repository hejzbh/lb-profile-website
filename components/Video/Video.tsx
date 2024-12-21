"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import bgImg from "@/public/images/video-bg.webp";
import Button from "@/components/ui/Button";

type VideoProps = {
  className?: string;
};

const Video = ({ className = "" }: VideoProps) => {
  const [showIframe, setShowIframe] = useState(false);
  const sectionRef: React.Ref<HTMLElement> = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer to detect when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        // If the section is in view, set the iframe to show
        if (entries[0].isIntersecting) {
          setShowIframe(true);
          observer.disconnect(); // Stop observing once the iframe is shown
        }
      },
      {
        rootMargin: "300px", // Load the video when the section is 300px before entering the viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the video section
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // eslint-disable
      }
    };
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      className={`relative container py-20 ${className}`}
    >
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
        {!showIframe ? (
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
