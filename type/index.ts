// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Creating and exporting type of components
export interface RootLayoutType {children: ReactNode;}
export interface PlusSvgDividerType {position?: 'bottom' | 'top';}
export interface SkillsType {title: string;}
export interface ContainerType {
    children: ReactNode;
    size?: 'sm' | 'lg';
    className?: string;
}

export interface PageLayoutType {
    className?: string;
    children: ReactNode;
}

export interface ProjectType {
    widthFull?: boolean;
    portfolioLink: string;
    link: string;
    img?: string;
    title: string;
    description: string;
    status: 'done' | 'in-progress' | 'failed';
    useVpn: boolean;
}

export interface ExperienceType {
    title: string;
    description: string;
    fromDate: Date;
    untillDate: Date | 'present';
    company: string;
    isLast?: boolean;
}

export interface ProjectPageType {
    params: {
        projectName: string;
    }
}

export interface BlogsType {
    tags: string[];
    description: string;
    content: string;
    title: string;
    date: string;
    image?: string;
}

export interface BlogPageType {
    params: {
        blogName: string;
    }
}

export interface ThemeToggleType {
    hasText?: boolean;
}

export interface QuickLinkType {
    type: 'link' | 'pdf-resume';
    title: string;
    link?: string;
    pdfFile?: string;
}