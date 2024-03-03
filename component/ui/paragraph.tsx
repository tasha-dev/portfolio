// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {paragraphType} from '@/types/uiComponent';

// Creating and exporting paragraph component as default
export default function Paragraph({children}:paragraphType):ReactNode {
    // Returning JSX
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-white text-black">
            {children}
        </p>
    );
}