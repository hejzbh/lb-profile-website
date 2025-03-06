import { ProfileItemType } from "@/types";
import React, { memo } from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Link from "next/link";
import { profilesPath } from "@/lib/paths";
import { LocaleType } from "@/i18n-config";

type ProfileCardProps = {
  className?: string;
  profile: ProfileItemType;
  locale: LocaleType;
};

const ProfileCard = memo(
  ({ className = "", profile, locale }: ProfileCardProps) => {
    const profilePhoto = profile?.gallery
      ? process.env.NEXT_PUBLIC_BASE_URL + profile?.gallery[0]?.url
      : "/images/profile.webp";

    return (
      <Link
        title={profile?.title}
        href={profilesPath(locale, profile.slug)}
        className={`${className} block text-center cursor-pointer group active:opacity-60 transition`}
      >
        <div className="bg-white  rounded-md">
          <Image
            src={profilePhoto}
            loading="lazy"
            width={880}
            height={550}
            alt="Profile"
            className="w-full h-[300px] rounded-md object-contain"
          />
        </div>

        <div>
          <Title
            variant="h2"
            size="sm"
            className="!text-textColors-secondary  group-hover:md:!text-textColors-hover transition my-4"
          >
            {profile.title}
          </Title>
        </div>
      </Link>
    );
  }
);

export default ProfileCard;
