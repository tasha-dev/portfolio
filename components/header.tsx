// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import { ReactNode } from 'react';
import Logo from './ui/logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import {
  Code,
  FileUser,
  Rows4,
  SquareArrowUpRight,
  SunMoon,
} from 'lucide-react';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';
import { ScrollArea } from './ui/scroll-area';

// Defining content of links to render
const navLinkContent: {
  label: string;
  href: string;
}[] = [
  {
    href: '/#hero',
    label: 'Home',
  },
  {
    href: '/#projects',
    label: 'Projects',
  },
  {
    href: '/#recent-repos',
    label: 'Github Repos',
  },
  {
    href: '/#contact',
    label: 'Contact',
  },
];

// Creating and exporting Header component as default
export default function Header(): ReactNode {
  // Defining hooks of component
  const { theme, setTheme } = useTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Defining a function to toggle theme
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  // Returning JSX
  return (
    <motion.header
      className='bg-foreground/30 border border-foreground/40 backdrop-blur-xl lg:py-3 py-2 lg:px-8 px-4 lg:rounded-2xl rounded-lg flex items-center justify-between gap-3 max-width-layout-1 mx-auto lg:top-6 top-3 z-40 sticky w-[calc(100%-24px)]'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.5,
        ease: 'easeOut',
        duration: 0.6,
      }}
    >
      <Logo className='lg:w-13 lg:h-13 w-10 h-10 text-foreground' />
      <ul className='lg:flex hidden items-center justify-between gap-3'>
        {navLinkContent.map((item, index) => (
          <li key={index}>
            <Button
              asChild
              variant={'link'}
              className='transition-all duration-300 active:scale-95'
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
      {isMobile ? (
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              size={'icon'}
              className='cursor-pointer transition-all duration-300 active:scale-95'
              variant={'secondary'}
            >
              <Rows4 className='w-2 h-2' />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Mahdi Tasha</DrawerTitle>
              <DrawerDescription>
                Minimal portfolio of Mahdi Tasha – React, Next.js, Tailwind
                developer from Tehran.
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className='h-[150px]'>
              <div className='flex flex-col gap-3 px-4 w-full pb-3 border-b border-foreground/20 mb-3'>
                <Button
                  className='flex items-center justify-start w-full'
                  variant={'secondary'}
                  onClick={toggleTheme}
                >
                  <SunMoon className='w-2 h-2' />
                  Toggle Theme
                </Button>
                <Link href='https://github.com/tasha-dev/'>
                  <Button
                    className='flex items-center justify-start w-full'
                    variant={'secondary'}
                  >
                    <Code className='w-2 h-2' />
                    Mahdi Tasha
                  </Button>
                </Link>
                <Link href='/resume.pdf' download>
                  <Button
                    className='flex items-center justify-start w-full'
                    variant={'secondary'}
                  >
                    <FileUser className='w-2 h-2' />
                    Download Resume
                  </Button>
                </Link>
              </div>
              <div className='flex flex-col gap-3 px-4 w-full'>
                {navLinkContent.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <Button
                      className='flex items-center justify-start w-full'
                      variant={'secondary'}
                    >
                      <SquareArrowUpRight className='w-2 h-2' />
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </ScrollArea>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant={'destructive'}>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size={'icon'}
              className='cursor-pointer transition-all duration-300 active:scale-90'
              variant={'secondary'}
            >
              <Rows4 className='w-2 h-2' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem className='cursor-pointer' onClick={toggleTheme}>
              <SunMoon className='w-2 h-2' />
              Toggle Theme
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer' asChild>
              <Link href='https://github.com/tasha-dev/'>
                <Code className='w-2 h-2' />
                Mahdi Tasha
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer' asChild>
              <Link href='/resume.pdf' download>
                <FileUser className='w-2 h-2' />
                Download Resume
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </motion.header>
  );
}
