"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import LocationCard from "./LocationCard";
import { LocationType } from "@/types";
import { useLocale } from "@/hooks/use-locale";
import { LocaleType } from "@/i18n-config";

type LocationsProps = {
  className?: string;
};

function getLocations(locale: LocaleType): LocationType[] {
  return [
    {
      name: "L.B Profile GmbH",
      address: "Magirus-Deutz-Straße 12, 89077 Ulm, Deutschland",
      tel: "+49 152 08276365",
      // fax: "+49 (0) 6643 – 703 22",
      email: "info@lbprofilebh.ba",
      mapHref: "https://maps.app.goo.gl/4Zm1pnVxo7YpABgx9",
    },
    {
      name: {
        de: "Standort Produktion Bosnien und Herzegowina",
        en: "Production location Bosnia and Herzegovina",
        "bs-BA": "Lokacija proizvodnje Bosna i Hercegovina",
      }[locale],
      address: "Nikole Tesle 71, 74000 Doboj, Bosnien und Herzegowina",
      tel: "+387 53 991 330",
      fax: "+387 53 991 330",
      email: "info@lbprofilebh.ba",
      mapHref: "https://maps.app.goo.gl/B4GYxbe51RDZQgVJ9",
    },
  ];
}

const Locations = ({ className = "" }: LocationsProps) => {
  const { locale } = useLocale();
  const locations = getLocations(locale);
  return (
    <section className={`container p-3 md:p-10  ${className}`}>
      <Carousel className={`${className}`}>
        <CarouselContent className="space-x-0">
          {locations?.map((location) => (
            <CarouselItem
              key={location.mapHref}
              className="!basis-[85%] md:!basis-1/2"
            >
              <LocationCard location={location} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Locations;
