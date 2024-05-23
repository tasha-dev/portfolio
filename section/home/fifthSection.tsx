// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from '@/component/ui/container';
import Button from "@/component/ui/button";

// Creating and exporting fifth section of home page as default
export default function FifthSection():ReactNode {
    // Returning JSX
    return (
        <section id={'contact'} className={'bg-richBlack bg-[url("../image/grid-pattern.png")] bg-cover'}>
            <Container className={'lg:min-h-dvh flex items-center justify-center'}>
                <div>
                    <h2 className={'lg:text-[48px] leading-[100%] text-[36px] text-center -tracking-[2px] text-white font-bold mb-[30px]'}>
                        Ready to take <span className={'text-purple-500'}>Your</span> digital <br/>
                        Presence to the next level?
                    </h2>
                    <span className={'text-center text-[16px] font-normal text-lavenderGray'}>Reach out to me today and let's discuss how I can help you achieve your goals.</span>
                    <div className={'lg:flex hidden items-center justify-center mt-[40px]'}>
                        <Button link={'mailto:imwhdiiii@gmail.com'} hasIcon>Contact Me Now</Button>
                    </div>
                    <Button className={'lg:hidden flex mt-[40px]'} link={'mailto:imwhdiiii@gmail.com'} hasIcon>Contact Me Now</Button>
                </div>
            </Container>
        </section>
    );
}
