import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { Textarea } from "@/ui/textarea";
import { BotIcon, FileTextIcon, SparklesIcon } from "lucide-react";
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
            href="https://ikram-maulana.tech"
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
            <form>
              <Textarea placeholder="Enter review text here" />
              <Button
                type="submit"
                className="mt-4 bg-fire-500 hover:bg-fire-600"
              >
                <SparklesIcon className="w-4 h-4 mr-2" /> Classify Reviews
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="documents">
            <form>
              <Input id="file-reviews" type="file" />
              <p className="mt-2 lg:text-xs text-muted-foreground">
                * The File Must Have the XLSX Type According to the Template and
                a Maximum of 100 Review Lines.
              </p>
              <Button
                type="submit"
                className="mt-4 bg-fire-500 hover:bg-fire-600"
              >
                <SparklesIcon className="w-4 h-4 mr-2" /> Classify Reviews
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
