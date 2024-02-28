// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {Roboto} from "next/font/google";
import {twMerge} from 'tailwind-merge'
import {Metadata} from "next";

// Defining metadata
export const metadata: Metadata = {
    title: 'Mahdi Tasha - Elevating Web Experiences | Midlevel Front End Developer',
    description: 'Dive into the world of web development with Mahdi Tasha, a midlevel front end developer committed to crafting exceptional online experiences. Explore a portfolio showcasing a fusion of creativity and technical prowess, where clean code meets innovative design. Join me on this journey of transforming ideas into visually stunning and functionally seamless web solutions that leave a lasting impression.',
    keywords: [
        "Mahdi Tasha",
        "Front End Developer",
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Responsive Design",
        "User Interface",
        "UX Design",
        "Web Portfolio",
        "Code Quality",
        "Innovation",
        "Creative Development",
        "Midlevel Developer",
        "Web Experiences",
        "Clean Code",
        "Interactive Design",
        "Technical Expertise"
    ],
    robots: "index, follow",
    openGraph: {
        title: 'Mahdi Tasha - Elevating Web Experiences | Midlevel Front End Developer',
        description: 'Dive into the world of web development with Mahdi Tasha, a midlevel front end developer committed to crafting exceptional online experiences. Explore a portfolio showcasing a fusion of creativity and technical prowess, where clean code meets innovative design. Join me on this journey of transforming ideas into visually stunning and functionally seamless web solutions that leave a lasting impression.',
        images: './public/img/logo/img-main.png',
        url: 'https://tasha.vercel.app/'
    }
}

// Defining fonts
const RobotFont = Roboto({
    weight: ['300', '400', '500', '700'],
    style: ['normal'],
    subsets: ['latin']
});

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting root layout of the pages as default
export default function RootLayout({children}: propsType): ReactNode {
    // Returning JSX
    return (
        <html>
            <body className={twMerge('overflow-x-hidden', RobotFont.className)}>
                {children}
            </body>
        </html>
    );
}