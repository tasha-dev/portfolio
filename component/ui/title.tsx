// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {titleType} from "@/types/uiComponent";

// Creating and exporting title component as default
export default function Title({tier, children}:titleType):ReactNode {
    // Conditional rendering
    if (tier === 1) {return <h1 className="dark:text-white text-black scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">{children}</h1>}
    else if (tier === 2) {return <h2 className="dark:text-white text-black scroll-m-20 border-b pb-2 text-3xl font-normal tracking-tight first:mt-0">{children}</h2>}
    else if (tier === 3) {return <h3 className="dark:text-white text-black scroll-m-20 text-2xl font-normal tracking-tight">{children}</h3>}
    else {return <h4 className="dark:text-white text-black scroll-m-20 text-xl font-light tracking-tight">{children}</h4>}
}