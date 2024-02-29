// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import PageComponent from '@/component/pageComponent';
import AboutComponent from "@/component/section/aboutComponent";
import PersonalInfoComponent from "@/component/section/personalInfoComponent";
import SkillsComponent from "@/component/section/skillsComponent";
import WorksComponent from "@/component/section/worksComponent";
import LinksComponent from "@/component/section/linksComponent";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <PageComponent>
            <AboutComponent />
            <PersonalInfoComponent />
            <SkillsComponent />
            <WorksComponent />
            <LinksComponent />
        </PageComponent>
    );
}