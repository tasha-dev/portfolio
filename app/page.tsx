// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {Button} from "@/component/ui/button";
import Link from "next/link";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <div className={'flex flex-col gap-[30px]'}>
            <div className={'w-full h-[500px] lg:p-[50px] p-[25px] lg:rounded-[12px] rounded-[10px] bg-[url("../image/walpaperPrefrence.jpg")] bg-cover flex items-end justify-start'}>
                <div className={'flex flex-col'}>
                    <h1>Hi, Im Mahdi Tasha</h1>
                    <p className={'mb-5'}>A skilled front-end developer based in Tehran, specializing in creating high-performance, responsive web applications. I focus on delivering seamless user experiences with clean, efficient code, tailored to meet both business goals and user needs.</p>
                    <Link href={'/#projects'}>
                        <Button tabIndex={-1}>See Projects</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}