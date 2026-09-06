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

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

  const first = parts[0].charAt(0);
  const last = parts[parts.length - 1].charAt(0);

  return (first + last).toUpperCase();
}
