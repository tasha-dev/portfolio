// Codes by mahdi tasha
// Importing part
import HeroAnimation from '@/components/heroAnimation';
import Page from '@/components/layout/page';
import { ReactNode } from 'react';
import Section from '@/components/section';
import ProjectCard from '@/components/projectCard';
import projects from '@/data/projects';
import Image from 'next/image';
import SkillCard from '@/components/skillCard';
import skills from '@/data/skills';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Github,
  Globe,
  HeartHandshake,
  Instagram,
  Mail,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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
      <div className='mx-auto max-width-layout-1 flex flex-col lg:gap-8 gap-10'>
        <Section delay={2} id='projects'>
          <h2 className='mb-6'>Projects</h2>
          <Carousel>
            <CarouselContent>
              {projects.map((item, index) => (
                <CarouselItem
                  key={index}
                  className='lg:basis-1/3 md:basis-1/2 basis-1/1'
                >
                  <ProjectCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Section>
        <Section delay={2} id='skills'>
          <h2 className='mb-6'>Skills</h2>
          <Carousel>
            <CarouselContent>
              {skills.map((item, index) => (
                <CarouselItem
                  key={index}
                  className='lg:basis-1/3 md:basis-1/2 basis-1/1'
                >
                  <SkillCard
                    data={{
                      title: item,
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Section>
        <Section
          delay={2}
          id='about-me'
          className='lg:grid lg:grid-cols-3 flex flex-col lg:gap-4 gap-2'
        >
          <h2 className='lg:hidden block'>Who I Am</h2>
          <Image
            alt='Mahdi Tasha'
            width={1200}
            height={900}
            src='/ImageOfMahdi.jpg'
            className='object-cover lg:h-[500px] h-[300px] w-full lg:rounded-2xl rounded-xl'
          />
          <div className='lg:col-span-2 flex flex-col items-start justify-between'>
            <div className='w-full'>
              <h2 className='lg:block hidden'>Who I Am</h2>
              <p>
                Hi, <br /> I’m Mahdi—a {new Date().getFullYear() - 2006}
                ‑year‑old front‑end developer based in Iran, Tehran. <br />
                I’ve been building with HTML, CSS, JavaScript and TypeScript
                since 2020, and love crafting interfaces that are simple, fast,
                and accessible. <br /> When I’m not coding, you’ll find me
                lifting at the gym, sketching new UI ideas, or gaming with
                friends. I’m passionate about collaborating on international
                projects and continuously learning new frameworks and best
                practices.
              </p>
            </div>
            <div>
              <h4 className='mb-2'>Socials</h4>
              <div className='flex items-center flex-wrap gap-2'>
                <Badge className='rounded-[50rem]' asChild>
                  <Link href='https://github.com/tasha-dev' target='_blank'>
                    <Github />
                    Github
                  </Link>
                </Badge>
                <Badge className='rounded-[50rem]' asChild>
                  <Link href='https://dev.to/tashadev_59' target='_blank'>
                    <Code />
                    Dev.to
                  </Link>
                </Badge>
                <Badge className='rounded-[50rem]' asChild>
                  <Link
                    href='https://www.instagram.com/1tashadev/'
                    target='_blank'
                  >
                    <Instagram />
                    Instagram
                  </Link>
                </Badge>
                <Badge className='rounded-[50rem]' asChild>
                  <Link href='https://t.me/tashaDEV' target='_blank'>
                    <Send />
                    Telegram
                  </Link>
                </Badge>
                <Badge className='rounded-[50rem]' asChild>
                  <Link href='mailto:imwhdiiii@gmail.com' target='_blank'>
                    <Mail />
                    Email
                  </Link>
                </Badge>
              </div>
            </div>
          </div>
        </Section>
        <Section
          delay={2}
          id='contact'
          className='lg:min-h-dvh lg:flex items-center justify-center'
        >
          <div>
            <h3 className='lg:text-center scroll-m-20 lg:font-extrabold font-semibold tracking-tight lg:text-5xl text-2xl mb-2'>
              Let’s Work Together
            </h3>
            <p className='mb-4 lg:text-center lg:text-xl text-base font-medium'>
              Interested in collaborating or just want to say hi? <br />
              Book a meeting via google calender
            </p>
            <div className='flex lg:flex-row flex-col items-center justify-center mx-auto lg:gap-3 gap-1'>
              <Button
                asChild
                className='lg:w-auto w-full flex items-center justify-start gap-2'
              >
                <Link
                  href='https://calendar.app.google/AYYiNGdH4MDMXcD66'
                  target='_blank'
                >
                  <HeartHandshake className='w-2 h-2 shrink-0' />
                  <span className='flex-1 text-left'>Book a meeting</span>
                </Link>
              </Button>
              <span className='text-base font-normal text-muted-foreground block text-center my-2'>
                Or
              </span>
              <div className='flex items-center justify-start lg:gap-1 gap-3 w-full'>
                <Button
                  asChild
                  className='lg:w-auto w-full flex items-center justify-start gap-2 lg:flex-auto flex-1'
                >
                  <Link href='mailto:imwhdiiii@gmail.com' target='_blank'>
                    <Mail className='w-2 h-2 shrink-0' />
                    <span className='flex-1 text-left'>Send Email</span>
                  </Link>
                </Button>
                <Tooltip>
                  <TooltipTrigger>
                    <Button asChild size='icon'>
                      <Link href='https://t.me/tashaDEV' target='_blank'>
                        <Send className='w-2 h-2 shrink-0' />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Send message in telegram</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Page>
  );
}
