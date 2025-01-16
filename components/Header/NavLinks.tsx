"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Dropdown from "@/components/ui/Dropdown";
//import { useLocale } from "@/hooks/use-locale";
import Text from "@/components/ui/Text";
import { aboutUsPath, catalogPath } from "@/lib/paths";
import { LocaleType } from "@/i18n-config";
import { useLocale } from "@/hooks/use-locale";
import { getCatalogItems } from "../Catalog/CatalogList";

const getLinks = (locale: LocaleType) => [
  { name: "Home", href: "/" },
  {
    name: "Uber Uns",
    href: aboutUsPath(locale),
  },
  {
    name: "PVC Profil",
    sublinks: [
      { name: "U izradi...", href: "/" },
      { name: "U izradi...", href: "/" },
      { name: "U izradi...", href: "/" },
    ],
  },
  /**  { name: "Wo kaufen", href: "/" },
  { name: "Folien", href: "/" }, */
  {
    name: "Kataloge",
    href: catalogPath(locale),
    sublinks: getCatalogItems(locale),
    dropdownClassName: "!min-w-[180px]",
  },
  /** */
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
