// Codes by mahdi tasha
// Importing part
import { ReactNode } from 'react';

// Creating and exporting Home page as default
export default function HomePage(): ReactNode {
  // Returning JSX
  return (
    <div className='flex flex-col'>
      {[...new Array(20)].map((item, index) => (
        <div className='h-[200px] w-full bg-red-600' key={index} />
      ))}
    </div>
  );
}
