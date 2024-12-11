"use client";
import React from "react";
import { Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({
  subsets: ["latin-ext"],
});

type TitleProps = {
  className?: string;
  variant: "h1" | "h2" | "h3";
  size?: "sm" | "lg" | "xl";
  children: React.ReactNode;
};

const fontSizesClasses = {
  sm: "text-[20px] md:text-[23px] lg:text-[24px]",
  lg: "text-[30px] md:text-[39px] lg:text-[46px]",
  xl: "text-[34px] md:text-[45px] lg:text-[56px]",
};

const Title = ({
  className = "",
  variant = "h2",
  children,
  size = "lg",
}: TitleProps) => {
  const Element = variant;

  return (
    <Element
      className={`text-textColors-title  font-semibold ${fontSizesClasses[size]} ${font.className} ${className}`}
    >
      {children}
    </Element>
  );
};

export default Title;
