// Codes by mahdi tasha
// Importing part
import TypescriptLogo from "@/image/skill/typescript.webp";
import JavascriptLogo from "@/image/skill/javascript.webp";
import HtmlLogo from "@/image/skill/html.webp";
import CssLogo from "@/image/skill/css.webp";
import ReactLogo from "@/image/skill/react.webp";
import NextLogo from "@/image/skill/next.webp";
import TailwindLogo from "@/image/skill/tailwind.svg";
import ShadcnLogo from "@/image/skill/shadcn.webp";
import GitLogo from "@/image/skill/git.png";
import GithubLogo from "@/image/skill/github.webp";
import BootstrapLogo from "@/image/skill/bootstrap.png";

// Defining skills
const skills: {
   src: string;
   alt: string;
   href: string;
   invertOnDark?: boolean;
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
      invertOnDark: true,
   },
   {
      src: ShadcnLogo.src,
      alt: "shadcn/ui",
      href: "https://ui.shadcn.com",
      invertOnDark: true,
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
      invertOnDark: true,
   },
   {
      src: BootstrapLogo.src,
      alt: "Bootstrap",
      href: "https://getbootstrap.com",
   },
];

// Exporting skills as default
export default skills;
