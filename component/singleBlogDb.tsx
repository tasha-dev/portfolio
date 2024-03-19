// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import useDb from "@/hook/useDb";
import {usePathname} from "next/navigation";
import {blogType} from "@/types/db";
import Title from "@/component/ui/title";
import {formatISO9075} from "date-fns";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

// Creating and exporting single blog pages rendering part, as default
export default function SingleBlogDb():ReactNode {
    // Defining name of the blog
    const pathname = usePathname();
    const breakdownOfPathname = pathname.split('/');
    const titleName = atob(breakdownOfPathname[2]).split('&')[0];

    // Defining blog
    const blogs = useDb<blogType[]>({path: '/blog'});
    const blog = blogs.data?.find(item => item.name === titleName);

    // Returning JSX
    return (
        <div>
            {
                (blogs.isLoading)
                    ? (
                        <div>
                            <div className={'mb-[50px]'}>
                                <div className={'w-full h-[20px] bg-gray-500 animate-pulse mb-[10px]'} />
                                <div className={'w-[50%] h-[20px] bg-gray-500 animate-pulse'} />
                            </div>
                            <div className={'w-full h-[1000px] bg-gray-500 animate-pulse'} />
                        </div>
                    ) : (
                        <div>
                            <div className={'mb-[50px]'}>
                                <Title tier={3}>{blog?.name}</Title>
                                <Title tier={4}>{blog && formatISO9075(new Date(blog.date))}</Title>
                            </div>
                            <ReactMarkdown className={'markdown'} remarkPlugins={[gfm]}>{blog?.content.replaceAll(`<br>`, '\n')}</ReactMarkdown>
                        </div>
                    )
            }
        </div>
    );
}