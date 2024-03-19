// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Page from '@/component/page';
import Profile from "@/component/ui/profile";
import profileImage from '@/images/profile.jpg';
import Title from "@/component/ui/title";
import Paragraph from "@/component/ui/paragraph";
import List from "@/component/ui/list";
import Work from "@/component/work";
import {differenceInYears} from 'date-fns';
import {portfolioType} from "@/types/db";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Defining works to be rendered
    const works:portfolioType[] | [] = [];

    // Returning JSX
    return (
        <Page>
            <div className={'flex lg:gap-[50px] gap-[30px] flex-col'}>
                <Profile
                    img={profileImage.src}
                    name={'Mahdi Tasha'}
                    role={'Passionate Front End Developer'}
                    link={[{
                        link: 'https://github.com/tasha-dev/',
                        title: 'Github'
                    }]}/>
                <section>
                    <header className={'mb-[20px]'}>
                        <Title tier={2}>About</Title>
                    </header>
                    <main>
                        <Paragraph>Hey there! 👋 Im Mahdi, a passionate front-end developer from Tehran, rocking the coding scene since 2021 ({differenceInYears(new Date(), new Date('1/1/2021'))} Years).</Paragraph>
                        <Paragraph>🚀 Armed with a problem-solving superpower and an eye for design, I have earned my stripes as a top-notch developer.</Paragraph>
                        <Paragraph>🌐 Always hungry for knowledge and team collaborations🌟</Paragraph>
                        <Paragraph>Fueled by my passion for coding, I channel my skills towards creating a better world through innovative solutions that transcend digital boundaries and positively impact lives. 🌍💻</Paragraph>
                    </main>
                </section>
                <section>
                    <header className={'mb-[20px]'}>
                        <Title tier={2}>Personal Information</Title>
                    </header>
                    <List>
                        <li><b>Name</b> : Mahdi Tasha</li>
                        <li><b>Location</b> : Tehran, iran</li>
                        <li><b>Age</b> : {differenceInYears(new Date(), '09/18/2006')} years old</li>
                        <li><b>Education</b> : Computer Engineering at Azad University of South Tehran</li>
                    </List>
                </section>
                <section>
                    <header className={'mb-[20px]'}>
                        <Title tier={2}>Skills</Title>
                    </header>
                    <List>
                        <li><b>Language</b> : JavaScript, TypeScript</li>
                        <li><b>Frameworks/Libraries</b> : ReactJS, Next.js, React Native, Electron.js</li>
                        <li><b>Web Technologies</b> : HTML, CSS, Bootstrap, Tailwind CSS, BEM, Sass, Vite</li>
                        <li><b>Version Controls</b> : Git, GitHub</li>
                        <li><b>Package Manager</b> : npm</li>
                        <li><b>Testing</b> : Jest</li>
                        <li><b>Progressive Web Apps (PWA)</b> : Implementation and optimization</li>
                        <li><b>Mobile Development</b> : React Native</li>
                        <li><b>Desktop Applications</b> : Electron.js</li>
                    </List>
                </section>
                <section>
                    <header className={'mb-[20px]'}>
                        <Title tier={2}>Latest Works</Title>
                    </header>
                    <main className={'flex flex-col gap-[30px]'}>
                        {
                            (works.length !== 0)
                                ? works.map((item, index) => (
                                    <Work
                                        key={index}
                                        name={item.title}
                                        link={item.link}
                                        date={item.date}
                                        stack={item.stack}
                                    >
                                        {item.description}
                                    </Work>
                                )) : <Title className={'text-center'} tier={3}>There are no Works.</Title>
                        }
                    </main>
                </section>
            </div>
        </Page>
    );
}
