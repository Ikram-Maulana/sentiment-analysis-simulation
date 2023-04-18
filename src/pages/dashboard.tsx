import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import PieChart from "@/components/PieChart";
import Socials from "@/components/Socials";
import WordCloud from "@/components/WordCloud";
import { generateDataset, numberWithCommas, toastSelectedTag } from "@/utils";
import {
  Box,
  Container,
  Grid,
  Heading,
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
              <Box
                px="4"
                py="3"
                display="flex"
                flexDirection="column"
                gap="2"
                borderRadius="md"
                border="1px"
              >
                <Box as="p" fontSize="md">
                  Total Ulasan 💌
                </Box>
                <Heading as="h2" size={{ base: "md", md: "lg" }}>
                  {numberWithCommas(metrics.total_data)}
                </Heading>
              </Box>

              <Box
                px="4"
                py="3"
                display="flex"
                flexDirection="column"
                gap="2"
                borderRadius="md"
                border="1px"
              >
                <Box as="p" fontSize="md">
                  Rating Aplikasi ⭐
                </Box>
                <Heading as="h2" size={{ base: "md", md: "lg" }}>
                  {metrics.rating_average}
                </Heading>
              </Box>

              <Box
                px="4"
                py="3"
                display="flex"
                flexDirection="column"
                gap="2"
                borderRadius="md"
                border="1px"
              >
                <Box as="p" fontSize="md">
                  Kategori Sentimen 😁
                </Box>
                <Heading as="h2" size={{ base: "md", md: "lg" }}>
                  {metrics.kategori_sentimen}
                </Heading>
              </Box>

              <Box
                px="4"
                py="3"
                display="flex"
                flexDirection="column"
                gap="2"
                borderRadius="md"
                border="1px"
              >
                <Box as="p" fontSize="md">
                  Kategori Aspek 🧩
                </Box>
                <Heading as="h2" size={{ base: "md", md: "lg" }}>
                  {metrics.kategori_aspek}
                </Heading>
              </Box>
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
                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Sentimen
                      </Box>
                      <PieChart chartData={posnegData} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Aspek
                      </Box>
                      <PieChart chartData={aspekData} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Ulasan (Bulan)
                      </Box>
                      <BarChart chartData={ulasanData} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Sentimen (Bulan)
                      </Box>
                      <BarChart chartData={sentimentDataPerMonth} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Aspek (Bulan)
                      </Box>
                      <BarChart chartData={aspekDataPerMonth} />
                    </Box>
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
                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Sentimen
                      </Box>
                      <PieChart chartData={bugPosnegData} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Rating
                      </Box>
                      <PieChart chartData={bugRating} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Sentimen (Bulan)
                      </Box>
                      <BarChart chartData={sentimentDataBugPerMonth} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        15 Ulasan Teratas (Positif)
                      </Box>
                      <BarChart chartData={fifteenMostCommonBugWordsPos} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Wordcloud (Positif)
                      </Box>
                      <WordCloud
                        tags={wordcloudBugPos}
                        toastSelectedTag={toastSelectedTag}
                      />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        15 Ulasan Teratas (Negatif)
                      </Box>
                      <BarChart chartData={fifteenMostCommonBugWordsNeg} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Wordcloud (Negatif)
                      </Box>
                      <WordCloud
                        tags={wordcloudBugNeg}
                        toastSelectedTag={toastSelectedTag}
                      />
                    </Box>
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
                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Sentimen
                      </Box>
                      <PieChart chartData={kegunaanPosnegData} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Rating
                      </Box>
                      <PieChart chartData={kegunaanRating} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Sentimen (Bulan)
                      </Box>
                      <BarChart chartData={sentimentDataKegunaanPerMonth} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        15 Ulasan Teratas (Positif)
                      </Box>
                      <BarChart chartData={fifteenMostCommonKegunaanWordsPos} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Wordcloud (Positif)
                      </Box>
                      <WordCloud
                        tags={wordcloudKegunaanPos}
                        toastSelectedTag={toastSelectedTag}
                      />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        15 Ulasan Teratas (Negatif)
                      </Box>
                      <BarChart chartData={fifteenMostCommonKegunaanWordsNeg} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Wordcloud (Negatif)
                      </Box>
                      <WordCloud
                        tags={wordcloudKegunaanNeg}
                        toastSelectedTag={toastSelectedTag}
                      />
                    </Box>
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
                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Sentimen
                      </Box>
                      <PieChart chartData={pembayaranPosnegData} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Rating
                      </Box>
                      <PieChart chartData={pembayaranRating} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Jumlah Sentimen (Bulan)
                      </Box>
                      <BarChart chartData={sentimentDataPembayaranPerMonth} />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        15 Ulasan Teratas (Positif)
                      </Box>
                      <BarChart
                        chartData={fifteenMostCommonPembayaranWordsPos}
                      />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Wordcloud (Positif)
                      </Box>
                      <WordCloud
                        tags={wordcloudPembayaranPos}
                        toastSelectedTag={toastSelectedTag}
                      />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        15 Ulasan Teratas (Negatif)
                      </Box>
                      <BarChart
                        chartData={fifteenMostCommonPembayaranWordsNeg}
                      />
                    </Box>

                    <Box
                      px="4"
                      py="3"
                      minW="256px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2"
                      borderRadius="md"
                      border="1px"
                      gridColumn={{ base: "1 / 2", md: "1 / 3" }}
                    >
                      <Box as="p" fontSize="md" fontWeight="bold">
                        Wordcloud (Negatif)
                      </Box>
                      <WordCloud
                        tags={wordcloudPembayaranNeg}
                        toastSelectedTag={toastSelectedTag}
                      />
                    </Box>
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
