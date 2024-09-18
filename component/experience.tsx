// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {ExperienceType} from "@/type";

// Creating and exporting experience component as default
export default function Experience({title, description, fromDate, untillDate, company}:ExperienceType):ReactNode {
    // Returning JSX
    return (
        <div>
            <div>
                <h6>{title}</h6>
                <div>
                    <span>{company}</span>
                    <span>|</span>
                    <span>{fromDate.toISOString()}</span>
                    {
                        (untillDate === 'present')
                            ? <span>Present</span>
                            : <span>{untillDate.toISOString()}</span>
                    }
                    <span>|</span>
                    <span>7years ands 2 days</span>
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
}