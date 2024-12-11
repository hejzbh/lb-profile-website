import { LocaleType } from "@/i18n-config";
import React from "react";
import Text from "@/components/ui/Text";

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
    <section className={`container px-5 sm:px-10 lg:px-[8rem] ${className}`}>
      <div className="p-[20px] relative">
        {/** List */}
        <main className="grid gap-10 sm:gap-1 sm:grid-cols-3 bg-white p-10 px-0 sm:px-10 rounded-md drop-shadow-md">
          {statsItems?.map((item, idx) => (
            <div key={idx} className="text-center">
              <h2 className="text-btnColors-primary text-[32px] md:text-[45px] xl:text-[56px] font-semibold">
                {item.value}
              </h2>
              <Text size="lg">{item.description}</Text>
            </div>
          ))}
        </main>

        {/** Custom borders */}
        <div className="absolute top-0 right-0 w-[137px] h-[49px] border-t-[10px] border-bgColors-hover border-r-[10px]"></div>
        <div className="absolute bottom-0 left-0 w-[137px] h-[49px] border-b-[10px] border-bgColors-hover border-l-[10px]"></div>
      </div>
    </section>
  );
};

export default Stats;
