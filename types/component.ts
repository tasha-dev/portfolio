// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import { BlogType, ProjectType } from "./general";

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
    resume?: string;
    links: {
      ig?: string; // Instagram
      tg?: string; // Telegram
      gh?: string; // Github
    };
  };
}

export interface ProjectComponentProps {
  data: ProjectType;
  className?: string;
}

export interface BlogsComponentProps {
  data: BlogType;
  className?: string;
}
