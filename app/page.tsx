// Codes by mahdi tasha
// Importing part
import HeroAnimation from '@/components/heroAnimation';
import Page from '@/components/layout/page';
import { ReactNode } from 'react';
import Section from '@/components/section';
import ProjectCard from '@/components/projectCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import projects from '@/data/projects';

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
        <div className='w-full mb-8 lg:block flex flex-col-reverse gap-5'>
          <p>
            I build clean, performant, <br className='lg:block hidden' /> and
            accessible web interfaces.
          </p>
          <h1 className='lg:mt-3 mt-0'>
            Mahdi Tasha <br className='lg:block hidden' /> Front‑End Developer
          </h1>
        </div>
      </Section>
      <div className='mx-auto max-width-layout-1'>
        <Section delay={2} id='projects'>
          <h2 className='mb-6'>Projects</h2>
          <Carousel>
            <CarouselContent>
              {projects.map((item, index) => (
                <CarouselItem key={index} className='lg:basis-1/3 basis-1/1'>
                  <ProjectCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Section>
      </div>
    </Page>
  );
}
