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

// Defining projects to be render
const projects: Project[] = [
   {
      name: "Webimode",
      url: "https://webimode-tau.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      img: WebimodeImage.src,
      description:
         'Webimode is a freelancing and digital-services platform for national and international clients, covering web/app development, UI/UX design, logo design, animation, content creation, and social media management. I built out the platform UI — service listings, request/quote flow, portfolio showcase, and blog — designed to take a client from "I have an idea" to a scoped, quoted project.',
   },
   {
      name: "Safarnameh24",
      url: "https://safarnameh24.com/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "ShadCN"],
      img: SafarnamehImage.src,
      description:
         "Safarnameh24 is a hotel and flight booking agency in Iran, offering instant vouchers, official invoices, and 24/7 support. I built the booking flow covering both hotels and flights under one consistent experience — search, compare, and book with instant confirmation.",
   },
   {
      name: "Connect",
      url: "https://connect-pwa.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "PWA"],
      img: ConnectImage.src,
      description:
         "Connect is a consumer-facing PWA super-app connecting users to a wide range of everyday services in one installable, unified experience. I worked on both sides of the product: the consumer PWA itself, and the admin dashboard that gives the Connect team centralized task tracking, data monitoring, and real-time analytics to run the platform.",
   },
   {
      name: "Zarvantrip",
      url: "https://zarvantrip.com/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "ShadCN"],
      img: ZarvantripImage.src,
      description:
         "Zarvantrip is an Iranian hotel-booking platform focused on Tehran and other major cities. I built the search-and-book flow — city/hotel selection, availability search, and checkout — making a multi-step booking process feel like a two-minute task.",
   },
   {
      name: "Finance System for Sevin Team",
      url: "https://www.finance.sevintm.com/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "RadixUI"],
      img: FinanceImage.src,
      description:
         "A complete internal finance system built for our own team, handling contracts and revenue-split calculations — tracking each developer's percentage on every project alongside broader financial reporting, making payouts transparent and auditable.",
   },
   {
      name: "Luster Salehi Bio Page",
      url: "https://www.qr.lustersalehi.com/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "RadixUI"],
      img: LusterImage.src,
      description:
         "A QR-scannable bio page built for a chandelier business (sales, restoration, plating, repair, and welding) — designed to be opened via QR code scan and funnel visitors straight to their Instagram, where their full catalog lives. Built for instant load and mobile-first clarity.",
   },
   {
      name: "NexaPanel",
      url: "https://nexapanel-gamma.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      description:
         "A modern SaaS-style admin dashboard demonstrating production-grade internal tool design — product management, posts, todos, quotes, and comments, each with full list/detail views, built on the DummyJSON API.",
   },
   {
      name: "Markio",
      url: "https://markio.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "ShadCN"],
      img: MarkioImage.src,
      description:
         "A lightweight, distraction-free note-taking app for quickly and securely storing ideas and lists.",
   },
   {
      name: "EvolveOS",
      url: "https://evolveos.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      img: EvolveosImage.src,
      description:
         "A local-first, markdown-powered personal growth system — journaling, habit tracking, task management, and daily planning in one offline-first dashboard.",
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
         "An AI-powered tool that generates clean, categorized release notes from any public GitHub repo's commit history — no login, no setup, real-time markdown editing and export.",
   },
   {
      name: "Brainmark",
      url: "https://brainmark.vercel.app/",
      stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      img: BrainmarkImage.src,
      description:
         'An intelligent bookmark manager that requires a one-sentence "why" for every saved link, then intelligently resurfaces links over time using spaced-repetition principles.',
   },
   {
      name: "Persian Bank (React)",
      url: "https://persian-bank-react.vercel.app/",
      stack: ["TypeScript", "React"],
      img: "",
      description:
         "An open-source React utility library that identifies Iranian banks from card numbers or Sheba/IBAN, returning bank info and icons — saving developers from rebuilding this lookup logic on every project.",
   },
];

// Exporting project as default
export default projects;
