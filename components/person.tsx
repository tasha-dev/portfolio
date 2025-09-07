// Codes by mahdi tasha
// Importing part
import { PersonComponentProps } from "@/types/component";
import { ReactNode } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { getInitials } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Github, Instagram, Send } from "lucide-react";

// Creating and exporting Person component
export default function Person({
  data: { description, name, role, image, links },
  className,
}: PersonComponentProps): ReactNode {
  // Returning JSX
  return (
    <div className={className}>
      <div className="flex items-center justify-start gap-5 mb-2">
        <Avatar className="shrink-0 size-20 aspect-square bg-foreground flex items-center justify-center">
          <AvatarFallback className="text-background">
            {getInitials(name)}
          </AvatarFallback>
          {image && <AvatarImage src={image} alt={name} />}
        </Avatar>
        <div className="flex-1">
          <h1 className="text-lg p-0 font-bold border-none truncate block">
            {name}
          </h1>
          <h2 className="text-base border-none p-0 font-normal truncate block mb-3">
            {role}
          </h2>
          <ul className="flex items-center justify-start gap-2 flex-wrap">
            {links.gh && (
              <li>
                <Badge asChild>
                  <Link
                    href={links.gh}
                    className="flex items-center justify-start w-fit gap-2 text-xs"
                  >
                    <Github />
                    Github
                  </Link>
                </Badge>
              </li>
            )}
            {links.tg && (
              <li>
                <Badge asChild>
                  <Link
                    href={links.tg}
                    className="flex items-center justify-start w-fit gap-2 text-xs"
                  >
                    <Send />
                    Telegram
                  </Link>
                </Badge>
              </li>
            )}
            {links.ig && (
              <li>
                <Badge asChild>
                  <Link
                    href={links.ig}
                    className="flex items-center justify-start w-fit gap-2 text-xs"
                  >
                    <Instagram />
                    Instagram
                  </Link>
                </Badge>
              </li>
            )}
          </ul>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
