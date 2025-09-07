// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { ProjectComponentProps } from "@/types/component";
import { ReactNode } from "react";
import { Badge } from "./ui/badge";
import { CircleCheck, CircleDashed, Code, Globe } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

// Creating and exporting Project component as default
export default function Project({
  data: { dates, description, liveUrl, stack, status, title },
  className,
}: ProjectComponentProps): ReactNode {
  // Returning JSX
  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="text-lg flex-1 font-bold truncate block">{title}</h3>
        <div className="shrink-0 flex items-center justify-between">
          {liveUrl && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant={"ghost"} size="icon">
                  <Link target="_blank" href={liveUrl}>
                    <Globe />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Click to see live version</TooltipContent>
            </Tooltip>
          )}
          <Tooltip>
            <TooltipTrigger>
              <Button variant={"ghost"} size="icon" className="cursor-pointer">
                {status === "pending" ? <CircleDashed /> : <CircleCheck />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {status === "pending"
                ? "This project is underdeveloping "
                : "This projec is Completed"}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <p className="text-sm leading-6 font-normal mt-0 mb-5">{description}</p>
      <div>
        <ul className="flex items-center justify-start gap-2 flex-wrap">
          {stack.map((item, index) => (
            <li key={index}>
              <Badge className="flex items-center justify-start w-fit gap-2 text-xs">
                <Code />
                {item}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
