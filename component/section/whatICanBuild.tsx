import { ClassOnlyProps } from "@/type/component";
import { cn } from "@/lib/util";

export default function WhatICanBuild({ className }: ClassOnlyProps) {
   return (
      <section className={cn("p-4", className)} id="about">
         <main className="max-w-2xl mx-auto prose prose-neutral dark:prose-invert w-full">
            <h2>What I Can Build</h2>

            <p>
               I build modern, responsive web products that are designed to be
               fast, scalable, and easy to maintain — from new products built
               from scratch to improving existing applications.
            </p>
            <div>
               <h3>SaaS & Web Applications</h3>
               <p>
                  Build complete frontend experiences for SaaS products and web
                  applications, including authentication, dashboards, forms, API
                  integrations, and interactive workflows.
               </p>
            </div>

            <hr />

            <div>
               <h3>Landing Pages</h3>
               <p>
                  Create high-performance, responsive landing pages that
                  communicate your product clearly and are optimized for
                  usability, SEO, and conversion.
               </p>
            </div>

            <hr />

            <div>
               <h3>Dashboards & Internal Tools</h3>
               <p>
                  Build data-driven dashboards and internal tools with reusable
                  components, complex interfaces, forms, charts, tables, and
                  application workflows.
               </p>
            </div>

            <hr />

            <div>
               <h3>E-commerce</h3>
               <p>
                  Develop responsive e-commerce interfaces including product
                  pages, catalogs, shopping experiences, checkout flows, and
                  customer-facing interfaces.
               </p>
            </div>

            <hr />

            <div>
               <h3>Booking Platforms</h3>
               <p>
                  Build booking and scheduling interfaces with calendars,
                  availability, forms, user flows, and API-driven data.
               </p>
            </div>

            <hr />

            <div>
               <h3>Existing React / Next.js Product Improvements</h3>
               <p>
                  Improve existing applications through UI modernization,
                  performance optimization, responsive design, bug fixing,
                  refactoring, new features, and frontend architecture
                  improvements.
               </p>
            </div>
         </main>
      </section>
   );
}
