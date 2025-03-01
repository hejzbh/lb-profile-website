import { LocaleType } from "@/i18n-config";
import { TeamMemberType } from "@/types";

export const CACHE_DURATION = 86400; // 24h

export const getTeamMembers = (locale: LocaleType) => {
  return {
    // Mustafa
    MUSTAFA: {
      name: "Mustafa Basic",
      role: {
        en: "CEO / General Director",
        de: "CEO / Geschäftsführer",
        "bs-BA": "CEO / Generalni director",
      }[locale],
      telM: ["+387 61 975 139"],
      email: "mustafa.basic@lbprofilebh.ba",
    } as TeamMemberType,
    // Asmir Tabakovic
    ASMIR_TABAKOVIC: {
      name: "Asmir Tabakovic",
      role: {
        en: "Logistics",
        de: "Logistics / Logistik",
        "bs-BA": "Logistika",
      }[locale],
      telM: ["+387 61 507 862"],
      email: "tabakovic.asmir@lbprofilebh.ba",
    } as TeamMemberType,
    // Ermin Halilovic
    ERMIN_HALILOVIC: {
      name: "Ermin Halilovic",
      role: {
        en: "Production manager",
        de: "Technologist / Technologe",
        "bs-BA": "Logistika",
      }[locale],
      telM: ["+387 63 452 338"],
      email: "halilovic.e@lbprofilebh.ba",
    } as TeamMemberType,
  };
};
