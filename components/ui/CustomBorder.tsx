import React from "react";

type CustomBorderProps = {
  className?: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  borderColor?: string;
};

const CustomBorder = ({
  className = "",
  position,
  borderColor = "#EE3537",
}: CustomBorderProps) => {
  const getPositionStyles = () => {
    switch (position) {
      case "top-left":
        return "absolute top-0 left-0 w-[49px] h-[137px] border-t-[6px] border-l-[6px] md:border-t-[10px] md:border-l-[10px]";
      case "top-right":
        return "absolute top-0 right-0 w-[137px] h-[49px] border-t-[6px] border-r-[6px] md:border-t-[10px] md:border-r-[10px]";
      case "bottom-left":
        return "absolute bottom-0 left-0 w-[137px] h-[49px] border-b-[6px] border-l-[6px] md:border-b-[10px] md:border-l-[10px]";
      case "bottom-right":
        return "absolute bottom-0 right-0 w-[49px] h-[137px] border-b-[6px] border-r-[6px] md:border-b-[10px] md:border-r-[10px]";
      default:
        return "";
    }
  };

  return (
    <div>
      <div
        style={{ borderColor }}
        className={`${getPositionStyles()} ${className}`}
      ></div>
    </div>
  );
};

export default CustomBorder;
