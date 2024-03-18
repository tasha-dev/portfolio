// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {paragraphType} from '@/types/uiComponent';
import {cn} from "@/lib/cn";

// Creating and exporting paragraph component as default
export default function Paragraph({children, className}:paragraphType):ReactNode {
    // Returning JSX
    return (
        <p className={cn(
            "leading-7 [&:not(:first-child)]:mt-6 dark:text-white text-black",
            (className) ? className : false
        )}>
            {children}
        </p>
    );
}