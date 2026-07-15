// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import LogoLoop from "@/component/logoLoop";
import skills from "@/data/skills";
import { ClassOnlyProps } from "@/type/component";

// Creating and exporting Skills section component as default
export default function Skills({ className }: ClassOnlyProps) {
   // Returning JSX
   return (
      <section className={className}>
         <main className="max-w-2xl mx-auto overflow-hidden">
            <LogoLoop
               logos={skills.map((item) => {
                  return {
                     ...item,
                     className: item.invertOnDark ? "dark:invert" : undefined,
                  };
               })}
               speed={100}
               direction="left"
               logoHeight={60}
               gap={60}
               hoverSpeed={0}
               scaleOnHover
               fadeOut
               fadeOutColor="var(--background)"
               ariaLabel="Skills"
            />
         </main>
      </section>
   );
}
