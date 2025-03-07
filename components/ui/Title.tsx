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
  sm: "text-[1.25rem] md:text-[1.4375rem] lg:text-[1.5rem]",
  lg: "text-[1.875rem] md:text-[2.4375rem] lg:text-[2.875rem]",
  xl: "text-[2.125rem] md:text-[2.9125rem] lg:text-[3.8em]",
  "2xl": "text-[2.125rem] md:text-[2.9125rem] lg:text-[4.2em]",
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
