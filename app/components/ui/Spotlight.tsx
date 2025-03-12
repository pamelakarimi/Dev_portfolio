// 

"use client";
import React from "react";
import clsx from "clsx";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight: React.FC<SpotlightProps> = ({ className, fill = "white" }) => {
  return (
    <div
      className={clsx(
        "w- screen absolute rounded-full blur-[150px] opacity-80 mix-blend-lighten z-1 bg-[#13162d]",
        className
      )}
      style={{ backgroundColor: fill, width: "900px", height: "400px" }}
    />
  );
};
