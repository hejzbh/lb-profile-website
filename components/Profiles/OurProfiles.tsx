import React from "react";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import ProfilesList from "./ProfilesList";
import { LocaleType } from "@/i18n-config";
import { API } from "@/lib/axios";
import { unstable_cache } from "next/cache";
import { CACHE_DURATION } from "@/lib/constants";

type OurProfilesType = {
  className?: string;
  title: string;
  description: string;
  locale: LocaleType;
};

const getProfileItems = unstable_cache(
  async (locale: LocaleType) => {
    const items = await API.get("/profiles" + `?locale=${locale}&populate=*`);

    return items?.data;
  },
  ["profile_items"],
  {
    revalidate: CACHE_DURATION,
  }
);

const OurProfiles = async ({
  className = "",
  title,
  description,
  locale,
}: OurProfilesType) => {
  const items = await getProfileItems(locale);

  return (
    <section className={`container ${className}`}>
      {/** Heading */}
      <div className="text-center mb-10">
        <Title variant="h2">{title}</Title>
        <Text size="md">{description}</Text>
      </div>

      {/** List */}
      <ProfilesList locale={locale} profileItems={items?.data || []} />
    </section>
  );
};

export default OurProfiles;
