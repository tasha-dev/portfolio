// Codes by mahdi tasha
// Importing part
import Header from "@/component/header";
import Hero from "@/component/section/hero";
import Skills from "@/component/section/skils";

// Creating and exporting Home page as default
export default function HomePage() {
   // Returning JSX
   return (
      <>
         <Header />
         <Hero />
         <Skills />
      </>
   );
}
