// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from '@/component/ui/container';
import Project from "@/component/project";
import webimodeImage from '@/image/project/webimode.png';
import markioImage from '@/image/project/markio.png';
import iwillbegoodImage from '@/image/project/i-will-be-good.png';
import watchlogImage from '@/image/project/watchlog.png';

// Creating and exporting third section of home page as default
export default function ThirdSection():ReactNode {
    // Returning JSX
    return (
        <section id={'projects'} className={'bg-richBlack'}>
            <Container>
                <h2 className={'text-[48px] text-center -tracking-[2px] text-white font-bold mb-[50px]'}>
                    A small selection of <span className={'text-purple-500'}>recent projects</span>
                </h2>
                <div className={'grid lg:grid-cols-2 gap-[32px]'}>
                    <Project
                        link={'https://webimode-tau.vercel.app/'}
                        img={webimodeImage.src}
                        stack={['react', 'next', 'tailwind', 'typescript']}
                        description={'In my role as the front-end developer for the WebiMode project, I took pride in meticulously crafting web pages that precisely met the needs and expectations of the international agency. Employing my expertise in front-end technologies, I ensured a seamless fusion of design and functionality, creating a user-centric experience that resonated with the employers vision. The successful completion of the project stands as a testament to my dedication to perfection and my ability to translate concepts into a visually appealing and functionally sound digital reality for WebiMode.'}
                        title={'Webimode'}
                    />
                    <Project
                        link={'https://markio.vercel.app/'}
                        img={markioImage.src}
                        stack={['react', 'next', 'tailwind', 'typescript', 'firebase']}
                        description={'a lightweight markdown note-taking app with a sleek and intuitive UI. Effortlessly create, edit, and organize notes while enjoying the simplicity and efficiency of markdown formatting. Perfect for students, professionals, and hobbyists alike.'}
                        title={'Markio'}
                    />
                    <Project
                        link={'https://iwillbegood.vercel.app/'}
                        img={iwillbegoodImage.src}
                        stack={['react', 'next', 'tailwind', 'typescript', 'firebase']}
                        description={'Embarking on a side project close to my heart, I dedicated my skills as a front-end developer to bring to life I Will Be Good – a unique fusion of medication and meditation reporting. Crafting complete web pages for this project was not just a professional endeavor but a personal journey aimed at fostering comfort and gaining invaluable experience. Navigating the intricate balance between medication and meditation, I meticulously designed the web interface to be intuitive, providing a seamless user experience. This project, which also served as a much-needed app for my own well-being, allowed me to not only enhance my technical capabilities but also underscored the importance of merging technology with personal growth and self-care. The completed web pages stand as a testament to my commitment to continuous learning and the harmonious integration of technology into our daily lives.'}
                        title={'Webimode'}
                    />
                    <Project
                        link={'https://watchlog.vercel.app/'}
                        img={watchlogImage.src}
                        stack={['react', 'next', 'tailwind', 'typescript', 'firebase']}
                        description={'Undertaking the development of WatchLog was a fulfilling side project that not only added to my skill set as a front-end developer but also stemmed from a personal request from a friend. This app, tailored to create curated lists of movies and serials, allowed users to track and rate their watched content. The completion of the web pages was a blend of functionality and user-friendly design, ensuring an intuitive experience for both myself and potential users. Crafting this app not only provided me with valuable hands-on experience but also reinforced the significance of technology meeting personal needs. WatchLog emerged not just as a testament to my technical proficiency but as a collaborative effort with a friend, underscoring the power of technology in fulfilling individualized requirements.'}
                        title={'Watchlog'}
                    />
                </div>
            </Container>
        </section>
    );
}