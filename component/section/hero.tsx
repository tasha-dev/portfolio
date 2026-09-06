// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/util";
import { ClassOnlyProps } from "@/type/component";
import Link from "next/link";
import { Button } from "../ui/button";
import DepthTextRender from "../depthTextRenderer";

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
          <div className="flex items-center justify-center">
            <DepthTextRender />
          </div>
          <h2 className="lg:text-center">
            I build fast, modern web applications <br /> that turn ideas into
            products.
          </h2>
          <p className="lg:text-center">
            Front-end developer specializing in React, Next.js & TypeScript. I
            help startups and businesses build production- ready web experiences
            with clean architecture, responsive UI, and excellent UX.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap ">
          <Button render={<Link href="/#contact">Start a project</Link>} />
          <Button
            variant={"outline"}
            render={<Link href="/#projects">View My Work</Link>}
          />
        </div>
      </main>
    </section>
  );
}
