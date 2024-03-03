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

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <Page>
            <div className={'flex gap-[50px] flex-col'}>
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
                        <Paragraph>Hey there! 👋 I'm Mahdi, a passionate front-end developer from Tehran, rocking the
                            coding scene since 2020 (3 Years).</Paragraph>
                        <Paragraph>🚀 Armed with a problem-solving superpower and an eye for design, I've earned my
                            stripes as a top-notch developer.</Paragraph>
                        <Paragraph>🌐 Always hungry for knowledge and team collaborations🌟</Paragraph>
                        <Paragraph>Fueled by my passion for coding, I channel my skills towards creating a better world
                            through innovative solutions that transcend digital boundaries and positively impact lives.
                            🌍💻</Paragraph>
                    </main>
                </section>
                <section>
                    <header className={'mb-[20px]'}>
                        <Title tier={2}>Personal Information</Title>
                    </header>
                    <List>
                        <li><b>Name</b> : Mahdi Tasha</li>
                        <li><b>Location</b> : Tehran, iran</li>
                        <li><b>Age</b> : 17 years old</li>
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
                        <Work
                            name={'Hoopi'}
                            link={'https://naderinejad.ir/'}
                            date={{end: 'June 2023', start: 'August 2023'}}
                            stack={['NextJS', 'tailwindCSS', 'typescript', 'ReactJS']}
                        >
                            As the front-end developer for the "Hoopi" e-commerce project, I took the lead in sculpting web pages that seamlessly translated the vision of the employer into a flawless online shopping experience. Leveraging my expertise in front-end technologies, I ensured that each element of the web pages not only met but exceeded the employer's expectations. From responsive design to intuitive user interfaces, every detail was meticulously crafted to enhance the overall user journey. The culmination of my efforts resulted in a perfectly executed web presence for "Hoopi," aligning with the specific needs of the employer and elevating the e-commerce platform to new heights of excellence.
                        </Work>
                        <Work
                            name={'WebiMode'}
                            link={'https://webimode-tau.vercel.app/'}
                            date={{end: 'November 2023', start: 'January 2024'}}
                            stack={['NextJS', 'tailwindCSS', 'typescript', 'ReactJS']}
                        >
                            In my role as the front-end developer for the "WebiMode" project, I took pride in
                            meticulously crafting web pages that precisely met the needs and expectations of the
                            international agency. Employing my expertise in front-end technologies, I ensured a seamless
                            fusion of design and functionality, creating a user-centric experience that resonated with
                            the employer's vision. The successful completion of the project stands as a testament to my
                            dedication to perfection and my ability to translate concepts into a visually appealing and
                            functionally sound digital reality for "WebiMode."
                        </Work>
                        <Work
                            name={'WatchLog'}
                            link={'https://watchlog.vercel.app/'}
                            date={{end: 'February 2024', start: 'February 2024'}}
                            stack={['NextJS', 'tailwindCSS', 'typescript', 'ReactJS']}
                        >
                            Undertaking the development of "WatchLog" was a fulfilling side project that not only added to my skill set as a front-end developer but also stemmed from a personal request from a friend. This app, tailored to create curated lists of movies and serials, allowed users to track and rate their watched content. The completion of the web pages was a blend of functionality and user-friendly design, ensuring an intuitive experience for both myself and potential users. Crafting this app not only provided me with valuable hands-on experience but also reinforced the significance of technology meeting personal needs. "WatchLog" emerged not just as a testament to my technical proficiency but as a collaborative effort with a friend, underscoring the power of technology in fulfilling individualized requirements.
                        </Work>
                        <Work
                            name={'WebiMode'}
                            link={'https://iwillbegood.vercel.app/'}
                            date={{end: 'January 2024', start: 'February 2024'}}
                            stack={['NextJS', 'tailwindCSS', 'typescript', 'ReactJS']}
                        >
                            Embarking on a side project close to my heart, I dedicated my skills as a front-end developer to bring to life "I Will Be Good" – a unique fusion of medication and meditation reporting. Crafting complete web pages for this project was not just a professional endeavor but a personal journey aimed at fostering comfort and gaining invaluable experience. Navigating the intricate balance between medication and meditation, I meticulously designed the web interface to be intuitive, providing a seamless user experience. This project, which also served as a much-needed app for my own well-being, allowed me to not only enhance my technical capabilities but also underscored the importance of merging technology with personal growth and self-care. The completed web pages stand as a testament to my commitment to continuous learning and the harmonious integration of technology into our daily lives.
                        </Work>
                    </main>
                </section>
            </div>
        </Page>
    );
}