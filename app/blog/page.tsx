// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Page from "@/component/page";
import Title from "@/component/ui/title";
import Paragraph from "@/component/ui/paragraph";
import Blog from "@/component/blog";
import {blogType} from "@/types/db";

// Defining metadata of page
export const metadata = {title: 'Blog'}

// Creating and exporting blog page as default
export default function BlogPage():ReactNode {
    // Defining some dummy data
    const data:blogType[] | [] = [];

    // Returning JSX
    return (
        <Page>
            <div className={'mb-[50px]'}>
                <Title tier={2}>Recent Blogs:</Title>
                <Paragraph>Check out some of my latest blogs featured on my portfolio website! Delving into a range of topics from frontend development techniques to insights on the latest trends in technology, these articles offer valuable insights and practical tips. Whether you are a fellow developer seeking inspiration or someone curious about the world of programming, there is something for everyone. Explore my portfolio now to stay updated with my latest musings and discoveries in the ever-evolving landscape of web development.</Paragraph>
            </div>
            {
                (data.length !== 0)
                    ? (
                        <ul className={'flex flex-col gap-[20px]'}>
                            {
                                data.slice(0, 4).map((item, index) => (
                                    <Blog
                                        key={index}
                                        title={item.name}
                                        date={item.date}
                                        content={item.content}
                                    />
                                ))
                            }
                        </ul>
                    ) : <Title className={'text-center'} tier={3}>There are no Blogs.</Title>
            }
        </Page>
    );
}