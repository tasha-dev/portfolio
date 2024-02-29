// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import PageComponent from '@/component/pageComponent';
import AboutComponent from "@/component/section/aboutComponent";
import PersonalInfoComponent from "@/component/section/personalInfoComponent";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <PageComponent>
            <AboutComponent />
            <PersonalInfoComponent />
        </PageComponent>
    );
}