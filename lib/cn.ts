// Codes by mahdi tasha
// Importing part
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Creating and exporting tailwindCSS classname utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}