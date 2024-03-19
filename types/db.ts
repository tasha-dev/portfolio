// Codes by mahdi tasha
// Defining and exporting related types to database
export interface blogType {
    content: string;
    date: string;
    description: string;
    name: string;
}

export interface portfolioType {
    description: string;
    stack: string[];
    title: string;
    link: string;
    date: {
        end: string;
        start: string
    };
}