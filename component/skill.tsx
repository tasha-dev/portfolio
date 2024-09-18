// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {Code} from "lucide-react";
import {SkillsType} from "@/type";

// Creating and exporting skill component as default
export default function Skill({title}:SkillsType):ReactNode {
    // Returning JSX
    return (
        <div className={'border border-foreground bg-background flex items-center justify-center gap-5 p-5 rounded-md'}>
            <Code className={'w-6 h-6'} />
            <h6 className={'whitespace-nowrap'}>{title}</h6>
        </div>
    );
}