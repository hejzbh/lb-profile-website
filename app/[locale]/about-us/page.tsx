import React from "react";
import img from "@/public/images/lb-profile-bg.webp";
import BackgroundImage from "@/components/ui/BackgroundImage";
import Title from "@/components/ui/Title";
import Stats from "@/components/Stats/Stats";
import { LocaleType } from "@/i18n-config";
import History from "@/components/AboutUs/History";
import { unstable_cache } from "next/cache";
import { CACHE_DURATION } from "@/lib/constants";
import { API } from "@/lib/axios";
import { AboutText } from "@/types";
import RichText from "@/components/RichText";

type AboutUsProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

const getAboutContent = unstable_cache(
  async (locale: LocaleType) => {
    const response = await API.get("/about-us" + `?locale=${locale}`);

    return response?.data?.data;
  },
  ["global_content"],
  {
    revalidate: CACHE_DURATION,
  }
);

const AboutUsPage = async ({ params }: AboutUsProps) => {
  const { locale } = await params;
  const text: AboutText = await getAboutContent(locale);

  return (
    <div>
      <BackgroundImage src={img}>
        <Title variant="h1" size="xl" className="!text-white ">
          {text?.title?.toUpperCase()}
        </Title>
      </BackgroundImage>
      <Stats
        locale={locale}
        className="mt-[-20px] md:mt-[-100px] z-[1] relative"
      />

      <main className="container my-20">
        <RichText content={text.description_one} />

        <History
          title={text?.title_two}
          description={text?.title_two_description}
          data={Array.from({ length: 4 })?.map((_, idx) => {
            const number = ["one", "two", "three", "four"];

            return {
              title: (text as any)[`point_${number[idx]}`] as any,
              content: (text as any)[`point_${number[idx]}_description`] as any,
            };
          })}
        />
      </main>
    </div>
  );
};

export default AboutUsPage;
