// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/utils";
import { PageProps } from "@/types/component";
import { ReactNode } from "react";
import Header from "../header";

// Creating and exporting Page component as default
export default function Page({ children, className }: PageProps): ReactNode {
  // Returning JSX
  return (
    <div className={cn("mx-auto p-5 max-w-[650px]", className)}>
      <Header />
      {children}
    </div>
  );
}
