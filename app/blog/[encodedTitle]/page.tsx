// Codes by mahdi tasha
// Importing part
import Page from "@/components/layout/page";
import Person from "@/components/person";
import { differenceInYears, format } from "date-fns";
import { ReactNode } from "react";
import blogs from "@/data/blogs";
import { BlogPageProps } from "@/types/component";
import { decryptValue } from "@/lib/utils";
import NotFoundPage from "@/app/not-found";
import { Badge } from "@/components/ui/badge";
import { Tags } from "lucide-react";
import Markdown from "@/components/markdown";

// Creating and exporting Blog Content page as default
export default function BlogContentPage(props: BlogPageProps): ReactNode {
  // Defining variables
  const encodedBlogTitle = props.params.encodedTitle;
  const decodedBlogTitle = decryptValue(decodeURIComponent(encodedBlogTitle));
  const findedBlogObj = blogs.find((item) => item.title === decodedBlogTitle);

  // Conditional rendering
  if (findedBlogObj) {
    return (
      <Page>
        <section className="mb-14">
          <main>
            <span className="text-muted-foreground text-xs block truncate mb-2">
              {format(findedBlogObj.createdAt, "dd/MM/yyyy")}
            </span>
            <h1 className="text-xl">{findedBlogObj.title}</h1>
            <p>{findedBlogObj.description}</p>
          </main>
        </section>
        <section className="mb-14">
          <main>
            <Markdown contentPath={findedBlogObj.content} />
          </main>
        </section>
        <section>
          <ul className="flex items-center justify-start gap-2 flex-wrap">
            {findedBlogObj.keywords.map((item, index) => (
              <li key={index}>
                <Badge className="flex items-center justify-start w-fit gap-2 text-xs">
                  <Tags className="shrink-0" />
                  <span className="flex-1 text-left truncate">{item}</span>
                </Badge>
              </li>
            ))}
          </ul>
        </section>
      </Page>
    );
  } else {
    return <NotFoundPage />;
  }
}
