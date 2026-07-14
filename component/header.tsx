// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/util";
import { ClassOnlyProps, NavItem } from "@/type/component";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggler } from "./themeToggler";
import NavSheet from "./navSheet";

// Defining data of nav to render
const navData: NavItem[] = [
   {
      label: "Github",
      href: "https://github.com/tasha-dev",
   },
   {
      label: "Telegram",
      href: "https://t.me/tashaDEV",
   },
   {
      label: "Instagram",
      href: "https://instagram.com/1tashadev",
   },
   {
      label: "Resume",
      href: "",
      download: true,
   },
];

// Creating and exporting Header component as default
export default function Header({ className }: ClassOnlyProps) {
   // Returning JSX
   return (
      <header
         className={cn(
            "mx-auto max-w-2xl p-4 flex justify-between gap-3",
            className,
         )}
      >
         <Logo className="shrink-0" />
         <div className="flex-1 flex items-center justify-end">
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
                           target="_blank"
                        >
                           {item.label}
                        </Link>
                     }
                  />
               ))}
            </nav>
            <ThemeToggler />
            <NavSheet data={navData} className="lg:hidden flex" />
         </div>
      </header>
   );
}
