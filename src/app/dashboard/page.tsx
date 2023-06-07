import MetricsCard from "@/components/metrics-card";
import MetricsDashboard from "@/components/metrics-dashboard";
import { numberWithCommas } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Klasisfikasi Sentimen Berdasarkan Aspek",
};

const fetchMetrics = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/metrics`);
  const { data } = await res.json();
  return data;
};

export default async function Dashboard() {
  const metrics = await fetchMetrics();
  return (
    <main>
      <div className="container max-w-3xl pt-10 pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl font-montserrat">
          Metrik Dashboard 💡
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-4 text-tprimary/60">
          Halaman dashboard akan menampilkan metrik dari hasil klasifikasi
          sentimen dan aspek yang dilakukan oleh model yang telah dibuat
          berdasarkan data dari bulan{" "}
          <span className="p-1 rounded-sm bg-bone-500/80">
            Agustus 2022 - Maret 2023
          </span>
          .
        </p>

        {/* Metrics */}
        <section id="metrics">
          <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-6 md:grid-cols-2">
            <MetricsCard
              title="Total Ulasan 💌"
              value={numberWithCommas(metrics.total_data)}
            />
            <MetricsCard
              title="Rating Aplikasi ⭐"
              value={metrics.rating_average}
            />
            <MetricsCard
              title="Kategori Sentimen 😁"
              value={metrics.kategori_sentimen}
            />
            <MetricsCard
              title="Kategori Aspek 🧩"
              value={metrics.kategori_aspek}
            />
          </div>
        </section>

        {/* Charts */}
        <MetricsDashboard metrics={metrics} />
      </div>
    </main>
  );
}
