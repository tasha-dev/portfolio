// Codes by mahdi tasha
// Importing part
import Header from "@/component/header";
import { Contact } from "@/component/section/contact";
import Footer from "@/component/section/footer";
import Hero from "@/component/section/hero";
import { Projects } from "@/component/section/projects";
import Proof from "@/component/section/proof";
import Skills from "@/component/section/skils";
import Experience from "@/component/section/experience";
import WhatICanBuild from "@/component/section/whatICanBuild";

// Creating and exporting Home page as default
export default function HomePage() {
   // Returning JSX
   return (
      <article className="lg:space-y-0 space-y-10">
         <Header />
         <Hero />
         <Skills className="lg:border-0 border-t border-t-foreground/20" />
         <WhatICanBuild className="lg:border-0 border-t border-t-foreground/20" />
         <Projects className="lg:border-0 border-t border-t-foreground/20" />
         <Proof className="lg:border-y border-t border-foreground/20" />
         <Experience className="lg:border-0 border-t border-t-foreground/20" />
         <Contact className="lg:border-0 border-t border-t-foreground/20" />
         <Footer />
      </article>
   );
}
