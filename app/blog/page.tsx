// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Blogs from "@/component/blog";
import DummyBlogs from "@/dummyData/blogs";

// Creating and exporting Blog page as default
export default function BlogPage():ReactNode {
    // Returning JSX
    return (
        <>
            <h1>Blogs</h1>
            <div className={'grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-[10px]'}>
                {
                    DummyBlogs.map((item, index) => (
                        <Blogs
                            key={index}
                            description={item.description}
                            title={item.title}
                            date={item.date}
                            content={item.content}
                            tags={item.tags}
                        />
                    ))
                }
            </div>
        </>
    );
}