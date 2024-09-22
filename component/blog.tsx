// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";
import {BlogsType} from "@/type";
import dayjs from "dayjs";

// Creating and exporting blog component as default
export default function Blog({title, content, description, tags, date, image}:BlogsType):ReactNode {
    // Returning JSX
    return (
        <Link href={`/blog/${title}`}>
            {
                (image)
                    ? (
                        <Image
                            className={'block object-cover w-full h-[200px] rounded-xl mb-3 border dark:border-black/20 border-white/20'}
                            src={image}
                            alt={title}
                            width={200}
                            height={150}
                        />
                    ) : (<div className={'bg-gradient-to-bl w-full h-[200px] from-pink-600 to-violet-600 mb-3 rounded-xl border dark:border-black/20 border-white/20'}/>)
            }
            <h4 className={'truncate'}>{title}</h4>
            <div className={'flex gap-5 overflow-auto mb-10'}>
                {
                    tags.map((item, index) => (
                        <span className={'whitespace-nowrap'} key={index}>
                            {item}
                            {
                                (tags.length === index + 1)
                                    ? false
                                    : ","
                            }
                        </span>
                    ))
                }
            </div>
            <h6 className={'truncate'}>{dayjs(date).format('DD/MM/YYYY')}</h6>
            <p className={'line-clamp-2'}>{description}</p>
        </Link>
    );
}