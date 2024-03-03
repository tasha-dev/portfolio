// Codes by mahdi tasha
// Creating and exporting getNameStand function which returns first letter of name
export default function getNameStand(string:string):string {
    return string
        .split(" ")
        .map((word:string) => word[0])
        .join("");
}