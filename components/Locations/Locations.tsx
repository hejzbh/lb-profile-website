import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import LocationCard from "./LocationCard";
import { LocationType } from "@/types";

type LocationsProps = {
  className?: string;
};

const locations: LocationType[] = [
  {
    name: "Standort Deutschland",
    address: "Am Schlirfer Weg 2-4, 36358 Herbstein, Deutschland.",
    tel: "+49 (0) 6643 – 703 22",
    fax: "+49 (0) 6643 – 703 22",
    email: "info@lbprofilebh.ba",
    mapHref: "https://maps.app.goo.gl/4Zm1pnVxo7YpABgx9",
  },
  {
    name: "Standort Produktion Bosnien und Herzegowina",
    address: "Nikole Tesle 71, 74000 Doboj, Bosnien und Herzegowina",
    tel: "+387 53 991 330",
    fax: "+387 53 991 330",
    email: "info@lbprofilebh.ba",
    mapHref: "https://maps.app.goo.gl/LK7d6n5vRTBSDav48",
  },
];

const Locations = ({ className = "" }: LocationsProps) => {
  return (
    <section className={`container p-3 md:p-10  ${className}`}>
      <Carousel className={`${className}`}>
        <CarouselContent className="space-x-0">
          {locations?.map((location) => (
            <CarouselItem
              key={location.mapHref}
              className="basis-[85%] md:basis-1/2"
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
