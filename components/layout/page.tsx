// Codes by mahdi tasha
// Importing part
import { cn } from '@/lib/utils';
import { pageProps } from '@/types/component';
import { ReactNode } from 'react';
import Header from '../header';

// Creating and exporting Page component as default
export default function Page({
  children,
  className,
  variant = 'lg',
}: pageProps): ReactNode {
  // Returning JSX
  return (
    <>
      <Header />
      <div
        className={cn(
          'mx-auto p-3',
          variant === 'lg' ? 'max-width-layout-1' : 'max-width-layout-0',
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}
