import { LocaleType } from "@/i18n-config";
import { API } from "@/lib/axios";
import { CACHE_DURATION } from "@/lib/constants";
import { ProfileItemType } from "@/types";
import { unstable_cache } from "next/cache";
import React from "react";
import Slider from "@/components/ui/Slider";
import Title from "@/components/ui/Title";

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

  return (
    <div>
      <Slider
        autoplay
        blackOverlay
        urls={[
          "https://lbprofile.com/wp-content/uploads/2022/10/PCD-82XT-SLIDER-image-15376x440-1.jpg",
          "https://lbprofile.com/wp-content/uploads/2022/10/PCD-82XT-SLIDER-image-15376x440-1.jpg",
          "https://lbprofile.com/wp-content/uploads/2022/10/PCD-82XT-SLIDER-image-15376x440-1.jpg",
        ]}
        className="flex items-center justify-center h-[40dvh] md:h-[50dvh]"
      >
        <div
          style={{ backdropFilter: "blur(10px)" }}
          className="py-2 px-8 rounded-lg mt-10"
        >
          <Title variant="h1" size="xl">
            {profileDetails?.title}
          </Title>
        </div>
      </Slider>
    </div>
  );
};

export default ProfileDetailsPage;
