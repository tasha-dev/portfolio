// Codes by mahdi tasha
// Importing part
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Creating cn function which takes class values and runs clsx and twMerge functions on them
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Creating and exporting a function to return first letter of each word
export function getInitials(value: string) {
  return value
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();
}
