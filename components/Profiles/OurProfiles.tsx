import React from "react";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import ProfilesList from "./ProfilesList";

type OurProfilesType = {
  className?: string;
};

const OurProfiles = ({ className = "" }: OurProfilesType) => {
  return (
    <section className={`container ${className}`}>
      {/** Heading */}
      <div className="text-center mb-10">
        <Title variant="h2">Einige unserer Profile</Title>
        <Text size="md">
          Wir extrudieren PVC profile für PVC-Fenster und -Türen. Fenster und
          Türen. LB Profile gmbh. LB Profile Doboj.
        </Text>
      </div>

      {/** List */}
      <ProfilesList />
    </section>
  );
};

export default OurProfiles;
