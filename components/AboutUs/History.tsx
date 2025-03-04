import React, { useMemo } from "react";
import { Timeline } from "@/components/ui/Timeline";
import Text from "@/components/ui/Text";
import Image from "next/image";
import hifaOil from "@/public/images/hifa-oil.webp";
import growImg from "@/public/images/grow.webp";

type HistoryProps = {
  className?: string;
  title: string;
  description: string;
  data?: { title: string; content: any }[];
};

const History = ({
  className = "",
  title,
  description,
  data,
}: HistoryProps) => {
  const dataImages = useMemo(
    () => [
      <Image
        key={"0"}
        src={growImg}
        alt="LB Profile grow"
        loading="lazy"
        className="rounded-3xl mt-5"
        width={200}
        height={660}
      />,
      null,
      null,
      <Image
        key={"1"}
        src={hifaOil}
        alt="HIFA OIL"
        loading="lazy"
        className="rounded-3xl mt-5"
        width={500}
        height={660}
      />,
    ],
    []
  );

  return (
    <section className={`${className}`}>
      <Timeline
        data={
          data?.map(({ title, content }, idx) => ({
            title,
            content: (
              <div key={idx}>
                <Text>{content}</Text>
                {dataImages[idx]}
              </div>
            ),
          })) as any
        }
        title={title}
        description={description?.toUpperCase()}
      />
    </section>
  );
};

export default History;
