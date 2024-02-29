// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    title: string;
    children: ReactNode;
}

// Creating and exporting list item component as default
export default function ListItemComponent({title, children}:propsType):ReactNode {
    // Returning JSX
    return (
        <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}>
            <b>{title} :</b> {children}
        </li>
    );
}