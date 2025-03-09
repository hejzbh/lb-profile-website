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
import { Metadata } from "next";

type AboutUsProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: AboutUsProps["params"];
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = {
    en: {
      title: "About Us - Leading PVC Profiles Manufacturer",
      description:
        "LB Profile is a top manufacturer of high-quality PVC profiles for windows and doors, dedicated to innovation, sustainability, and energy efficiency. Learn more about our company, values, and production process.",
      keywords: [
        "About LB Profile",
        "PVC profiles manufacturer",
        "sustainable PVC production",
        "window and door profiles",
        "high-quality plastic profiles",
        "European PVC manufacturing",
        "energy-efficient PVC solutions",
      ],
    },
    de: {
      title: "Über uns - Führender Hersteller von PVC-Profilen",
      description:
        "LB Profile ist ein führender Hersteller hochwertiger PVC-Profile für Fenster und Türen, mit Fokus auf Innovation, Nachhaltigkeit und Energieeffizienz. Erfahren Sie mehr über unser Unternehmen, unsere Werte und unseren Produktionsprozess.",
      keywords: [
        "Über LB Profile",
        "Hersteller von PVC-Profilen",
        "nachhaltige PVC-Produktion",
        "Fenster- und Türprofile",
        "hochwertige Kunststoffprofile",
        "europäische PVC-Produktion",
        "energieeffiziente PVC-Lösungen",
      ],
    },
    "bs-BA": {
      title: "O nama - Vodeći proizvođač PVC profila",
      description:
        "LB Profile je vodeći proizvođač visokokvalitetnih PVC profila za prozore i vrata, posvećen inovacijama, održivosti i energetskoj efikasnosti. Saznajte više o našoj kompaniji, vrijednostima i proizvodnom procesu.",
      keywords: [
        "O nama LB Profile",
        "proizvođač PVC profila",
        "održiva PVC proizvodnja",
        "prozorski i vratni profili",
        "visokokvalitetni plastični profili",
        "evropska PVC proizvodnja",
        "energetski efikasni PVC profili",
      ],
    },
  }[locale];

  const siteUrl = "https://www.lbprofile.com";
  const ogImage =
    "https://lyctum.com/wp-content/uploads/2018/03/lb-profile.png";

  if (!meta) return {};

  return {
    title: `${meta.title} LB Profile`,
    description: meta.description,
    keywords: meta.keywords.join(", "), // SEO ključne riječi
    openGraph: {
      type: "website",
      url: `${siteUrl}/${locale}/about`,
      siteName: "LB Profile",
      title: meta.title,
      description: meta.description,
      locale: locale.replace("-", "_"),
      alternateLocale: ["en_US", "de_DE", "bs_BA"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "LB Profile - About Us",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@LBProfile",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
  };
}

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
