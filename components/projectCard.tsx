// Codes by mahdi tasha
// Importing part
import { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Creating and exporting ProjectCard component as default
export default function ProjectCard(): ReactNode {
  // Returning JSX
  return (
    <Card>
      <CardHeader>
        <div className='w-full h-[200px] bg-foreground' />
      </CardHeader>
      <CardContent>
        <CardTitle>XXKJKJ</CardTitle>
        <CardDescription>XXKJKJ</CardDescription>
      </CardContent>
      <CardFooter>CLICK</CardFooter>
    </Card>
  );
}
