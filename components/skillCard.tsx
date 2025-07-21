// Codes by mahdi tasha
// Importing part
import { ReactNode } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { skillsCardProps } from '@/types/component';
import { cn } from '@/lib/utils';
import { Code } from 'lucide-react';

// Creating and exporting SkillCard component as default
export default function SkillCard({
  className,
  data,
}: skillsCardProps): ReactNode {
  // Returning JSX
  return (
    <Card
      className={cn(
        'h-[200px] relative group transition-all duration-500 cursor-pointer overflow-hidden flex items-center justify-center',
        `skill-${data.title}`,
        className,
      )}
    >
      <Code className='absolute top-[50%] left-[50%] -translate-[50%] w-20 h-20 opacity-100 group-hover:opacity-20 transition-all duration-500 text-current' />
      <CardContent className='opacity-0 translate-y-[20px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0'>
        <CardTitle>{data.title.toUpperCase()}</CardTitle>
      </CardContent>
    </Card>
  );
}
