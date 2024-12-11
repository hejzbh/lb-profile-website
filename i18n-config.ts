export const locales: { locale: string; name: string }[] = [
  { name: "Bosnian", locale: "bs" },
  { name: "English", locale: "en" },
  { name: "German", locale: "de" },
];

export const defaultLocale = locales[0].locale;

export const i18n = {
  defaultLocale,
  locales: locales.map((l) => l.locale),
} as const;

export type LocaleType = "bs" | "en" | "de";
