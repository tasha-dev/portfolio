// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HeaderComponent from "@/component/headerComponent";
import ContainerComponent from "@/chunk/containerComponent";

// Defining type of prop[s
interface propsType {
    children: ReactNode;
}

// Creating and exporting page component as default
export default function PageComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <HeaderComponent />
            <ContainerComponent type={'small'} className={'lg:mt-[130px] mt-[100px]'}>
                {children}
            </ContainerComponent>
        </div>
    );
}