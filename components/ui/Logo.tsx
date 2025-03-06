"use client";
import React from "react";
import Image from "next/image";
import darkLogo from "@/public/images/dark-logo.webp";
import lightLogo from "@/public/images/light-logo.webp";
import Link from "next/link";
import { useLocale } from "@/hooks/use-locale";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  imageClassName?: string;
};

const Logo = ({
  className = "",
  variant = "light",
  imageClassName = "",
}: LogoProps) => {
  const { locale } = useLocale();
  return (
    <Link
      className={`${className} active:opacity-80`}
      href={"/" + locale}
      title="/"
    >
      {" "}
      <Image
        src={variant === "light" ? lightLogo : darkLogo}
        className={`w-full min-w-[120px] max-w-[160px] md:min-w-[160px] ${imageClassName}`}
        alt="Logo"
        width={150}
        height={150}
      />
    </Link>
  );
};

export default Logo;
