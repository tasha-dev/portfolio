// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode, useState, Dispatch, ChangeEvent} from "react";
import ImageOfDots from "@/public/img/device/img-device-dots.png";
import MonitorComponent from "@/component/monitorComponent";
import Image from 'next/image';
import ImageOfLogoWithNoBG from '@/public/img/dashboard/img-logo-nobg.png';
import ModalComponent from "@/component/modalComponent";
import emailjs from '@emailjs/browser';
import IconComponent from "@/chunk/iconComponent";

// Creating And Exporting Main Menu Of Dashboard As Default
export default function DashboardMainMenuComponent():ReactNode {
    // Defining States Of Component
    const [isMailModalOpened, setMailModalOpened]:[boolean, Dispatch<boolean>] = useState(false);
    const [emailOfForm, setEmailOfForm] = useState('');
    const [textOfForm, setTextOfForm] = useState('');
    const [isEmailFetching, setEmailFetching] = useState(false);
    const [isFetchingErrored, setFetchingErrored] = useState(false);

    // Returning JSX
    return (
        <div className={'bg-theme-orange rounded-[20px] overflow-hidden'}>
            <ModalComponent isOpened={isMailModalOpened}
                            icon={'mail'}
                            title={'imwhdiiii@gmail.com'}
                            closeFunction={() => setMailModalOpened(false)}
                            showsMonitorForHiring={true}
            >
                <form onSubmit={(event) => {
                    event.preventDefault();

                    setEmailFetching(true);

                    emailjs.send("service_3uav1nm","template_on3f91r", {
                        from_name: emailOfForm,
                        to_name: "Mahdi Tasha",
                        message: textOfForm,
                    }, 'xXUYTg6DSEBslquaA')
                        .then(() => setEmailFetching(false))
                        .catch(() => {
                            setFetchingErrored(true);
                            setEmailFetching(false);
                        })
                }} action="#">
                    <input tabIndex={(isMailModalOpened) ? 0 : -1} onChange={(event) => setEmailOfForm(event.target.value)} required className={'input mb-[15px]'} name="email" id={'email-input'} type="email" placeholder={'yours@gmail.com'}/>
                    <textarea tabIndex={(isMailModalOpened) ? 0 : -1} onChange={(event) => setTextOfForm(event.target.value)} required className={'input h-[100px] resize-none mb-[20px]'} name="massage" id="massage-input" placeholder={'You Massage'} />
                    {
                        (isFetchingErrored)
                            ? (
                                <div className={'p-[10px] rounded-[10px] bg-theme-orange-dark my-[20px] '}>
                                    <p className={'text-white text-[16px]'}>There Was Error Sending Email.</p>
                                </div>
                            ) : false
                    }
                    <div className={'rounded-[10px] px-[10px] py-[20px] bg-theme-orange-dark'}>
                        <button tabIndex={(isMailModalOpened) ? 0 : -1} className={'primary-btn overflow-hidden h-[50px] relative'}>
                            <div data-fetching={isEmailFetching} className={'data-[fetching="false"]:translate-y-[-5px] duration-300 transition-all data-[fetching="true"]:translate-y-[-45px]'}>
                                <span className={'flex justify-center items-center h-[40px]'}>SUBMIT</span>
                                <span className={'text-sky-900 h-[40px] flex justify-center items-center'}><IconComponent size={30} name={'spinner'} /></span>
                            </div>
                        </button>
                    </div>
                </form>
            </ModalComponent>
            <div className={'p-[20px] border-b-4 border-b-theme-orange-dark flex justify-between items-center gap-[20px]'}>
                <h1 className={'text-white font-bold text-[14px] truncate tracking-wide'}>MOHAMAD MAHDI TASHA</h1>
                <img className={'w-[50px] lg:block hidden shrink-0'} src={ImageOfDots.src} alt="Image Of Dots"/>
            </div>
            <div className={'lg:flex flex-col gap-[10px] justify-between items-center w-full h-[96%]'}>
                <div className={'w-full p-[20px]'}>
                    <MonitorComponent hasWhiteSide={true}>
                        <a href={'https://www.github.com/MohamadMahdi-Tasha'} className={'h-[200px] flex justify-center items-center [&>img]:hover:scale-150'}>
                            <Image src={ImageOfLogoWithNoBG.src} alt={'Logo Of Mahdi Tasha'} className={'transition-all duration-300'} width={50} height={50} />
                        </a>
                    </MonitorComponent>
                    <button onClick={() => setMailModalOpened(true)} className={'primary-btn mt-[20px] mb-[18px]'}>
                        CONTACT ME
                    </button>
                    <div className={'p-[10px] bg-theme-orange-dark rounded-[10px] lg:h-[300px] overflow-auto'}>
                        <p className={'text-white font-light text-[15px]'}>
                            <span className={'text-[17px] font-bold block truncate mb-[5px]'}>About Me:</span>
                            I'm <span className={'font-bold'}>mahdi tasha</span> <br/>
                            A creative <span className={'font-bold'}>front end developer</span> <br/>
                            Based in <span className={'font-bold'}>tehran</span> <br/>
                            With <span className={'font-bold'}>infinite</span> love for this industry :)
                        </p>
                        <hr className={'border-white/30 my-[20px]'} />
                        <p className={'text-white font-light text-[15px]'}>
                            <span className={'text-[17px] font-bold block truncate mb-[5px]'}>Skills:</span>
                            HTML 5 <br/>
                            CSS 3 <br/>
                            Javascript + ES6 <br/>
                            GIT <br/>
                            REACT JS <br/>
                            VITE <br/>
                            REACT NATIVE <br/>
                            NEXT JS <br/>
                            TAILWINDCSS <br/>
                            BOOTSTRAP <br/>
                            PHOTOPSHOP <br/>
                            TYPESCRIPT <br/>
                            REDUX
                        </p>
                        <hr className={'border-white/30 my-[20px]'} />
                        <p className={'text-white font-light text-[15px]'}>
                            <span className={'text-[17px] font-bold block truncate mb-[5px]'}>My Reason To Became Front End dev:</span>
                            Before i even learn about this, I knew some Photoshop skills <br/>
                            And i really liked it. After that which i came up with coding ideas <br/>
                            I realized i should do front end developer stuff because i like colors and design
                        </p>
                    </div>
                </div>
                <div className={'lg:w-[70%] w-[90%] lg:h-[80px] h-[50px] bg-darker-theme rounded-t-[20px] mx-auto'} />
            </div>
        </div>
    );
}