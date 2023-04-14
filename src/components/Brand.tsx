import SocialList from "@/components/SocialList";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Brand() {
  return (
    <Flex flexDirection="column">
      <Heading as="h1" size={{ base: "lg", md: "xl" }} mt="2">
        Simulasi Sentimen Analisis 🚀
      </Heading>
      <Text mt="2">
        Analisis sentimen adalah proses menganalisis teks digital untuk
        menentukan apakah nada emosional pesan tersebut positif atau negatif.
        Website ini berfungsi sebagai alat untuk mensimulasikan proses analisis
        sentimen terhadap ulasan pengguna aplikasi MyPertamina.
      </Text>

      <SocialList />
    </Flex>
  );
}
