import { ArcElement, Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
Chart.register(ArcElement);

export default function PieChart({ chartData }: any) {
  return <Pie data={chartData} />;
}
