"use client";
import React from "react";

type ButtonProps = {
  className?: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  dataTitle?: string;
};

const variantClasses = {
  primary:
    "bg-btnColors-primary text-white hover:text-btnColors-primary hover:shadow-white hover:before:bg-white hover:after:bg-white",
  secondary:
    "bg-btnColors-secondary text-textColors-primary hover:text-white hover:shadow-white hover:before:bg-btnColors-primary hover:after:bg-btnColors-primary",
};

const Button = ({
  className = "",
  variant,
  children,
  dataTitle = "Click",
}: ButtonProps) => {
  return (
    <button
      title={dataTitle}
      className={`py-3 px-7 rounded-md transition-all duration-300 ease-in-out hover:md:opacity-90 relative overflow-hidden  min-w-40  shadow-2xl  before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500  hover:before:w-2/4  hover:after:w-2/4 after:z-[-1] before:z-[-1]  ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
