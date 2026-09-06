// Codes by mahdi tasha
// Creating and exporting general types
export interface Project {
  name: string;
  url: string;
  stack: string[];
  description: string;
  img?: string;
}

export interface Proof {
  img?: string;
  name: string;
  date: string;
  message: string;
}
