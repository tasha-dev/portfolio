// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { ReactNode } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "@/public/Vector.png";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Image from "next/image";

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
      <Link href="/" className="md:hidden block">
        <Image
          alt="Mahdi Tasha Logo"
          src={Logo.src}
          width={100}
          height={100}
          className="w-10 object-cover invert"
        />
      </Link>
      <ul className="md:flex hidden items-center justify-center gap-6">
        {links.map((item, index) => (
          <li key={index}>
            <Button
              asChild
              variant={"link"}
              className="!ring-0 !outline-none focus:underline p-0"
            >
              <Link href={`/${item.href}`}>{item.label}</Link>
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
