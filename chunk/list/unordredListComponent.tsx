// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting unordred list component as default
export default function UnordredListComponent({children}:propsType):ReactNode {
    // Returning JSX
    return <ul className={'list-disc ml-[20px]'}>{children}</ul>
}