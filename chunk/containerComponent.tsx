// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

// Defining type of props
interface propsType {
    type?: 'small' | 'large';
    children: ReactNode;
    className?: string;
}

// Creating and exporting container component as default
export default function ContainerComponent({className, children, type = 'small'}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={
            twMerge(
                'mx-auto p-[20px]',
                (type === 'large') ? 'max-w-[1100px]' : 'max-w-[600px]',
                className
            )
        }>
            {children}
        </div>
    );
}