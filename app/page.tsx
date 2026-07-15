// Codes by mahdi tasha
// Importing part
import Header from "@/component/header";
import { Contact } from "@/component/section/contact";
import Hero from "@/component/section/hero";
import { Projects } from "@/component/section/projects";
import Skills from "@/component/section/skils";

// Creating and exporting Home page as default
export default function HomePage() {
   // Returning JSX
   return (
      <>
         <Header />
         <Hero />
         <Skills className="lg:mb-8 mb-5" />
         <Projects />
         <Contact />
      </>
   );
}
