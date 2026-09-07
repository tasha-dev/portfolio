// Codes by mahdi tasha
// Creating and exporting Projects section component as default
import { ProjectProps } from "@/type/component";
import { cn } from "@/lib/util";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";

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
         {!data.img && data.openSource && (
            <div className="flex items-center justify-between gap-4 flex-wrap">
               <Badge className="backdrop-blur-2xl text-green-500 bg-current/10 border border-current/15">
                  <Star className="fill-current" />
                  Open Source
               </Badge>
               <div className="flex items-center gap-3 flex-wrap">
                  {Object.values(data.openSource).map((item, index) => (
                     <img
                        key={index}
                        alt={"Github Information"}
                        className="!m-0"
                        src={item}
                     />
                  ))}
               </div>
            </div>
         )}
         {data.img ? (
            !data.openSource ? (
               <Image
                  src={data.img}
                  alt={data.name}
                  width={500}
                  height={500}
                  className="w-full aspect-video object-cover rounded-lg bg-muted m-0"
               />
            ) : (
               <div className="relative overflow-hidden">
                  <Badge className="backdrop-blur-2xl text-green-500 bg-current/10 border border-current/15 absolute left-4 top-4">
                     <Star className="fill-current" />
                     Open Source
                  </Badge>
                  <div className="p-4 left-0 bottom-0 absolute w-full flex-wrap flex items-center justify-start gap-3">
                     {Object.values(data.openSource).map((item, index) => (
                        <img
                           key={index}
                           alt={"Github Information"}
                           className="!m-0"
                           src={item}
                        />
                     ))}
                  </div>
                  <Image
                     src={data.img}
                     alt={data.name}
                     width={500}
                     height={500}
                     className="w-full aspect-video object-cover rounded-lg bg-muted !m-0"
                  />
               </div>
            )
         ) : (
            false
         )}
      </Link>
   );
}
