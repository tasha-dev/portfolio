// Codes by mahdi tasha
// Importing part
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

// Defining skills
const skills: {
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

// Exporting skills as default
export default skills;
