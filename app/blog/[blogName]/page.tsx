// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {BlogPageType} from "@/type";
import DummyBlogs from "@/dummyData/blogs";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

// Creating and exporting single blog page as default
export default function SingleBlogPage({params: {blogName}}:BlogPageType):ReactNode {
    // Defining blog to render
    const foundedBlogItem = DummyBlogs.find((item) => item.title === blogName);

    // Condition rendering
    if (foundedBlogItem) {
        return (
            <>
                {
                    (foundedBlogItem.image)
                        ? <Image
                            src={foundedBlogItem.image}
                            alt={foundedBlogItem.title}
                            width={1000}
                            height={500}
                            className={'w-full h-[500px] lg:rounded-[12px] rounded-[10px] object-cover'}
                        /> :  (
                            <div className={'w-full h-[500px] lg:rounded-[12px] rounded-[10px] bg-gradient-to-bl from-pink-600 to-violet-600'} />
                        )
                }
                <section>
                    <main>
                        <h1 className={'truncate'}>{foundedBlogItem.title}</h1>
                        <div className={'flex items-center justify-between gap-10'}>
                            <div className={'w-full overflow-auto'}>
                                {
                                    foundedBlogItem.tags.map((item, index) => (
                                        <h6 className={'whitespace-nowrap'} key={index}>{item}</h6>
                                    ))
                                }
                            </div>
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