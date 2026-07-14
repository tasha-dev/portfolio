// Codes by mahdi tasha
// Importing part
import { RootLayoutProps } from "@/type/component";
import { Metadata } from "next";

// Defining metadata
export const metadata: Metadata = {};

// Defining fonts
const font = {};

// Creating and exporting RootLayout component as default
export default function RootLayout({ children }: RootLayoutProps) {
   // Returning JSX
   return (
      <html suppressHydrationWarning>
         <body>{children}</body>
      </html>
   );
}
