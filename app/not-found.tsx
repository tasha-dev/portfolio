// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import Page from "@/components/layout/page";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Definign meta data of this page
export const metadata: Metadata = {
  title: "Not Found",
};

// Creating and exporting NotFound Page as default
export default function NotFoundPage(): ReactNode {
  // Returning JSX
  return (
    <Page>
      <div className="h-dvh flex items-center justify-center">
        <div>
          <h1 className="text-center mb-3 truncate block">Not Found !</h1>
          <p className="text-center mb-4 mt-0">
            The page you are looking for is <br />{" "}
            <span className="font-bold">not found</span>
          </p>
          <Button asChild variant="ghost" className="w-fit block mx-auto">
            <Link href="/">Head Home</Link>
          </Button>
        </div>
      </div>
    </Page>
  );
}
