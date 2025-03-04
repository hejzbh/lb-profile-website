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

type CatalogPageProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

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
