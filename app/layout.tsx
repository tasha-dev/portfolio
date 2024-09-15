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
    keywords: [],
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
                    'dark:bg-black bg-white overflow-x-hidden overflow-y-auto',
                    jetbrainsMonoFont.className
                )}
            >
                <ThemeProvider attribute="class">
                    <Header />
                    <Container size={'sm'} className={'border-x dark:border-x-white/20 border-x-black/20 min-h-screen'}>
                        {children}
                    </Container>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}