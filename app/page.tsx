// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState, useEffect, useRef} from "react";
import Header from "@/component/header";
import FirstSection from "@/section/home/firstSection";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Defining state of component
    const [showingSection, setShowingSection] = useState<string>('');

    // Defining refs
    const sectionsRef = useRef<HTMLElement[]>([]);

    // Using useEffect hook to add observer to the page
    useEffect(() => {
        const sections = sectionsRef.current;

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            console.log('Observer callback triggered');
            entries.forEach(entry => {
                console.log('Entry:', entry);
                if (entry.isIntersecting) {
                    setShowingSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    // Returning JSX
    return (
        <>
            <Header showingSection={`#${showingSection}`}/>
            <FirstSection />
            <section className={'section bg-orange-600 w-full h-[1000px]'} id="about" ref={(el) => {if (el) sectionsRef.current[0] = el}}>About</section>
            <section className={'section bg-red-600 w-full h-[1000px]'} id="projects" ref={(el) => {if (el) sectionsRef.current[1] = el}}>Projects</section>
            <section className={'section bg-purple-950 w-full h-[1000px]'} id="testimonials" ref={(el) => {if (el) sectionsRef.current[2] = el}}>Testimonials</section>
            <section className={'section bg-green-500 w-full h-[1000px]'} id="contact" ref={(el) => {if (el) sectionsRef.current[3] = el}}>Contact</section>
        </>
    );
}