// Codes by mahdi tasha
// Importing part
import Page from "@/components/layout/page";
import Person from "@/components/person";
import { differenceInYears } from "date-fns";
import { ReactNode } from "react";

// Creating and exporting Home page as default
export default function HomePage(): ReactNode {
  // Returning JSX
  return (
    <Page>
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
    </Page>
  );
}
