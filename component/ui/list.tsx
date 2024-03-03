// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {listType} from "@/types/uiComponent";

// Creating and exporting list component as default
export default function List({children}:listType):ReactNode {
    // Returning JSX
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2 dark:[&>li]:text-white [&>li]:text-black">
            {children}
        </ul>
    );
}