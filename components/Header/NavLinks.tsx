"use client";
import React from "react";
import Link from "next/link";
import Dropdown from "@/components/ui/Dropdown";
//import { useLocale } from "@/hooks/use-locale";
import Text from "@/components/ui/Text";

const links = [
  { name: "Home", href: "/" },
  {
    name: "Uber Uns",
    href: "/about",
    sublinks: [
      { name: "Web Development", href: "/services/web" },
      { name: "Mobile Development", href: "/services/mobile" },
      { name: "UI/UX Design", href: "/services/design" },
    ],
  },
  {
    name: "PVC Profil",
    sublinks: [
      { name: "Web Development", href: "/services/web" },
      { name: "Mobile Development", href: "/services/mobile" },
      { name: "UI/UX Design", href: "/services/design" },
    ],
  },
  { name: "Wo kaufen", href: "/" },
  { name: "Folien", href: "/" },
  {
    name: "Kataloge",
    href: "/",
    sublinks: [
      { name: "Web Development", href: "/services/web" },
      { name: "Mobile Development", href: "/services/mobile" },
      { name: "UI/UX Design", href: "/services/design" },
      { name: "UI/UX Arch", href: "/services/design" },
      { name: "UI/UX Test", href: "/services/design" },
    ],
  },
  {
    name: "Actuelles",
    href: "/",
  },
];

type NavLinksProps = {
  className?: string;
  direction?: "row" | "col";
};

const NavLinks = ({ className = "", direction = "row" }: NavLinksProps) => {
  //const locale = useLocale();

  return (
    <nav className={`${className}`}>
      <ul
        className={`flex ${
          direction === "row" ? "flex-row space-x-1" : "flex-col space-y-2"
        }`}
      >
        {links.map((link, index) => {
          const hasSublinks = link?.sublinks && link?.sublinks?.length;

          return (
            <li key={index} className="relative">
              {hasSublinks ? (
                <Dropdown
                  triggerClassName="p-2 px-4"
                  trigger={
                    <div className="flex items-center">
                      <Text
                        size="biggerSm"
                        className="text-white group-hover:text-textColors-hover transition"
                      >
                        {link.name}
                      </Text>
                    </div>
                  }
                  items={link.sublinks}
                  dropdownClassName="bg-white rounded-lg"
                />
              ) : (
                <Link
                  href={link.href || "#"}
                  className="block p-2 px-4 text-white"
                >
                  <Text
                    size="biggerSm"
                    className="text-white hover:text-textColors-hover transition"
                  >
                    {link.name}
                  </Text>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
