// Codes by mahdi tasha
// Importing part
import { Project } from "./general";

// Defining types for props in components
export interface RootLayoutProps {
   children: React.ReactNode;
}

export interface ClassOnlyProps {
   className?: string;
}

export interface NavItem {
   label: string;
   href: string;
   download?: boolean;
}

export interface NavSheetProps {
   data: NavItem[];
   className?: string;
}

export interface ProjectProps {
   className?: string;
   data: Project;
}
