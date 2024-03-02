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