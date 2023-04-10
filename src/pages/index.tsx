import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { HiSparkles } from "react-icons/hi";

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
      setLoading(false);
    } catch (error) {
      toast.error("Terjadi kesalahan, silahkan coba lagi");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (prediction.preprocessed === "") {
      toast.error("Silahkan coba lagi dengan teks ulasan yang berbeda");
    } else {
      toast.success("Klasifikasi berhasil");
    }
  }, [prediction]);

  return (
    <>
      <Head>
        <title>Home | Simulasi Sentimen Analisis</title>
        <meta
          name="description"
          content="Analisis sentimen adalah proses menganalisis teks digital untuk
              menentukan apakah nada emosional pesan tersebut positif atau
              negatif. Saat ini, perusahaan memiliki data teks dalam volume
              besar seperti email, transkrip obrolan dukungan pelanggan,
              komentar media sosial, dan ulasan."
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
          <Flex flexDirection="column">
            <Heading as="h1" size={{ base: "lg", md: "xl" }}>
              Simulasi Sentimen Analisis 🚀
            </Heading>
            <Text mt="2">
              Analisis sentimen adalah proses menganalisis teks digital untuk
              menentukan apakah nada emosional pesan tersebut positif atau
              negatif. Saat ini, perusahaan memiliki data teks dalam volume
              besar seperti email, transkrip obrolan dukungan pelanggan,
              komentar media sosial, dan ulasan.
            </Text>
          </Flex>

          <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl>
              <Box mt={{ base: "6", md: "8" }}>
                <Textarea
                  placeholder="Masukkan teks ulasan di sini"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </Box>

              {/* Button loading or not */}
              <Button
                leftIcon={<HiSparkles />}
                colorScheme="blue"
                variant="solid"
                mt="3"
                type="submit"
                isLoading={loading}
                loadingText="Mengklasifikasikan"
              >
                Klasifikasikan Ulasan
              </Button>
            </FormControl>
          </form>

          {/* Prediction */}
          {prediction.preprocessed !== "" && (
            <>
              <Flex
                mt="6"
                gap={2}
                flexDirection={{
                  base: "column",
                  lg: prediction.preprocessed.length <= 72 ? "row" : "column",
                }}
              >
                <Heading as="h2" size="md">
                  Preprocessed Text:
                </Heading>
                <Text>{prediction.preprocessed}</Text>
              </Flex>

              <Box
                p="6"
                mt="2"
                bg={prediction.sentimen === "positif" ? "green.500" : "red.500"}
                color="white"
                rounded="md"
              >
                <Heading as="h2" size="md">
                  Sentimen dan Aspek:
                </Heading>
                <Text>
                  Teks ulasan di atas termasuk ke dalam sentimen
                  <Text as="span" fontWeight="bold" ml="1">
                    {prediction.sentimen}{" "}
                  </Text>
                  dan aspek
                  <Text as="span" fontWeight="bold" ml="1">
                    {prediction.aspek}
                  </Text>
                </Text>
              </Box>
            </>
          )}
        </Container>
      </main>
    </>
  );
}
