"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function FormFile() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileClassify = (e: any) => {
    e.preventDefault();
    const inputFile = e.target[0].files[0];
    // Client-side validation for not null, file type and size
    if (!inputFile) {
      toast.error("File must not be empty");
      return;
    }
    if (
      inputFile.type !==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      toast.error("File type must be XLSX");
      return;
    }
    if (inputFile.size > 1024 * 1024) {
      toast.error("File size must be less than 1MB");
      return;
    }
    setFile(inputFile);
    setIsLoading(true);
  };

  return (
    <form onSubmit={handleFileClassify}>
      <Input id="file-reviews" type="file" />
      <p className="mt-2 lg:text-xs text-muted-foreground">
        * The File Must Have the XLSX Type According to the Template and a
        Maximum of 100 Review Lines.
      </p>
      <Button
        type="submit"
        className="mt-4 bg-fire-500 hover:bg-fire-600"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <SparklesIcon className="w-4 h-4 mr-2" />
        )}{" "}
        Classify Reviews
      </Button>
    </form>
  );
}
