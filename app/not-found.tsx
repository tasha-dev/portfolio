// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Title from "@/component/ui/title";
import Page from "@/component/page";

// Creating and exporting 404 page as default
export default function NotFoundPage():ReactNode {
    // Returning JSX
    return (
        <Page>
            <Title tier={1} className={'text-center'}>The Page your Looking for, Is Not Found.</Title>
        </Page>
    );
}