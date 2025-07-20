// Codes by mahdi tasha
// Importing part
import HeroAnimation from '@/components/heroAnimation';
import Page from '@/components/layout/page';
import { ReactNode } from 'react';
import Section from '@/components/section';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Creating and exporting Home page as default
export default function HomePage(): ReactNode {
  // Returning JSX
  return (
    <Page variant='sm' className='mx-0 max-w-full w-full lg:pt-0 pt-3'>
      <Section
        className='lg:h-dvh max-width-layout-1 mx-auto lg:flex flex-col items-start justify-end relative lg:mb-6 mb-3'
        id='hero'
        delay={2}
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
      </Section>
      <div className='mx-auto max-width-layout-1'>
        <Section delay={2} id='projects'>
          <Card>
            <CardHeader>
              <div className='w-full h-[200px] bg-foreground' />
            </CardHeader>
            <CardContent>
              <CardTitle>XXKJKJ</CardTitle>
              <CardDescription>XXKJKJ</CardDescription>
            </CardContent>
            <CardFooter>CLICK</CardFooter>
          </Card>
        </Section>
      </div>
    </Page>
  );
}
