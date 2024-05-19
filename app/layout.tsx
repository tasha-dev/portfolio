// Codes by mahdi tasha
// Importing part
import "@/styles"
import {Inter} from "next/font/google"
import {cn} from "@/util/cn";
import {rootLayoutType} from "@/type";
import {ReactNode} from "react";
import {siteConfig} from "@/config";
import {Metadata} from "next";

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
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen", fontSans.className)}>
                {children}
            </body>
        </html>
    )
}