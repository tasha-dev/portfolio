// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { MarkdownProps } from "@/types/component";
import { Loader2 } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Md } from "@m2d/react-markdown";

// Creating and exporting Markdown component as default
export default function Markdown({ contentPath }: MarkdownProps): ReactNode {
  // Defining hooks
  const [contentLoading, setContentLoading] = useState<boolean>(true);
  const [content, setContent] = useState<string | undefined>(undefined);

  // Using useEffect to fetch content from path
  useEffect(() => {
    fetch(contentPath)
      .then((data) => data.text())
      .then((data) => setContent(data))
      .finally(() => setContentLoading(false));
  }, []);

  // Conditional rendering
  if (contentLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="size-5 animate-spin text-foreground" />
      </div>
    );
  } else {
    return <Md className="markdown">{content}</Md>;
  }
}
