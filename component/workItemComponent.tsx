// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import Link from "next/link";
import ParagraphComponent from "@/chunk/paragraphComponent";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    startDate: string;
    endDate: string;
    name: string;
    children: string;
    tech: string[];
    link?: string;
}

// Creating and exporting work item component as default
export default function WorkItemComponent({children, endDate, startDate, name, tech, link}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={'grid lg:grid-cols-4 grid-cols-1 gap-[10px] group'}>
            <div>
                <TitleComponent noMargin tier={3}>{startDate}</TitleComponent>
                <TitleComponent noMargin tier={3}>{endDate}</TitleComponent>
            </div>
            <div className={'lg:col-span-3 col-span-1'}>
                {
                    (link)
                        ? (
                            <Link href={link}>
                                <TitleComponent tier={1} className={'flex items-center justify-between flex-wrap'}>
                                    {name}
                                    <IconComponent name={'arrow-top-right'} size={30} />
                                </TitleComponent>
                            </Link>
                        ) : <TitleComponent tier={1}>{name}</TitleComponent>
                }
                <ParagraphComponent>{children}</ParagraphComponent>
                <ul className={'list-disc flex gap-[30px] flex-wrap ml-[20px]'}>
                    {
                        tech.map((item, index) => (
                            <li className={'lg:text-[12px] text-[10px] dark:text-light200 text-dark200'} key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}