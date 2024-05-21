// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of components and exporting them
export interface rootLayoutType {children: ReactNode;}
export type stack = 'next' | 'react' | 'tailwind' | 'typescript' | 'firebase';
export interface headerItemType {
    href: string;
    className?: string;
    children: string;
}

export interface containerType {
    children: ReactNode;
    className?: string;
}

export interface buttonType {
    link?: string;
    children: string;
    hasIcon?: boolean;
    className?: string;
    onClick?: () => {};
    tiltClassName?: string;
}

export interface projectType {
    link: string;
    img: string;
    title: string;
    description: string;
    stack: stack[];
}

export interface stackIconType {
    icon: stack;
    className?: string;
}

export interface commentType {
    children: string;
    name: string;
}

export interface socialIconType {
    icon: 'ig' | 'gh' | 'ld';
    link: string;
}