// Codes by mahdi tasha
// Importing part
import { projectCardProps } from '@/types/component';

// Creating projects data
const projects: projectCardProps['data'][] = [
  {
    title: 'Safarnmahe 24',
    description:
      'Safarnameh24 is an online hotel booking platform in Iran offering instant vouchers, official invoices, and 24/7 support.',
    liveUrl: 'https://safarnameh24.com/',
    stack: ['TypeScript', 'NextJS', 'ReactJS', 'TailwindCSS', 'ShadCN'],
    status: 'pending',
    dates: {
      startedAt: '2024-11-02T14:52:17+03:30',
    },
  },
];

// Exporting the data as default
export default projects;
