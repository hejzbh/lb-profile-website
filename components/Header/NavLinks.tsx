import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/NavigationMenu";
import Link from "next/link";

type NavLinksProps = {
  className?: string;
};

const NavLinks = ({ className = "" }: NavLinksProps) => {
  return (
    <NavigationMenu className={`${className}`}>
      <NavigationMenuList>
        {/** PVC PROFILE */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">
            PVC Profile
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-4 md:w-[200px]">
              <li>PCD 70 MD</li>
              <li>PCD 82 MD</li>
              <li>PCD 82 XT</li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={"text-white"}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
