import React from "react";
import Image from "next/image";
import webImg from "@/public/images/web-2.webp";
import Logo from "@/components/ui/Logo";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import SocialMedia from "@/components/Footer/SocialMedia";

type FooterProps = {
  className?: string;
};

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer
      className={`bg-bgColors-primary pb-10 pt-[16rem] relative z-[1] ${className}`}
    >
      <main className="container">
        {/** TOP */}
        <div className="grid grid-cols-1 gap-10 md:gap-2 md:grid-cols-[40%,20%,20%,20%]">
          {/** About */}
          <div className=" max-w-[480px]">
            <Logo imageClassName="min-w-[180px] max-w-[250px] md:min-w-[270px]" />
            <Text className="text-white my-8">
              Über 60 Jahre Erfahrung, Kenntnis und Kenntnis internationaler
              Standards, technologischer Veränderungen und industrieller Systeme
              haben uns zum Ziel gesetzt, unseren geschätzten Kunden die besten
              und hochwertigsten Lösungen zu bieten.
            </Text>
            <Button variant="primary">Meh uber uns</Button>
          </div>

          {/** Links 1 */}
          <div>
            <Text className="text-white font-semibold" size="xl">
              NASLOV
            </Text>
            <ul className="space-y-6 mt-6">
              <li>
                <Text className="text-white">Home</Text>
              </li>
              <li>
                <Text className="text-white">Uber uns</Text>
              </li>
              <li>
                <Text className="text-white">PVC Profil</Text>
              </li>
              <li>
                <Text className="text-white">Wo kaufen</Text>
              </li>
            </ul>
          </div>

          {/** Links 2 */}
          <div>
            <Text className="text-white font-semibold" size="xl">
              NASLOV
            </Text>
            <ul className="space-y-6 mt-6">
              <li>
                <Text className="text-white">Folien</Text>
              </li>
              <li>
                <Text className="text-white">Kataloge</Text>
              </li>
              <li>
                <Text className="text-white">Actuelles</Text>
              </li>
              <li>
                <Text className="text-white">Sprache</Text>
              </li>
            </ul>
          </div>

          {/** Follow us */}
          <div>
            <Text className="text-white font-semibold" size="xl">
              FOLLOW US
            </Text>

            <SocialMedia className="mt-6 flex-row md:flex-col xl:flex-row" />
          </div>
        </div>

        {/** Line */}
        <div className="h-[2px] w-full bg-white/30 my-10"></div>

        {/** BOTTOM */}
        <div className="flex items-center justify-between">
          <Text className="text-white max-w-[700px]">
            All rights reserved &copy;{new Date().getFullYear()} LB. Profile
          </Text>
          <Button variant="primary">Zustimmen</Button>
        </div>
      </main>

      <Image
        src={webImg}
        fill
        className="z-[-2] object-cover"
        alt="Background"
        draggable={false}
      />
    </footer>
  );
};

export default Footer;
