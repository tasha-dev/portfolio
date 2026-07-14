// Codes by mahdi tasha
// Importing part
import { RootLayoutProps } from "@/type/component";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { cn, experiance } from "@/lib/util";
import { Toaster } from "@/component/ui/sonner";
import "@/app/globals.css";
import { TooltipProvider } from "@/component/ui/tooltip";

// Defining variables
const siteUrl = "https://tasha.vercel.app";

// Defining metadata
export const metadata: Metadata = {
   metadataBase: new URL(siteUrl),
   title: {
      default: "Mahdi Tasha – Front-End Developer",
      template: "%s | Mahdi Tasha",
   },
   description: `Front-end developer with ${experiance} years of experience building modern, responsive web apps with React, Next.js, and TypeScript. Open for freelance and contract work.`,
   applicationName: "Mahdi Tasha Portfolio",
   authors: [{ name: "Mahdi Tasha", url: siteUrl }],
   creator: "Mahdi Tasha",
   publisher: "Mahdi Tasha",
   keywords: [
      "Mahdi Tasha",
      "Front-End Developer",
      "React Developer",
      "Next.js Portfolio",
      "Tailwind CSS",
      "TypeScript Developer",
      "Web Developer Iran",
      "Freelance Frontend Developer",
   ],
   category: "technology",
   alternates: {
      canonical: siteUrl,
   },
   formatDetection: {
      email: false,
      address: false,
      telephone: false,
   },
   openGraph: {
      type: "website",
      url: siteUrl,
      siteName: "Mahdi Tasha Portfolio",
      title: "Mahdi Tasha – Front-End Developer",
      description:
         "Building clean, modern UIs with React, Next.js, and TypeScript. Open for freelance and contract work.",
      locale: "en_US",
      images: [
         {
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Mahdi Tasha Portfolio Preview",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: "Mahdi Tasha – Front-End Developer",
      description:
         "Building clean, modern UIs with React, Next.js, and TypeScript.",
      images: ["/og-image.jpg"],
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-image-preview": "large",
         "max-snippet": -1,
         "max-video-preview": -1,
      },
   },
};

// Defining viewport
export const viewport: Viewport = {
   themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
      { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
   ],
   width: "device-width",
   initialScale: 1,
};

// Defining fonts
const interFont = Inter({
   display: "block",
   subsets: ["latin"],
   style: "normal",
   weight: ["300", "400", "500", "600", "700", "900"],
   variable: "--font-sans",
});

// Creating and exporting RootLayout component as default
export default function RootLayout({ children }: RootLayoutProps) {
   // Returning JSX
   return (
      <html suppressHydrationWarning>
         <ThemeProvider>
            <TooltipProvider>
               <body
                  className={cn(
                     "overflow-x-hidden overflow-y-auto bg-background text-foreground",
                     interFont.className,
                  )}
               >
                  <Toaster />
                  {children}
               </body>
            </TooltipProvider>
         </ThemeProvider>
      </html>
   );
}
