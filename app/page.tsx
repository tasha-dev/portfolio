// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Projects from '@/component/project';
import Skill from "@/component/skill";
import Experience from "@/component/experience";
import DummyProjects from "@/dummyData/projects";
import DummySkills from "@/dummyData/skills";
import DummyExperiences from "@/dummyData/experiences";
import Welcome from "@/component/welcome";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <Welcome />
            <section>
                <main>
                    <h3 className={'mb-5'}>Featured Projects</h3>
                    <div className={'flex items-center justify-start gap-5 overflow-auto'}>
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
                </main>
            </section>
            <section>
                <main>
                    <h3 className={'mb-5'}>Skills</h3>
                    <div className={'flex items-center justify-start gap-5 overflow-auto'}>
                        {
                            DummySkills.map((item, index) => (
                                <Skill
                                    key={index}
                                    title={item.title}
                                />
                            ))
                        }
                    </div>
                </main>
            </section>
            <section>
                <main>
                    <h3 className={'mb-5'}>Experience</h3>
                    <div className={'flex flex-col gap-20 relative w-full'}>
                        {
                            DummyExperiences.map((item, index) => (
                                <Experience
                                    isLast={(index + 1 === DummyExperiences.length)}
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    company={item.company}
                                    fromDate={item.fromDate}
                                    untillDate={item.untillDate}
                                />
                            ))
                        }
                    </div>
                </main>
            </section>
        </>
    );
}