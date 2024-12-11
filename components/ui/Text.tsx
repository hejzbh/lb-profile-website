"use client";
import React from "react";

type TextProps = {
  className?: string;
  variant?: "p" | "span";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "biggerSm";
  children: React.ReactNode;
  withoutDefaultClass?: boolean;
};

const sizeClasses = {
  xs: "text-[10px] sm:text-[12px] md:text-[14px]",
  sm: "text-[13px] sm:text-[14px] md:text-[14px]",
  md: "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]",
  lg: "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]",
  xl: "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]",
  biggerSm: "text-[16px] sm:text-[14px] md:text-[15px]",
};

const Text = ({
  className = "",
  variant = "p",
  size = "sm",
  children,
  withoutDefaultClass,
}: TextProps) => {
  const Element = variant;

  return (
    <Element
      className={` ${!withoutDefaultClass && "text-textColors-primary"} ${
        sizeClasses[size]
      } ${className}`}
    >
      {children}
    </Element>
  );
};

export default Text;
