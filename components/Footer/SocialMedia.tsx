import { SocialLinkType } from "@/types";
import React from "react";
import {
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";

type SocialMediaProps = {
  className?: string;
};

const socialMediaLinks: SocialLinkType[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/lbprofile.de/",
    Icon: FacebookIcon,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UC49Cq4fOTL-gB4LnAL012bQ",
    Icon: YoutubeIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lbprofile.deu/",
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/lb-profile-gmbh/",
    Icon: LinkedinIcon,
  },
];

const SocialMedia = ({ className = "" }: SocialMediaProps) => {
  return (
    <ul className={`flex items-center gap-6 ${className}`}>
      {socialMediaLinks?.map((link) => {
        const { Icon } = link;

        return (
          <li key={link.href}>
            <Link
              title={link.name}
              href={link.href}
              className="block rounded-full p-[10px] border-[1px] border-white/80 bg-white/10 transition hover:bg-bgColors-hover"
            >
              <Icon className="text-white w-6 h-6 md:w-7 md:h-7" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedia;
