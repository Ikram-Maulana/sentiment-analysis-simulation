import { ResultTextProps } from "@/types";

export default function ResultText({ prediction }: ResultTextProps) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div
        className={`flex gap-2 ${
          prediction.preprocessed.length <= 62
            ? "flex-col md:flex-row md:items-center"
            : "flex-col"
        }`}
      >
        <h2 className="text-2xl font-extrabold tracking-tight font-montserrat scroll-m-20">
          Teks Preprocessed:
        </h2>
        <p className="leading-7">{prediction.preprocessed}</p>
      </div>
      <div
        className={`p-6 text-white rounded-md ${
          prediction.sentimen === "positif" ? "bg-emerald-500" : "bg-red-500"
        }`}
      >
        <h2 className="text-xl font-extrabold tracking-tight font-montserrat scroll-m-20">
          Sentimen dan Aspek:
        </h2>
        <p className="leading-7">
          Ulasan di atas memiliki sentimen{" "}
          <span className="font-bold">{prediction.sentimen}</span> dan aspek{" "}
          <span className="font-bold">{prediction.aspek}</span>
        </p>
      </div>
    </div>
  );
}
