// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import useDb from "@/hook/useDb";
import {portfolioType} from "@/types/db";
import Title from "@/component/ui/title";
import Work from "@/component/work";

// Creating and exporting works to render which are comming from db as default
export default function WorkDb():ReactNode {
    // Defining blogs coming from db
    const works = useDb<portfolioType[]>({path: '/portfolio'});

    // Returning JSX
    return (
        <div>
            {
                (!works.isLoading)
                    ? (works.data?.length !== 0)
                        ? (
                            <ul className={'flex flex-col gap-[20px]'}>
                                {
                                    works.data?.map((item, index) => (
                                        <Work
                                            key={index}
                                            name={item.title}
                                            link={item.link}
                                            stack={item.stack}
                                            date={item.date}
                                        >
                                            {item.description}
                                        </Work>
                                    ))
                                }
                            </ul>
                        ) : <Title className={'text-center'} tier={3}>There are no Works.</Title>
                    : (
                        <div className={'flex lg:flex-row flex-col gap-[20px]'}>
                            <div className={'lg:w-[25%] w-full'}>
                                <div className={'mb-[30px]'}>
                                    <div className={'w-full h-[20px] bg-gray-500 animate-pulse mb-[10px]'}/>
                                    <div className={'w-full h-[20px] bg-gray-500 animate-pulse'}/>
                                </div>
                                <div>
                                    <div className={'w-full h-[20px] bg-gray-500 animate-pulse mb-[10px]'}/>
                                    <div className={'w-full h-[20px] bg-gray-500 animate-pulse mb-[10px]'}/>
                                    <div className={'w-full h-[20px] bg-gray-500 animate-pulse'}/>
                                </div>
                            </div>
                            <div className={'lg:w-[75%] w-full'}>
                                <div className={'w-full h-[20px] bg-gray-500 animate-pulse mb-[20px]'}/>
                                <div className={'w-full h-[200px] bg-gray-500 animate-pulse'}/>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}