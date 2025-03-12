// 
"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [paused, setPaused] = useState(false); // New state for pausing animation

  useEffect(() => {
    if (scrollerRef.current) {
      const scrollerContent = [...scrollerRef.current.children];

      // Duplicate content to create an infinite loop effect
      scrollerContent.forEach((item) => {
        const clonedItem = item.cloneNode(true) as HTMLElement;
        scrollerRef.current?.appendChild(clonedItem);
      });

      setStart(true);
    }
  }, []);

  // Toggle pause on click
  const handlePauseToggle = () => {
    setPaused(!paused);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden cursor-pointer", className)}
      onClick={handlePauseToggle} // Toggle pause on click
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap animate-scroll",
          start && "animate-scroll",
          paused && "paused-animation" // Apply pause class when needed
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <blockquote>
              <span className="relative z-20 text-sm md:text-lg text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  {/* <img src="/profile.svg" alt="profile" className="w-10 h-10 me-3 rounded-full" /> */}
                  <span className="text-xl text-white font-bold">{item.name}</span>
                  <span className="text-sm text-gray-400">{item.title}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
