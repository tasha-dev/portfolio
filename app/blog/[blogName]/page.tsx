// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {blogType} from "@/types/blog";
import Page from '@/component/page';
import Profile from '@/component/ui/profile';
import profileImage from "@/images/profile.jpg";
import Title from "@/component/ui/title";
import Paragraph from "@/component/ui/paragraph";
import {formatISO9075} from "date-fns";

// Defining metadata of page
export const metadata = {title: 'Blog'}

// Creating and exporting blog pages as default
export default function BlogPages():ReactNode {
    // Defining dummy data
    const data:blogType = {
        content: 'Hello',
        title: 'asdasd',
        date: '2024-03-18T13:17:45.999Z'
    }

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
                }]}
            />
            <div className={'my-[50px]'}>
                <Title tier={1}>{data.title}</Title>
                <Title tier={4}>{formatISO9075(new Date(data.date))}</Title>
            </div>
            <Paragraph>{data.content}</Paragraph>
        </Page>
    );
}