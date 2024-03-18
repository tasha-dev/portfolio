// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Title from "@/component/ui/title";
import List from "@/component/ui/list";
import Container from "@/component/ui/container";
import ArrowLink from "@/component/ui/arrowLink";

// Creating and exporting footer component as default
export default function Footer():ReactNode {
    // Returning JSX
    return (
        <footer className={'mt-[50px]'}>
            <header className={'mb-[20px]'}>
                <Title tier={2}>Links</Title>
            </header>
            <main>
                <List>
                    <ArrowLink title={'Github'} link={'https://github.com/tasha-dev'}/>
                    <ArrowLink title={'Linkedin'} link={'https://www.linkedin.com/in/mahditasha/'}/>
                    <ArrowLink title={'Email'} link={'mailto:imwhdiiii@gmail.com'}/>
                </List>
            </main>
        </footer>
    );
}