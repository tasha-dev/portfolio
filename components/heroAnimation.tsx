// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';
import Image from 'next/image';

// Creating and exporting HeroAnimation component as default
export default function HeroAnimation(): ReactNode {
  // Defining hooks
  const { theme } = useTheme();

  // Returning JSX
  return (
    <Image
      src={theme === 'light' ? '/HeroAnimation.gif' : '/HeroAnimationDark.gif'}
      alt='Coding animation'
      width={500}
      height={500}
      className='aspect-square w-[50%] absolute right-0 bottom-0 lg:block hidden'
    />
  );
}
