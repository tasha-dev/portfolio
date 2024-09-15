// Code sby mahdi tasha
// Importing part
import { useState, useEffect } from 'react';

// Define the type for the hook's return value
type UseScrollPercentage = () => number;

// Creating and exporting useScrollPercentage custom hook as default
export default function useScrollPercentage() {
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);

    useEffect(() => {
        const calculateScrollPercentage = () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollableHeight = documentHeight - windowHeight;
            const percentage = (scrollTop / scrollableHeight) * 100;
            setScrollPercentage(percentage);
        };

        // Add scroll event listener
        window.addEventListener('scroll', calculateScrollPercentage);

        // Calculate scroll percentage on mount
        calculateScrollPercentage();

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', calculateScrollPercentage);
        };
    }, []);

    return scrollPercentage;
}