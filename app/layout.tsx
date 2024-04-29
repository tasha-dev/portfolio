// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {cn} from '@/lib/cn';
import {Montserrat} from "next/font/google";
import siteConfig from "@/config/siteConfig";
import '@/styles/index.css';
import Header from "@/component/header";

// Defining fonts
const montserratFont = Montserrat({
    weight: ['700', '500', '300'],
    variable: "--font-sans",
    subsets: ['latin']
})

// Defining metadata
export const metadata = {
    title: {
        default: 'Home | Mahdi Tasha',
        template: `%s | Mahdi Tasha`,
    },
    description: siteConfig.description,
    keywords: ["Mahdi Tasha", "Front End Developer", "Web Development", "HTML", "CSS", "JavaScript", "React", "Responsive Design", "User Interface", "UX Design", "Web Portfolio", "Code Quality", "Innovation", "Creative Development", "Midlevel Developer", "Web Experiences", "Clean Code", "Interactive Design", "Technical Expertise"],
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#fffff"},
        {media: "(prefers-color-scheme: dark)", color: "#00000"},
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    }
}

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting the root layout component
export default function RootLayout({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html suppressHydrationWarning className={"dark"}>
            <body className={cn('overflow-x-hidden min-h-screen font-sans dark:bg-black bg-white', montserratFont.variable)}>
                <Header />
                {children}
            </body>
        </html>
    );
}
