// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {headerLinkType} from '@/types/uiComponent';
import Link from 'next/link';

// Creating and exporting link component as default
export default function HeaderLink({children, link}:headerLinkType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className={'group relative h-[40px]'}>
            <span className={'text-[24px] font-light dark:text-white text-black dark:group-hover:text-black group-hover:text-white relative z-10 transition-all duration-500'}>{children}</span>
            <div className={'bottom-0 absolute left-0 rounded-r-[20px] rounded-l-[20px] dark:bg-white bg-black w-full h-[2px] group-hover:h-full group-hover:rounded-r-[5px] group-hover:rounded-l-[5px] group-hover:translate-x-[-17%] group-hover:w-[150%] -z-10 transition-all duration-500'} />
        </Link>
    );
}

