import React from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import NavLinks from "@/components/Header/NavLinks";

const Header = () => {
  return (
    <header className="fixed top-5 left-0 right-0 container bg-bgColors-primary rounded-xl py-5 px-6 z-[10]">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-5">
          <NavLinks />
          <Button variant="primary" dataTitle="Kontakt">
            Kontakt
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
