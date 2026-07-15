// Codes by mahdi tasha
// Importing part
import projects from "@/data/projects";
import { ClassOnlyProps } from "@/type/component";
import Project from "../project";

// Creating and exporting Projects section component as default
export function Projects({ className }: ClassOnlyProps) {
   // Returning JSX
   return (
      <section className={className}>
         <main className="p-4">
            <div className="prose prose-neutral dark:prose-invert w-full max-w-2xl mx-auto mb-5">
               <h2>Projects</h2>
               <p>
                  A mix of client work and personal builds — booking platforms,
                  admin dashboards, and internal tools shipped for real users,
                  alongside side projects where I get to explore ideas end to
                  end.
               </p>
            </div>
            <div className="flex flex-col lg:gap-8 gap-6 max-w-2xl mx-auto">
               {projects.map((item, index) => (
                  <Project
                     className="last-of-type:border-b-0 border-b border-b-foreground/20 lg:pb-8 pb-6"
                     key={index}
                     data={item}
                  />
               ))}
            </div>
         </main>
      </section>
   );
}
