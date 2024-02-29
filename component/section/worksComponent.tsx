// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import WorkItemComponent from "@/component/workItemComponent";

// Creating and exporting works component as default
export default function WorksComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <div className={'mb-[20px]'}>
                    <TitleComponent tier={2}>Latest Works</TitleComponent>
                    <div className={'flex flex-col gap-[20px]'}>
                        <WorkItemComponent
                            startDate={'November 2023'}
                            endDate={'January 2024'}
                            link={'https://webimode-tau.vercel.app/'}
                            name={'Webmiode'}
                            tech={['NextJS', 'tailwindCSS', 'typescript', 'ReactJS']}
                        >
                            In my role as the front-end developer for the "WebiMode" project, I took pride in meticulously crafting web pages that precisely met the needs and expectations of the international agency. Employing my expertise in front-end technologies, I ensured a seamless fusion of design and functionality, creating a user-centric experience that resonated with the employer's vision. The successful completion of the project stands as a testament to my dedication to perfection and my ability to translate concepts into a visually appealing and functionally sound digital reality for "WebiMode."
                        </WorkItemComponent>
                        <WorkItemComponent
                            startDate={'June  2023'}
                            endDate={'August 2023'}
                            link={'https://naderinejad.ir/'}
                            name={'Hoopi'}
                            tech={['tailwindCSS', 'typescript', 'ReactJS', 'Redux']}
                        >
                            As the front-end developer for the "Hoopi" e-commerce project, I took the lead in sculpting web pages that seamlessly translated the vision of the employer into a flawless online shopping experience. Leveraging my expertise in front-end technologies, I ensured that each element of the web pages not only met but exceeded the employer's expectations. From responsive design to intuitive user interfaces, every detail was meticulously crafted to enhance the overall user journey. The culmination of my efforts resulted in a perfectly executed web presence for "Hoopi," aligning with the specific needs of the employer and elevating the e-commerce platform to new heights of excellence.
                        </WorkItemComponent>
                    </div>
                </div>
                <div>
                    <TitleComponent tier={2}>Side Projects</TitleComponent>
                    <div className={'flex flex-col gap-[20px]'}>
                        <WorkItemComponent
                            startDate={'January 2024'}
                            endDate={'February 2024'}
                            name={'I Will Be Good'}
                            link={'https://iwillbegood.vercel.app/'}
                            tech={['NextJS', 'tailwindCSS', 'typescript', 'ReactJS']}
                        >
                            Embarking on a side project close to my heart, I dedicated my skills as a front-end developer to bring to life "I Will Be Good" – a unique fusion of medication and meditation reporting. Crafting complete web pages for this project was not just a professional endeavor but a personal journey aimed at fostering comfort and gaining invaluable experience. Navigating the intricate balance between medication and meditation, I meticulously designed the web interface to be intuitive, providing a seamless user experience. This project, which also served as a much-needed app for my own well-being, allowed me to not only enhance my technical capabilities but also underscored the importance of merging technology with personal growth and self-care. The completed web pages stand as a testament to my commitment to continuous learning and the harmonious integration of technology into our daily lives.
                        </WorkItemComponent>
                        <WorkItemComponent
                            startDate={'February 2024'}
                            endDate={'February 2024'}
                            name={'Watchlog'}
                            link={'https://watchlog.vercel.app/'}
                            tech={['NextJS', 'tailwindCSS', 'typescript', 'ReactJS']}
                        >
                            Undertaking the development of "WatchLog" was a fulfilling side project that not only added to my skill set as a front-end developer but also stemmed from a personal request from a friend. This app, tailored to create curated lists of movies and serials, allowed users to track and rate their watched content. The completion of the web pages was a blend of functionality and user-friendly design, ensuring an intuitive experience for both myself and potential users. Crafting this app not only provided me with valuable hands-on experience but also reinforced the significance of technology meeting personal needs. "WatchLog" emerged not just as a testament to my technical proficiency but as a collaborative effort with a friend, underscoring the power of technology in fulfilling individualized requirements.
                        </WorkItemComponent>
                    </div>
                </div>
            </main>
        </section>
    );
}
