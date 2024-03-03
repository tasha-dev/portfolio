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
}

export interface titleType {
    children: ReactNode;
    tier: 1 | 2 | 3 | 4;
}

export interface paragraph {
    children: ReactNode;
}