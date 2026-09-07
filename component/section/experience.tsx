import { ClassOnlyProps } from "@/type/component";
import { cn, experiance } from "@/lib/util";

export default function Experience({ className }: ClassOnlyProps) {
   return (
      <section className={cn("p-4", className)} id="experience">
         <main className="max-w-2xl mx-auto prose prose-neutral dark:prose-invert w-full">
            <h2>Building Modern Web Experiences Since 2020</h2>
            <p>
               {experiance}+ years of professional frontend development,
               building responsive and production-ready web applications for
               clients and businesses with React, Next.js, TypeScript, and
               Tailwind CSS.
            </p>
            <hr />
            <div>
               <h3>2020 — 2021</h3>
               <h4>Frontend Developer</h4>

               <ul>
                  <li>
                     Built responsive websites and interactive user interfaces
                     with HTML, CSS, and JavaScript.
                  </li>
                  <li>
                     Translated designs into responsive, reusable frontend
                     components.
                  </li>
                  <li>
                     Improved cross-device usability through responsive layouts
                     and browser compatibility.
                  </li>
               </ul>
            </div>
            <hr />
            <div>
               <h3>2021 — Present</h3>
               <h4>Freelance Frontend Developer</h4>
               <ul>
                  <li>
                     Built production web applications for clients using React,
                     Next.js, TypeScript, and Tailwind CSS.
                  </li>
                  <li>
                     Developed admin panels, custom CMS interfaces, business
                     websites, landing pages, and SaaS-style applications.
                  </li>
                  <li>
                     Integrated REST APIs, authentication, forms, validation,
                     and dynamic application state.
                  </li>
                  <li>
                     Converted Figma designs into responsive, reusable, and
                     maintainable interfaces.
                  </li>
                  <li>
                     Improved application performance through optimized
                     rendering, lazy loading, and frontend architecture.
                  </li>
                  <li>
                     Implemented SEO-friendly pages and technical SEO
                     improvements for Next.js applications.
                  </li>
                  <li>
                     Collaborated directly with clients, handled feedback, and
                     delivered projects from initial requirements through
                     deployment.
                  </li>
               </ul>
            </div>
            <hr />
            <div>
               <h3>Selected Product Experience</h3>
               <ul>
                  <li>
                     <strong>Admin Panels:</strong> Built component-driven
                     interfaces for managing application data and workflows.
                  </li>
                  <li>
                     <strong>Custom CMS:</strong> Developed reusable content
                     management interfaces with a focus on usability and
                     maintainable architecture.
                  </li>
                  <li>
                     <strong>SaaS Applications:</strong> Built interactive,
                     API-driven interfaces with authentication, forms, and
                     dynamic state.
                  </li>
                  <li>
                     <strong>Business Websites:</strong> Delivered responsive,
                     SEO-friendly websites focused on performance and polished
                     UX.
                  </li>
               </ul>
            </div>
         </main>
      </section>
   );
}
