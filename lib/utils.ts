// Codes by mahdi tasha
// Importing part
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Creating cn function which takes class values and runs clsx and twMerge functions on them
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
