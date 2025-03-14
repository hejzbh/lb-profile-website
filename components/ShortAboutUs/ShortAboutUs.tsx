import React from "react";
import Image from "next/image";
import productionImg from "@/public/images/production.webp";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import vector1 from "@/public/images/vector-1.webp";
import vector2 from "@/public/images/vector-2.webp";
import RichText from "../RichText";

type ProductionProps = {
  className?: string;
  title: string;
  description: any; // eslint-disable-line
};

const ShortAboutUs = ({
  className = "",
  title,
  description,
}: ProductionProps) => {
  return (
    <section
      className={`container flex items-center justify-between gap-10 flex-col-reverse  md:flex-row ${className}`}
    >
      {/** Image */}
      <Image
        src={productionImg}
        width={1080}
        height={960}
        alt="Production"
        loading="lazy"
        className="flex-1 w-full max-w-[420px] lg:max-w-[520px] xl:max-w-[650px] mx-auto"
      />

      {/** Text */}
      <div className="flex-1">
        <Title className="mb-[24px]" variant="h2" size="lg">
          {title}
        </Title>
        <RichText content={description} />
        <div className="my-[20px] flex items-center space-x-10">
          <div className="font-semibold flex items-center space-x-5">
            <Image
              src={vector1}
              alt="Oil"
              width={39}
              height={50}
              loading="lazy"
            />
            <Text>Öl</Text>
            <Text size="xl">43%</Text>
          </div>

          <div className="font-semibold flex items-center space-x-5">
            <Image
              src={vector2}
              alt="Oil"
              width={42}
              height={50}
              loading="lazy"
            />
            <Text>Salz</Text>
            <Text size="xl">57%</Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortAboutUs;
