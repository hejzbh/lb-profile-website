import React from "react";
import { LocaleType } from "@/i18n-config";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import { CatalogItemType } from "@/types";
import Link from "next/link";
import Image from "next/image";

export const getCatalogItems = (locale: LocaleType): CatalogItemType[] => {
  return [
    {
      name: {
        en: "LB COMFORT Sliding Window System",
        de: "LB COMFORT Schiebeanlage",
        bs: "LB COMFORT Klizni Prozorski Sistem",
      }[locale],
      href: "https://lbprofile.com/wp-content/uploads/2022/08/LB-COMFORT.pdf",
      image: "https://lbprofile.com/wp-content/uploads/2022/10/lb-comfort.jpg",
    },
    {
      name: {
        en: "LB CONTOUR from PAD Profiles",
        de: "LB CONTOUR aus PAD Profilen",
        bs: "LB CONTOUR od PAD Profila",
      }[locale],
      href: "https://lbprofile.com/wp-content/uploads/2022/08/pad-contour-from-pad.pdf",
      image:
        "https://lbprofile.com/wp-content/uploads/2022/10/pad-contur-from-pad.jpg",
    },
    {
      name: {
        en: "PAD CONTOUR Window System",
        de: "PAD CONTOUR Fenstersystem",
        bs: "PAD CONTOUR Prozorski Sistem",
      }[locale],
      href: "https://lbprofile.com/wp-content/uploads/2022/08/pad-contour.pdf",
      image:
        "https://lbprofile.com/wp-content/uploads/2022/10/Capgggture-copy-1.jpg",
    },
    {
      name: {
        en: "Window System with Stop and Central Gasket",
        de: "Fenstersystem Anschlag und Mitteldichtung",
        bs: "Prozorski Sistem sa Zaustavnim i Središnjim Brtvljenjem",
      }[locale],
      href: "https://lbprofile.com/wp-content/uploads/2022/08/PCD_ADMD_70_600.pdf",
      image:
        "https://lbprofile.com/wp-content/uploads/2022/10/fenstersystem.jpg",
    },
    {
      name: {
        en: "LB Profile BH Catalog",
        de: "LB Profile BH Katalog",
        bs: "LB Profil BH Katalog",
      }[locale],
      href: "https://lbprofile.com/wp-content/uploads/2024/05/LB-profile-DE-web.pdf",
      image:
        "https://lbprofile.com/wp-content/uploads/2024/05/lbprofili-katalog-slika-300x300.png",
    },
  ];
};

type CatalogListProps = {
  className?: string;
  locale: LocaleType;
};

const CatalogList = ({ className = "", locale }: CatalogListProps) => {
  const catalogItems = getCatalogItems(locale);

  return (
    <section className={`${className}`}>
      {" "}
      <Title variant="h2" size="lg">
        Kataloge, eine Übersicht über das PVC-Profilsystem
      </Title>
      <Text>
        Unter diesem Link können Sie den offiziellen Katalog herunterladen
      </Text>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
        {catalogItems?.map((catalog) => (
          <li key={catalog.href}>
            <Link
              href={catalog.href}
              title={catalog.name}
              className="block rounded-2xl drop-shadow-md group overflow-hidden"
            >
              <Image
                src={catalog.image}
                width={500}
                height={450}
                alt={catalog.name + "Image"}
                loading="lazy"
                className="h-[180px] md:h-[310px] object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <Text className="uppercase mt-3 font-semibold group-hover:text-textColors-hover transition">
                {catalog.name}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CatalogList;
