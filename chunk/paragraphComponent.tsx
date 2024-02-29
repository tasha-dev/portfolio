// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

// Defining type of props
interface propsType {
    children: ReactNode;
    noMargin?: boolean;
    className?: string;
}

// Creating and exporting paragraph component as default
export default function ParagraphComponent({noMargin = false, children, className}:propsType):ReactNode {
    // Returning JSX
    return (
        <p className={twMerge(
            'dark:text-light200 text-dark200 lg:text-[15px] text-[12px] font-normal',
            (noMargin) ? undefined : 'lg:mb-[12px] mb-[10px]',
            className
        )}>
            {children}
        </p>
    );
}