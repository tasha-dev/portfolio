// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Projects from '@/component/project';
import DummyProjects from "@/dummyData/projects";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <div className={'flex flex-col gap-20'}>
            <section className={'w-full h-[500px] lg:p-[50px] p-[25px] lg:rounded-[12px] rounded-[10px] bg-[url("../image/walpaperPrefrence.jpg")] bg-cover flex items-end justify-start'}>
                <main>
                    <h1 className={'text-white'}>Hi, Im Mahdi Tasha</h1>
                    <p className={'text-white'}>A skilled front-end developer based in Tehran, specializing in creating high-performance, responsive web applications. I focus on delivering seamless user experiences with clean, efficient code, tailored to meet both business goals and user needs.</p>
                </main>
            </section>
            <section>
                <main>
                    <h3 className={'mb-5'}>Featured Projects</h3>
                    <div className={'flex items-center justify-start gap-5 overflow-auto'}>
                        {
                            DummyProjects.map((item, index) => (
                                <Projects
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    link={item.link}
                                    img={item.img}
                                    status={item.status}
                                    useVpn={item.useVpn}
                                />
                            ))
                        }
                    </div>
                </main>
            </section>
        </div>
    );
}