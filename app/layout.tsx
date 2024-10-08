// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {JetBrains_Mono} from 'next/font/google';
import {Metadata} from "next";
import siteConfig from "@/config/siteConfig";
import {RootLayoutType} from "@/type";
import {cn} from "@/util";
import '@/style/index.css';
import Header from "@/component/header";
import {ThemeProvider} from "next-themes";
import Container from "@/component/ui/container";
import Footer from "@/component/footer";
import ScrollPercentage from "@/component/scrollPercentage";
import {Toaster} from "@/component/ui/sonner";
import PageLayout from "@/component/pageLayout";

// Defining font
const jetbrainsMonoFont = JetBrains_Mono({
    display: 'swap',
    style: 'normal',
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin']
});

// Defining metadata
export const metadata: Metadata = {
    title: {
        template: '%s | Mahdi Tasha',
        default: siteConfig.name
    },
    description: siteConfig.description,
    keywords: ["Front-End Developer", "React.js", "Next.js", "JavaScript", "TypeScript", "TailwindCSS", "HTML", "CSS", "Sass", "BEM", "Responsive Design", "Mobile First", "Web Development", "Freelance Developer", "UI/UX", "Git", "Version Control", "API Integration", "Component-based Design", "React Native", "PWA", "Vite", "Team Collaboration", "JavaScript Frameworks", "Custom Hooks", "Freelancing", "Tehran", "Iran",],
    themeColor: '#000000',
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    }
}

// Creating and exporting root layout component as default
export default function RootLayout({children}:RootLayoutType):ReactNode {
    // Returning JSX
    return (
        <html suppressHydrationWarning>
            <body className={
                cn(
                    'dark:bg-black bg-white overflow-x-hidden overflow-y-auto dark:bg-[url(../image/bgGrid.svg)] bg-[url(../image/bgGridWhite.svg)] bg-auto bg-repeat content',
                    jetbrainsMonoFont.className
                )}
            >
                <ThemeProvider attribute="class">
                    <Toaster position={'bottom-center'} richColors />
                    <Header />
                    <div className={'relative'}>
                        <div className={'absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-bl dark:from-black from-white to-transparent pointer-events-none lg:block hidden'}/>
                        <ScrollPercentage />
                        <Container size={'sm'} className={'min-h-screen lg:pt-[100px] pt-[150px] pb-[40px] z-20 relative'}>
                            <PageLayout>
                                {children}
                            </PageLayout>
                        </Container>
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}