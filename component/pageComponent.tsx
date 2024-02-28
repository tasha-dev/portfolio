// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HeaderComponent from "@/component/headerComponent";

// Defining type of prop[s
interface propsType {
    children: ReactNode;
}

// Creating and exporting page component as default
export default function PageComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    );
}