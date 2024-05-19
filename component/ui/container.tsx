// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {containerType} from '@/type';
import {cn} from "@/util/cn";

// Creating and exporting container component as default
export default function Container({children, className}:containerType):ReactNode {
    // Returning JSX
    return (
        <div className={cn('p-[17px] max-w-[1241px] mx-auto', className)}>
            {children}
        </div>
    );
}