// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    name: 'sun' | 'moon' | 'arrow-top-right';
    size?: number;
}

// Creating and exporting icon component as default
export default function IconComponent({size = 24, name}:propsType):ReactNode {
    // Conditional rendering
    if (name === 'sun') {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z" stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3V4" stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 20V21" stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12H4" stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 12H21" stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.364 5.63599L17.657 6.34299" stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.34299 17.657L5.63599 18.364" stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.63599 5.63599L6.34299 6.34299" stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.657 17.657L18.364 18.364" stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    } else if (name === 'moon') {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3C10.8134 4.19491 10.1488 5.81141 10.1518 7.49539C10.1547 9.17936 10.825 10.7935 12.0157 11.9843C13.2065 13.175 14.8206 13.8453 16.5046 13.8482C18.1886 13.8512 19.8051 13.1866 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3Z" stroke={'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    } else if (name === 'arrow-top-right') {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    }
}