import BarChartGrid from "@/components/BarChartGrid";
import Header from "@/components/Header";
import MetricsCard from "@/components/MetricsCard";
import PieChartGrid from "@/components/PieChartGrid";
import Socials from "@/components/Socials";
import WordCloudGrid from "@/components/WordCloudGrid";
import { generateDataset, numberWithCommas, toastSelectedTag } from "@/utils";
import {
  Container,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export async function getStaticProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/metrics`);
  const metrics = res.data.data;

  return {
    props: {
      metrics,
    },
  };
}

export default function Dashboard({ metrics }: any) {
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
    <>
      <Head>
        <title>Dashboard | Simulasi Klasifikasi Sentimen</title>
        <meta
          name="description"
          content="Website ini berfungsi sebagai alat untuk mensimulasikan proses klasifikasi sentimen terhadap ulasan pengguna aplikasi MyPertamina menggunakan algoritma Support Vector Machine (SVM)."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Toaster />
        <Container maxW="3xl" pt="6" pb="12" px="8">
          {/* Hero */}
          <section className="hero">
            <Header
              title="Dashboard 💡"
              spotlight="Agustus 2022 - Maret 2023"
              description="Halaman dashboard akan menampilkan metrics dari hasil klasifikasi sentimen yang dilakukan oleh model yang telah dibuat berdasarkan data dari bulan Agustus 2022 - Maret 2023."
            />
            <Socials />
          </section>

          {/* Metrics */}
          <section className="metrics">
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
              gap="4"
              mt="4"
            >
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
            </Grid>
          </section>

          {/* Charts */}
          <section className="charts">
            <Tabs variant="soft-rounded" colorScheme="red" mt="4">
              <TabList overflowX={{ base: "scroll", md: "auto" }}>
                <Tab>Umum</Tab>
                <Tab>Bug</Tab>
                <Tab>Kegunaan</Tab>
                <Tab>Pembayaran</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p="0">
                  <Grid
                    templateColumns={{
                      base: "repeat(1, 1fr)",
                      md: "repeat(2, 1fr)",
                    }}
                    gap="4"
                    mt="8"
                  >
                    <PieChartGrid
                      title="Jumlah Sentimen"
                      chartData={posnegData}
                    />
                    <PieChartGrid title="Jumlah Aspek" chartData={aspekData} />
                    <BarChartGrid
                      title="Jumlah Ulasan (Bulan)"
                      chartData={ulasanData}
                    />
                    <BarChartGrid
                      title="Jumlah Sentimen (Bulan)"
                      chartData={sentimentDataPerMonth}
                    />
                    <BarChartGrid
                      title="Jumlah Aspek (Bulan)"
                      chartData={aspekDataPerMonth}
                    />
                  </Grid>
                </TabPanel>
                <TabPanel p="0">
                  <Grid
                    templateColumns={{
                      base: "repeat(1, 1fr)",
                      md: "repeat(2, 1fr)",
                    }}
                    gap="4"
                    mt="8"
                  >
                    <PieChartGrid
                      title="Jumlah Sentimen"
                      chartData={bugPosnegData}
                    />
                    <PieChartGrid title="Jumlah Rating" chartData={bugRating} />
                    <BarChartGrid
                      title="Jumlah Sentimen (Bulan)"
                      chartData={sentimentDataBugPerMonth}
                    />
                    <BarChartGrid
                      title="15 Ulasan Teratas (Positif)"
                      chartData={fifteenMostCommonBugWordsPos}
                    />
                    <WordCloudGrid
                      title="Wordcloud (Positif)"
                      tags={wordcloudBugPos}
                      toastSelectedTag={toastSelectedTag}
                    />
                    <BarChartGrid
                      title="15 Ulasan Teratas (Negatif)"
                      chartData={fifteenMostCommonBugWordsNeg}
                    />
                    <WordCloudGrid
                      title="Wordcloud (Negatif)"
                      tags={wordcloudBugNeg}
                      toastSelectedTag={toastSelectedTag}
                    />
                  </Grid>
                </TabPanel>
                <TabPanel p="0">
                  <Grid
                    templateColumns={{
                      base: "repeat(1, 1fr)",
                      md: "repeat(2, 1fr)",
                    }}
                    gap="4"
                    mt="8"
                  >
                    <PieChartGrid
                      title="Jumlah Sentimen"
                      chartData={kegunaanPosnegData}
                    />
                    <PieChartGrid
                      title="Jumlah Rating"
                      chartData={kegunaanRating}
                    />
                    <BarChartGrid
                      title="Jumlah Sentimen (Bulan)"
                      chartData={sentimentDataKegunaanPerMonth}
                    />
                    <BarChartGrid
                      title="15 Ulasan Teratas (Positif)"
                      chartData={fifteenMostCommonKegunaanWordsPos}
                    />
                    <WordCloudGrid
                      title="Wordcloud (Positif)"
                      tags={wordcloudKegunaanPos}
                      toastSelectedTag={toastSelectedTag}
                    />
                    <BarChartGrid
                      title="15 Ulasan Teratas (Negatif)"
                      chartData={fifteenMostCommonKegunaanWordsNeg}
                    />
                    <WordCloudGrid
                      title="Wordcloud (Negatif)"
                      tags={wordcloudKegunaanNeg}
                      toastSelectedTag={toastSelectedTag}
                    />
                  </Grid>
                </TabPanel>
                <TabPanel p="0">
                  <Grid
                    templateColumns={{
                      base: "repeat(1, 1fr)",
                      md: "repeat(2, 1fr)",
                    }}
                    gap="4"
                    mt="8"
                  >
                    <PieChartGrid
                      title="Jumlah Sentimen"
                      chartData={pembayaranPosnegData}
                    />
                    <PieChartGrid
                      title="Jumlah Rating"
                      chartData={pembayaranRating}
                    />
                    <BarChartGrid
                      title="Jumlah Sentimen (Bulan)"
                      chartData={sentimentDataPembayaranPerMonth}
                    />
                    <BarChartGrid
                      title="15 Ulasan Teratas (Positif)"
                      chartData={fifteenMostCommonPembayaranWordsPos}
                    />
                    <WordCloudGrid
                      title="Wordcloud (Positif)"
                      tags={wordcloudPembayaranPos}
                      toastSelectedTag={toastSelectedTag}
                    />
                    <BarChartGrid
                      title="15 Ulasan Teratas (Negatif)"
                      chartData={fifteenMostCommonPembayaranWordsNeg}
                    />
                    <WordCloudGrid
                      title="Wordcloud (Negatif)"
                      tags={wordcloudPembayaranNeg}
                      toastSelectedTag={toastSelectedTag}
                    />
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </section>
        </Container>
      </main>
    </>
  );
}
