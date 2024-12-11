import { ProfileItemType } from "@/types";
import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";

type ProfileCardProps = {
  className?: string;
  profile: ProfileItemType;
};

const ProfileCard = ({ className = "", profile }: ProfileCardProps) => {
  return (
    <div className={`${className} text-center cursor-pointer group`}>
      <div className="bg-white  rounded-md">
        <Image
          src={profile.image}
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
          className="text-textColors-secondary group-hover:text-textColors-hover transition my-4"
        >
          {profile.name}
        </Title>
      </div>
    </div>
  );
};

export default ProfileCard;
