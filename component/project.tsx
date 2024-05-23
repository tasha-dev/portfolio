// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import {projectType} from "@/type";
import Image from 'next/image';
import lightingImage from '@/image/project/lighting.png';
import StackIcon from "@/component/ui/stackIcon";
import {cn} from "@/util/cn";
import {ArrowUpRight} from "lucide-react";

// Creating and exporting project component as default
export default function Project({link, img, title, description, stack}:projectType):ReactNode {
    // Returning JSX
    return (
        <Link href={link} className={'px-[24px] bg-gradient-to-br overflow-hidden from-richBlack to-chineseBlack py-[36px] rounded-[23px] border border-gunMetal group'}>
            <div className={'bg-richBlack mb-[40px] lg:px-[50px] px-[10px] lg:h-[330px] h-[212px] flex items-end justify-center rounded-[14px] overflow-hidden relative'}>
                <Image alt={'lighting image'} width={500} height={320} src={lightingImage.src} className={'absolute left-0 top-0 w-full h-full bg-cover'} />
                <Image alt={title} width={500} height={320} src={img} className={'w-full lg:h-[300px] h-[234px] translate-y-[50px] object-cover rounded-[10px] transition-all duration-500 lg:group-hover:rotate-12'} />
            </div>
            <h4 className={'lg:text-[32px] text-[20px] text-white font-bold tracking-[-2%] truncate block w-full mb-[20px]'}>{title}</h4>
            <p className={'text-lavenderGray leading-[130%] lg:text-[20px] text-[14px] font-normal line-clamp-3 mb-[20px]'}>{description}</p>
            <div className={'flex items-center justify-between flex-wrap gap-[20px]'}>
                <div className={'flex items-center justify-start group'}>
                    {
                        stack.map((item, index) => (
                            <div key={index}
                                 className={'flex items-center transition-all duration-500 peer peer-hover:ml-0 [&:not(:first-of-type)]:-ml-6 bg-richBlack justify-center rounded-full w-[50px] h-[50px] border border-gunMetal'}>
                                <StackIcon icon={item} className={cn('w-[20px] h-[20px]', (item === 'firebase') ? 'text-orange-600' : '')}/>
                            </div>
                        ))
                    }
                </div>
                <h6 className={'lg:text-[20px] text-[14px] text-purple-500 flex items-center gap-2 lg:opacity-0 transition-all duration-500 group-hover:opacity-100'}>
                    Check Live Site
                    <ArrowUpRight className={'w-6 h-6'} />
                </h6>
            </div>
        </Link>
    );
}
