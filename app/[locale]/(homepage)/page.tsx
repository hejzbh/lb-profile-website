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
import Services from "@/components/Services";
import { Metadata } from "next";

type HomeProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: HomeProps["params"];
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = {
    en: {
      title: "Premium PVC Profiles for Windows & Doors",
      description:
        "LB Profile is a leading manufacturer of high-quality PVC profiles for windows and doors, ensuring durability and energy efficiency. Explore innovative solutions for modern buildings!",
      keywords: [
        "PVC profiles",
        "PVC window profiles",
        "PVC door profiles",
        "plastic profiles",
        "energy-efficient windows",
        "thermal insulation windows",
        "PVC frames",
        "sustainable building materials",
        "PVC profiles manufacturer",
        "European PVC profiles",
      ],
    },
    de: {
      title: "Hochwertige PVC-Profile für Fenster und Türen",
      description:
        "LB Profile ist ein führender Hersteller von PVC-Profilen für Fenster und Türen und bietet höchste Qualität, Langlebigkeit und Energieeffizienz. Entdecken Sie innovative Lösungen für moderne Bauprojekte!",
      keywords: [
        "PVC Profile",
        "Fensterprofile aus Kunststoff",
        "PVC-Türprofile",
        "Plastikprofile",
        "Energieeffiziente Fenster",
        "Wärmeisolierung Fenster",
        "PVC-Rahmen",
        "Nachhaltige Baumaterialien",
        "PVC-Hersteller",
        "Europäische PVC-Profile",
      ],
    },
    "bs-BA": {
      title: "Vrhunski PVC profili za prozore i vrata",
      description:
        "LB Profile je vodeći proizvođač PVC plastičnih profila za prozore i vrata, pružajući vrhunsku kvalitetu, dugotrajnost i energetsku efikasnost. Otkrijte inovativna rješenja za moderne građevinske projekte!",
      keywords: [
        "PVC profili",
        "PVC profili za prozore",
        "PVC profili za vrata",
        "plastični profili",
        "energetski efikasni prozori",
        "termoizolacijski prozori",
        "PVC okviri",
        "održivi građevinski materijali",
        "proizvođač PVC profila",
        "evropski PVC profili",
      ],
    },
  }[locale];

  const siteUrl = "https://www.lbprofile.com";
  const ogImage = `https://lyctum.com/wp-content/uploads/2018/03/lb-profile.png`;

  if (!meta) return {};

  return {
    title: `LB Profile - ${meta.title}`,
    description: meta.description,
    keywords: meta.keywords.join(", "),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`,
        "bs-BA": `${siteUrl}/bs-BA`,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${locale}`,
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
          alt: "LB Profile - PVC Profiles",
        },
      ],
    },
  };
}

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
      <Services />
      <Video title={text.video_title} className="mb-28 lg:mb-36" />
      <AboutUs
        title={text.about_us_two}
        description={text.about_us_two_text}
        className="mb-28 lg:mb-36"
      />
    </>
  );
}
