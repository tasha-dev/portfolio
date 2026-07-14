// Codes by mahdi tasha
// Creating and exporting Projects section component as default
import { ProjectProps } from "@/type/component";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/util";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Code } from "lucide-react";

// Creating Projects section component
export default function Project({ data, className }: ProjectProps) {
   // Returning JSX
   return (
      <Card className={cn("pt-0 overflow-hidden", className)}>
         <Link href={data.url}>
            <div className="h-[150px] bg-red-500 w-full mb-4" />
            <CardHeader>
               <CardTitle>{data.name}</CardTitle>
               <CardTitle>{data.description}</CardTitle>
            </CardHeader>
            <CardFooter>
               {data.stack.map((item, index) => (
                  <Badge key={index}>
                     <Code />
                     {item}
                  </Badge>
               ))}
            </CardFooter>
         </Link>
      </Card>
   );
}
