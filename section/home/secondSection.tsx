// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import Image from 'next/image';
import timeZoneImage from '@/image/time-zone.png';
import techStackImage from '@/image/tech-stack.png';
import skeletonImage from '@/image/skeleton.png';
import gradiantLightImage from '@/image/gradiant-light.png';
import codeImage from '@/image/code.png';
import Button from "@/component/ui/button";

// Creating and exporting second section of home page as default
export default function SecondSection():ReactNode {
    // Returning JSX
    return (
        <section id="about" className={'bg-richBlack'}>
            <Container>
                <div className={'grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-1 lg:h-[541px] lg:gap-[30px] gap-[23px] lg:mb-[30px] mb-[23px]'}>
                    <div className={'bg-[url("../image/markio-mokup.jpg")] lg:bg-contain bg-cover relative overflow-hidden lg:h-auto h-[312px] lg:rounded-[23px] rounded-[10px] bg-no-repeat bg-top border border-gunMetal row-span-2 group flex items-end justify-between p-[40px]'}>
                        <div className={'bg-gradient-to-b w-full h-full absolute top-0 left-0 from-richBlack/20 via-richBlack/50 to-chineseBlack pointer-events-none'}/>
                        <div className={'group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-[20px] transition-all duration-500 w-[75%]'}>
                            <h3 className={'lg:text-[32px] text-[20px] text-white leading-[120%] tracking-[-1%] font-bold'}>I prioritize client collaboration, fostering open communication</h3>
                        </div>
                    </div>
                    <div className={'overflow-hidden bg-gradient-to-b from-richBlack/20 lg:h-auto h-[195px] to-chineseBlack rounded-[23px] p-[40px] group relative border border-gunMetal'}>
                        <Image width={500} height={541} alt={"Time zones"} src={timeZoneImage.src} className={'w-full object-cover absolute bottom-0 left-0'}/>
                        <div className={'group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-[20px] transition-all duration-500 w-[75%]'}>
                            <h3 className={'lg:text-[30px] text-[20px] text-white leading-[120%] tracking-[-1%] font-bold'}>I’m very flexible with time zone communications</h3>
                        </div>
                    </div>
                    <div className={'overflow-hidden bg-gradient-to-b from-richBlack/20 lg:h-auto h-[195px] to-chineseBlack rounded-[23px] p-[40px] group relative border border-gunMetal flex items-center justify-start'}>
                        <Image width={500} height={541} alt={"tech stack"} src={techStackImage.src} className={'w-[50%] h-full object-cover absolute bottom-0 right-0'}/>
                        <div className={'group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-[20px] transition-all duration-500'}>
                            <span className={'lg:text-[14px] text-[10px] font-normal leading-[120%] mb-[10px] text-lavenderGray'}>I constantly try to improve</span>
                            <h3 className={'lg:text-[30px] text-[20px] text-white leading-[120%] tracking-[-1%] font-bold'}>My tech stack</h3>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 lg:grid-rows-2 lg:h-[400px] lg:gap-[30px] gap-[23px]">
                    <div className={'overflow-hidden bg-[url("../image/grid-pattern.png")] relative bg-cover lg:h-auto h-[195px] rounded-[23px] p-[40px] group border border-gunMetal'}>
                        <div className={'group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-[20px] transition-all duration-500'}>
                            <h3 className={'lg:text-[30px] text-[20px] text-white leading-[120%] tracking-[-1%] font-bold'}>Tech enthusiast with a passion for development.</h3>
                        </div>
                        <Image width={500} height={541} alt={"Time zones"} src={skeletonImage.src} className={'w-[50%] absolute bottom-0 right-0'}/>
                    </div>
                    <div className="col-start-1 row-start-2 overflow-hidden relative lg:h-auto h-[195px] rounded-[23px] p-[40px] bg-gradiant-to-r from-darkGunMetal to-richBlack group border border-gunMetal flex items-center justify-center flex-col">
                        <Image className={'absolute top-0 left-0 h-full '} alt={'gradiant light'} src={gradiantLightImage.src} width={500} height={541}/>
                        <div className={'group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-[20px] transition-all duration-500'}>
                            <h3 className={'lg:text-[30px] mb-[40px] text-center block text-[20px] text-white leading-[120%] tracking-[-1%] font-bold'}>Do you want to start a project together?</h3>
                            <div className={'flex items-center justify-center'}>
                                <Button link={'mailto:imwhdiii@gmail.com'}>Email</Button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:row-span-2 lg:col-start-2 row-start-1 overflow-hidden bg-gradient-to-b from-richBlack/20 lg:h-auto h-[195px] to-chineseBlack rounded-[23px] p-[40px] group relative border border-gunMetal flex items-center justify-start">
                        <Image className={'absolute bottom-0 w-full right-0'} alt={'code image'} src={codeImage.src} width={500} height={541}/>
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