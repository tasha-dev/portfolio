// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Creating and exporting Type of props of components
export interface RootLayoutProps {
  children: ReactNode;
}

export interface PageProps {
  children: ReactNode;
  className?: string;
}
