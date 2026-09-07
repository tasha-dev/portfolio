// Codes by mahdi tasha
"use client";

// Importing part
import { cn } from "@/lib/util";
import { ClassOnlyProps, NavItem } from "@/type/component";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggler } from "./themeToggler";
import NavSheet from "./navSheet";
import { useScrolled } from "@/hook/useScrolled";
import { Dot, Plus } from "lucide-react";

// Defining data of nav to render
const navData: NavItem[] = [
   {
      label: "Projects",
      href: "/#projects",
   },
   {
      label: "About",
      href: "/#about",
   },
   {
      label: "Experience",
      href: "/#experience",
   },
   {
      label: "Resume",
      href: "/resume.pdf",
      download: true,
   },
];

// Creating and exporting Header component as default
export default function Header({ className }: ClassOnlyProps) {
   const scrolled = useScrolled();

   // Returning JSX
   return (
      <header
         data-scrolled={scrolled}
         className={cn(
            "sticky top-0 bg-background/50 backdrop-blur-3xl z-30 p-4 transition duration-500 border-b border-b-transparent",
            "data-[scrolled=true]:border-b-foreground/20",
            className,
         )}
      >
         <div className="mx-auto max-w-2xl flex justify-between gap-3">
            <Logo className="shrink-0" />
            <div className="flex-1 flex items-center justify-end gap-3">
               <nav className="lg:flex hidden items-center">
                  {navData.map((item, index) => (
                     <Button
                        key={index}
                        variant={"ghost"}
                        render={
                           <Link
                              href={item.href}
                              key={index}
                              download={item.download}
                           >
                              {item.label}
                           </Link>
                        }
                     />
                  ))}
               </nav>
               <Dot className="lg:block hidden mr-1.5" />
               <Button
                  size="sm"
                  className="lg:flex hidden"
                  render={<Link href="/#contact">Start a project</Link>}
               />
               <NavSheet data={navData} className="lg:hidden flex" />
               <ThemeToggler />
               <Button
                  size="icon"
                  className="lg:hidden flex"
                  render={
                     <Link href="/#contact">
                        <Plus />
                     </Link>
                  }
               />
            </div>
         </div>
      </header>
   );
}
