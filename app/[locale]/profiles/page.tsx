import OurProfiles from "@/components/Profiles";
import { LocaleType } from "@/i18n-config";
import { API } from "@/lib/axios";
import { CACHE_DURATION } from "@/lib/constants";
import { HomepageText } from "@/types";
import { unstable_cache } from "next/cache";
import React from "react";

type ProfilesProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

const getHomeContent = unstable_cache(
  async (locale: LocaleType) => {
    const response = await API.get("/home" + `?locale=${locale}`);

    return response?.data?.data;
  },
  ["global_content"],
  {
    revalidate: CACHE_DURATION,
  }
);

const ProfilesPage = async ({ params }: ProfilesProps) => {
  const { locale } = await params;
  const text: HomepageText = await getHomeContent(locale);
  return (
    <div className="my-40 py-20">
      <OurProfiles
        title={text.produkte_title}
        description={text.produkte_description}
        locale={locale}
      />
    </div>
  );
};

export default ProfilesPage;
