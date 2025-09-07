// Codes by mahdi tasha
// Importing part
import Page from "@/components/layout/page";
import Person from "@/components/person";
import { differenceInYears } from "date-fns";
import { ReactNode } from "react";
import projects from "@/data/projects";
import Skills from "@/data/skills";
import Project from "@/components/project";
import { cn } from "@/lib/utils";

// Creating and exporting Home page as default
export default function HomePage(): ReactNode {
  // Returning JSX
  return (
    <Page>
      <section className="mb-14" id="about">
        <main>
          <Person
            data={{
              name: "Mahdi Tasha",
              image: "https://github.com/tasha-dev.png",
              description: `I am a mid-level front-end developer with ${differenceInYears(new Date(), "2020-04-04")} years of experience building modern, responsive web applications. I enjoy teamwork, problem-solving, and creating interactive UIs using React, Next.js, and TypeScript.`,
              role: "Front-End Developer",
              links: {
                ig: "https://instagram.com/1tashadev",
                tg: "https://t.me/tashaDEV",
                gh: "https://github.com/tasha-dev",
              },
            }}
          />
        </main>
      </section>
      <section className="mb-14" id="projects">
        <main>
          <h2 className="mb-5">Projects</h2>
          <div className="flex flex-col gap-12">
            {projects.map((item, index) => (
              <Project data={item} key={index} />
            ))}
          </div>
        </main>
      </section>
      <section className="mb-14" id="skills">
        <main>
          <h2 className="mb-5">Skills</h2>
          <div className="grid grid-cols-4 gap-4">
            {Skills.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center justify-center px-3 py-6 rounded-lg bg-foreground text-background",
                  (index === 16 || index === 17) && "col-span-2",
                )}
              >
                <span className="block text-center text-sm font-semibold truncate">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </main>
      </section>
    </Page>
  );
}
