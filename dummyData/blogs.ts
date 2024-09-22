// Code by mahdi tasha
// importing part
import {BlogsType} from "@/type";

// Creating and exporting dummy data of blogs
const DummyBlogs:BlogsType[] = [
    {
        description: 'In modern web development, managing state and side effects in React applications can quickly become complex. Custom React hooks offer a powerful solution, allowing developers to encapsulate logic and reuse it across components. When combined with TypeScript, custom hooks not only enhance code organization but also provide type safety, leading to more robust applications.',
        title: 'Enhancing Component Logic: Custom React Hooks with TypeScript',
        date: '2024-09-22T13:52:29.258Z',
        content: "Custom hooks are a mechanism in React that allows developers to extract component logic into reusable functions. By leveraging TypeScript, you can define the types for the inputs and outputs of your hooks, ensuring better maintainability and fewer runtime errors.<br /> ### Why Use Custom Hooks?<br /> 1. **Code Reusability**: Encapsulating logic in hooks means you can share it across multiple components without redundancy.<br /> 2. **Separation of Concerns**: Custom hooks help keep components clean and focused on rendering, while the business logic resides in the hooks.<br /> 3. **Enhanced Readability**: Descriptive function names can improve code readability, making it easier for teams to collaborate.<br /> ### Example of a Custom Hook<br /> Here’s a simple example of a custom hook for managing a counter:<br /> ```typescript<br /> import { useState } from \'react\';<br /> function useCounter(initialValue: number = 0): [number, () => void, () => void] {<br /> const [count, setCount] = useState(initialValue);<br /> const increment = () => setCount((prev) => prev + 1);<br /> const decrement = () => setCount((prev) => prev - 1);<br /> return [count, increment, decrement];<br /> }<br /> ```<br /> In this example, `useCounter` takes an initial value and returns the current count along with functions to increment and decrement it. This encapsulation makes it easy to integrate the counter logic into any component.",
        tags: [
            "React",
            "TypeScript",
            "Custom Hooks",
            "Front-End Development",
            "Web Development",
            "Programming Tips",
        ]
    }
];

export default DummyBlogs;