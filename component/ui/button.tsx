// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {buttonType} from "@/type";
import {cn} from "@/util/cn";
import {ArrowUpRight} from 'lucide-react';
import {Tilt} from 'react-tilt'
import Link from "next/link";

// Creating and exporting button component as default
export default function Button({children, link = '', hasIcon = false, className, onClick}:buttonType):ReactNode {
    // Returning part
    return (
        <Tilt options={{
            reverse:        false,
            max:            35,
            perspective:    1000,
            scale:          1.1,
            speed:          1000,
            transition:     true,
            axis:           null,
            reset:          true,
            easing:         "cubic-bezier(.03,.98,.52,.99)",
        }}>
            {
                (link === '')
                    ? (
                        <button onClick={onClick} className={cn(
                            'px-[40px] py-[22px] border border-gunMetal bg-gradient-to-r from-darkGunMetal to-richBlack rounded-[14px]',
                            (hasIcon) ? 'flex items-center justify-center gap-[10px]' : '',
                            className
                        )}>
                            <span className={'text-white lg:text-[18px] text-[14px] font-medium'}>{children}</span>
                            {
                                (hasIcon)
                                    ? <ArrowUpRight className={'w-6 h-6 text-white'}/>
                                    : false
                            }
                        </button>
                    ) : (
                        <Link href={link} className={cn(
                            'px-[40px] py-[22px] border border-gunMetal bg-gradient-to-r from-darkGunMetal to-richBlack rounded-[14px]',
                            (hasIcon) ? 'flex items-center justify-center gap-[10px]' : '',
                            className
                        )}>
                            <span className={'text-white lg:text-[18px] text-[14px] font-medium'}>{children}</span>
                            {
                                (hasIcon)
                                    ? <ArrowUpRight className={'w-6 h-6 text-white'}/>
                                    : false
                            }
                        </Link>
                    )
            }
        </Tilt>
    );
}