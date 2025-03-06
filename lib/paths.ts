import { LocaleType } from "@/i18n-config";

export const aboutUsPath = (locale: LocaleType) => "/" + locale + "/about-us";
export const contactUsPath = (locale: LocaleType) =>
  "/" + locale + "/contact-us";
export const catalogPath = (locale: LocaleType) => "/" + locale + "/catalog";
export const profilesPath = (locale: LocaleType, id?: string) =>
  "/" + locale + "/profiles/" + (id || "");
