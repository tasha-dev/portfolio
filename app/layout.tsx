// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono } from "next/font/google";
import { RootLayoutProps } from "@/types/component";
import { cn } from "@/lib/utils";
import "@/style/index.css";

// Creating and exporting metadata
export const metadata: Metadata = {
  title: {
    template: "Mahdi Tasha – %s",
    default: "Mahdi Tasha – Front-End Developer",
  },
  description:
    "Minimal portfolio of Mahdi Tasha – React, Next.js, Tailwind developer from Tehran.",
  creator: "Mahdi Tasha",
  keywords: [
    "Mahdi Tasha",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "TypeScript",
    "Web Developer Iran",
    "Iran",
    "Front End",
    "Developer",
    "Github",
    "Mahdi Tasha",
    "Tasha",
    "Mohamad Mahdi Tasha",
    "Web Dev",
    "Developer",
  ],
  openGraph: {
    title: "Mahdi Tasha – Front-End Developer",
    description:
      "Minimal developer portfolio built with React, Next.js, Tailwind CSS, and TypeScript.",
    url: "https://tasha.vercel.app",
    siteName: "Mahdi Tasha Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mahdi Tasha Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahdi Tasha – Front-End Developer",
    description: "Building clean, modern UIs with React and TypeScript.",
    images: ["/og-image.jpg"],
  },
};

// Defining font
const font = JetBrains_Mono({
  display: "block",
  style: ["normal"],
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "400"],
  variable: "--font-mono",
});

// Creating and exporting root layout component as default
export default function RootLayout({ children }: RootLayoutProps): ReactNode {
  // Returning JSX
  return (
    <html suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen overflow-x-hidden overflow-y-auto bg-background text-foreground scroll-smooth",
          font.className,
        )}
      >
        <ThemeProvider attribute={"class"}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
