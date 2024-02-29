// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import PageComponent from '@/component/pageComponent';
import AboutComponent from "@/component/section/aboutComponent";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <PageComponent>
            <AboutComponent />
        </PageComponent>
    );
}