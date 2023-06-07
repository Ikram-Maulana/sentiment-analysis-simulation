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

  const handleTextClassify = async (e: any) => {
    e.preventDefault();
    const text = e.target[0].value;
    // Client-side validation for text should not null and not have html special characters
    if (text === "") {
      toast.error("Teks tidak boleh kosong");
      return;
    }
    if (text.match(/<|>/g)) {
      toast.error("Text tidak boleh mengandung karakter khusus html");
      return;
    }

    try {
      setIsLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/predict`, {
        cache: "no-store",
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
            toast.error("Mohon coba lagi dengan teks ulasan yang berbeda");
          } else {
            toast.success("Teks berhasil diklasifikasikan");
          }
        });
    } catch (error) {
      toast.error("Terjadi kesalahan");
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleTextClassify}>
        <Textarea placeholder="Masukkan teks ulasan di sini" />
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
          Klasifikasikan Ulasan
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
