import { ArcElement, Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
Chart.register(ArcElement);

function BarChart({ chartData }: any) {
  return <Bar data={chartData} />;
}

export default BarChart;
