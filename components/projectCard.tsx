// Codes by mahdi tasha
// Importing part
import { ReactNode } from 'react';
import Image from 'next/image';
import { projectCardProps } from '@/types/component';
import { CircleCheckBig, CircleDashed, Globe } from 'lucide-react';
import { TooltipContent, Tooltip, TooltipTrigger } from './ui/tooltip';
import { Button } from './ui/button';
import Link from 'next/link';
import { differenceInDays, format, formatDistance } from 'date-fns';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Creating and exporting ProjectCard component as default
export default function ProjectCard({
  data,
  className,
}: projectCardProps): ReactNode {
  // Returning JSX
  return (
    <Link
      href={data.liveUrl}
      target='_blank'
      className='cursor-pointer transition-all duration-500 active:scale-95'
    >
      <Card className={className}>
        <CardHeader>
          {data.img ? (
            <Image
              alt={data.title}
              width={1200}
              height={900}
              src={data.img}
              className='w-full rounded-lg object-cover h-[200px]'
            />
          ) : (
            <div className='w-full h-[200px] bg-foreground rounded-lg' />
          )}
        </CardHeader>
        <CardContent>
          <div className='flex items-center justify-between gap-3 mb-2'>
            <CardTitle className='flex-1 truncate'>{data.title}</CardTitle>
            <div className='shrink-0 flex items-center justify-between gap-2'>
              {data.status === 'completed' ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CircleCheckBig className='w-5 h-5 text-foreground cursor-pointer' />
                  </TooltipTrigger>
                  <TooltipContent>This project is completed !</TooltipContent>
                </Tooltip>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CircleDashed className='w-5 h-5 text-foreground cursor-pointer' />
                  </TooltipTrigger>
                  <TooltipContent>
                    This project is under developed !
                  </TooltipContent>
                </Tooltip>
              )}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Globe className='w-5 h-5 text-foreground cursor-pointer' />
                </TooltipTrigger>
                <TooltipContent>
                  This project is live , And you can see it live by clicking on
                  !
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <CardDescription className='line-clamp-3'>
            {data.description}
          </CardDescription>
          {data.dates && (
            <p className='text-muted-foreground text-sm mt-3'>
              {format(data.dates.startedAt, 'yyyy-MM-dd')} -{' '}
              {data.dates.endedAt
                ? format(data.dates.endedAt, 'yyyy-MM-dd')
                : 'N/A'}
              (
              {data.dates.endedAt
                ? differenceInDays(data.dates.startedAt, data.dates.endedAt)
                : formatDistance(new Date(data.dates.startedAt), new Date(), {
                    addSuffix: true,
                  })}
              )
            </p>
          )}
          <ul className='list-disc list-inside mt-3'>
            {data.stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          {data.liveUrl && (
            <Button className='flex items-center justify-start gap-2 w-full cursor-pointer'>
              <Globe className='w-2 h-2 shrink-0' />
              <span className='treuncate flex-1 text-left'>
                Check the live version
              </span>
            </Button>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
