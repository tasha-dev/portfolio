// Codes by mahdi tasha
// Importing part
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Creating and exporting cn function to combine tailwindcss classnames
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}