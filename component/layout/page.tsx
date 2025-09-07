// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/utils";
import { PageProps } from "@/type/component";
import { ReactNode } from "react";

// Creating and exporting Page component as default
export default function Page({ children, className }: PageProps): ReactNode {
  // Returning JSX
  return (
    <div className={cn("mx-auto p-5 max-width-layout", className)}>
      {children}
    </div>
  );
}
