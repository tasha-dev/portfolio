// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import Image from 'next/image';
import timeZoneImage from '@/image/time-zone.png';
import techStackImage from '@/image/tech-stack.png';

// Creating and exporting second section of home page as default
export default function SecondSection():ReactNode {
    // Returning JSX
    return (
        <section id="about" className={'bg-richBlack'}>
            <Container>
                <div className={'grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-1 lg:h-[541px] lg:gap-[30px] gap-[23px] lg:mb-[30px] mb-[23px]'}>
                    <div className={'bg-[url("../image/markio-mokup.jpg")] lg:bg-contain bg-cover relative overflow-hidden lg:h-auto h-[312px] lg:rounded-[23px] rounded-[10px] bg-no-repeat bg-top border border-gunMetal row-span-2 group flex items-end justify-between p-[40px]'}>
                        <div className={'bg-gradient-to-b w-full h-full absolute top-0 left-0 from-richBlack/20 via-richBlack/50 to-chineseBlack pointer-events-none'} />
                        <div className={'group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-[20px] transition-all duration-500 w-[75%]'}>
                            <h3 className={'lg:text-[32px] text-[20px] text-white leading-[120%] tracking-[-1%] font-bold'}>I prioritize client collaboration, fostering open communication</h3>
                        </div>
                    </div>
                    <div className={'overflow-hidden bg-gradient-to-b from-richBlack/20 lg:h-auto h-[195px] to-chineseBlack rounded-[23px] p-[40px] group relative border border-gunMetal'}>
                        <Image width={500} height={541} alt={"Time zones"} src={timeZoneImage.src} className={'w-full object-cover absolute bottom-0 left-0'} />
                        <div className={'group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-[20px] transition-all duration-500 w-[75%]'}>
                            <h3 className={'lg:text-[30px] text-[20px] text-white leading-[120%] tracking-[-1%] font-bold'}>I’m very flexible with time zone communications</h3>
                        </div>
                    </div>
                    <div className={'overflow-hidden bg-gradient-to-b from-richBlack/20 lg:h-auto h-[195px] to-chineseBlack rounded-[23px] p-[40px] group relative border border-gunMetal flex items-center justify-start'}>
                        <Image width={500} height={541} alt={"Time zones"} src={techStackImage.src} className={'w-[50%] h-full object-cover absolute bottom-0 right-0'}/>
                        <div className={'group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-[20px] transition-all duration-500'}>
                            <span className={'lg:text-[14px] text-[10px] font-normal leading-[120%] mb-[10px] text-lavenderGray'}>I constantly try to improve</span>
                            <h3 className={'lg:text-[30px] text-[20px] text-white leading-[120%] tracking-[-1%] font-bold'}>My tech stack</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}