import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Aspect Based Sentiment Classification Simulation",
};

export default function Home() {
  return (
    <main>
      <div className="container max-w-3xl">
        <h1 className="text-fire-500">Hello World</h1>
      </div>
    </main>
  );
}
