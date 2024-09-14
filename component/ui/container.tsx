// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {ContainerType} from "@/type";
import {cn} from "@/util";

// Creating and exporting container component as default
export default function Container({size = 'lg', children, className}:ContainerType):ReactNode {
    // Returning JSX
    return (
        <div
            className={cn(
                'p-3 mx-auto',
                (size === 'lg') ? 'max-w-[1280px]' : 'max-w-[900px]',
                className
            )}
        >
            {children}
        </div>
    );
}