"use client";
import React from "react";
import connectionImg from "@/public/images/connection.webp";
import Dropdown from "@/components/ui/Dropdown";
import Image from "next/image";
import { useLocale } from "@/hooks/use-locale";
import deImg from "@/public/images/flags/german.webp";
import enImg from "@/public/images/flags/usa.webp";
import bsImg from "@/public/images/flags/bosnian.webp";

type LocaleSwitcherProps = {
  className?: string;
};

const LocaleSwitcher = ({ className = "" }: LocaleSwitcherProps) => {
  const { locale, changeLocale } = useLocale();

  return (
    <div className={`${className}`}>
      <Dropdown
        includeArrow={false}
        dropdownClassName="left-[-190%] md:left-[-120%]"
        trigger={
          <div className="flex items-center p-2 text-white space-x-1">
            <Image
              src={connectionImg}
              loading="lazy"
              width={22}
              height={22}
              alt="Locales"
              className="w-[19px] md:w-[22px]"
            />
          </div>
        }
        items={[
          {
            name: "Deutsch",
            onClick: () => changeLocale("de"),
            children: (
              <Image
                src={deImg}
                width={25}
                className="rounded-sm w-[28px] h-[19px]"
                height={11}
                alt="Bosnian"
                loading="lazy"
              />
            ),
            className:
              locale === "de" ? "!text-textColors-active font-[500]" : "",
          },
          {
            name: "English",
            onClick: () => changeLocale("en"),
            children: (
              <Image
                src={enImg}
                width={28}
                className="rounded-sm w-[28px] h-[19px]"
                height={11}
                alt="Bosnian"
                loading="lazy"
              />
            ),
            className:
              locale === "en" ? "!text-textColors-active  font-[500]" : "",
          },
          {
            name: "Bosanski",
            onClick: () => changeLocale("bs"),
            children: (
              <Image
                src={bsImg}
                width={28}
                className="rounded-sm w-[28px] h-[19px]"
                height={11}
                alt="Bosnian"
                loading="lazy"
              />
            ),
            className:
              locale === "bs" ? "!text-textColors-active font-[500]" : "",
          },
        ]}
      />
    </div>
  );
};

export default LocaleSwitcher;
