// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Creating and exporting type of components
export interface RootLayoutType {children: ReactNode;}
export interface LogoType {mq?: boolean;}
export interface PlusSvgDividerType {position?: 'bottom' | 'top';}
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
    link: string;
    img?: string;
    title: string;
    description: string;
    status: 'done' | 'in-progress' | 'failed';
    useVpn: boolean;
}