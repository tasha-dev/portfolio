// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {titleType} from "@/types/uiComponent";
import {cn} from "@/lib/cn";

// Creating and exporting title component as default
export default function Title({tier, children, className}:titleType):ReactNode {
    // Conditional rendering
    if (tier === 1) {return <h1 className={cn("dark:text-white text-black scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl", className)}>{children}</h1>}
    else if (tier === 2) {return <h2 className={cn("dark:text-white text-black scroll-m-20 border-b pb-2 text-3xl font-normal tracking-tight first:mt-0", className)}>{children}</h2>}
    else if (tier === 3) {return <h3 className={cn("dark:text-white text-black scroll-m-20 text-2xl font-normal tracking-tight", className)}>{children}</h3>}
    else {return <h4 className={cn("dark:text-white text-black scroll-m-20 text-xl font-light tracking-tight", className)}>{children}</h4>}
}