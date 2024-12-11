import { LocaleType } from "@/i18n-config";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats/Stats";
import OurProfiles from "@/components/Profiles";
import Production from "@/components/Production";
import Video from "@/components/Video/Video";

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
      <Stats locale={locale} className="mt-[-105px] mb-28 lg:mb-36" />
      <OurProfiles className="mb-28 lg:mb-36" />
      <Production className="mb-28 lg:mb-36" />
      <Video className="mb-28 lg:mb-36" />
    </>
  );
}
