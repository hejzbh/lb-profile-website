"use client";
import React from "react";
import Text from "./Text";

type ButtonProps = {
  className?: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  dataTitle?: string;
  ref?: any; // eslint-disable-line
  onClick?: () => void;
  disabled?: boolean;
};

const variantClasses = {
  primary:
    "bg-btnColors-primary text-white border-[1px] border-btnColors-primary hover:text-btnColors-primary hover:shadow-white hover:before:bg-white hover:after:bg-white",
  secondary:
    "bg-btnColors-secondary text-textColors-primary hover:text-white hover:shadow-white hover:before:bg-btnColors-primary hover:after:bg-btnColors-primary",
};

const Button = ({
  className = "",
  variant,
  children,
  disabled,
  onClick = () => {},
  dataTitle = "Click",
  ref,
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      title={dataTitle}
      className={`py-3 px-7 disabled:opacity-70 rounded-md transition-all duration-200 ease-in-out hover:md:opacity-90 relative overflow-hidden  min-w-40  shadow-2xl  before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-300 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-300  hover:before:w-2/4  hover:after:w-2/4 after:z-[-1] before:z-[-1]  ${variantClasses[variant]} ${className}`}
    >
      <Text withoutDefaultClass size="md">
        {children}
      </Text>
    </button>
  );
};

export default Button;
