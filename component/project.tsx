// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import {ProjectType} from "@/type";
import Image from 'next/image';
import {Badge} from "@/component/ui/badge"
import {GlobeLock} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/component/ui/tooltip"
import {cn} from "@/util";

// Creating and exporting project component as default
export default function Projects({link, useVpn, status, img, title, description, portfolioLink, widthFull = false}:ProjectType):ReactNode {
    // Returning JSX
    return (
        <Link
            href={portfolioLink}
            className={cn(
                'block shrink-0',
                (widthFull) ? 'w-full' : 'w-[400px]'
            )}
        >
            {
                (img)
                    ? (
                        <Image
                            className={'block object-cover w-full h-[200px] rounded-xl mb-3 border dark:border-black/20 border-white/20'}
                            src={img}
                            alt={title}
                            width={200}
                            height={150}
                        />
                    ) : (<div className={'bg-gradient-to-bl w-full h-[200px] from-pink-600 to-violet-600 mb-3 rounded-xl border dark:border-black/20 border-white/20'}/>)
            }
            <div className={'flex items-center justify-between gap-3'}>
                <h4 className={'truncate'}>{title}</h4>
                <div className={'flex items-center justify-between gap-3 shrink-0'}>
                    {
                        (useVpn)
                            ? (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <GlobeLock className={'w-5 h-5'}/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Use VPN if you are living at iran to bypas filtering</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )
                            : false
                    }
                    <Badge
                        variant={
                            (status === 'failed')
                                ? 'destructive'
                                : (status === 'done')
                                    ? 'default'
                                    : 'secondary'
                        }
                    >
                        {
                            (status === 'done')
                                ? 'Done'
                                : (status === 'failed')
                                    ? 'Failed'
                                    : 'In Progress'
                        }
                    </Badge>
                </div>
            </div>
            <p className={'line-clamp-2'}>{description}</p>
        </Link>
    );
}