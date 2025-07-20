// Codes by mahdi tasha
// Importing part
import { ReactNode } from 'react';

// Creating and exporting type of component props
export interface childrenOnlyProp {
  children: ReactNode;
}

export interface classNameOnlyProp {
  className?: string;
}

export interface childrenClassNameOnlyProps {
  className?: string;
  children: ReactNode;
}

export interface pageProps extends childrenClassNameOnlyProps {
  variant?: 'sm' | 'lg';
}

export interface sectionProps extends childrenClassNameOnlyProps {
  id?: string;
  delay?: number;
}
