// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {headerItemType} from "@/type";
import Link from "next/link";

// Creating ad exporting header item component as default
export default function HeaderItem({href, className, children}:headerItemType):ReactNode {
    // Returning JSX
    return (
        <li className={className}>
            <Link
                className={'lg:text-[16px] text-[14px] font-medium transition-all duration-500 text-white'}
                href={href}
            >
                {children}
            </Link>
        </li>
    );
}