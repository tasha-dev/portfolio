// Codes by mahdi tasha
// Importing part
import {ProjectType} from "@/type";
import WebimodeImage from '@/image/projects/webimode.png';
import UTSMMImage from '@/image/projects/utsmm.png';
import XPower from '@/image/projects/xpower.png';
import WiseMartImage from '@/image/projects/wise-mart.png';
import BlogifyImage from '@/image/projects/blogify.png';
import MarkioImage from '@/image/projects/markio.png';
import MathTacToeImage from '@/image/projects/math-tac-toe.png';
import IWillBeGoodImage from '@/image/projects/iwillbegood.png';

// Creating and exporting dummy data for projects as default
const DummyProjects: ProjectType[] = [
    {
        img: WebimodeImage.src,
        link: 'https://webimode-tau.vercel.app/',
        title: 'Webimode',
        portfolioLink: '/project/webimode',
        description: 'As the front-end developer for the Webimode project, I had the opportunity to work with a talented team where I gained valuable experience and honed my skills. The project involved building dynamic and user-friendly web applications, where I contributed significantly to the UI/UX design, responsiveness, and overall front-end architecture. Working with Webimode allowed me to improve my proficiency in Next.js, React.js, TypeScript, and TailwindCSS, while collaborating closely with backend developers and designers. The experience not only sharpened my technical abilities but also enriched my understanding of teamwork and agile development processes.',
        status: 'done',
        useVpn: true
    }, {
        img: UTSMMImage.src,
        link: 'https://utsmm.com/',
        title: 'UTSMM',
        portfolioLink: '/project/utsmm',
        description: 'In the UTSMM project, I took over as the front-end developer within the Webimode team, continuing and refining the work from the previous developer. My role involved completing pending tasks, optimizing the UI, and ensuring the application met the highest standards of responsiveness and performance. This project provided me with an excellent learning experience, where I enhanced my ability to work with inherited codebases, improve code efficiency, and collaborate closely with a team to deliver a smooth user experience. The challenges faced and overcome in this project significantly contributed to my growth as a developer.',
        status: 'failed',
        useVpn: false
    }, {
        link: 'https://hoopi.ir/',
        title: 'Hoopi',
        portfolioLink: '/project/hoopi',
        description: 'As the front-end developer for the Hoopi project, I worked closely with a dedicated team to bring a high-quality, user-centric application to life. My responsibilities included creating responsive, intuitive interfaces and optimizing the performance for smooth user interactions. The project allowed me to strengthen my expertise in modern front-end technologies like React.js and TypeScript, while also learning best practices in team collaboration and project management. The positive working experience with the Hoopi team further enriched my development skills and deepened my appreciation for efficient teamwork.',
        status: 'done',
        useVpn: false
    }, {
        img: XPower.src,
        link: 'https://xpower-beta.vercel.app/',
        title: 'XPower',
        portfolioLink: '/project/xpower',
        description: 'XPOWER is a comprehensive bodybuilding platform designed to help users reach their fitness goals through a combination of premium nutrition products, customized workout plans, and personalized diet plans. As the front-end developer for this project, I played a key role in creating an intuitive and visually engaging interface that ensures users can easily navigate through product offerings, tailor their workout routines, and track their progress. Working on XPOWER enhanced my skills in responsive design and performance optimization, allowing me to deliver a seamless user experience across various devices. This project represents my passion for both fitness and front-end development, making it a significant part of my portfolio.\n',
        status: 'done',
        useVpn: true
    }, {
        img: WiseMartImage.src,
        link: 'https://wise-mart.vercel.app/',
        title: 'WiseMart',
        portfolioLink: '/project/wisemart',
        description: 'Developed a comprehensive e-commerce application and an administrative dashboard utilizing the FakestoreAPI. The Wise Mart project features a fully functional online store, allowing users to browse products, add them to their cart, and complete purchases. The dashboard provides robust management capabilities, including product listing, order tracking, and user management. Leveraging technologies such as React.js, TailwindCSS, and TypeScript, the project showcases a seamless user experience and an intuitive interface, demonstrating strong front-end development skills and effective integration with external APIs.',
        status: 'done',
        useVpn: true
    }, {
        img: MarkioImage.src,
        link: 'https://markio.vercel.app/',
        title: 'Markio',
        portfolioLink: '/project/markio',
        description: 'Created Markio, a streamlined note-taking app designed to securely store and manage ideas and lists. The application ensures that users can easily access their notes from anywhere at any time, offering a user-friendly interface with efficient performance. Key features include secure data storage, seamless synchronization, and an intuitive design, all built using React.js and TailwindCSS. Markio highlights my ability to develop practical, user-centric solutions with a focus on reliability and ease of use.',
        status: 'done',
        useVpn: true
    }, {
        img: BlogifyImage.src,
        link: 'https://blogify-swart.vercel.app/',
        title: 'Blogify',
        portfolioLink: '/project/blogify',
        description: 'Engineered Blogify, a dynamic blog application that integrates with the DEV.to API to curate and present a diverse range of blog posts. This application allows users to effortlessly explore and engage with content from various authors and topics, providing a seamless and interactive reading experience. Built with React.js and TailwindCSS, Blogify showcases my proficiency in integrating external APIs, designing user-centric interfaces, and delivering high-quality web applications.',
        status: 'done',
        useVpn: true
    }, {
        img: MathTacToeImage.src,
        link: 'https://math-tac-toe.vercel.app/',
        title: 'MathTacToe',
        portfolioLink: '/project/mathtactoe',
        description: 'Developed Math Tac Toe, an engaging game that combines strategic gameplay with mathematical challenges. In this innovative twist on the classic tic-tac-toe, players select numbers on a grid where their choices influence the options available to their opponents, incorporating multiplication to add a layer of complexity. This project demonstrates my ability to design and implement interactive game mechanics, combining logic with user-friendly design to create a compelling and educational experience.',
        status: 'done',
        useVpn: true
    }, {
        img: IWillBeGoodImage.src,
        link: 'https://iwillbegood.vercel.app/',
        title: 'I Will Be Good',
        portfolioLink: '/project/iwillbegood',
        description: 'Designed and developed the web version of Track and Remind Your Medic(t)ations, an application dedicated to helping users manage and monitor their medication schedules. This tool allows users to log their medications, set reminders, and track their adherence to prescribed regimens. The web application features a user-friendly interface built with React.js and TailwindCSS, ensuring an intuitive experience while providing reliable functionality for medication management. This project highlights my expertise in creating practical solutions for everyday needs and developing robust web applications.',
        status: 'done',
        useVpn: true
    },
];

export default DummyProjects;
