// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import DummyProjects from "@/dummyData/projects";
import Projects from "@/component/project";

// Creating and exporting projects page as default
export default function Page():ReactNode {
    // Returning JSX
    return (
        <div className={'flex flex-col gap-20'}>
            <h1>Projects</h1>
            <div className={'grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-[10px]'}>
                {
                    DummyProjects.map((item, index) => (
                        <Projects
                            portfolioLink={item.portfolioLink}
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
        </div>
    );
}