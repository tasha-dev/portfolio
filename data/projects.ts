// Codes by mahdi tasha
// Importing part
import { Project } from "@/type/general";

// Importing images
import WebimodeImage from "@/image/project/webimode.png";
import SafarnamehImage from "@/image/project/safarnameh.png";
import ConnectImage from "@/image/project/connect.png";
import ZarvantripImage from "@/image/project/zarvantrip.png";
import FinanceImage from "@/image/project/finance.png";
import LusterImage from "@/image/project/luster.png";
import MarkioImage from "@/image/project/markio.png";
import EvolveosImage from "@/image/project/evolveos.webp";
import RelogImage from "@/image/project/relog.png";
import BrainmarkImage from "@/image/project/brainmark.png";
import GlyphImage from "@/image/project/glyph.png";

// Defining projects to be render
const projects: Project[] = [
   {
      name: "Webimode",
      url: "https://webimode-tau.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      img: WebimodeImage.src,
      description:
         "A digital-services marketplace designed to turn vague client needs into clearly scoped projects. I built the core experience around service discovery, project requests, quoting, portfolio showcases, and content — helping visitors move naturally from exploring services to starting a project.",
   },
   {
      name: "Connect",
      url: "https://connect-pwa.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "PWA"],
      img: ConnectImage.src,
      description:
         "A multi-service consumer platform that needed a unified experience for both users and the internal team operating it. I built the consumer-facing PWA alongside an admin dashboard for task management, data monitoring, and analytics, bringing multiple workflows into one cohesive product.",
   },
   {
      name: "Safarnameh24",
      url: "https://safarnameh24.com/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "ShadCN"],
      img: SafarnamehImage.src,
      description:
         "A hotel and flight booking platform focused on making travel reservations simple and reliable. I built the search and booking experience across both hotels and flights, creating a consistent flow from discovering options to receiving a confirmed booking.",
   },
   {
      name: "Glyph",
      url: "https://glyph-sigma.vercel.app/",
      stack: [
         "TypeScript",
         "Next.js",
         "React",
         "Tailwind CSS",
         "Tiptap",
         "Zustand",
      ],
      img: GlyphImage.src,
      description:
         "Developers needed a focused Markdown writing environment without accounts, cloud infrastructure, or unnecessary complexity. I built Glyph as a local-first, keyboard-driven editor with Vim-style navigation, rich Markdown editing, multiple files, command actions, and Markdown/PDF export.",
      openSource: {
         stars: "https://img.shields.io/github/stars/tasha-dev/glyph?style=flat&logo=github&logoColor=white&color=green&label=Stars",
         forks: "https://img.shields.io/github/forks/tasha-dev/glyph?style=flat&logo=github&logoColor=white&color=green&label=Forks",
         contributors:
            "https://img.shields.io/github/contributors/tasha-dev/glyph?style=flat&logo=github&logoColor=white&color=green&label=Contributors",
      },
   },
   {
      name: "Zarvantrip",
      url: "https://zarvantrip.com/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "ShadCN"],
      img: ZarvantripImage.src,
      description:
         "A hotel-booking platform where users needed to move quickly from choosing a destination to completing a reservation. I built the search and booking flow, including hotel selection, availability, and checkout, turning a multi-step process into a streamlined experience.",
   },
   {
      name: "Finance System for Sevin Team",
      url: "https://www.finance.sevintm.com/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "RadixUI"],
      img: FinanceImage.src,
      description:
         "The team needed a centralized way to manage project contracts, revenue splits, and financial reporting. I built an internal finance system that tracks developer percentages across projects and organizes financial data, making team payouts easier to manage and audit.",
   },
   {
      name: "Luster Salehi Bio Page",
      url: "https://www.qr.lustersalehi.com/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "RadixUI"],
      img: LusterImage.src,
      description:
         "A traditional business needed a simple digital presence that could be accessed instantly from a QR code. I built a mobile-first bio page that introduces the business and directs visitors to its Instagram catalog, keeping the experience focused on the most important action.",
   },
   {
      name: "Relog",
      url: "https://relog-inky.vercel.app/",
      stack: [
         "TypeScript",
         "Next.js",
         "React",
         "Tailwind CSS",
         "AI Integration",
      ],
      img: RelogImage.src,
      description:
         "Release-note creation can be tedious when changes are buried across a repository's commit history. I built an AI-powered workflow that turns public GitHub commits into categorized release notes with real-time Markdown editing and export.",
      openSource: {
         stars: "https://img.shields.io/github/stars/tasha-dev/relog?style=flat&logo=github&logoColor=white&color=green&label=Stars",
         forks: "https://img.shields.io/github/forks/tasha-dev/relog?style=flat&logo=github&logoColor=white&color=green&label=Forks",
         contributors:
            "https://img.shields.io/github/contributors/tasha-dev/relog?style=flat&logo=github&logoColor=white&color=green&label=Contributors",
      },
   },
   {
      name: "NexaPanel",
      url: "https://nexapanel-gamma.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      description:
         "A dashboard experience built to demonstrate how complex internal tools can remain organized and easy to navigate. I developed reusable interfaces for products, posts, todos, quotes, and comments, including list and detail workflows backed by live API data.",
      openSource: {
         stars: "https://img.shields.io/github/stars/tasha-dev/nexapanel?style=flat&logo=github&logoColor=white&color=green&label=Stars",
         forks: "https://img.shields.io/github/forks/tasha-dev/nexapanel?style=flat&logo=github&logoColor=white&color=green&label=Forks",
         contributors:
            "https://img.shields.io/github/contributors/tasha-dev/nexapanel?style=flat&logo=github&logoColor=white&color=green&label=Contributors",
      },
   },
   {
      name: "Markio",
      url: "https://markio.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "ShadCN"],
      img: MarkioImage.src,
      description:
         "A lightweight note-taking experience designed for capturing ideas without distractions. I built a minimal interface focused on fast note creation and straightforward organization.",
      openSource: {
         stars: "https://img.shields.io/github/stars/tasha-dev/markio?style=flat&logo=github&logoColor=white&color=green&label=Stars",
         forks: "https://img.shields.io/github/forks/tasha-dev/markio?style=flat&logo=github&logoColor=white&color=green&label=Forks",
         contributors:
            "https://img.shields.io/github/contributors/tasha-dev/markio?style=flat&logo=github&logoColor=white&color=green&label=Contributors",
      },
   },
   {
      name: "EvolveOS",
      url: "https://evolveos.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      img: EvolveosImage.src,
      description:
         "Personal productivity tools often become fragmented across multiple apps. I built EvolveOS as a local-first workspace combining journaling, habits, tasks, and daily planning into one offline-friendly experience.",
      openSource: {
         stars: "https://img.shields.io/github/stars/tasha-dev/evolveos?style=flat&logo=github&logoColor=white&color=green&label=Stars",
         forks: "https://img.shields.io/github/forks/tasha-dev/evolveos?style=flat&logo=github&logoColor=white&color=green&label=Forks",
         contributors:
            "https://img.shields.io/github/contributors/tasha-dev/evolveos?style=flat&logo=github&logoColor=white&color=green&label=Contributors",
      },
   },
   {
      name: "Brainmark",
      url: "https://brainmark.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      img: BrainmarkImage.src,
      description:
         "Saving bookmarks is easy, but remembering why they mattered is not. I built a bookmark manager that captures the reasoning behind each saved link and resurfaces useful links over time using spaced-repetition principles.",
      openSource: {
         stars: "https://img.shields.io/github/stars/tasha-dev/brainmark?style=flat&logo=github&logoColor=white&color=green&label=Stars",
         forks: "https://img.shields.io/github/forks/tasha-dev/brainmark?style=flat&logo=github&logoColor=white&color=green&label=Forks",
         contributors:
            "https://img.shields.io/github/contributors/tasha-dev/brainmark?style=flat&logo=github&logoColor=white&color=green&label=Contributors",
      },
   },
   {
      name: "Persian Bank (React)",
      url: "https://persian-bank-react.vercel.app/",
      stack: ["TypeScript", "React"],
      description:
         "Developers repeatedly need to identify Iranian banks from card numbers and IBANs. I built an open-source React utility that handles this lookup and returns bank information and icons, making the functionality reusable across projects.",
      openSource: {
         stars: "https://img.shields.io/github/stars/tasha-dev/persian-bank-react?style=flat&logo=github&logoColor=white&color=green&label=Stars",
         forks: "https://img.shields.io/github/forks/tasha-dev/persian-bank-react?style=flat&logo=github&logoColor=white&color=green&label=Forks",
         contributors:
            "https://img.shields.io/github/contributors/tasha-dev/persian-bank-react?style=flat&logo=github&logoColor=white&color=green&label=Contributors",
      },
   },
];
// Exporting project as default
export default projects;
