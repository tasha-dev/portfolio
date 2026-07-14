// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { NavSheetProps } from "@/type/component";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { List } from "lucide-react";
import Link from "next/link";

// creating and exporting NavSheet component as default
export default function NavSheet({ data, className }: NavSheetProps) {
   // Returning JSX
   return (
      <Sheet>
         <SheetTrigger
            render={
               <Button size={"icon"} variant={"ghost"} className={className}>
                  <List />
               </Button>
            }
         />
         <SheetContent>
            <SheetHeader>
               <SheetTitle>Elsewhere</SheetTitle>
               <SheetDescription>
                  Find me across the web, or reach out directly — always open to
                  a good conversation about your next project.
               </SheetDescription>
            </SheetHeader>
            <div className="prose prose-neutral dark:prose-invert w-full max-w-full">
               <ul className="list-inside">
                  {data.map((item, index) => (
                     <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                     </li>
                  ))}
               </ul>
            </div>
         </SheetContent>
      </Sheet>
   );
}
