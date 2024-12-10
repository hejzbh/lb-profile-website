import React from "react";
import Image from "next/image";
import darkLogo from "@/public/images/dark-logo.webp";
import lightLogo from "@/public/images/light-logo.webp";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

const Logo = ({ className = "", variant = "light" }: LogoProps) => {
  return (
    <Image
      src={variant === "light" ? lightLogo : darkLogo}
      className={`w-full max-w-[160px] ${className}`}
      alt="Logo"
      width={150}
      height={150}
    />
  );
};

export default Logo;
