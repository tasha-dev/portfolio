// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {ShieldX} from "lucide-react";
import Link from 'next/link';
import {Button} from '@/component/ui/button';

// Creating and exporting not-found page (404) as default
export default function NotFound():ReactNode {
    // Returning JSX
    return (
        <div className={'flex items-center justify-center flex-col'}>
            <ShieldX className={'w-52 h-52 block mb-20'} />
            <h1 className={'text-center mb-10'}>The Page your were looking for is not found :))</h1>
            <Link href={'/'}>
                <Button variant={'default'} tabIndex={-1}>Return To Home</Button>
            </Link>
        </div>
    );
}