import React from "react";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import Image from "next/image";
import lbImg from "@/public/images/lb.webp";

type AboutUsProps = {
  className?: string;
};

const AboutUs = ({ className = "" }: AboutUsProps) => {
  return (
    <section
      className={`container grid md:grid-cols-2 gap-20 md:gap-10 items-center ${className}`}
    >
      {/** Text */}
      <div>
        <Title variant="h2">Kurz über uns</Title>
        <Text className="font-semibold mt-8" size="lg">
          Als absoluter Marktführer in dieser Branche bieten wir unseren Kunden
          einen individuellen Ansatz.
        </Text>
        <Text className="my-8">
          Das Unternehmen wurde 1960 in Deutschland gegründet und arbeitet heute
          hart: Gemeinsam mit unseren Vertriebspartnern produzieren
          wir Hochwertige PVC-Profile für die Produktion von
          fertigen PVC-Fenstern.  Durch den Aufbau eines großen Händlernetzes
          sind wir zu einem absoluten Marktführer auf dem europäischen Markt
          geworden. Tageslicht und bei Bedarf auch frische Luft ins Gebäude
          lassen: So sahen die wesentlichen Funktionen der ersten
          verglasten Fenster aus.
        </Text>
        <Text>
          Heute sind die Anforderungen sehr viel weitgehender und vielfältiger.
          Bauherr:innen erwarten eine effektive Wärmedämmung sowie dauerhaften
          Schutz – vor Wind und Wetter, Zugluft, Umgebungslärm und nicht zuletzt
          vor Einbrüchen. Natürlich sollen die Fenster außerdem schön sein und
          einen hohen Bedienkomfort bieten. Unser Geschäft mit Kunden, wie auch
          mit Lieferanten, basiert in erster Linie auf gegenseitigem Vertrauen,
          Respekt und freundschaftlicher Partnerschaft.
        </Text>
      </div>
      {/** Image */}

      <Image
        src={lbImg}
        loading="lazy"
        width={880}
        height={750}
        alt="LB Profile"
        className="w-full max-w-[240px] md:max-w-[468px] mx-auto"
      />
    </section>
  );
};

export default AboutUs;
