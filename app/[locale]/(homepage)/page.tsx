import Hero from "@/components/Hero";
import Stats from "@/components/Stats/Stats";
import { LocaleType } from "@/i18n-config";

type HomeProps = {
  params: {
    locale: LocaleType;
  };
};

export default async function Home({ params }: HomeProps) {
  return (
    <>
      <Hero />
      <Stats locale={params.locale} className="mt-[-105px]" />
    </>
  );
}
