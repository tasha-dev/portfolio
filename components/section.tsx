// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import { sectionProps } from '@/types/component';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Creating and exporting Section component as default
export default function Section({
  children,
  className,
  id,
  delay = 0,
}: sectionProps): ReactNode {
  // Retruning JSX
  return (
    <motion.section
      className={className}
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
}
