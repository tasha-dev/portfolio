// Codes by mahdi tasha
// Importing part
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import dayjs from 'dayjs';

// Creating and exporting a function to concat tailwindcss class names
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Creating and exporting a function to calculate given age
export function calculateAge(birthdate: string): number {
    const today = dayjs(); // Get today's date
    const birthDate = dayjs(birthdate); // Parse the birthdate
    return today.diff(birthDate, 'year'); // Calculate the difference in years
}