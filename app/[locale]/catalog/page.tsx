import React from "react";
import BackgroundImage from "@/components/ui/BackgroundImage";
import { LocaleType } from "@/i18n-config";

import catalogImg from "@/public/images/catalog.webp";
import Title from "@/components/ui/Title";
import CatalogList from "@/components/Catalog/CatalogList";

type CatalogPageProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

const CatalogPage = async ({ params }: CatalogPageProps) => {
  const { locale } = await params;

  return (
    <div>
      <BackgroundImage src={catalogImg}>
        <Title variant="h1" size="xl" className="!text-white ">
          CATALOG
        </Title>
      </BackgroundImage>

      <main className="container py-20 text-center">
        <CatalogList locale={locale} />
      </main>
    </div>
  );
};

export default CatalogPage;
