"use client";
import React from "react";
import Text from "./Text";
import { useLocale } from "@/hooks/use-locale";
import { useRouter } from "next/navigation";
import { contactUsPath } from "@/lib/paths";

type ButtonProps = {
  className?: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  dataTitle?: string;
  ref?: any; // eslint-disable-line
  scrollBottom?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  contactBtn?: boolean;
  href?: string;
};

const variantClasses = {
  primary:
    "bg-btnColors-primary text-white border-[1px] border-btnColors-primary hover:md:text-btnColors-primary hover:md:shadow-white hover:before:md:bg-white hover:md:after:bg-white",
  secondary:
    "bg-btnColors-secondary text-textColors-primary hover:md:text-white hover:md:shadow-white hover:md:before:bg-btnColors-primary hover:md:after:bg-btnColors-primary",
};

const Button = ({
  className = "",
  variant,
  children,
  disabled,
  onClick = () => {},
  dataTitle = "Click",
  ref,
  contactBtn,
  scrollBottom,
  href,
}: ButtonProps) => {
  const { locale } = useLocale();
  const router = useRouter();

  return (
    <button
      ref={ref}
      onClick={() => {
        onClick();

        if (scrollBottom) {
          window.scrollTo({
            top: 700,
            behavior: "smooth",
          });
        }

        if (href) {
          router.push(href);
        }

        if (contactBtn) {
          router.push(contactUsPath(locale));
        }
      }}
      disabled={disabled}
      title={dataTitle}
      className={`py-3 px-7 disabled:opacity-70 rounded-md transition-all active:opacity-60 duration-200 ease-in-out hover:md:opacity-90 relative overflow-hidden  min-w-40  shadow-2xl  md:before:absolute md:before:left-0 md:before:top-0 md:before:h-full md:before:w-0 md:before:duration-300 md:after:absolute md:after:right-0 md:after:top-0 md:after:h-full md:after:w-0 md:after:duration-300  hover:md:before:w-2/4  hover:md:after:w-2/4 md:after:z-[-1] md:before:z-[-1]  ${variantClasses[variant]} ${className}`}
    >
      <Text withoutDefaultClass size="md">
        {children}
      </Text>
    </button>
  );
};

export default Button;
