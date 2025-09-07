// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { ReactNode } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/component/ui/tooltip";

// Defining links of header
const links: {
  label: string;
  href: string;
}[] = [
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

// Creating and exporting Header component as default
export default function Header(): ReactNode {
  // Defining hooks
  const { theme, setTheme } = useTheme();

  // Returning JSX
  return (
    <header className="flex items-center justify-between gap-5 mb-10">
      <ul className="flex items-center justify-center gap-6">
        {links.map((item, index) => (
          <li key={index}>
            <Button
              asChild
              variant={"link"}
              className="!ring-0 !outline-none focus:underline p-0"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            size="icon"
            className="cursor-pointer"
            onClick={() => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            <SunMoon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Change Theme</TooltipContent>
      </Tooltip>
    </header>
  );
}
