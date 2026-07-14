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
            <div className="grid lg:grid-cols-2 gap-4 max-w-2xl mx-auto">
               {projects.map((item, index) => (
                  <Project key={index} data={item} />
               ))}
            </div>
         </main>
      </section>
   );
}
