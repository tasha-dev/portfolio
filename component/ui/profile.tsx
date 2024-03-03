// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {profileType} from "@/types/uiComponent";
import {Avatar, AvatarFallback, AvatarImage} from "@/component/ui/avatar";
import getNameStand from "@/util/getNameStand";
import Title from "@/component/ui/title";
import Link from "next/link";
import {cn} from "@/lib/cn";

// Creating and exporting profile component as default
export default function Profile({img, name, role, link, className}:profileType):ReactNode {
    // Returning JSX
    return (
        <div className={cn(
            'flex items-center justify-start gap-[20px] flex-wrap',
            className
        )}>
            <Avatar>
                <AvatarImage src={img} width={200} height={200}/>
                <AvatarFallback>{getNameStand(name)}</AvatarFallback>
            </Avatar>
            <div>
                <Title tier={3}>{name}</Title>
                <Title tier={4}>{role}</Title>
                {
                    link.map((item, index) => (
                        <Link href={item.link}>
                            <Title tier={4}>{item.title}</Title>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
