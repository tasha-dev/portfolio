// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {blogType} from "@/types/uiComponent";
import Link from "next/link";
import Title from "@/component/ui/title";
import Paragraph from "@/component/ui/paragraph";
import {formatISO9075} from 'date-fns';

// Creating and exporting blog component as default
export default function Blog({title, date, content}:blogType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link href={`/blog/${btoa(`${title}&${date}`)}`}>
                <Title tier={3}>{title}</Title>
                <Title tier={4}>{formatISO9075(new Date(date))}</Title>
                <Paragraph className={'line-clamp-2'}>{content}</Paragraph>
            </Link>
        </li>
    );
}