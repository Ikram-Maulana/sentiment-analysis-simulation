import FormFile from "@/components/form-file";
import FormText from "@/components/form-text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { BotIcon, FileTextIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Aspect Based Sentiment Classification Simulation",
};

export default function Home() {
  return (
    <main>
      <div className="container max-w-3xl pt-10 pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl font-montserrat">
          Classification Simulation 🚀
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-4 text-tprimary/60">
          This page serves to simulate sentiment classification based on aspects
          of the MyPertamina application user reviews. You can try using text or
          documents with the templates provided{" "}
          <Link
            className="underline-offset-4 hover:underline text-primary"
            href="https://docs.google.com/spreadsheets/d/1CmNkAFItCrsqXDfCsSG-gXYcCpwYjJOG/edit?usp=share_link&ouid=101074035509003337819&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </Link>
          .
        </p>

        <Tabs defaultValue="text" className="mt-4 lg:mt-2">
          <TabsList className="grid max-w-[300px] grid-cols-2 gap-4 mb-8 lg:mb-6">
            <TabsTrigger
              value="text"
              className="flex gap-2 font-semibold lg:text-xs"
            >
              <BotIcon />
              Text
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="flex gap-2 font-semibold lg:text-xs"
            >
              <FileTextIcon />
              Documents
            </TabsTrigger>
          </TabsList>
          <TabsContent value="text">
            <FormText />
          </TabsContent>
          <TabsContent value="documents">
            <FormFile />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
