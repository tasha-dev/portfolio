"use client";

import { useEffect, useState } from "react";

export function useScrolled(threshold: number = 10): boolean {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      setScrolled(window.scrollY > threshold);

      let ticking = false;

      const handleScroll = () => {
         if (!ticking) {
            window.requestAnimationFrame(() => {
               setScrolled(window.scrollY > threshold);
               ticking = false;
            });
            ticking = true;
         }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [threshold]);

   return scrolled;
}
