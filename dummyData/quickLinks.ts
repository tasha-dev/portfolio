// Codes by mahdi tasha
// Importing part
import {QuickLinkType} from "@/type";

// Creating and exporting dummy data of quick links
const DummyQuickLinks: QuickLinkType[] = [
    {type: 'link', link: '/', title: 'Home'},
    {type: 'link', link: '/contact', title: 'Contact'},
    {type: 'pdf-resume', pdfFile: '/resume.pdf', title: 'CV - Resume'},
];

// Exporting quick links dummy data as default
export default DummyQuickLinks;