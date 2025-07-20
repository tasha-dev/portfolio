// Codes by mahdi tasha
// Importing part
import HeroAnimation from '@/components/heroAnimation';
import Page from '@/components/layout/page';
import { ReactNode } from 'react';

// Creating and exporting Home page as default
export default function HomePage(): ReactNode {
  // Returning JSX
  return (
    <Page variant='sm' className='mx-0 max-w-full w-full lg:pt-0 pt-3'>
      <section
        className='lg:h-dvh max-width-layout-1 mx-auto lg:flex flex-col items-start justify-end relative lg:mb-6 mb-3'
        id='hero'
      >
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
      <div className='mx-auto max-width-layout-1'>
        <section id='projects'>
          <h2>Projects</h2>
        </section>
      </div>
    </Page>
  );
}
