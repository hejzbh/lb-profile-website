import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import NavLinks from "./NavLinks";
import { AlignJustifyIcon } from "lucide-react";

type MobileSidebarProps = {
  className?: string;
};

const MobileSidebar = ({ className = "" }: MobileSidebarProps) => {
  return (
    <div className={`${className}`}>
      <Sheet>
        <SheetTrigger asChild className="p-1 pr-0">
          <button
            title="Otvori/Open"
            className="text-textColors-active active:text-textColors-secondary"
          >
            <AlignJustifyIcon />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-bgColors-primary flex flex-col justify-center items-center rounded-l-3xl">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <NavLinks direction="col" />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
