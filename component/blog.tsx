// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";
import {BlogsType} from "@/type";
import {Button} from "@/component/ui/button";
import {btoa} from 'abab';

// Creating and exporting blog component as default
export default function Blog({title,description, image}:BlogsType):ReactNode {
    // Returning JSX
    return (
        <Link href={`/blog/${btoa(title.toLowerCase())}`}>
            {
                (image)
                    ? (
                        <Image
                            className={'block object-cover w-full h-[200px] rounded-xl mb-3'}
                            src={image}
                            alt={title}
                            width={200}
                            height={150}
                        />
                    ) : (
                        <div
                            className={'bg-gradient-to-bl w-full h-[200px] from-pink-600 to-violet-600 mb-3 rounded-xl'}
                        />
                    )
            }
            <h4 className={'truncate'}>{title}</h4>
            <p className={'line-clamp-2'}>{description}</p>
            <Button className={'mt-3'} tabIndex={-1}>Read Now</Button>
        </Link>
    );
}