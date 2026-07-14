// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/util";
import { ClassOnlyProps } from "@/type/component";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/logo.png";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

// Creating and exporting Logo component as default
export default function Logo({ className }: ClassOnlyProps) {
   // Defining variables
   const isAvailable: boolean = true;

   // Returning JSX
   return (
      <Tooltip>
         <TooltipTrigger
            render={
               <div
                  className={cn(
                     "relative inline-block",
                     isAvailable ? "text-green-500" : "text-destructive",
                     className,
                  )}
               >
                  <div className="absolute left-full top-0 -translate-1/2 rounded-full bg-background size-5" />
                  <div className="absolute left-full top-0 -translate-1/2 rounded-full bg-current size-3" />
                  <div className="absolute left-full top-0 -translate-1/2 rounded-full bg-current/50 size-4 animate-pulse" />
                  <Link href="/" className="text-transparent">
                     <Image
                        width={100}
                        height={100}
                        src={LogoImage.src}
                        alt="Logo"
                        className="size-9"
                     />
                  </Link>
               </div>
            }
         />
         <TooltipContent sideOffset={12}>
            {isAvailable ? "Available for Work" : "Unavailable For work"}
         </TooltipContent>
      </Tooltip>
   );
}
