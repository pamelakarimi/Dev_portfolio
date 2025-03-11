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
        "absolute rounded-full blur-[150px] opacity-80 mix-blend-lighten z-0",
        className
      )}
      style={{ backgroundColor: fill, width: "400px", height: "400px" }}
    />
  );
};
