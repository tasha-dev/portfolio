// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

// Defining type of props
interface propsType {
    children: ReactNode;
    tier: 1 | 2 | 3;
    className?: string;
    noMargin?: boolean;
}

// Creating and exporting title component as default
export default function TitleComponent({children, tier, className, noMargin = false}:propsType):ReactNode {
    // Conditional rendering
    if (tier === 1) {
        return (
            <h1 className={twMerge(
                'lg:text-[24px] text-[20px] font-bold dark:text-light text-dark',
                (noMargin) ? undefined : 'lg:mb-[15px] mb-[12px]',
                className
            )}>
                {children}
            </h1>
        );
    } else if (tier === 2) {
        return (
            <h2 className={twMerge(
                'lg:text-[20px] text-[18px] font-normal dark:text-light500 text-dark500',
                (noMargin) ? undefined : 'lg:mb-[12px] mb-[10px]',
                className
            )}>
                {children}
            </h2>
        );
    } else {
        return (
            <h3 className={twMerge(
                'lg:text-[18px] text-[14px] font-light dark:text-light200 text-dark200',
                (noMargin) ? undefined : 'lg:mb-[10px] mb-[8px]',
                className
            )}>
                {children}
            </h3>
        );
    }
}