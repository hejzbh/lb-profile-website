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
import Button from "../ui/Button";

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
            className="text-btnColors-primary  active:opacity-50"
          >
            <AlignJustifyIcon />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-bgColors-primary  rounded-l-3xl py-10 overflow-y-scroll">
          <SheetHeader className="h-full flex flex-col justify-center items-center py-5">
            <SheetTitle></SheetTitle>
            <NavLinks direction="col" />
            <Button
              variant="primary"
              contactBtn
              dataTitle="Kontakt"
              className="!mt-10"
            >
              Kontakt
            </Button>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
