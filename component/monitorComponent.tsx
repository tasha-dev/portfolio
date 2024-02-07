// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType{
    hasWhiteSide: boolean;
    children: ReactNode;
    noPadding?: boolean;
    className?: string;
    smallOuterPading?: boolean;
}

// Creating And Exporting Monitor Component As Default
export default function MonitorComponent({children, hasWhiteSide = true, noPadding = false, className, smallOuterPading}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={`bg-darker-theme rounded-[10px] ${(smallOuterPading) ? 'p-[10px]' : 'p-[20px]'} ${(className !== null) ? className : ''}`}>
            <div className={`bg-theme rounded-[10px] relative overflow-hidden ${(noPadding) ? '' : 'p-[20px]'}`}>
                {
                    (hasWhiteSide)
                        ? <div className={'w-[300px] h-full bg-white/10 -rotate-45 absolute left-[-150px] top-[-100px]'} />
                        : false
                }
                <div className={'noise-img'} />
                {children}
            </div>
        </div>
    );
}