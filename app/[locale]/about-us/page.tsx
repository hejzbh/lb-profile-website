import React from "react";
import img from "@/public/images/lb-profile-bg.webp";
import BackgroundImage from "@/components/ui/BackgroundImage";
import Title from "@/components/ui/Title";
import Stats from "@/components/Stats/Stats";
import { LocaleType } from "@/i18n-config";
import History from "@/components/AboutUs/History";
import Text from "@/components/ui/Text";

type AboutUsProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

const AboutUsPage = async ({ params }: AboutUsProps) => {
  const { locale } = await params;
  return (
    <div>
      <BackgroundImage src={img}>
        <Title variant="h1" size="xl" className="!text-white ">
          About Us
        </Title>
      </BackgroundImage>
      <Stats
        locale={locale}
        className="mt-[-20px] md:mt-[-100px] z-[1] relative"
      />

      <main className="container my-20">
        <Text>
          Wir sind die Fensterspezialisten! Die Welt der Rahmen, Türen,
          Schiebetüren und Fenster, ist im Wandel. Und zwar täglich. Schließlich
          bleibt die Technik in unserer Branche nicht stehen und wir bei LB.
          Profile halten mit diesen Änderungen Schritt.
        </Text>
        <Text className="my-5">
          Mit den neuesten Entwicklungen in unserem Arbeitsbereich Schritt zu
          halten, ist ein Muss. Und wir arbeiten gerne daran. Das können Sie an
          unseren Produkten sehen. Das Unternehmen wurde 1960 in Deutschland
          gegründet und arbeitet heute fleißig: Unser Unternehmen beschäftigt
          über 130 Mitarbeiter direkt im Werk und produziert mit über 45
          Vertriebshändlern erfolgreich PVC-Profile für die Herstellung von
          fertigen PVC-Fenstern. Durch den Aufbau eines großen Händlernetzes
          sind wir zu einem zuverlässigen Partner geworden, der die Wünsche und
          Bedürfnisse der Kunden als seine eigenen übernimmt und erfüllt.
        </Text>

        <History />
      </main>
    </div>
  );
};

export default AboutUsPage;
