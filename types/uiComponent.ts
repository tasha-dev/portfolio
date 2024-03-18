// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining types
export interface containerType {
    size?: 'lg' | 'sm';
    children: ReactNode;
    className?: string;
}

export interface pageType {
    children: ReactNode;
    className?: string;
}

export interface linkType {
    title: string;
    link: string;
}

export interface profileType {
    img: string;
    name: string;
    role: string;
    link: linkType[];
    className?: string;
}

export interface titleType {
    children: ReactNode;
    className?: string;
    tier: 1 | 2 | 3 | 4;
}

export interface paragraphType {
    children: ReactNode;
    className?: string;
}

export interface listType {
    children: ReactNode;
}

export interface workType {
    name: string;
    link: string;
    children: ReactNode;
    stack: string[];
    date: {
        end: string;
        start: string;
    };
}

export interface arrowLinkType {
    title: string;
    link: string;
}

export interface headerLinkType {
    children: ReactNode;
    link: string;
}

export interface blogType {
    title: string;
    date: string;
    content: string;
}