// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Creating and exporting NotFound (404) Page as default
export default function NotFound(): ReactNode {
  // Returning JSX
  return (
    <div className='h-dvh flex items-center justify-center w-dvw'>
      <div className='max-w-[500px]'>
        <h1 className='text-center'>404</h1>
        <p className='text-center mt-2'>
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className='flex items-center justify-center lg:mt-6 mt-4'>
          <Button asChild>
            <Link href='/' className='flex items-center justify-start gap-2'>
              <ArrowLeft className='w-2 h-2' />
              Go Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
