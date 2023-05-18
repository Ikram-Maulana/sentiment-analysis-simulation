import { MetricsCardProps } from "@/types";

export default function MetricsCard({ title, value }: MetricsCardProps) {
  return (
    <div className="flex flex-col px-4 py-3 border rounded-md border-tprimary">
      <p className="leading-7">{title}</p>
      <h2 className="text-2xl font-extrabold tracking-tight font-montserrat scroll-m-20">
        {value}
      </h2>
    </div>
  );
}
