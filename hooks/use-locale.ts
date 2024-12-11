"use client";
import { defaultLocale, LocaleType } from "@/i18n-config";
import { useParams, usePathname, useRouter } from "next/navigation";

export const useLocale = () => {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const changeLocale = (newLocale: LocaleType) => {
    const splittedPathname = pathname.split("/");
    splittedPathname[1] = newLocale;

    router.push(splittedPathname.join("/"));
  };

  return {
    locale: (params?.locale || defaultLocale) as LocaleType,
    changeLocale,
  };
};
