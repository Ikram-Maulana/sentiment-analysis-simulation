"use client";

import ChartCard from "@/components/chart-card";
import { generateDataset, toastSelectedTag } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { useState } from "react";

export default function MetricsDashboard({ metrics }: any) {
  // Umum
  const [posnegData] = useState({
    labels: metrics.all.total_posneg.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Total Sentimen",
        data: metrics.all.total_posneg.map((item: any) => item.y),
        parsing: null,
        backgroundColors: ["#00B894", "#D63031"],
      }),
    ],
  });
  const [aspekData] = useState({
    labels: metrics.all.total_aspek.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Total Aspek",
        data: metrics.all.total_aspek.map((item: any) => item.y),
        parsing: null,
        backgroundColors: ["#D63031", "#0984e3", "#fdcb6e"],
      }),
    ],
  });
  const [ulasanData] = useState({
    labels: metrics.all.total_ulasan_per_month.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Total Ulasan",
        data: metrics.all.total_ulasan_per_month.map((item: any) => item.y),
        parsing: null,
        backgroundColors: ["#0984e3"],
      }),
    ],
  });
  const sentimentDataByMonth = metrics.all.total_sentiment_per_month;
  const [sentimentDataPerMonth] = useState({
    labels: sentimentDataByMonth.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Positif",
        data: sentimentDataByMonth,
        parsing: {
          yAxisKey: "positif",
        },
        backgroundColors: "#00B894",
      }),
      generateDataset({
        label: "Negatif",
        data: sentimentDataByMonth,
        parsing: {
          yAxisKey: "negatif",
        },
        backgroundColors: "#D63031",
      }),
    ],
  });
  const aspekDataByMonth = metrics.all.total_aspek_per_month;
  const [aspekDataPerMonth] = useState({
    labels: aspekDataByMonth.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Bug",
        data: aspekDataByMonth,
        parsing: {
          yAxisKey: "bug",
        },
        backgroundColors: "#D63031",
      }),
      generateDataset({
        label: "Kegunaan",
        data: aspekDataByMonth,
        parsing: {
          yAxisKey: "kegunaan",
        },
        backgroundColors: "#0984e3",
      }),
      generateDataset({
        label: "Pembayaran",
        data: aspekDataByMonth,
        parsing: {
          yAxisKey: "pembayaran",
        },
        backgroundColors: "#fdcb6e",
      }),
    ],
  });

  // Bug
  const [bugPosnegData] = useState({
    labels: metrics.bug.total_posneg.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Total Sentimen",
        data: metrics.bug.total_posneg.map((item: any) => item.y),
        parsing: null,
        backgroundColors: ["#D63031", "#00B894"],
      }),
    ],
  });
  const [bugRating] = useState({
    labels: metrics.bug.total_rating.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Total Rating",
        data: metrics.bug.total_rating.map((item: any) => item.y),
        parsing: null,
        backgroundColors: ["#D63031", "#F39C12", "#0984e3", "#2ECC71"],
      }),
    ],
  });
  const sentimentDataBugByMonth = metrics.bug.posneg_per_month;
  const [sentimentDataBugPerMonth] = useState({
    labels: sentimentDataBugByMonth.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Positif",
        data: sentimentDataBugByMonth,
        parsing: {
          yAxisKey: "positif",
        },
        backgroundColors: "#00B894",
      }),
      generateDataset({
        label: "Negatif",
        data: sentimentDataBugByMonth,
        parsing: {
          yAxisKey: "negatif",
        },
        backgroundColors: "#D63031",
      }),
    ],
  });
  const [fifteenMostCommonBugWordsPos] = useState({
    type: "horizontalBar",
    labels: metrics.bug.fifteen_most_common_pos.map((item: any) => item.word),
    datasets: [
      generateDataset({
        label: "Frekuensi",
        data: metrics.bug.fifteen_most_common_pos.map(
          (item: any) => item.value
        ),
        parsing: null,
        backgroundColors: "#00B894",
        indexAxis: "y",
      }),
    ],
  });
  const [wordcloudBugPos] = useState(
    metrics.bug.fifty_most_common_pos.map((item: any) => {
      return {
        value: item.word,
        count: item.value,
      };
    })
  );
  const [fifteenMostCommonBugWordsNeg] = useState({
    type: "horizontalBar",
    labels: metrics.bug.fifteen_most_common_neg.map((item: any) => item.word),
    datasets: [
      generateDataset({
        label: "Frekuensi",
        data: metrics.bug.fifteen_most_common_neg.map(
          (item: any) => item.value
        ),
        parsing: null,
        backgroundColors: "#D63031",
        indexAxis: "y",
      }),
    ],
  });
  const [wordcloudBugNeg] = useState(
    metrics.bug.fifty_most_common_neg.map((item: any) => {
      return {
        value: item.word,
        count: item.value,
      };
    })
  );

  // Kegunaan
  const [kegunaanPosnegData] = useState({
    labels: metrics.kegunaan.total_posneg.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Total Sentimen",
        data: metrics.kegunaan.total_posneg.map((item: any) => item.y),
        parsing: null,
        backgroundColors: ["#D63031", "#00B894"],
      }),
    ],
  });
  const [kegunaanRating] = useState({
    labels: metrics.kegunaan.total_rating.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Total Rating",
        data: metrics.kegunaan.total_rating.map((item: any) => item.y),
        parsing: null,
        backgroundColors: ["#D63031", "#F39C12", "#0984e3", "#2ECC71"],
      }),
    ],
  });
  const sentimentDataKegunaanByMonth = metrics.kegunaan.posneg_per_month;
  const [sentimentDataKegunaanPerMonth] = useState({
    labels: sentimentDataKegunaanByMonth.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Positif",
        data: sentimentDataKegunaanByMonth,
        parsing: {
          yAxisKey: "positif",
        },
        backgroundColors: "#00B894",
      }),
      generateDataset({
        label: "Negatif",
        data: sentimentDataKegunaanByMonth,
        parsing: {
          yAxisKey: "negatif",
        },
        backgroundColors: "#D63031",
      }),
    ],
  });
  const [fifteenMostCommonKegunaanWordsPos] = useState({
    type: "horizontalBar",
    labels: metrics.kegunaan.fifteen_most_common_pos.map(
      (item: any) => item.word
    ),
    datasets: [
      generateDataset({
        label: "Frekuensi",
        data: metrics.kegunaan.fifteen_most_common_pos.map(
          (item: any) => item.value
        ),
        parsing: null,
        backgroundColors: "#00B894",
        indexAxis: "y",
      }),
    ],
  });
  const [wordcloudKegunaanPos] = useState(
    metrics.kegunaan.fifty_most_common_pos.map((item: any) => {
      return {
        value: item.word,
        count: item.value,
      };
    })
  );
  const [fifteenMostCommonKegunaanWordsNeg] = useState({
    type: "horizontalBar",
    labels: metrics.kegunaan.fifteen_most_common_neg.map(
      (item: any) => item.word
    ),
    datasets: [
      generateDataset({
        label: "Frekuensi",
        data: metrics.kegunaan.fifteen_most_common_neg.map(
          (item: any) => item.value
        ),
        parsing: null,
        backgroundColors: "#D63031",
        indexAxis: "y",
      }),
    ],
  });
  const [wordcloudKegunaanNeg] = useState(
    metrics.kegunaan.fifty_most_common_neg.map((item: any) => {
      return {
        value: item.word,
        count: item.value,
      };
    })
  );

  // Pembayaran
  const [pembayaranPosnegData] = useState({
    labels: metrics.pembayaran.total_posneg.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Total Sentimen",
        data: metrics.pembayaran.total_posneg.map((item: any) => item.y),
        parsing: null,
        backgroundColors: ["#D63031", "#00B894"],
      }),
    ],
  });
  const [pembayaranRating] = useState({
    labels: metrics.pembayaran.total_rating.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Total Rating",
        data: metrics.pembayaran.total_rating.map((item: any) => item.y),
        parsing: null,
        backgroundColors: ["#D63031", "#F39C12", "#0984e3", "#2ECC71"],
      }),
    ],
  });
  const sentimentDataPembayaranByMonth = metrics.pembayaran.posneg_per_month;
  const [sentimentDataPembayaranPerMonth] = useState({
    labels: sentimentDataPembayaranByMonth.map((item: any) => item.x),
    datasets: [
      generateDataset({
        label: "Positif",
        data: sentimentDataPembayaranByMonth,
        parsing: {
          yAxisKey: "positif",
        },
        backgroundColors: "#00B894",
      }),
      generateDataset({
        label: "Negatif",
        data: sentimentDataPembayaranByMonth,
        parsing: {
          yAxisKey: "negatif",
        },
        backgroundColors: "#D63031",
      }),
    ],
  });
  const [fifteenMostCommonPembayaranWordsPos] = useState({
    type: "horizontalBar",
    labels: metrics.pembayaran.fifteen_most_common_pos.map(
      (item: any) => item.word
    ),
    datasets: [
      generateDataset({
        label: "Frekuensi",
        data: metrics.pembayaran.fifteen_most_common_pos.map(
          (item: any) => item.value
        ),
        parsing: null,
        backgroundColors: "#00B894",
        indexAxis: "y",
      }),
    ],
  });
  const [wordcloudPembayaranPos] = useState(
    metrics.pembayaran.fifty_most_common_pos.map((item: any) => {
      return {
        value: item.word,
        count: item.value,
      };
    })
  );
  const [fifteenMostCommonPembayaranWordsNeg] = useState({
    type: "horizontalBar",
    labels: metrics.pembayaran.fifteen_most_common_neg.map(
      (item: any) => item.word
    ),
    datasets: [
      generateDataset({
        label: "Frekuensi",
        data: metrics.pembayaran.fifteen_most_common_neg.map(
          (item: any) => item.value
        ),
        parsing: null,
        backgroundColors: "#D63031",
        indexAxis: "y",
      }),
    ],
  });
  const [wordcloudPembayaranNeg] = useState(
    metrics.pembayaran.fifty_most_common_neg.map((item: any) => {
      return {
        value: item.word,
        count: item.value,
      };
    })
  );

  return (
    <section id="chart">
      <Tabs defaultValue="general" className="mt-8 lg:mt-6">
        <TabsList className="grid w-full grid-cols-4 gap-4 mb-8 lg:mb-6 overflow-x-auto">
          <TabsTrigger
            value="general"
            className="flex gap-2 font-semibold lg:text-xs"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="bug"
            className="flex gap-2 font-semibold lg:text-xs"
          >
            Bug
          </TabsTrigger>
          <TabsTrigger
            value="kegunaan"
            className="flex gap-2 font-semibold lg:text-xs"
          >
            Kegunaan
          </TabsTrigger>
          <TabsTrigger
            value="pembayaran"
            className="flex gap-2 font-semibold lg:text-xs"
          >
            Pembayaran
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:mt-2">
            <ChartCard
              title="Jumlah Sentimen"
              value={posnegData}
              chartType="pie"
            />
            <ChartCard title="Jumlah Aspek" value={aspekData} chartType="pie" />
            <ChartCard
              title="Jumlah Ulasan (Bulan)"
              value={ulasanData}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="Jumlah Sentimen (Bulan)"
              value={sentimentDataPerMonth}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="Jumlah Aspek (Bulan)"
              value={aspekDataPerMonth}
              className="md:col-span-2"
              chartType="bar"
            />
          </div>
        </TabsContent>
        <TabsContent value="bug">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:mt-2">
            <ChartCard
              title="Jumlah Sentimen"
              value={bugPosnegData}
              chartType="pie"
            />
            <ChartCard
              title="Jumlah Rating"
              value={bugRating}
              chartType="pie"
            />
            <ChartCard
              title="Jumlah Sentimen (Bulan)"
              value={sentimentDataBugPerMonth}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="15 Ulasan Teratas (Positif)"
              value={fifteenMostCommonBugWordsPos}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="Wordcloud (Positif)"
              tags={wordcloudBugPos}
              toastSelectedTag={toastSelectedTag}
              className="md:col-span-2"
              chartType="wordcloud"
            />
            <ChartCard
              title="15 Ulasan Teratas (Negatif)"
              value={fifteenMostCommonBugWordsNeg}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="Wordcloud (Negatif)"
              tags={wordcloudBugNeg}
              toastSelectedTag={toastSelectedTag}
              className="md:col-span-2"
              chartType="wordcloud"
            />
          </div>
        </TabsContent>
        <TabsContent value="kegunaan">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:mt-2">
            <ChartCard
              title="Jumlah Sentimen"
              value={kegunaanPosnegData}
              chartType="pie"
            />
            <ChartCard
              title="Jumlah Rating"
              value={kegunaanRating}
              chartType="pie"
            />
            <ChartCard
              title="Jumlah Sentimen (Bulan)"
              value={sentimentDataKegunaanPerMonth}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="15 Ulasan Teratas (Positif)"
              value={fifteenMostCommonKegunaanWordsPos}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="Wordcloud (Positif)"
              tags={wordcloudKegunaanPos}
              toastSelectedTag={toastSelectedTag}
              className="md:col-span-2"
              chartType="wordcloud"
            />
            <ChartCard
              title="15 Ulasan Teratas (Negatif)"
              value={fifteenMostCommonKegunaanWordsNeg}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="Wordcloud (Negatif)"
              tags={wordcloudKegunaanNeg}
              toastSelectedTag={toastSelectedTag}
              className="md:col-span-2"
              chartType="wordcloud"
            />
          </div>
        </TabsContent>
        <TabsContent value="pembayaran">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:mt-2">
            <ChartCard
              title="Jumlah Sentimen"
              value={pembayaranPosnegData}
              chartType="pie"
            />
            <ChartCard
              title="Jumlah Rating"
              value={pembayaranRating}
              chartType="pie"
            />
            <ChartCard
              title="Jumlah Sentimen (Bulan)"
              value={sentimentDataPembayaranPerMonth}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="15 Ulasan Teratas (Positif)"
              value={fifteenMostCommonPembayaranWordsPos}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="Wordcloud (Positif)"
              tags={wordcloudPembayaranPos}
              toastSelectedTag={toastSelectedTag}
              className="md:col-span-2"
              chartType="wordcloud"
            />
            <ChartCard
              title="15 Ulasan Teratas (Negatif)"
              value={fifteenMostCommonPembayaranWordsNeg}
              className="md:col-span-2"
              chartType="bar"
            />
            <ChartCard
              title="Wordcloud (Negatif)"
              tags={wordcloudPembayaranNeg}
              toastSelectedTag={toastSelectedTag}
              className="md:col-span-2"
              chartType="wordcloud"
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
