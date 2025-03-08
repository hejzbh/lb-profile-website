"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Dropdown from "@/components/ui/Dropdown";
//import { useLocale } from "@/hooks/use-locale";
import Text from "@/components/ui/Text";
import { aboutUsPath, catalogPath, profilesPath } from "@/lib/paths";
import { LocaleType } from "@/i18n-config";
import { useLocale } from "@/hooks/use-locale";
import { getCatalogItems } from "../Catalog/CatalogList";
const texts = {
  home: {
    de: "Startseite",
    en: "Home",
    "bs-BA": "Početna",
  },
  about_us: {
    de: "Über uns",
    en: "About us",
    "bs-BA": "O nama",
  },
  pvc_profile: {
    de: "PVC Profil",
    en: "PVC Profile",
    "bs-BA": "PVC Profil",
  },
  catalogs: {
    de: "Kataloge",
    en: "Catalogs",
    "bs-BA": "Katalozi",
  },
};

export const getLinks = (locale: LocaleType) => [
  { name: texts["home"][locale], href: `/${locale}` },
  {
    name: texts["about_us"][locale],
    href: aboutUsPath(locale),
  },
  {
    name: texts["pvc_profile"][locale],
    href: profilesPath(locale),
    sublinks: [
      { name: "PCD-70-MD", href: profilesPath(locale, "pcd-70-md") },
      { name: "PCD 82 MD", href: profilesPath(locale, "pcd-82-md") },
      { name: "PCD 82 XT", href: profilesPath(locale, "pcd-82-xt") },
    ],
  },
  {
    name: texts["catalogs"][locale],
    href: catalogPath(locale),
    sublinks: getCatalogItems(locale),
    dropdownClassName: "!min-w-[180px]",
  },
];

type NavLinksProps = {
  className?: string;
  direction?: "row" | "col";
};

const NavLinks = ({ className = "", direction = "row" }: NavLinksProps) => {
  const { locale } = useLocale();
  const links = useMemo(() => getLinks(locale), [locale]);

  return (
    <nav className={`${className}`}>
      <ul
        className={`flex ${
          direction === "row" ? "flex-row space-x-1" : "flex-col space-y-2"
        }`}
      >
        {links.map((link, index) => {
          const hasSublinks = link?.sublinks && link?.sublinks?.length;

          return (
            <li key={index} className="relative">
              {hasSublinks ? (
                <Dropdown
                  triggerClassName="p-2 px-4"
                  trigger={
                    <Link
                      href={link.href + ""}
                      onClick={(e) => !link.href && e.preventDefault()}
                      className="flex items-center"
                    >
                      <Text
                        size="biggerSm"
                        className="text-white group-hover:text-textColors-hover transition"
                      >
                        {link.name}
                      </Text>
                    </Link>
                  }
                  items={link.sublinks}
                  dropdownClassName={`bg-white rounded-lg ${link.dropdownClassName}`}
                />
              ) : (
                <Link
                  href={link.href || "#"}
                  className="block p-2 px-4 text-white"
                >
                  <Text
                    size="biggerSm"
                    className="text-white hover:text-textColors-hover transition"
                  >
                    {link.name}
                  </Text>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
