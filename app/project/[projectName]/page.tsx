// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {ProjectPageType} from "@/type";
import Projects from "@/dummyData/projects";
import Image from 'next/image';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/component/ui/tooltip";
import {GlobeLock} from "lucide-react";
import {Badge} from "@/component/ui/badge";
import Link from "next/link";

// Creating and exporting Project single page as default
export default function ProjectPage({params: {projectName}}:ProjectPageType):ReactNode {
    // Getting data of project from dummy date files
    const findedProjectObj = Projects.find((item) => item.portfolioLink === `/project/${projectName}`);

    // Conditional rendering
    if (findedProjectObj) {
        return (
            <div className={'flex flex-col gap-20'}>
                {
                    (findedProjectObj.img)
                        ? (
                            <Link href={findedProjectObj.link}>
                                <Image
                                    src={findedProjectObj.img}
                                    alt={findedProjectObj.title}
                                    width={1000}
                                    height={500}
                                    className={'w-full h-[500px] top-0 left-0 lg:rounded-[12px] rounded-[10px] object-cover'}
                                />
                            </Link>
                        ) : false
                }
                <section>
                    <main>
                        <div className={'flex items-center justify-between gap-[20px]'}>
                            <h1 className={'truncate'}>{findedProjectObj.title}</h1>
                            <div className={'flex items-center justify-between gap-[20px] shrink-0'}>
                                {
                                    (findedProjectObj.useVpn)
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
                                        (findedProjectObj.status === 'failed')
                                            ? 'destructive'
                                            : (findedProjectObj.status === 'done')
                                                ? 'default'
                                                : 'secondary'
                                    }
                                >
                                    {
                                        (findedProjectObj.status === 'done')
                                            ? 'Done'
                                            : (findedProjectObj.status === 'failed')
                                                ? 'Failed'
                                                : 'In Progress'
                                    }
                                </Badge>
                            </div>
                        </div>
                        <p>{findedProjectObj.description}</p>
                    </main>
                </section>
            </div>
        );
    } else {
        return (
            <div className={'flex flex-col gap-20'}>
                <p className={'text-center'}>The project you were looking for is not found</p>
            </div>
        );
    }
}