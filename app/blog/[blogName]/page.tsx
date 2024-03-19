// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Page from '@/component/page';
import Profile from '@/component/ui/profile';
import profileImage from "@/images/profile.jpg";
import SingleBlogDb from "@/component/singleBlogDb";

// Defining metadata of page
export const metadata = {title: 'Blog'}

// Creating and exporting blog pages as default
export default function BlogPages():ReactNode {
    // Returning JSX
    return (
        <Page>
            <Profile
                img={profileImage.src}
                name={'Mahdi Tasha'}
                role={'Passionate Front End Developer'}
                className={'my-[50px]'}
                link={[{
                    link: 'https://github.com/tasha-dev/',
                    title: 'Github'
                }]}
            />
            <SingleBlogDb />
        </Page>
    );
}