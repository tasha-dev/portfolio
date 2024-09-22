// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Creating and exporting welcome component as default
export default function Welcome():ReactNode {
    // Returning JSX
    return (
        <section
            className={'w-full h-[500px] lg:p-[50px] p-[25px] lg:rounded-[12px] rounded-[10px] bg-[url("../image/walpaperPrefrence.jpg")] bg-cover flex items-end justify-start'}>
            <main>
                <h1 className={'text-white'}>Hi, Im Mahdi Tasha</h1>
                <p className={'text-white'}>A skilled front-end developer based in Tehran, specializing in creating
                    high-performance, responsive web applications. I focus on delivering seamless user experiences with
                    clean, efficient code, tailored to meet both business goals and user needs.</p>
            </main>
        </section>
    );
}