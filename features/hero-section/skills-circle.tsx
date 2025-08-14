"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";

export function SkillsCircle() {
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return (<div className="flex items-center md:items-start justify-center">
                          <Skeleton className="w-70 h-70 md:w-90 md:h-90 rounded-full" />
                        </div>);
                        
    const skills = [
      SiReact,
      SiNodedotjs,
      SiTypescript,
      SiPython,
      SiDocker,
      SiPostgresql,
      SiMongodb,
      SiGraphql,
  ];


  // distance from center as percent of the container (adjust to move icons closer/further)
  const radiusPercent = 40;

  return (
     <div className="flex items-center md:items-start justify-center">
       <div className="relative w-70 h-70 md:w-90 md:h-90">
        {/* Center image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-28 h-28 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full overflow-hidden">
          <Image
            src="/photo-circle.png"
            alt="Profile"
            width={200}
            height={200}
            className="object-cover"
            priority
          />
        </div>
        <div className="relative w-full h-full animate-spin-slow">
          {/* Icons positioned using the radiusPercent variable */}
          {skills.map((Icon, index) => {
            const angle = (index / skills.length) * 2 * Math.PI;
            const xPercent = Math.cos(angle) * radiusPercent;        // e.g. 28.28
            const yPercent = Math.sin(angle) * radiusPercent;

            return (
              <div
                key={index}
                className="absolute flex items-center justify-center bg-white rounded-full shadow-lg w-12 h-12 md:w-12 md:h-12"
                style={{
                  left: `calc(50% + ${xPercent}%)`,
                  top:  `calc(50% + ${yPercent}%)`,
                  transform: "translate(-50%, -50%)"
                }}
                title={Icon.name}
              >
                <Icon
                  className="w-7 h-7 sm:w-7 sm:h-7 md:w-7 md:h-7"
                  style={{ color: "#0F68DF" }}
                />
              </div>
            );
          })}
        </div>
      </div>
     </div>
  );
}