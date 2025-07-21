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

export interface projectCardProps {
  className?: string;
  data: {
    img?: string;
    title: string;
    description: string;
    stack: string[];
    liveUrl: string;
    status: 'completed' | 'pending';
    dates?: {
      startedAt: string;
      endedAt?: string;
    };
  };
}

export interface skillsCardProps {
  className?: string;
  data: {
    title:
      | 'html'
      | 'css'
      | 'sass'
      | 'js'
      | 'ts'
      | 'react'
      | 'next'
      | 'tailwind'
      | 'bootsrap'
      | 'git'
      | 'vite'
      | 'jest'
      | 'zod'
      | 'rhf'
      | 'axios'
      | 'reactquery'
      | 'framer'
      | 'shadcn';
  };
}
