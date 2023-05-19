import BarChart from "@/components/barchart";
import PieChart from "@/components/piechart";
import WordCloud from "@/components/wordcloud";
import { cn } from "@/lib/utils";

export default function ChartCard({
  title,
  value,
  className,
  chartType,
  tags,
  toastSelectedTag,
}: any) {
  return (
    <div
      className={cn(
        `px-4 py-3 min-w-[254px] flex flex-col justify-center items-center gap-2 rounded-md border border-tprimary ${className}`
      )}
    >
      <p className="font-bold leading-7">{title}</p>
      {chartType === "bar" && <BarChart chartData={value} />}
      {chartType === "pie" && <PieChart chartData={value} />}
      {chartType === "wordcloud" && (
        <WordCloud tags={tags} toastSelectedTag={toastSelectedTag} />
      )}
    </div>
  );
}
