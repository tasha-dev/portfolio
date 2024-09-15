// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Creating and exporting type of components
export interface RootLayoutType {children: ReactNode;}
export interface LogoType {mq?: boolean;}
export interface ContainerType {
    children: ReactNode;
    size?: 'sm' | 'lg';
    className?: string;
}