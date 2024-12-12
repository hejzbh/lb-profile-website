import { LocationType } from "@/types";
import React from "react";
import Text from "@/components/ui/Text";
import { MapPin, Phone, PhoneCall, Mail } from "lucide-react";
import Link from "next/link";

type LocationCardProps = {
  location: LocationType;
  className?: string;
};

const LocationCard = ({ className = "", location }: LocationCardProps) => {
  return (
    <article
      className={`bg-white shadow-2xl rounded-xl min-h-[292px] py-7 px-10 sm:px-12 ${className}`}
    >
      <Text size="xl" className="!text-textColors-active font-[500]">
        {location.name}
      </Text>

      <div className="text-gray-800 font-[500] font-sans space-y-4 mt-6">
        <div className="flex items-center">
          <MapPin className="w-7 h-7 mr-3 text-gray-600" />
          <Link title="Google Maps" className="group" href={location.mapHref}>
            <Text
              size="lg"
              className="transition active:text-textColors-active group-hover:md:text-textColors-hover"
            >
              {location.address}
            </Text>
          </Link>
        </div>
        <div className="flex items-center">
          <Phone className="w-7 h-7 mr-3 text-gray-600" />
          <Link
            title={location.tel}
            className="group"
            href={`tel:${location.tel}`}
          >
            <Text
              size="lg"
              className="transition active:text-textColors-active group-hover:md:text-textColors-hover"
            >
              Tel: {location.tel}
            </Text>
          </Link>
        </div>
        <div className="flex items-center">
          <PhoneCall className="w-7 h-7 mr-3 text-gray-600" />
          <Link
            title={location.fax}
            className="group"
            href={`tel:${location.fax}`}
          >
            <Text
              size="lg"
              className="transition active:text-textColors-active group-hover:md:text-textColors-hover"
            >
              Fax: {location.fax}
            </Text>
          </Link>
        </div>
        <div className="flex items-center">
          <Mail className="w-7 h-7 mr-3 text-gray-600" />
          <Link
            title={location.email}
            className="group"
            href={`mailto:${location.email}`}
          >
            <Text
              size="lg"
              className="transition active:text-textColors-active group-hover:md:text-textColors-hover"
            >
              E-Mail: {location.email}
            </Text>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default LocationCard;
