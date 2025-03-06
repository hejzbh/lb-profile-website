import { LocaleType } from "@/i18n-config";
import { API } from "@/lib/axios";
import { CACHE_DURATION } from "@/lib/constants";
import { ProfileItemType } from "@/types";
import { unstable_cache } from "next/cache";
import React from "react";

const getProfileDetails = unstable_cache(
  async (locale: LocaleType) => {
    const details = await API.get(
      "/profiles" + `?locale=${locale}&populate=*`,
      {
        params: {
          filters: {
            slug: "pcd-82-md",
          },
        },
      }
    );

    return details?.data?.data && details?.data.data[0];
  },
  ["profile_items"],
  {
    revalidate: CACHE_DURATION,
  }
);

type Props = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

const ProfileDetailsPage = async ({ params }: Props) => {
  const { locale } = await params;
  const profileDetails: ProfileItemType = await getProfileDetails(locale);

  if (!profileDetails) return null;

  return <div>ProfileDetailsPage</div>;
};

export default ProfileDetailsPage;
