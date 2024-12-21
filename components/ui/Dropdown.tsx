"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Text from "./Text";

type DropdownProps = {
  trigger: React.ReactNode;
  items: {
    name: string;
    href?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
  }[];
  className?: string;
  dropdownClassName?: string;
  triggerClassName?: string;
  includeArrow?: boolean;
};

const Dropdown = ({
  trigger,
  items,
  className = "",
  dropdownClassName = "",
  triggerClassName = "",
  includeArrow = true,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (state: boolean) => {
    setIsOpen(state);
  };

  return (
    <div
      className={`relative ${className}`}
      onClick={() => {
        toggleDropdown(!isOpen);
      }}
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
    >
      <div
        className={`flex items-center justify-center text-center cursor-pointer group hover:text-textColors-hover  ${triggerClassName}`}
      >
        {trigger}

        {includeArrow && (
          <ChevronDown
            className={`w-4 h-4 mt-1 ml-1 transition text-white group-hover:text-textColors-hover ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>
      <ul
        className={`absolute left-[-15%]  z-[10] min-w-[150px] mt-2 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } ${dropdownClassName}`}
        style={{ maxHeight: isOpen ? "400px" : "0px" }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              if (item.onClick) {
                item.onClick();
                setIsOpen(false);
              }
            }}
            className={`flex px-2 space-x-2 cursor-pointer items-center rounded-md text-left hover:bg-bgColors-hover/10 hover:text-textColors-hover text-textColors-primary ${item.className}`}
          >
            {item.children}
            {item?.href ? (
              <Link
                className={`px-2 py-3 md:py-2 ${item.children && "pl-0"}`}
                href={item.href}
              >
                <Text withoutDefaultClass size="sm">
                  {item.name}
                </Text>
              </Link>
            ) : (
              <div className={`px-2 py-3 md:py-2 ${item.children && "pl-0"}`}>
                <Text withoutDefaultClass size="sm">
                  {item.name}
                </Text>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
