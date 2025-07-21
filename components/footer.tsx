// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Creating and exporting footer component as default
export default function Footer(): ReactNode {
  // Returning JSX
  return (
    <motion.footer
      className='flex items-center justify-center p-3 border-t border-t-foreground/30 bg-foreground/20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className='text-center'>
        © {new Date().getFullYear()} Mahdi Tasha. All rights reserved.
      </p>
    </motion.footer>
  );
}
