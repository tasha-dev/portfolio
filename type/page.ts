// Codes by mahdi tasha
// Creating and exporting type of props of pages
export interface ErrorPageProps {
   error: Error & { digest?: string };
   reset: () => void;
}
