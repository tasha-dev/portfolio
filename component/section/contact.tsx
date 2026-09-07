// Codes by mahdi tasha
// Importing part
import { ClassOnlyProps } from "@/type/component";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/util";
import { Mail, MoveRight, Send } from "lucide-react";

// Creating and exporting Contact section component as default
export function Contact({ className }: ClassOnlyProps) {
   // Returning JSX
   return (
      <section
         id="contact"
         className={cn(
            "lg:min-h-dvh lg:flex items-center justify-center",
            className,
         )}
      >
         <main className="p-4 max-w-2xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert w-full max-w-full mb-5">
               <h2 className="lg:text-center">Have a project in mind?</h2>
               <p className="lg:text-center">
                  Tell me what you're building, what you need, and when you need
                  it.
               </p>
            </div>
            <div className="flex items-center lg:justify-center gap-2 flex-wrap">
               <div className="text-foreground flex items-center mr-4">
                  <span className="font-normal text-base mr-3">
                     Let's build it
                  </span>
                  <MoveRight className="size-5" />
               </div>
               <Button
                  render={
                     <Link href="https://t.me/tashaDEV" target="_blank">
                        <Send />
                        Telegram
                     </Link>
                  }
               />
               <Button
                  variant={"outline"}
                  render={
                     <Link href="mailto:imwhdiiii@gmail.com">
                        <Mail />
                        E-mail
                     </Link>
                  }
               />
            </div>
         </main>
      </section>
   );
}
