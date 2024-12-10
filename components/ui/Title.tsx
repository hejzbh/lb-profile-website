"use client";
import React from "react";
import { Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({
  subsets: ["latin-ext"],
});

type TitleProps = {
  className?: string;
  variant: "h1" | "h2" | "h3";
  children: React.ReactNode;
};

const Title = ({ className = "", variant = "h2", children }: TitleProps) => {
  const Element = variant;

  return (
    <Element
      className={`text-textColors-title uppercase text-[56px] font-semibold ${font.className} ${className}`}
    >
      {children}
    </Element>
  );
};

export default Title;
