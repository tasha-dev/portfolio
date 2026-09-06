import { ClassOnlyProps } from "@/type/component";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/component/ui/card";
import { getInitials } from "@/lib/util";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/component/ui/carousel";
import proofs from "@/data/proof";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import moment from "moment";

export default function Proof({ className }: ClassOnlyProps) {
  return (
    <section className={className} id="projects">
      <main className="p-4">
        <div className="prose prose-neutral dark:prose-invert w-full max-w-2xl mx-auto mb-5">
          <h2>Don't take my word for it — take theirs</h2>
          <p>
            Below is a selection of feedback clients shared after our projects
            wrapped up, unedited and in their own words. These are just a few
            examples from the reviews I've received across different projects —
            proof that commitment to quality and deadlines isn't just something
            I say, it's how I work.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Carousel>
            <CarouselContent className="items-stretch">
              {proofs.map((item, index) => (
                <CarouselItem key={index} className="h-auto">
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex gap-3 items-center">
                      <Avatar className={"shrink-0 size-10"}>
                        <AvatarImage src={item.img} />
                        <AvatarFallback>
                          {getInitials(item.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <CardTitle className="truncate block">
                          {item.name}
                        </CardTitle>
                        <span className="text-sm block truncate text-muted-foreground">
                          {moment(item.date).format("MMMM, DD YYYY")}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription>{item.message}</CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </main>
    </section>
  );
}
