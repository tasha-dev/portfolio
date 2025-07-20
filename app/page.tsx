// Codes by mahdi tasha
// Importing part
import HeroAnimation from '@/components/heroAnimation';
import Page from '@/components/layout/page';
import { ReactNode } from 'react';

// Creating and exporting Home page as default
export default function HomePage(): ReactNode {
  // Returning JSX
  return (
    <Page variant='sm' className='mx-0 max-w-full w-full lg:pt-0 pt-20'>
      <section className='lg:h-dvh max-width-layout-1 mx-auto lg:flex flex-col items-start justify-end relative'>
        <HeroAnimation />
        <div className='w-full mb-8'>
          <p>
            I build clean, performant, <br /> and accessible web interfaces.
          </p>
          <h1 className='mt-3'>
            Mahdi Tasha <br /> Front‑End Developer
          </h1>
        </div>
      </section>
    </Page>
  );
}
