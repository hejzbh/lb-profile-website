import { LocaleType } from "@/i18n-config";
import React from "react";
import Text from "@/components/ui/Text";
import CustomBorder from "@/components/ui/CustomBorder";

type StatsProps = {
  className?: string;
  locale: LocaleType;
};

type StatsItem = {
  description: string;
  value: string;
};

function getStatsItems(locale: LocaleType): StatsItem[] {
  return [
    {
      value: "135+",
      description: {
        en: "Engineers and workers",
        de: "Ingenieure und Arbeiter",
        bs: "Inžinjera i radnika",
      }[locale],
    },
    {
      value: "44+",
      description: {
        en: "Distributors in the EU",
        de: "Distributoren in der EU",
        bs: "Distributera u EU",
      }[locale],
    },
    {
      value: "3250+",
      description: {
        en: "Successful projects",
        de: "Erfolgreiche Projekte",
        bs: "Uspješnih projekata",
      }[locale],
    },
  ];
}

const Stats = ({ className = "", locale }: StatsProps) => {
  const statsItems = getStatsItems(locale);

  return (
    <section className={`container  sm:px-10 lg:px-[8rem] ${className}`}>
      <div className="p-[20px] md:p-[25px] relative">
        {/** List */}
        <main className="grid gap-10 sm:gap-1 grid-cols-2 sm:grid-cols-3 bg-white p-10 px-2 sm:px-10 rounded-md drop-shadow-md">
          {statsItems?.map((item, idx) => (
            <div
              key={idx}
              className={`text-center ${
                idx === statsItems.length - 1 && "col-span-2 sm:col-span-1"
              }`}
            >
              <h2 className="text-btnColors-primary text-[28px] sm:text-[32px] md:text-[45px] xl:text-[56px] font-semibold">
                {item.value}
              </h2>
              <Text size="md">{item.description}</Text>
            </div>
          ))}
        </main>

        {/** Custom borders */}
        <CustomBorder position="top-right" />
        <CustomBorder position="bottom-left" />
      </div>
    </section>
  );
};

export default Stats;
