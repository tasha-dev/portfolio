// Codes by mahdi tasha
// Importing part
import "@/style/index.css"
import {Inter} from "next/font/google"
import {cn} from "@/util/cn";
import {rootLayoutType} from "@/type";
import {ReactNode} from "react";
import {siteConfig} from "@/config";
import {Metadata} from "next";
import Footer from "@/component/footer";

// Defining fonts
const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

// Defining metadata of pages
export const metadata:Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: ["Mahdi Tasha", "front end developer", "portfolio website", "web development", "Iran", "mid level", "HTML", "CSS", "JavaScript", "UI/UX"],
    themeColor: '#7e22ce',
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
export default function RootLayout({children}: rootLayoutType):ReactNode {
    return (
        <html lang="en" suppressHydrationWarning className={'scroll-smooth'}>
            <body className={cn("min-h-screen", fontSans.className)}>
                {children}
                <Footer />
            </body>
        </html>
    )
}