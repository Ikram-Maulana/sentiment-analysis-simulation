import Brand from "@/components/Brand";
import PredictForm from "@/components/PredictForm";
import Predictions from "@/components/Predictions";
import { Container } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState({
    aspek: "",
    preprocessed: "",
    sentimen: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <title>Home | Simulasi Sentimen Analisis</title>
        <meta
          name="description"
          content="Analisis sentimen adalah proses menganalisis teks digital untuk
          menentukan apakah nada emosional pesan tersebut positif atau negatif.
          Website ini berfungsi sebagai alat untuk mensimulasikan proses analisis
          sentimen terhadap ulasan pengguna aplikasi MyPertamina."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Toaster />
        <Container
          maxW="800px"
          mt={{ base: "8", md: "12" }}
          mb={{ base: "8", md: "12" }}
          px={{ base: "8", lg: "0" }}
        >
          {/* Brand Name and Desc */}
          <Brand />

          {/* Form */}
          <PredictForm
            handleSubmit={handleSubmit}
            text={text}
            setText={setText}
            loading={loading}
          />

          {/* Prediction */}
          {prediction.preprocessed !== "" && (
            <Predictions prediction={prediction} />
          )}
        </Container>
      </main>
    </>
  );
}
