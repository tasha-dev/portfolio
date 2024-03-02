// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {containerType} from '@/types/uiComponent';
import {cn} from "@/lib/cn";

// Creating and exporting container component as default
export default function Container({children, size, className}:containerType):ReactNode {
    // Returning JSX
    return (
        <div
            className={cn(
                'mx-auto p-[20px]',
                (size === 'lg') ? 'max-w-[1200px]' : 'max-w-[600px]',
                className
            )}
        >
            {children}
        </div>
    );
}
