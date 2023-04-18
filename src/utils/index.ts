import { GenerateDatasetProps } from "@/types";
import { toast } from "react-hot-toast";

export const generateDataset = ({
  label,
  data,
  parsing,
  backgroundColors,
  indexAxis = "x",
}: GenerateDatasetProps) => {
  return {
    label: label,
    data: data,
    parsing: parsing,
    backgroundColor: backgroundColors,
    borderColor: "black",
    borderWidth: 2,
    indexAxis: indexAxis,
  };
};

export const toastSelectedTag = (tag: string) => {
  toast.success(`Kata "${tag}" telah dipilih!`);
};

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
