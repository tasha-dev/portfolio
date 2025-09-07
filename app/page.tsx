// Codes by mahdi tasha
// Importing part
import Page from "@/components/layout/page";
import Person from "@/components/person";
import { differenceInYears } from "date-fns";
import { ReactNode } from "react";
import projects from "@/data/projects";
import Project from "@/components/project";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Send } from "lucide-react";

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
      <section className="mb-14" id="contact">
        <main>
          <h2 className="mb-5">Contact Me</h2>
          <p className="mt-0">
            Whether you’ve got a project in mind, a question about my work, or
            just want to say hi—I’d love to hear from you. Feel free to drop me
            an email or send a quick message on Telegram. I’m always open to new
            ideas, collaborations, or a good conversation. Your message won’t
            get lost in the void—I actually read them!
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center gap-3 mt-10">
            <Button asChild>
              <Link
                href="https://t.me/tashaDEV"
                className="flex"
                target="_blank"
              >
                <Send />
                Telegram
              </Link>
            </Button>
            <span>OR</span>
            <Button asChild>
              <Link href="mailto:imwhdiiii@gmail.com" className="flex">
                <Mail />
                E-Mail
              </Link>
            </Button>
          </div>
        </main>
      </section>
    </Page>
  );
}
