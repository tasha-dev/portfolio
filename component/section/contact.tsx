// Codes by mahdi tasha
// Importing part
import { ClassOnlyProps } from "@/type/component";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/util";
import { Mail, Send } from "lucide-react";

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
         <main className="p-4">
            <div className="prose prose-neutral dark:prose-invert w-full max-w-2xl mx-auto mb-5">
               <h2 className="lg:text-center">Contact Me</h2>
               <p className="lg:text-center">
                  Whether you've got a project in mind, a question about my
                  work, or just want to say hi — I'd love to hear from you. I'm
                  currently open for freelance and contract work, so feel free
                  to drop me an email or send a quick message on Telegram. I'm
                  always open to new ideas, collaborations, or a good
                  conversation. Your message won't get lost in the void — I
                  actually read them!
               </p>
            </div>
            <div className="flex items-center lg:justify-center gap-2 flex-wrap">
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
