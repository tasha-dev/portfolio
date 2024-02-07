// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode, useState, useEffect} from "react";
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";
import IconComponent from "@/chunk/iconComponent";
import ButtonComponent from "@/chunk/buttonComponent";
import MonitorComponent from "@/component/monitorComponent";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {FirebaseApp, initializeApp} from "firebase/app";
import {getDatabase, ref, onValue, Database, DatabaseReference, DataSnapshot} from "firebase/database";
import DashboardPortfolioComponent from "@/component/dashboard/dashboardPortfolioComponent";

// Defining Config Of Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD5Hh0gQEbj82FnyQZLFhtt3Q0kCCNhHPQ",
    authDomain: "my-portfolio-73c39.firebaseapp.com",
    databaseURL: "https://my-portfolio-73c39-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-73c39",
    storageBucket: "my-portfolio-73c39.appspot.com",
    messagingSenderId: "709907811952",
    appId: "1:709907811952:web:6f2751d4e9d611b3fc6eb5"
};

// Initializing App
const app:FirebaseApp = initializeApp(firebaseConfig);

// Getting Data Base Of Firebase
const db:Database = getDatabase();

// Defining Reference To Data Base And Given Path
const refrence:DatabaseReference = ref(db, '/portfolio');

// Creating And Exporting dashboard Portfolio Menu Component As Default
export default function DashboardPortfolioMenuComponent():ReactNode {
    // Defining States Of Component
    const [data, setData] = useState([{img: '', title: '', link: ''}]);
    const [swiper, setSwiper]:any = useState();

    // Reading Data From Firebase
    useEffect(() => onValue(refrence, (snapshot: DataSnapshot) => setData(snapshot.val())), [])

    // Returning JSX
    return (
        <OpenableDashboardComponent
            wholeClassName={'lg:col-span-2 col-span-1 overflow-hidden'}
            className={'flex justify-between gap-[30px] h-full flex-col items-start w-full'}
        >
            <div className={'flex lg:flex-row flex-col lg:justify-between lg:gap-[30px] gap-[20px] w-full'}>
                <div className={'bg-darker-theme flex items-center gap-[10px] px-[20px] py-[10px] rounded-[10px] lg:w-[60%]'}>
                    <span className={'text-theme-orange'}><IconComponent name={'img'} size={20} /></span>
                    <span className={'text-white text-[14px] truncate'}>PORTFOLIO</span>
                </div>
                <div className={'flex items-center lg:justify-end justify-center gap-[20px] lg:w-[40%]'}>
                    <ButtonComponent
                        iconName={'left-arrow'}
                        bgColor={'bg-theme'}
                        iconColor={'text-theme-orange'}
                        hasBorder={false}
                        shadowColor={'shadow-darker-theme active:shadow-darker-theme'}
                        className={'border border-darker-theme'}
                        onClick={() => swiper.slidePrev()}
                    />
                    <ButtonComponent
                        iconName={'right-arrow'}
                        bgColor={'bg-theme'}
                        iconColor={'text-theme-orange'}
                        hasBorder={false}
                        shadowColor={'shadow-darker-theme active:shadow-darker-theme'}
                        onClick={() => swiper.slideNext()}
                        className={'border border-darker-theme'}
                    />
                </div>
            </div>
            <div className={'w-full'}>
                <MonitorComponent noPadding hasWhiteSide={false}>
                    <div className={"h-[200px] flex"}>
                        <Swiper
                            onSwiper={(swiperElement) => setSwiper(swiperElement)}
                            loop={true}
                            className={'w-full h-full'}
                        >
                            {
                                data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <DashboardPortfolioComponent img={item.img} title={item.title} link={item.link} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </MonitorComponent>
            </div>
        </OpenableDashboardComponent>
    );
}