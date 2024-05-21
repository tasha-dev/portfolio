// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {commentType} from "@/type";

// Creating and exporting comment component as default
export default function Comment({children, name}:commentType):ReactNode {
    // Returning JSX
    return (
        <div className={'bg-gradient-to-br from-richBlack to-chineseBlack border border-gunMetal lg:rounded-[23px] rounded-[10px] lg:py-[50px] py-[30px] lg:px-[50px] px-[20px] lg:h-[300px] flex flex-col items-start justify-between'}>
            <p className={'text-white mb-[20px] font-normal lg:text-[20px] text-[16px] line-clamp-6'}>{children}</p>
            <div className={'flex items-center justify-start gap-[20px]'}>
                <div className={'bg-white text-black aspect-square rounded-full w-[50px] h-[50px] text-[20px] font-bold flex items-center justify-center shrink-0'}>{name[0]}</div>
                <span className={'truncate lg:text-[18px] text-[16px] font-semibold text-white block w-full text-left'}>{name}</span>
            </div>
        </div>
    );
}