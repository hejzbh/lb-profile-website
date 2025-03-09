import OurProfiles from "@/components/Profiles";
import { LocaleType } from "@/i18n-config";
import { API } from "@/lib/axios";
import { CACHE_DURATION } from "@/lib/constants";
import { HomepageText } from "@/types";
import { Metadata } from "next";
import { unstable_cache } from "next/cache";
import React from "react";

type ProfilesProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: ProfilesProps["params"];
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = {
    en: {
      title: "Profiles - High-Quality PVC Profiles for Windows and Doors",
      description:
        "Explore LB Profile's range of high-quality PVC profiles for windows and doors, designed for energy efficiency, durability, and innovation.",
      keywords: [
        "PVC profiles for windows and doors",
        "high-quality PVC profiles",
        "energy-efficient PVC profiles",
        "window and door profiles",
        "innovative PVC profiles",
        "sustainable PVC profiles",
        "pcd-70-md",
        "pcd-82-md",
        "pcd-82-xt",
      ],
    },
    de: {
      title: "Profile - Hochwertige PVC-Profile für Fenster und Türen",
      description:
        "Entdecken Sie die hochwertigen PVC-Profile von LB Profile für Fenster und Türen, die für Energieeffizienz, Langlebigkeit und Innovation entwickelt wurden.",
      keywords: [
        "PVC-Profile für Fenster und Türen",
        "hochwertige PVC-Profile",
        "energieeffiziente PVC-Profile",
        "Fenster- und Türprofile",
        "innovative PVC-Profile",
        "nachhaltige PVC-Profile",
        "pcd-70-md",
        "pcd-82-md",
        "pcd-82-xt",
      ],
    },
    "bs-BA": {
      title: "Profili - Visokokvalitetni PVC profili za prozore i vrata",
      description:
        "Istražite asortiman visokokvalitetnih PVC profila za prozore i vrata od LB Profile, dizajniranih za energetsku efikasnost, dugotrajan rad i inovacije.",
      keywords: [
        "PVC profili za prozore i vrata",
        "visokokvalitetni PVC profili",
        "energetski efikasni PVC profili",
        "prozorski i vratni profili",
        "inovativni PVC profili",
        "održivi PVC profili",
        "pcd-70-md",
        "pcd-82-md",
        "pcd-82-xt",
      ],
    },
  }[locale];

  const ogImage =
    "https://lyctum.com/wp-content/uploads/2018/03/lb-profile.png";

  if (!meta) return {};

  return {
    title: `${meta.title} - LB Profile`,
    description: meta.description,
    keywords: meta.keywords.join(", "), // SEO ključne riječi

    openGraph: {
      type: "website",
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
          alt: "LB Profile - Profiles",
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

const ProfilesPage = async ({ params }: ProfilesProps) => {
  const { locale } = await params;
  const text: HomepageText = await getHomeContent(locale);
  return (
    <div className="my-40 py-20">
      <OurProfiles
        title={text.produkte_title}
        description={text.produkte_description}
        locale={locale}
      />
    </div>
  );
};

export default ProfilesPage;
