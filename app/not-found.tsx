// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Title from "@/component/ui/title";
import Page from "@/component/page";
import {Button} from "@/component/ui/button";
import Link from 'next/link';

// Defining metadata of page
export const metadata = {title: 'Not Found'}

// Creating and exporting 404 page as default
export default function NotFoundPage():ReactNode {
    // Returning JSX
    return (
        <Page>
            <Title tier={1} className={'text-center mb-[20px]'}>The Page your Looking for, Is Not Found.</Title>
            <div className={'flex items-center justify-center'}>
                <Link href={'/'}>
                    <Button>Return To Home</Button>
                </Link>
            </div>
        </Page>
    );
}