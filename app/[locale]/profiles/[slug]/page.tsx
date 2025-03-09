import { LocaleType } from "@/i18n-config";
import { API } from "@/lib/axios";
import { CACHE_DURATION } from "@/lib/constants";
import { ProfileItemType } from "@/types";
import { unstable_cache } from "next/cache";
import React from "react";
import Slider from "@/components/ui/Slider";
import Title from "@/components/ui/Title";
import RichText from "@/components/RichText";
import { Metadata } from "next";

const getProfileDetails = unstable_cache(
  async (locale: LocaleType, slug: string) => {
    const details = await API.get(
      "/profiles" + `?locale=${locale}&populate=*`,
      {
        params: {
          filters: {
            slug,
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
    slug: string;
  }>;
};
export async function generateMetadata({
  params,
}: {
  params: Props["params"];
}): Promise<Metadata> {
  const { slug } = await params;

  const ogImage =
    "https://lyctum.com/wp-content/uploads/2018/03/lb-profile.png";

  return {
    title: `LB Profil - ${slug.toUpperCase().split("-").join(" ")}`,

    openGraph: {
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "LB Profile",
        },
      ],
    },
  };
}

const ProfileDetailsPage = async ({ params }: Props) => {
  const { locale, slug } = await params;
  const profileDetails: ProfileItemType = await getProfileDetails(locale, slug);

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

      <div className="container mx-auto px-2 py-10">
        {profileDetails?.description && (
          <RichText
            className="mt-10 mb-[3rem]"
            content={profileDetails?.description}
          />
        )}
        <Title variant="h2" size="lg">
          {profileDetails?.title_two}
        </Title>
        {profileDetails?.description_two && (
          <RichText
            className="mt-5"
            content={profileDetails?.description_two}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileDetailsPage;
