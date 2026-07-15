// Codes by mahdi tasha
// Importing part
import Header from "@/component/header";
import { Button } from "@/component/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

// Defining metadata
export const metadata: Metadata = {
   title: "Page not found",
};

// Creating and exporting NotFound page as default
export default function NotFoundPage() {
   // Returning JSX
   return (
      <>
         <Header />
         <section
            className={
               "lg:min-h-[calc(100dvh-68px)] lg:flex lg:items-center lg:justify-center max-w-2xl mx-auto"
            }
         >
            <main className="p-4">
               <div className="prose prose-neutral dark:prose-invert w-full max-w-full mb-5">
                  <h2 className="lg:text-center text-destructive">404</h2>
                  <h1 className="lg:text-center">Page not found</h1>
                  <p className="lg:text-center">
                     The page you're looking for doesn't exist or may have been
                     moved.
                  </p>
               </div>
               <div className="flex items-center lg:justify-center gap-2 flex-wrap">
                  <Button
                     variant={"outline"}
                     render={<Link href="/">Head home</Link>}
                  />
               </div>
            </main>
         </section>
      </>
   );
}
