// Codes by mahdi tasha
// Importing part
import Page from "@/components/layout/page";
import Person from "@/components/person";
import { differenceInYears } from "date-fns";
import { ReactNode } from "react";
import blogs from "@/data/blogs";
import Blog from "@/components/blog";

// Creating and exporting Blogs page as default
export default function BlogsPage(): ReactNode {
  // Returning JSX
  return (
    <Page>
      <section className="mb-14">
        <main>
          <Person
            data={{
              name: "Mahdi Tasha",
              image: "https://github.com/tasha-dev.png",
              description: `I am a mid-level front-end developer with ${differenceInYears(new Date(), "2020-04-04")} years of experience building modern, responsive web applications. I enjoy teamwork, problem-solving, and creating interactive UIs using React, Next.js, and TypeScript.`,
              role: "Front-End Developer",
              resume: "resume.pdf",
              links: {
                ig: "https://instagram.com/1tashadev",
                tg: "https://t.me/tashaDEV",
                gh: "https://github.com/tasha-dev",
              },
            }}
          />
        </main>
      </section>
      <section className="mb-14">
        <main>
          <h2 className="mb-5">Blogs</h2>
          <div className="flex flex-col gap-12">
            {blogs.map((item, index) => (
              <Blog data={item} key={index} />
            ))}
          </div>
        </main>
      </section>
    </Page>
  );
}
