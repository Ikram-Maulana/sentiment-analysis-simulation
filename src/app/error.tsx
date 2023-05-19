"use client";

import { Button } from "@/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="container max-w-3xl pt-10 pb-12">
      <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl font-montserrat">
        Something went wrong!
      </h1>
      <Button
        className="mt-4"
        variant={"destructive"}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
