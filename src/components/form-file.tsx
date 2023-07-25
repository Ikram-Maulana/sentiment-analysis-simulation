"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ResultFile from "./result-file";

export default function FormFile() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileClassify = async (e: any) => {
    e.preventDefault();
    const inputFile = e.target[0].files[0];
    // Client-side validation for not null, file type and size
    if (!inputFile) {
      toast.error("File tidak boleh kosong");
      return;
    }
    if (
      inputFile.type !==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      toast.error("Tipe file harus XLSX");
      return;
    }
    if (inputFile.size > 1024 * 1024) {
      toast.error("Ukurang file harus kurang dari 1MB");
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", inputFile);
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/predict-bulk`, {
        cache: "no-store",
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setResult(data.data);
          setIsLoading(false);

          if (data.data.length === 0) {
            toast.error("Mohon coba lagi dengan file yang berbeda");
          } else {
            toast.success("File berhasil diklasifikasikan");
          }
        });
    } catch (error) {
      toast.error("Terjadi kesalahan");
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleFileClassify} encType="multipart/form-data">
        <Input id="file-reviews" type="file" />
        <p className="mt-2 lg:text-xs text-muted-foreground">
          * File Harus Memiliki Tipe XLSX Sesuai dengan Template dan Maksimal
          Memiliki 100 Baris Ulasan.
        </p>
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

      {isLoading && result.length !== 0 && (
        <div className="mt-4">
          <p className="leading-7">Loading...</p>
        </div>
      )}
      {!isLoading && result.length !== 0 && <ResultFile data={result} />}
    </>
  );
}
