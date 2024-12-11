import React from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import NavLinks from "@/components/Header/NavLinks";
import MobileSidebar from "@/components/Header/MobileSidebar";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";

const Header = () => {
  return (
    <header className="fixed top-5 left-0 right-0 container bg-bgColors-primary rounded-xl py-5 px-6 z-[10]">
      <div className="flex items-center justify-between">
        <Logo />

        {/**  Visible on large screens */}
        <div className="items-center space-x-5 hidden lg:flex">
          <NavLinks />
          <LocaleSwitcher />
          <Button variant="primary" dataTitle="Kontakt">
            Kontakt
          </Button>
        </div>

        {/** Visible on mobile */}
        <div className="flex space-x-3 lg:hidden">
          <LocaleSwitcher />
          <MobileSidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
