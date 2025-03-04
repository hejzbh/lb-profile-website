import React from "react";
import { LocaleType } from "@/i18n-config";
import { TeamMemberType } from "@/types";

type TeamProps = {
  className?: string;
  location: "bosnian" | "deutschland";
  locale: LocaleType;
};

const getTeamMembers = (
  locale: LocaleType
  //location: TeamProps["location"]
): TeamMemberType[] => {
  return [
    {
      name: "Mustafa Basic",
      role: {
        en: "CEO / General Manager",
        "bs-BA": "CEO / Generalni direktor",
        de: "CEO / Geschäftsführer",
      }[locale],
      telM: ["+387 61 975 139"],
      email: "mustafa.basic@lbprofilebh.ba",
    },
    {
      name: "Nermin Milanović",
      role: {
        en: "CEO / General Manager",
        "bs-BA": "CEO / Generalni direktor",
        de: "CEO / Geschäftsführer",
      }[locale],
      telM: ["+387 61 975 139"],
      email: "mustafa.basic@lbprofilebh.ba",
    },
  ];
};

const getContent = (locale: LocaleType, location: TeamProps["location"]) => {
  return {
    title: {
      bosnian: {
        "bs-BA": "Proizvodna lokacija Bosna i Hercegovina",
        de: "Standort Produktion Bosnien und Herzegowina",
        en: "Production site Bosnia and Herzegovina",
      },
      deutschland: {
        "bs-BA": "Njemačka lokacija",
        de: "Standort Deutschland",
        en: "Germany location",
      },
    }[location][locale],
    location: {
      bosnian: {
        "bs-BA": {
          name: "Nikole Tesle 71, 74 000 Doboj, BiH",
          mapHref: "https://maps.app.goo.gl/B4GYxbe51RDZQgVJ9",
        },
        de: {
          name: "Nikole Tesle 71, 74 000 Doboj, Bosnien und Herzegowina",
          mapHref: "https://maps.app.goo.gl/B4GYxbe51RDZQgVJ9",
        },
        en: {
          name: "Nikole Tesle 71, 74 000 Doboj, Bosnia & Herzegowina",
          mapHref: "https://maps.app.goo.gl/B4GYxbe51RDZQgVJ9",
        },
      },
      deutschland: {
        "bs-BA": {
          name: "Am Schlirfer Weg 2-4, 36358 Herbstein, Njemacka",
          mapHref: "https://maps.app.goo.gl/4Zm1pnVxo7YpABgx9",
        },
        de: {
          name: "Am Schlirfer Weg 2-4, 36358 Herbstein, Deutschland",
          mapHref: "https://maps.app.goo.gl/4Zm1pnVxo7YpABgx9",
        },
        en: {
          name: "Am Schlirfer Weg 2-4, 36358 Herbstein, Germany",
          mapHref: "https://maps.app.goo.gl/4Zm1pnVxo7YpABgx9",
        },
      },
    }[location][locale],
    teamMembers: getTeamMembers(locale),
  };
};

const Team = ({ className = "", location, locale }: TeamProps) => {
  const { teamMembers } = getContent(locale, location);

  return (
    <section className={`${className}`}>{JSON.stringify(teamMembers)}</section>
  );
};

export default Team;
