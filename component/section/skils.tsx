// Codes by mahdi tasha
// Forcing next.js to render this component as client side
"use client";

// Importing part
import { ClassOnlyProps } from "@/type/component";
import LogoLoop from "@/component/logoLoop";
import TypescriptLogo from "@/image/typescript.webp";
import JavascriptLogo from "@/image/javascript.webp";
import HtmlLogo from "@/image/html.webp";
import CssLogo from "@/image/css.webp";
import ReactLogo from "@/image/react.webp";
import NextLogo from "@/image/next.webp";
import TailwindLogo from "@/image/tailwind.webp";
import ShadcnLogo from "@/image/shadcn.webp";
import GitLogo from "@/image/git.webp";
import GithubLogo from "@/image/github.webp";
import BootstrapLogo from "@/image/bootstrap.png";

// Defining logos to be rendered
const logos: {
   src: string;
   alt: string;
   href: string;
}[] = [
   {
      src: TypescriptLogo.src,
      alt: "TypeScript",
      href: "https://www.typescriptlang.org",
   },
   {
      src: TailwindLogo.src,
      alt: "Tailwind CSS",
      href: "https://tailwindcss.com",
   },
   {
      src: JavascriptLogo.src,
      alt: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
   },
   {
      src: HtmlLogo.src,
      alt: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
   },
   {
      src: CssLogo.src,
      alt: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
   },
   {
      src: ReactLogo.src,
      alt: "React",
      href: "https://react.dev",
   },
   {
      src: NextLogo.src,
      alt: "Next.js",
      href: "https://nextjs.org",
   },

   {
      src: ShadcnLogo.src,
      alt: "shadcn/ui",
      href: "https://ui.shadcn.com",
   },
   {
      src: GitLogo.src,
      alt: "Git",
      href: "https://git-scm.com",
   },
   {
      src: GithubLogo.src,
      alt: "GitHub",
      href: "https://github.com",
   },
   {
      src: BootstrapLogo.src,
      alt: "Bootstrap",
      href: "https://getbootstrap.com",
   },
];

// Creating and exporting Skills section component as default
export default function Skills({ className }: ClassOnlyProps) {
   // Returning JSX
   return (
      <section className={className}>
         <main className="max-w-4xl mx-auto overflow-hidden">
            <LogoLoop
               logos={logos}
               speed={100}
               direction="left"
               logoHeight={60}
               gap={60}
               hoverSpeed={0}
               scaleOnHover
               fadeOut
               fadeOutColor="var(--background)"
               ariaLabel="Skills"
            />
         </main>
      </section>
   );
}
