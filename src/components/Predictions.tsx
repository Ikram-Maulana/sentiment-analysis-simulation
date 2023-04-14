import { PredictionProps } from "@/types";
import PredictBox from "./PredictBox";
import PrepBox from "./PrepBox";

export default function Predictions({ prediction }: PredictionProps) {
  return (
    <>
      <PrepBox prediction={prediction} />
      <PredictBox prediction={prediction} />
    </>
  );
}
