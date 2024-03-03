// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Page from '@/component/page';
import Profile from "@/component/ui/profile";
import profileImage from '@/images/profile.jpg';

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <Page>
            <Profile
                img={profileImage.src}
                name={'Mahdi Tasha'}
                role={'Passionate Front End Developer'}
                link={[{
                    link: 'https://github.com/tasha-dev/',
                    title: 'Github'
                }]}/>
        </Page>
    );
}