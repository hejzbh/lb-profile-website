import React from "react";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import ProfilesList from "./ProfilesList";

type OurProfilesType = {
  className?: string;
  title: string;
  description: string;
};

const OurProfiles = ({
  className = "",
  title,
  description,
}: OurProfilesType) => {
  return (
    <section className={`container ${className}`}>
      {/** Heading */}
      <div className="text-center mb-10">
        <Title variant="h2">{title}</Title>
        <Text size="md">{description}</Text>
      </div>

      {/** List */}
      <ProfilesList />
    </section>
  );
};

export default OurProfiles;
