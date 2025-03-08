import React from "react";
import { PhoneOutgoingIcon, MailIcon, MapPinned } from "lucide-react";
import Text from "../ui/Text";
import Link from "next/link";
import { LocaleType } from "@/i18n-config";

interface ContactProps {
  className?: string;
  locale: LocaleType;
}

const ContactInfo = ({ className = "", locale }: ContactProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${className}`}>
      {/** Telefon */}
      <div className="bg-white p-5 rounded-xl">
        <div className="flex items-center space-x-3">
          <PhoneOutgoingIcon size={25} className="text-textColors-active" />
          <Text size="xl" className="font-semibold">
            {{ en: "Call Us", de: "Ruf uns an", "bs-BA": "Nazovi nas" }[locale]}
          </Text>
        </div>

        <div className="flex flex-col mt-3 space-y-3 text-[#006ab0]">
          <Link
            title="+387 53 991 330"
            href={"tel:+0653991330"}
            className="hover:text-textColors-hover transition"
          >
            +387 53 991 330
          </Link>
          <Link
            title="+49 152 08276365"
            href={"tel:+49 152 08276365"}
            className="hover:text-textColors-hover transition"
          >
            +49 152 08276365
          </Link>
        </div>
      </div>

      {/** E-mail */}
      <div className="bg-white p-5 rounded-xl">
        <div className="flex items-center space-x-3">
          <MailIcon size={25} className="text-textColors-active" />
          <Text size="xl" className="font-semibold">
            {
              {
                en: "Send us an email",
                de: "Schreib uns eine E-Mail",
                "bs-BA": "Pošalji nam e-mail",
              }[locale]
            }
          </Text>
        </div>

        <div className="flex flex-col mt-3 space-y-3 text-[#006ab0] group">
          <Link
            title="info@lbprofilebh.ba"
            href={"mailto:info@lbprofilebh.ba"}
            className="group-hover:text-textColors-hover transition"
          >
            info@lbprofilebh.ba
          </Link>
        </div>
      </div>

      {/** Lokacija */}
      <div className="bg-white p-5 rounded-xl">
        <div className="flex items-center space-x-3">
          <MapPinned size={25} className="text-textColors-active" />
          <Text size="xl" className="font-semibold">
            {
              {
                en: "Visit us",
                de: "Besuche uns",
                "bs-BA": "Posjeti nas",
              }[locale]
            }
          </Text>
        </div>

        <div className="flex flex-col mt-3 space-y-3 text-[#006ab0]">
          <Link
            className="hover:text-textColors-hover transition"
            title="BiH"
            href={"https://maps.app.goo.gl/B4GYxbe51RDZQgVJ9"}
          >
            {
              {
                en: "Location Bosnia",
                de: "Standort Bosnien",
                "bs-BA": "Lokacija Bosna",
              }[locale]
            }
          </Link>
          <Link
            className="hover:text-textColors-hover transition"
            title="Germany"
            href={"https://maps.app.goo.gl/4Zm1pnVxo7YpABgx9"}
          >
            {
              {
                en: "Location Germany",
                de: "Standort Deutschland",
                "bs-BA": "Lokacija Njemačka",
              }[locale]
            }
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
