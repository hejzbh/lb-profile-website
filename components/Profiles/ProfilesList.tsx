import React from "react";
import CustomBorder from "@/components/ui/CustomBorder";
import ProfileCard from "./ProfileCard";
import { ProfileItemType } from "@/types";
import { LocaleType } from "@/i18n-config";

type ProfilesListProps = {
  className?: string;
  profileItems: ProfileItemType[];
  locale: LocaleType;
};

const ProfilesList = async ({
  className = "",
  profileItems = [],
  locale,
}: ProfilesListProps) => {
  if (!profileItems) return null;

  return (
    <div className={`relative min-h-[30em] pt-[170px] ${className}`}>
      <div className="bg-bgColors-primary relative min-h-[30dvh]">
        <ul className="grid gap-[60px] max-w-[82%] md:max-w-[87%] mx-auto   grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {profileItems?.map((profile, idx) => (
            <li
              key={idx}
              className={`hover:md:translate-y-[-3%] transition ${
                idx === 0
                  ? "mt-[-140px]"
                  : idx === profileItems.length - 1
                  ? "md:mt-[-55px]  md:col-span-2 lg:col-span-1 lg:mt-[-140px]"
                  : "md:mt-[-140px]"
              }`}
            >
              <ProfileCard locale={locale} profile={profile} />
            </li>
          ))}
        </ul>

        <CustomBorder
          borderColor="white"
          position="top-left"
          className="top-5 left-5"
        />
        <CustomBorder
          borderColor="white"
          position="bottom-right"
          className="bottom-5 right-5"
        />
      </div>
    </div>
  );
};

export default ProfilesList;
