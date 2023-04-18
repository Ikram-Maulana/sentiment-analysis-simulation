import Buttons from "@/components/Buttons";
import Form from "@/components/Form";
import Header from "@/components/Header";
import ResultPredict from "@/components/ResultPredict";
import ResultPrep from "@/components/ResultPrep";
import Socials from "@/components/Socials";
import { Box, Container, Textarea } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState({
    aspek: "",
    preprocessed: "",
    sentimen: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let text = e.currentTarget[0].value;

    if (text === "") {
      toast.error("Teks ulasan tidak boleh kosong");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/predict`,
        {
          text,
        }
      );
      setPrediction(res.data.data);
      if (res.data.data.preprocessed === "") {
        toast.error("Silahkan coba lagi dengan teks ulasan yang berbeda");
      } else {
        toast.success("Klasifikasi berhasil");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Terjadi kesalahan, silahkan coba lagi");
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Home | Simulasi Klasifikasi Sentimen</title>
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
              title="Simulasi Klasifikasi Sentimen 🚀"
              description="Halaman ini berfungsi untuk mensimulasikan proses klasifikasi sentimen terhadap ulasan pengguna aplikasi MyPertamina menggunakan algoritma Support Vector Machine (SVM)."
            />
            <Socials />
          </section>

          {/* Form */}
          <section className="form-input">
            <Form handleSubmit={handleSubmit}>
              <Box mt="4">
                <Textarea placeholder="Masukkan teks ulasan di sini" />
              </Box>

              <Buttons loading={loading} />
            </Form>
          </section>

          {/* Result */}
          <section className="result">
            {prediction.preprocessed !== "" && (
              <>
                <ResultPrep prediction={prediction} />
                <ResultPredict prediction={prediction} />
              </>
            )}
          </section>
        </Container>
      </main>
    </>
  );
}
