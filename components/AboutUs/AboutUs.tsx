import React from "react";
import Title from "@/components/ui/Title";
import Image from "next/image";
import lbImg from "@/public/images/statistics.webp";
import RichText from "../RichText";

type AboutUsProps = {
  className?: string;
  title: string;
  description: any;
};

const AboutUs = ({ className = "", title, description }: AboutUsProps) => {
  return (
    <section
      className={`container grid md:grid-cols-2 gap-20 md:gap-10 items-center ${className}`}
    >
      {/** Text */}
      <div>
        <Title variant="h2">{title}</Title>
        <RichText content={description} />
      </div>
      {/** Image */}

      <Image
        src={lbImg}
        loading="lazy"
        width={880}
        height={750}
        alt="LB Profile"
        className="w-full max-w-[340px] md:max-w-[668px] mx-auto"
      />
    </section>
  );
};

export default AboutUs;
