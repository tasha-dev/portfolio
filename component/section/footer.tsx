// Codes by mahdi tasha
// Importing part
import { ClassOnlyProps } from "@/type/component";
import moment from "moment";
import { cn } from "@/lib/util";

// Creating and exporting Footer section component as default
export default function Footer({ className }: ClassOnlyProps) {
   // Returning JSX
   return (
      <footer className={cn("border-t p-4 border-t-foreground/20", className)}>
         <main className="max-w-2xl w-full prose prose-neutral dark:prose-invert mx-auto">
            <h4 className="lg:text-center">
               © {moment().format("YYYY")} Mahdi Tasha. All rights reserved.
            </h4>
            <h6 className="mt-2 lg:text-center">
               Built with Next.js, TypeScript & Tailwind CSS — hosted on Vercel.
            </h6>
         </main>
      </footer>
   );
}
