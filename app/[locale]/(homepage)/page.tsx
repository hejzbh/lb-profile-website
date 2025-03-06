import { LocaleType } from "@/i18n-config";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats/Stats";
import OurProfiles from "@/components/Profiles";
import ShortAboutUs from "@/components/ShortAboutUs";
import Video from "@/components/Video/Video";
import AboutUs from "@/components/AboutUs";
import { unstable_cache } from "next/cache";
import { CACHE_DURATION } from "@/lib/constants";
import { API } from "@/lib/axios";
import { HomepageText } from "@/types";

type HomeProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

const getHomeContent = unstable_cache(
  async (locale: LocaleType) => {
    const response = await API.get("/home" + `?locale=${locale}`);

    return response?.data?.data;
  },
  ["global_content"],
  {
    revalidate: CACHE_DURATION,
  }
);

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  const text: HomepageText = await getHomeContent(locale);

  return (
    <>
      <Hero title={text.hero_title} buttonText={text.hero_button} />
      <Stats locale={locale} className="mt-[-105px] mb-28 lg:mb-36" />
      <OurProfiles
        title={text.produkte_title}
        description={text.produkte_description}
        className="mb-28 lg:mb-36"
        locale={locale}
      />
      <ShortAboutUs
        title={text.about_title}
        description={text.about_text}
        className="mb-28 lg:mb-36"
      />

      <Video title={text.video_title} className="mb-28 lg:mb-36" />
      <AboutUs
        title={text.about_us_two}
        description={text.about_us_two_text}
        className="mb-28 lg:mb-36"
      />
    </>
  );
}
