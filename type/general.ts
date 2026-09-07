// Codes by mahdi tasha
// Creating and exporting general types
export interface Project {
   name: string;
   url: string;
   stack: string[];
   description: string;
   img?: string;
   openSource?: {
      stars: string;
      forks: string;
      contributors: string;
   };
}

export interface Proof {
   img?: string;
   name: string;
   date: string;
   message: string;
}
