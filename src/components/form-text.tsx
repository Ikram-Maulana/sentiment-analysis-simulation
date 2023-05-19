"use client";

import { Button } from "@/ui/button";
import { Textarea } from "@/ui/textarea";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ResultText from "./result-text";

export default function FormText() {
  const [prediction, setPrediction] = useState({
    aspek: "",
    preprocessed: "",
    sentimen: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleTextClassify = (e: any) => {
    e.preventDefault();
    const text = e.target[0].value;
    // Client-side validation for text should not null and not have html special characters
    if (text === "") {
      toast.error("Text must not be empty");
      return;
    }
    if (text.match(/<|>/g)) {
      toast.error("Text must not have html special characters");
      return;
    }

    try {
      setIsLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      })
        .then((res) => res.json())
        .then((data) => {
          setPrediction(data.data);
          setIsLoading(false);

          if (data.data.preprocessed === "") {
            toast.error("Please try again with a different review text");
          } else {
            toast.success("Text classified successfully");
          }
        });
    } catch (error) {
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleTextClassify}>
        <Textarea placeholder="Enter review text here" />
        <Button
          type="submit"
          className="mt-4 bg-fire-500 hover:bg-fire-600"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <SparklesIcon className="w-4 h-4 mr-2" />
          )}{" "}
          Classify Reviews
        </Button>
      </form>

      {isLoading &&
        prediction.preprocessed !== "" &&
        prediction.aspek !== "" &&
        prediction.sentimen !== "" && (
          <div className="mt-4">
            <p className="leading-7">Loading...</p>
          </div>
        )}
      {!isLoading &&
        prediction.preprocessed !== "" &&
        prediction.aspek !== "" &&
        prediction.sentimen !== "" && <ResultText prediction={prediction} />}
    </>
  );
}
