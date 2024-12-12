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
  xs: "text-[0.625rem] sm:text-[0.75rem] md:text-[0.875rem]",
  sm: "text-[0.8125rem] sm:text-[0.875rem] md:text-[0.9rem]",
  md: "text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem]",
  lg: "text-[0.90625rem] sm:text-[1rem] md:text-[1.125rem]",
  xl: "text-[1.125rem] sm:text-[1.25rem] md:text-[1.75rem] lg:text-[1.9375rem]",
  biggerSm: "text-[1rem] sm:text-[0.875rem] md:text-[0.9375rem]",
};

const Text = ({
  className = "",
  variant = "p",
  size = "md",
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
