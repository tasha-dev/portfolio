// Codes by mahdi tasha
// Importing part
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import CryptoJS from "crypto-js";

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

// Creating and exporting functions to encrypt and decrypt given valuees
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || "fallback-key";

export function encryptValue(value: string | number): string {
  return CryptoJS.AES.encrypt(value.toString(), SECRET_KEY).toString();
}

export function decryptValue(value: string | number): string {
  const bytes = CryptoJS.AES.decrypt(value.toString(), SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}
