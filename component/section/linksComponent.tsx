// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import UnordredListComponent from "@/chunk/list/unordredListComponent";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting links component as default
export default function LinksComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <header>
                <TitleComponent tier={2}>Links</TitleComponent>
            </header>
            <main>
                <UnordredListComponent>
                    <li className={'dark:text-light500 text-dark500'}>
                        <Link href={'https://github.com/tasha-dev'} className={'flex items-center justify-between w-full gap-[10px] lg:text-[20px] text-[18px] dark:text-light500 text-dark500'}>
                            Github
                            <IconComponent name={'arrow-top-right'} size={20}/>
                        </Link>
                    </li>
                    <li className={'dark:text-light500 text-dark500'}>
                        <Link href={'https://www.instagram.com/mahditasha_/'} className={'flex items-center justify-between w-full gap-[10px] lg:text-[20px] text-[18px] dark:text-light500 text-dark500'}>
                            Instagram
                            <IconComponent name={'arrow-top-right'} size={20}/>
                        </Link>
                    </li>
                    <li className={'dark:text-light500 text-dark500'}>
                        <Link href={'https://www.linkedin.com/in/mahditasha/'} className={'flex items-center justify-between w-full gap-[10px] lg:text-[20px] text-[18px] dark:text-light500 text-dark500'}>
                            Linkedin
                            <IconComponent name={'arrow-top-right'} size={20}/>
                        </Link>
                    </li>
                    <li className={'dark:text-light500 text-dark500'}>
                        <Link href={'mailto:imwhdiiii@gmail.com'}
                              className={'flex items-center justify-between w-full gap-[10px] lg:text-[20px] text-[18px] dark:text-light500 text-dark500'}>
                            Email
                            <IconComponent name={'arrow-top-right'} size={20}/>
                        </Link>
                    </li>
                </UnordredListComponent>
            </main>
        </section>
    );
}