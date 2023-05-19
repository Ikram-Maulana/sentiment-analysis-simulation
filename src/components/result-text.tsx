import { ResultTextProps } from "@/types";

export default function ResultText({ prediction }: ResultTextProps) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div
        className={`flex gap-2 ${
          prediction.preprocessed.length <= 62
            ? "flex-row items-center"
            : "flex-col"
        }`}
      >
        <h2 className="text-2xl font-extrabold tracking-tight font-montserrat scroll-m-20">
          Preprocessed Text:
        </h2>
        <p className="leading-7">{prediction.preprocessed}</p>
      </div>
      <div className="p-6 text-white rounded-md bg-fire-500">
        <h2 className="text-xl font-extrabold tracking-tight font-montserrat scroll-m-20">
          Sentiment and Aspect:
        </h2>
        <p className="leading-7">
          The review text above includes the{" "}
          <span className="font-bold">{prediction.sentimen}</span> sentiment and{" "}
          <span className="font-bold">{prediction.aspek}</span> aspects
        </p>
      </div>
    </div>
  );
}
