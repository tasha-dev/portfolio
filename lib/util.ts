// Codes by mahdi tasha
// Importing part
import { clsx, type ClassValue } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

// Defining helper and utility functions
export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function calculateAge(birthDate: string | Date): number {
   return moment().diff(moment(birthDate), "years");
}

// Defining variables
export const experiance = calculateAge("2020-03-21");
