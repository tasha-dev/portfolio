// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {Plus} from "lucide-react";
import {PlusSvgDividerType} from "@/type";
import {cn} from "@/util";

// Creating and exporting diver with 2 plus svg icons as default
export default function PlusSvgDivider({position = "bottom"}:PlusSvgDividerType):ReactNode {
    // Returning JSX
    return (
        <>
            <Plus className={cn(
                'pointer-events-none absolute left-0 -translate-x-[50%] w-5 h-5 dark:text-white text-black lg:block hidden',
                (position == 'bottom')
                    ? 'bottom-0 translate-y-[50%]'
                    : 'top-0 -translate-y-[50%]'
            )} />
            <Plus className={cn(
                'pointer-events-none absolute right-0  translate-x-[50%] w-5 h-5 dark:text-white text-black lg:block hidden',
                (position == 'bottom')
                    ? 'bottom-0 translate-y-[50%]'
                    : 'top-0 -translate-y-[50%]'
            )} />
        </>
    );
}