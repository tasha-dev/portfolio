import { ClassOnlyProps } from "@/type/component";
import { cn, experiance } from "@/lib/util";

export default function Experience({ className }: ClassOnlyProps) {
   return (
      <section className={cn("p-4", className)}>
         <main className="max-w-2xl mx-auto prose prose-neutral dark:prose-invert w-full">
            <h2>Building Modern Web Experiences Since 2020</h2>
            <p>
               I’ve been working as a frontend developer since 2020 (
               {experiance} Years), building responsive, performant, and
               production-ready web applications for clients and personal
               projects. My work focuses on turning designs and ideas into
               clean, maintainable interfaces using modern frontend
               technologies.
            </p>
            <hr />
            <div>
               <h3>2020 - Present</h3>
               <ul>
                  <li>
                     Build modern web applications for clients and businesses.
                  </li>
                  <li>
                     Develop responsive interfaces that work across desktop,
                     tablet, and mobile.
                  </li>
                  <li>
                     Turn Figma/UI designs into accurate, production-ready
                     implementations.
                  </li>
                  <li>
                     Build applications with React, Next.js, TypeScript, and
                     Tailwind CSS.
                  </li>
                  <li>
                     Integrate REST APIs and connect frontend applications to
                     existing backends.
                  </li>
                  <li>
                     Implement authentication flows, forms, validation, state
                     management, and dynamic interfaces.
                  </li>
                  <li>
                     Improve website performance through optimized rendering,
                     lazy loading, and efficient component architecture.
                  </li>
                  <li>
                     Implement SEO-friendly pages and technical SEO improvements
                     in Next.js.
                  </li>
                  <li>
                     Deploy and maintain projects using modern hosting and CI/CD
                     workflows.
                  </li>
                  <li>
                     Collaborate with clients to understand requirements,
                     iterate on feedback, and deliver projects on time.
                  </li>
               </ul>
            </div>
            <hr />
            <div>
               <h3>React & Next.js Development</h3>
               <p>
                  I specialize in creating scalable frontend architectures
                  rather than simply building static pages. <br /> What I work
                  with:
               </p>
               <ul>
                  <li>React.js</li>
                  <li>Next.js</li> <li>TypeScript</li> <li>JavaScript</li>
                  <li>Tailwind CSS</li> <li>Sass</li> <li>React Hook Form</li>
                  <li>Framer Motion</li> <li>Recharts</li>
                  <li>Vite</li>
                  <li>Git & GitHub</li>
               </ul>
               <p>Core strengths:</p>
               <ul>
                  <li>Component-driven architecture</li>
                  <li>Responsive design</li>
                  <li>UI implementation</li>
                  <li>API integration</li>
                  <li>Authentication</li>
                  <li>Performance optimization</li>
                  <li>SEO</li>
                  <li>Accessibility</li>
                  <li>Clean and maintainable code</li>
               </ul>
            </div>
            <hr />
            <div>
               <h3>Production Websites & Web Applications</h3>
               <p>Across my projects, I’ve worked on:</p>
               <ul>
                  <li>Admin panels and management systems</li>
                  <li>Custom CMS interfaces</li>
                  <li>SaaS-style applications</li>
                  <li>Business websites</li>
                  <li>Landing pages</li>
                  <li>Interactive web experiences</li>
                  <li>Custom component systems</li>
                  <li>API-driven applications</li>
               </ul>
               <p>
                  My approach is focused on performance, usability,
                  maintainability, and attention to detail rather than simply
                  making an interface look good.
               </p>
            </div>
            <hr />
            <div>
               <h3>From idea → production</h3>
               <p>
                  I can take a frontend project from an initial design or
                  concept to a deployed, production-ready application.
               </p>
               <h4>My process:</h4>
               <p>
                  Understand → Design → Build → Integrate → Optimize → Deploy
               </p>
               <p>
                  I care about writing code that is easy to understand,
                  interfaces that feel polished, and products that perform well
                  in the real world.
               </p>
            </div>
         </main>
      </section>
   );
}
