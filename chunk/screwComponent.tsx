// Codes By Mahdi Tasha
// Importing Part
import {MouseEventHandler, ReactNode} from "react";

// Defining Type Of Props
interface propsType {
    clickable: boolean;
    onClick?: MouseEventHandler;
    tabIndex?: number;
    className?: string;
    dataOpened?: string;
}

// Creating And Exporting Screw Component As Default
export default function ScrewComponent({clickable = true, onClick, tabIndex, className, dataOpened}:propsType):ReactNode {
    // Conditional Rendering
    if (clickable) {
        return (
            <button data-opened={(dataOpened === null) ? '' : dataOpened} tabIndex={(tabIndex !== null) ? tabIndex : 0} onClick={onClick} className={(className !== null) ? className : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16345 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM7.65226 15.7594C7.65226 14.6548 8.54769 13.7594 9.65226 13.7594H13.9994V9.41176C13.9994 8.30719 14.8949 7.41176 15.9994 7.41176C17.104 7.41176 17.9994 8.30719 17.9994 9.41176L17.9994 13.7594H22.3475C23.452 13.7594 24.3475 14.6548 24.3475 15.7594C24.3475 16.8639 23.452 17.7594 22.3475 17.7594H17.9994V22.107C17.9994 23.2115 17.104 24.107 15.9994 24.107C14.8949 24.107 13.9994 23.2115 13.9994 22.107V17.7594L9.65226 17.7594C8.54769 17.7594 7.65226 16.8639 7.65226 15.7594Z"
                          fill="CurrentColor"></path>
                </svg>
            </button>
        );
    } else {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16345 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM7.65226 15.7594C7.65226 14.6548 8.54769 13.7594 9.65226 13.7594H13.9994V9.41176C13.9994 8.30719 14.8949 7.41176 15.9994 7.41176C17.104 7.41176 17.9994 8.30719 17.9994 9.41176L17.9994 13.7594H22.3475C23.452 13.7594 24.3475 14.6548 24.3475 15.7594C24.3475 16.8639 23.452 17.7594 22.3475 17.7594H17.9994V22.107C17.9994 23.2115 17.104 24.107 15.9994 24.107C14.8949 24.107 13.9994 23.2115 13.9994 22.107V17.7594L9.65226 17.7594C8.54769 17.7594 7.65226 16.8639 7.65226 15.7594Z"
                      fill="CurrentColor"></path>
            </svg>
        );
    }
}