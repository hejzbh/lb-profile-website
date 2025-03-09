import React from "react";
import BackgroundImage from "@/components/ui/BackgroundImage";
import { LocaleType } from "@/i18n-config";

import catalogImg from "@/public/images/catalog.webp";
import Title from "@/components/ui/Title";
import CatalogList from "@/components/Catalog/CatalogList";
import { unstable_cache } from "next/cache";
import { API } from "@/lib/axios";
import { CACHE_DURATION } from "@/lib/constants";
import { CatalogText } from "@/types";
import { Metadata } from "next";

type CatalogPageProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: CatalogPageProps["params"];
}): Promise<Metadata> {
  const { locale } = await params;

  const meta = {
    en: {
      title: "Catalog - High-Quality PVC Profiles for Windows and Doors",
      description:
        "Browse LB Profile's complete catalog of high-quality PVC profiles for windows and doors, designed for energy efficiency, durability, and innovation.",
      keywords: [
        "PVC profiles catalog",
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
      title: "Katalog - Hochwertige PVC-Profile für Fenster und Türen",
      description:
        "Durchsuchen Sie den vollständigen Katalog von LB Profile mit hochwertigen PVC-Profilen für Fenster und Türen, die für Energieeffizienz, Langlebigkeit und Innovation entwickelt wurden.",
      keywords: [
        "PVC-Profile Katalog",
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
      title: "Katalog - Visokokvalitetni PVC profili za prozore i vrata",
      description:
        "Pregledajte kompletan katalog LB Profile-a sa visokokvalitetnim PVC profilima za prozore i vrata, dizajniranim za energetsku efikasnost, dugotrajnost i inovacije.",
      keywords: [
        "PVC profili katalog",
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
          alt: "LB Profile - Catalog",
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

const getCatalogContent = unstable_cache(
  async (locale: LocaleType) => {
    const response = await API.get("/catalogue" + `?locale=${locale}`);

    return response?.data?.data;
  },
  ["global_content"],
  {
    revalidate: CACHE_DURATION,
  }
);

const CatalogPage = async ({ params }: CatalogPageProps) => {
  const { locale } = await params;
  const text: CatalogText = await getCatalogContent(locale);

  return (
    <div>
      <BackgroundImage src={catalogImg}>
        <Title variant="h1" size="xl" className="!text-white ">
          {text?.title?.toUpperCase()}
        </Title>
      </BackgroundImage>

      <main className="container py-20 text-center">
        <CatalogList
          locale={locale}
          title={text?.title_two}
          description={text?.title_two_description}
        />
      </main>
    </div>
  );
};

export default CatalogPage;
