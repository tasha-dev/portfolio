// Codes by mahdi tasha
'use client';
// Importing part
import {ReactNode, useEffect} from "react";
import {BlogPageType} from "@/type";
import DummyBlogs from "@/dummyData/blogs";
import Image from "next/image";
import dayjs from "dayjs";
import {btoa} from 'abab';

// Creating and exporting single blog page as default
export default function SingleBlogPage({params: {blogName}}:BlogPageType):ReactNode {
    // Defining blog to render
    const foundedBlogItem = DummyBlogs.find((item) => btoa(item.title.toLowerCase()) === blogName);

    // Condition rendering
    if (foundedBlogItem) {
        return (
            <>
                <div className={'flex items-center justify-between flex-wrap gap-5'}>
                    {
                        foundedBlogItem.tags.map((item, index) => (
                            <h6 className={'whitespace-nowrap'} key={index}>#{item}</h6>
                        ))
                    }
                </div>
                {
                    (foundedBlogItem.image)
                        ? <Image
                            src={foundedBlogItem.image}
                            alt={foundedBlogItem.title}
                            width={1000}
                            height={500}
                            className={'w-full h-[500px] lg:rounded-[12px] rounded-[10px] object-cover'}
                        /> : (
                            <div
                                className={'w-full h-[500px] lg:rounded-[12px] rounded-[10px] bg-gradient-to-bl from-pink-600 to-violet-600'}/>
                        )
                }
                <section>
                    <main>
                        <h1 className={'truncate'}>{foundedBlogItem.title}</h1>
                        <div className={'flex items-center justify-between gap-10'}>
                            <h6 className={'shrink-0'}>{dayjs(foundedBlogItem.date).format('DD/MM/YYYY')}</h6>
                        </div>
                    </main>
                </section>
            </>
        );
    } else {
        return (
            <>
                <p className={'text-center'}>The Blog you were looking for is not found</p>
            </>
        );
    }
}