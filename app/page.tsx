// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Header from "@/component/header";
import FirstSection from "@/section/home/firstSection";
import SecondSection from "@/section/home/secondSection";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <Header />
            <FirstSection />
            <SecondSection  />
        </>
    );
}