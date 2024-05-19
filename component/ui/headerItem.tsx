// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {headerItemType} from "@/type";
import Link from "next/link";
import {cn} from "@/util/cn";

// Creating ad exporting header item component as default
export default function HeaderItem({href, className, active, children}:headerItemType):ReactNode {
    // Returning JSX
    return (
        <li className={cn('relative', className)}>
            <Link
                data-active={active}
                className={'lg:text-[16px] text-[14px] font-medium text-lavenderGray transition-all duration-500 data-[active="true"]:text-white data-[active="false"]:text-lavenderGray'}
                href={href}
            >
                {children}
            </Link>
            <div
                data-active={active}
                className={'w-[7px] h-[7px] absolute bottom-[-27px] left-[50%] -translate-x-[50%] bg-white rounded-full translate-y-[50%] transition-all duration-500 data-[active="true"]:opacity-100 data-[active="false"]:opacity-0'}
            />
        </li>
    );
}