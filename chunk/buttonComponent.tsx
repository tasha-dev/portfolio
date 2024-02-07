// Codes By Mahdi Tasha
// Importing Part
import {MouseEventHandler, ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining Type Of Props
interface propsType {
    bgColor: string;
    iconColor: string;
    hasBorder: boolean;
    borderColor?: string;
    iconName: string;
    shadowColor: string;
    onClick: MouseEventHandler;
    className?: string;
    large?: boolean;
    tabIndex?: number;
}

// Creating And Exporting Button Component As Default
export default function ButtonComponent({bgColor,iconColor,iconName,hasBorder,borderColor, shadowColor, onClick, className, large, tabIndex}:propsType):ReactNode {
    // Conditional Rendering
    if (hasBorder) {
        return (
            <div className={`${borderColor} border-[15px] rounded-full flex items-center justify-center`}>
                <button tabIndex={(tabIndex !== null) ? tabIndex : 0} onClick={onClick}
                        className={
                            (className !== null)
                                ? `${bgColor} ${iconColor} ${shadowColor} shadow-[0_0.5em_0] ${(large) ? 'w-[75px] h-[75px]' : 'w-[50px] h-[50px]'} flex aspect-square justify-center items-center rounded-full translate-y-[-6px] hover:translate-y-0 active:translate-y-0 hover:shadow-[transparent] active:shadow-[0_inset_-0.5em_0] duration-400 transition-all ${className}`
                                : `${bgColor} ${iconColor} ${shadowColor} shadow-[0_0.5em_0] ${(large) ? 'w-[75px] h-[75px]' : 'w-[50px] h-[50px]'} flex aspect-square justify-center items-center rounded-full translate-y-[-6px] hover:translate-y-0 active:translate-y-0 hover:shadow-[transparent] active:shadow-[0_inset_-0.5em_0] duration-400 transition-all`
                        }
                >
                    <IconComponent size={(large) ? 30 : 20} name={iconName} />
                </button>
            </div>
        );
    }
    else {
        return (
            <button tabIndex={(tabIndex !== null) ? tabIndex : 0} onClick={onClick}
                    className={
                        (className !== null)
                            ? `${bgColor} ${iconColor} ${shadowColor} shadow-[0_0.5em_0] ${(large) ? 'w-[75px] h-[75px]' : 'w-[50px] h-[50px]'} flex aspect-square justify-center items-center rounded-full translate-y-[-6px] hover:translate-y-0 active:translate-y-0 hover:shadow-[transparent] active:shadow-[0_inset_-0.5em_0] duration-400 transition-all ${className}`
                            : `${bgColor} ${iconColor} ${shadowColor} shadow-[0_0.5em_0] ${(large) ? 'w-[75px] h-[75px]' : 'w-[50px] h-[50px]'} flex aspect-square justify-center items-center rounded-full translate-y-[-6px] hover:translate-y-0 active:translate-y-0 hover:shadow-[transparent] active:shadow-[0_inset_-0.5em_0] duration-400 transition-all`
                    }
            >
                <IconComponent size={(large) ? 30 : 20} name={iconName} />
            </button>
        );
    }
}