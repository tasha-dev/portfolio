// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {arrowLinkType} from "@/types/uiComponent";
import Link from "next/link";
import Title from "@/component/ui/title";
import {ArrowUpRight} from "lucide-react";

// Creating and exporting arrow link as default
export default function ArrowLink({link, title}:arrowLinkType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link className={'flex items-center justify-between flex-wrap'} href={link}>
                <Title tier={4}>{title}</Title>
                <ArrowUpRight size={20}/>
            </Link>
        </li>
    );
}