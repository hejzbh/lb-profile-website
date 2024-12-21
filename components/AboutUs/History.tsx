import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import Text from "@/components/ui/Text";
import Image from "next/image";
import hifaOil from "@/public/images/hifa-oil.webp";
import growImg from "@/public/images/grow.webp";

type HistoryProps = {
  className?: string;
};

const History = ({ className = "" }: HistoryProps) => {
  return (
    <section className={`${className}`}>
      <Timeline
        data={[
          {
            title: "Entwicklung - 1960",
            content: (
              <div>
                <Text>
                  - Entwicklung von Werkstoffen und Verarbeitungs-prozessen.
                </Text>
                <Image
                  src={growImg}
                  alt="LB Profile grow"
                  loading="lazy"
                  className="rounded-3xl mt-5"
                  width={200}
                  height={660}
                />
              </div>
            ),
          },
          {
            title: "Holländischen Wavin Konzern - 1980",
            content: (
              <Text>
                Zugehörigkeit zum holländischen Wavin Konzern. Zugang zu den
                Forschungs- und Entwicklungs- ressourcen dieses in Europa
                führenden Kunststoff-verarbeitenden Unternehmens.
              </Text>
            ),
          },
          {
            title: "Britischen Litchfield - 1994",
            content: (
              <Text>
                - Zugehörig zur britischen Litchfield Group of Companies.
              </Text>
            ),
          },
          {
            title: "HIFA OIL - 2017",
            content: (
              <div>
                <Text>Eigentum von HIFA OIL aus Bosnien.</Text>
                <Image
                  src={hifaOil}
                  alt="HIFA OIL"
                  loading="lazy"
                  className="rounded-3xl mt-5"
                  width={500}
                  height={660}
                />
              </div>
            ),
          },
        ]}
        title="LB Profile"
        description="DIE GESCHICHTE"
      />
    </section>
  );
};

export default History;
