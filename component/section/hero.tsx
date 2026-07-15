// Codes by mahdi tasha
// Importing part
import { cn, experiance } from "@/lib/util";
import { ClassOnlyProps } from "@/type/component";
import Link from "next/link";
import { Button } from "../ui/button";

// Creating and exporting Hero section component as default
export default function Hero({ className }: ClassOnlyProps) {
   // Returning JSX
   return (
      <section
         className={cn(
            "lg:min-h-[calc(100dvh-68px)] lg:flex lg:items-center lg:justify-center",
            className,
         )}
      >
         <main className="p-4 max-w-2xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert w-full max-w-full mb-5">
               <h2 className="lg:text-center">Mahdi Tasha</h2>
               <h1 className="lg:text-center">Front-End Developer</h1>
               <p className="lg:text-center">
                  I'm a front-end developer with {experiance} years of
                  experience building modern, responsive web applications using
                  React, Next.js, and TypeScript. I care about clean
                  architecture, smooth UX, and shipping products that actually
                  solve problems — not just look good in a demo. Currently open
                  for freelance and contract work.
               </p>
            </div>
            <div className="flex items-center lg:justify-center gap-2 flex-wrap">
               <Button render={<Link href="/#contact">Get In Touch</Link>} />
               <Button
                  variant={"outline"}
                  render={
                     <Link href="/resume.pdf" download>
                        Resume
                     </Link>
                  }
               />
            </div>
         </main>
      </section>
   );
}
