import React from "react";
import Image from "next/image";
import productionImg from "@/public/images/production.webp";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import vector1 from "@/public/images/vector-1.webp";
import vector2 from "@/public/images/vector-2.webp";

type ProductionProps = {
  className?: string;
};

const Production = ({ className = "" }: ProductionProps) => {
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
          Produktion
        </Title>
        <Text>
          Wir können ein Folienprofil nach Ihren Wünschen herstellen und wie es
          aussieht, können Sie es selbst sehen. Wir beschäftigen uns mit dem
          Extrudieren von PVC-Profilen für Fenster und Türen. Polyvinylchlorid
          oder PVC ist ein moderner Kunststoff und ein sehr wichtiges Mitglied
          der breiten Polymerfamilie. Die chemische Formel von PVC ist CH2=CHCL.
        </Text>
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
        <Text>
          Einer der ersten kommerziell entwickelten Kunststoffe ist noch heute
          weit verbreitet. PVC ist in einer Vielzahl von Formen erhältlich und
          bietet eine Vielzahl von Eigenschaften, die es für eine Vielzahl von
          Anwendungen im modernen Leben geeignet machen, von Blutbeuteln über
          Kinderspielzeug, Wasserhähne, Kabelisolierungen und Fensterprofile.
        </Text>
      </div>
    </section>
  );
};

export default Production;
