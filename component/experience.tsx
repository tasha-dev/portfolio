// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {ExperienceType} from "@/type";
import {calculateAgeText, cn} from "@/util";
import dayjs from "dayjs";
import {ArrowRight} from "lucide-react";

// Creating and exporting experience component as default
export default function Experience({title, description, fromDate, untillDate, company, isLast = false}:ExperienceType):ReactNode {
    // Returning JSX
    return (
        <div className={'flex gap-2'}>
            <div className={'w-[40px] shrink-0 relative'}>
                <div className={'w-[10px] h-[10px] absolute left-[50%] top-[20px] -translate-x-[50%] bg-foreground rounded-full'} />
                <div className={cn(
                    'w-[1px] absolute top-[30px] rounded-3xl bg-foreground left-[50%] -translate-x-[50%]',
                    (isLast)
                        ? 'h-[calc(100%-30px)]'
                        : 'h-[120%]'
                )} />
            </div>
            <div className={'w-full'}>
                <div>
                    <h6>{title}</h6>
                    <div className={'flex flex-wrap gap-2 justify-start items-center'}>
                        <span>{company}</span>
                        <span>|</span>
                        <span>{dayjs(fromDate).format('MMMM YYYY')}</span>
                        <ArrowRight className={'w-5 h-5'} />
                        {
                            (untillDate === 'present')
                                ? <span>Present</span>
                                : <span>{dayjs(untillDate).format('MMMM YYYY')}</span>
                        }
                        <span>|</span>
                        <span>{calculateAgeText(fromDate, (untillDate === 'present') ? new Date() : untillDate)}</span>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
}