// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import {motion} from 'framer-motion';
import DashboardMainMenuComponent from "@/component/dashboard/dashboardMainMenuComponent";
import DashboardSocialMenuComponent from '@/component/dashboard/dashboardSocialMenuComponent';
import DashboardPorfolioMenuComponent from '@/component/dashboard/dashboardPortfolioMenuComponent';
import DashboardMComponent from "@/component/dashboard/dashboardMComponent";
import DashboardYearsComponent from "@/component/dashboard/dashboardYearsComponent";
import DashboardSideProjectComponent from "@/component/dashboard/dashboardSideProjectComponent";
import DashboardBottomComponent from "@/component/dashboard/dashboardBottomComponent";

// Defining Type Of Props
interface propsType {
    stateOfAnimate: string;
}

// Creating And Exporting Dashboard Component As Default
export default function DashboardComponent({stateOfAnimate}:propsType):ReactNode {
    // Returning JSX
    return (
        <motion.div
            variants={{
                visible: {x: 0, opacity: 100,visibility: 'visible', height: 'auto', width: '100%'},
                hidden: {x: -10, opacity: 0,visibility: 'hidden', height: 0, width: 'auto'}
            }}
            transition={{duration: .5}}
            initial={'hidden'}
            animate={stateOfAnimate}
            className={'py-[30px]'}
        >
            <div className={'grid lg:grid-cols-[1fr_1.5fr_1fr] sm:grid-cols-2 grid-cols-1 gap-[20px] mb-[20px]'}>
                <DashboardMainMenuComponent />
                <div className={'grid lg:grid-rows-[.75fr_2fr_1fr] grid-rows-1 gap-[20px] lg:grid-cols-2 grid-cols-1'}>
                    <DashboardSocialMenuComponent />
                    <DashboardPorfolioMenuComponent />
                    <DashboardMComponent />
                    <DashboardYearsComponent />
                </div>
                <DashboardSideProjectComponent />
            </div>
            <DashboardBottomComponent />
        </motion.div>
    );
}