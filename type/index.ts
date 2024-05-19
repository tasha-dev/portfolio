// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of components and exporting them
export interface rootLayoutType {children: ReactNode;}
export interface headerType {showingSection: `#${string}`;}
export interface headerItemType {
    href: string;
    className?: string;
    active: boolean;
    children: string;
}

export interface containerType {
    children: ReactNode;
    className?: string;
}