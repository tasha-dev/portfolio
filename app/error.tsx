// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import Header from "@/component/header";
import { Button } from "@/component/ui/button";
import { ErrorPageProps } from "@/type/page";
import Link from "next/link";

// Creating and exporting Error page as default
export default function ErrorPage({ error, reset }: ErrorPageProps) {
   // Returning JSX
   return (
      <>
         <Header />
         <section
            className={
               "lg:min-h-[calc(100dvh-68px)] lg:flex lg:items-center lg:justify-center"
            }
         >
            <main className="p-4 max-w-2xl mx-auto">
               <div className="prose prose-neutral dark:prose-invert w-full max-w-full mb-5">
                  <h2 className="lg:text-center text-destructive">500</h2>
                  <h1 className="lg:text-center">Something went wrong</h1>
                  <p className="lg:text-center">
                     An unexpected error occurred. Try refreshing, or head back
                     home.
                  </p>
                  <pre>
                     <p>{error.message}</p>
                  </pre>
               </div>
               <div className="flex items-center lg:justify-center gap-2 flex-wrap">
                  <Button onClick={reset}>Retry</Button>
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
