// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of components and exporting them
export interface rootLayoutType {children: ReactNode;}
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