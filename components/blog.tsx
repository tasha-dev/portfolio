// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { BlogsComponentProps } from "@/types/component";
import { ReactNode } from "react";
import { Badge } from "./ui/badge";
import { Calendar, Tags } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { format } from "date-fns";
import { encryptValue } from "@/lib/utils";

// Creating and exporting Blog component as default
export default function Blog({
  data: { createdAt, keywords, title, description },
  className,
}: BlogsComponentProps): ReactNode {
  // Returning JSX
  return (
    <div className={className}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-bold block flex-1">
          <Link href={`/blog/${encodeURIComponent(encryptValue(title))}`}>
            {title}
          </Link>
        </h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size="icon" className="shrink-0">
              <Calendar />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Created At :{format(createdAt, "dd/MM/yyyy")}
          </TooltipContent>
        </Tooltip>
      </div>
      <p className="text-sm leading-6 font-normal mt-0 mb-5">{description}</p>
      <div>
        <ul className="flex items-center justify-start gap-2 overflow-auto scrollbar-hide">
          {keywords.map((item, index) => (
            <li key={index}>
              <Badge className="flex items-center justify-start w-fit gap-2 text-xs">
                <Tags className="shrink-0" />
                <span className="flex-1 text-left truncate">{item}</span>
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
