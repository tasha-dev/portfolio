// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {QuickLinkType} from "@/type";
import Link from "next/link";
import {Button} from "@/component/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogTrigger,
} from "@/component/ui/dialog";

// Creating and exporting quick link component as default
export default function QuickLink({link, title, type, pdfFile}:QuickLinkType):ReactNode {
    // Conditional rendering
    if (type === 'link') {
        return (
            <Link
                className={'link-text'}
                href={(link) ? link : '/'}
            >
                {title}
            </Link>
        );
    } else {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <span className={'link-text cursor-pointer'}>{title}</span>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Download My CV</DialogTitle>
                        <DialogDescription>Explore my detailed CV, showcasing my skills, experience, and projects. Click
                            below to view or download the document for a closer look at my journey in front-end
                            development, including expertise in React, TypeScript, Next.js, and more</DialogDescription>
                    </DialogHeader>
                    <div className={'overflow-hidden rounded-md w-full'}>
                        <object data={pdfFile} className={'h-[300px] w-full object-cover bg-background'}>
                            <p>Your browser does not support viewing PDFs.</p>
                        </object>
                    </div>
                    <DialogFooter>
                        <Link download href={(pdfFile) ? pdfFile : '/'}>
                            <Button tabIndex={-1}>Download</Button>
                        </Link>
                        <DialogClose asChild>
                            <Button variant={'outline'}>Close</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    }
}