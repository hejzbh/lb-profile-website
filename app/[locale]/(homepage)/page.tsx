import Hero from "@/components/Hero";
import Stats from "@/components/Stats/Stats";
import OurProfiles from "@/components/Profiles";
import { LocaleType } from "@/i18n-config";

type HomeProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  return (
    <>
      <Hero />
      <Stats locale={locale} className="mt-[-105px] mb-24" />
      <OurProfiles />
    </>
  );
}
