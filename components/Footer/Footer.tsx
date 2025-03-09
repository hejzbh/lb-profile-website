"use client";
import React from "react";
import Image from "next/image";
import webImg from "@/public/images/web-2.webp";
import Logo from "@/components/ui/Logo";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import SocialMedia from "@/components/Footer/SocialMedia";
import { useLocale } from "@/hooks/use-locale";
import { getLinks } from "../Header/NavLinks";
import Link from "next/link";
import { catalogPath, contactUsPath } from "@/lib/paths";

type FooterProps = {
  className?: string;
};

const descText = {
  de: "Über 60 Jahre Erfahrung, Kenntnis und Kenntnis internationaler Standards, technologischer Veränderungen und industrieller Systeme haben uns zum Ziel gesetzt, unseren geschätzten Kunden die besten und hochwertigsten Lösungen zu bieten.",
  en: "Over 60 years of experience, knowledge, and understanding of international standards, technological changes, and industrial systems have driven us to aim at providing our valued customers with the best and highest-quality solutions.",
  "bs-BA":
    "Preko 60 godina iskustva, znanja i razumijevanja međunarodnih standarda, tehnoloških promjena i industrijskih sistema postavili su nam cilj da našim cijenjenim kupcima pružimo najbolje i najkvalitetnije rješenja.",
};

const Footer = ({ className = "" }: FooterProps) => {
  const { locale } = useLocale();
  const links = getLinks(locale);

  return (
    <footer
      className={`bg-bgColors-primary pb-10 pt-[16rem] relative z-[1] ${className}`}
    >
      <main className="container">
        {/** TOP */}
        <div className="grid grid-cols-1 gap-10 md:gap-2 md:grid-cols-[35%,20%,25%,20%]">
          {/** About */}
          <div className=" max-w-[480px]">
            <Logo imageClassName="min-w-[180px] max-w-[250px] md:min-w-[270px]" />
            <Text className="text-white my-8">{descText[locale]}</Text>
            <Button href={contactUsPath(locale)} variant="primary">
              {
                {
                  de: "Kontakt",
                  en: "Contact Us",
                  "bs-BA": "Kontakt",
                }[locale]
              }
            </Button>
          </div>

          {/** Links 1 */}
          <div>
            <Text className="text-white font-semibold" size="xl">
              {{ en: "Links", de: "Links", "bs-BA": "Linkovi" }[locale]}
            </Text>
            <ul className="space-y-6 mt-6">
              {links?.map((link, i) => (
                <li key={i}>
                  <Link
                    title={link.name}
                    href={link.href as string}
                    className="text-white hover:text-textColors-hover transition"
                  >
                    <Text withoutDefaultClass>{link.name}</Text>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/** Links 2 */}
          <div>
            <Text className="text-white font-semibold" size="xl">
              {
                {
                  de: "Kataloge",
                  en: "Catalogs",
                  "bs-BA": "Katalozi",
                }[locale]
              }
            </Text>
            <ul className="space-y-6 mt-6">
              {links
                ?.find((link) => link.href === catalogPath(locale))
                ?.sublinks?.map((link, i) => (
                  <li key={i}>
                    <Link
                      title={link.name}
                      href={link.href as string}
                      className="text-white hover:text-textColors-hover transition"
                    >
                      <Text withoutDefaultClass>{link.name}</Text>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/** Follow us */}
          <div>
            <Text className="text-white font-semibold uppercase" size="xl">
              {
                {
                  de: "Folge uns",
                  en: "Follow us",
                  "bs-BA": "Prati nas",
                }[locale]
              }
            </Text>

            <SocialMedia className="mt-6 flex-row md:flex-col xl:flex-row" />
          </div>
        </div>

        {/** Line */}
        <div className="h-[2px] w-full bg-white/30 my-10"></div>

        {/** BOTTOM */}
        <div className="flex items-center justify-between">
          <Text className="text-white max-w-[700px]">
            {
              {
                de: "Alle Rechte vorbehalten",
                en: "All rights reserved",
                "bs-BA": "Sva prava zadržana",
              }[locale]
            }{" "}
            &copy;{new Date().getFullYear()} LB. Profile
          </Text>
          <Button variant="primary">
            {
              {
                de: "Zustimmen",
                en: "Agree",
                "bs-BA": "Slažem se",
              }[locale]
            }
          </Button>
        </div>
      </main>

      <Image
        src={webImg}
        fill
        className="z-[-2] object-cover"
        style={{ filter: "blur(5px)" }}
        alt="Background"
        draggable={false}
      />
    </footer>
  );
};

export default Footer;
