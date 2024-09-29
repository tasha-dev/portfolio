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

// Creating and exporting a function to calculate ages but returning a text
export function calculateAgeText(startDate: Date, endDate: Date): string {
    const start = dayjs(startDate);
    const end = dayjs(endDate);

    const totalMonths = end.diff(start, 'month');
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} Year${years > 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} Month${months > 1 ? 's' : ''}`);

    return parts.length > 0 ? parts.join(' & ') : '0 Years & 0 Months';
};

