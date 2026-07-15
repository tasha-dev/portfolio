// Codes by mahdi tasha
// Creating and exporting Projects section component as default
import { ProjectProps } from "@/type/component";
import { cn } from "@/lib/util";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Code } from "lucide-react";

// Creating Projects section component
export default function Project({ data, className }: ProjectProps) {
   // Returning JSX
   return (
      <Link
         href={data.url}
         className={cn(
            "prose prose-neutral dark:prose-invert w-full max-w-full block",
            className,
         )}
      >
         <h4>{data.name}</h4>
         <p>{data.description}</p>
         {data.img && (
            <img
               src={data.img}
               alt={data.name}
               className="w-full aspect-video object-cover rounded-lg bg-muted"
            />
         )}
         <div className="flex flex-wrap gap-2">
            {data.stack.map((item, index) => (
               <Badge key={index}>
                  <Code />
                  {item}
               </Badge>
            ))}
         </div>
      </Link>
   );
}
