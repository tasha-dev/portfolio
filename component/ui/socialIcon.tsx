// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {socialIconType} from "@/type";
import {LinkedinIcon, InstagramIcon, GithubIcon} from "lucide-react";
import Link from "next/link";

// Creating and exporting social icon component as default
export default function SocialIcon({icon, link}:socialIconType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className={'w-[50px] h-[50px] border border-lavenderGray rounded-[10px] flex items-center justify-center transition-all duration-500 shadow-md shadow-lavenderGray/20 text-lavenderGray hover:scale-110 hover:text-white hover:border-white hover:shadow-white/20'}>
            {
                (icon === 'ld')
                    ? <LinkedinIcon className={'w-6 h-6'} />
                    : (icon === 'ig')
                        ? <InstagramIcon className={'w-6 h-6'} />
                        : <GithubIcon className={'w-6 h-6'} />
            }
        </Link>
    );
}