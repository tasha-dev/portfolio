// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { Button } from "@/component/ui/button";
import { ClassOnlyProps } from "@/type/component";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from "@/component/ui/tooltip";

// Creating and exporting ThemeToggler component
export function ThemeToggler({ className }: ClassOnlyProps) {
   // Defining hooks
   const { theme, setTheme } = useTheme();

   // Returning JSX
   return (
      <Tooltip>
         <TooltipTrigger
            render={
               <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={() => {
                     if (theme === "dark") setTheme("light");
                     else setTheme("dark");
                  }}
               >
                  <SunMoon />
               </Button>
            }
         />
         <TooltipContent>Toggle theme</TooltipContent>
      </Tooltip>
   );
}
