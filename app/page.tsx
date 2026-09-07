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
      <>
         <Header />
         <Hero />
         <Skills className="lg:mb-8 mb-5 lg:mt-0 mt-5" />
         <Projects className="lg:border-0 border-t border-t-foreground/20" />
         <Experience className="lg:border-0 border-t border-t-foreground/20" />
         <WhatICanBuild className="lg:border-0 border-t border-t-foreground/20" />
         <Proof className="lg:border-y border-t border-foreground/20" />
         <Contact className="lg:border-0 border-t border-t-foreground/20" />
         <Footer />
      </>
   );
}
