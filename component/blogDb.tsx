// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import useDb from "@/hook/useDb";
import {blogType} from "@/types/db";
import Title from "@/component/ui/title";
import Blog from "@/component/blog";

// Creating and exporting blogs to render which are comming from db as default
export default function BlogDb():ReactNode {
    // Defining blogs coming from db
    const blogs = useDb<blogType[]>({path: '/blog'});

    // Returning JSX
    return (
        <div>
            {
                (!blogs.isLoading)
                    ? (blogs.data?.length !== 0)
                        ? (
                            <ul className={'flex flex-col gap-[20px]'}>
                                {
                                    blogs.data?.slice(0, 4).map((item, index) => (
                                        <Blog
                                            key={index}
                                            title={item.name}
                                            date={item.date}
                                            content={item.description}
                                        />
                                    ))
                                }
                            </ul>
                        ) : <Title className={'text-center'} tier={3}>There are no Blogs.</Title>
                    : (
                        <div>
                            <div className={'mb-[50px]'}>
                                <div className={'w-full h-[20px] bg-gray-500 animate-pulse mb-[10px]'} />
                                <div className={'w-[50%] h-[20px] bg-gray-500 animate-pulse'} />
                            </div>
                            <div className={'w-full h-[40px] bg-gray-500 animate-pulse'} />
                        </div>
                    )
            }
        </div>
    );
}