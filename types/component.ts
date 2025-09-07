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

export interface PersonComponentProps {
  className?: string;
  data: {
    name: string;
    image?: string;
    description: string;
    role: string;
    links: {
      ig?: string; // Instagram
      tg?: string; // Telegram
      gh?: string; // Github
    };
  };
}
