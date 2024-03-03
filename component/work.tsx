// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {workType} from "@/types/uiComponent";
import Title from "@/component/ui/title";
import Link from "next/link";
import {ChevronRight} from "lucide-react";
import Paragraph from "@/component/ui/paragraph";
import List from "@/component/ui/list";

// Creating and exporting work component as default
export default function Work({date, link, name, children, stack}:workType):ReactNode {
    // Returning JSX
    return (
        <div className={'grid lg:grid-cols-3 gap-[20px]'}>
            <div>
                <div>
                    <Title tier={4}>{date.start}</Title>
                    <Title tier={4}>{date.end}</Title>
                </div>
                <List>
                    {
                        stack.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </List>
            </div>
            <div className={'col-span-2'}>
                <Link href={link} className={'mb-[20px]'}>
                    <Title tier={4} className={'flex items-center justify-between gap-[20px] flex-wrap'}>
                        {name}
                        <ChevronRight size={20} color={'currentColor'} />
                    </Title>
                </Link>
                <Paragraph>{children}</Paragraph>
            </div>
        </div>
    );
}