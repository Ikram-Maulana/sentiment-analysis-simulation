import { PredictionProps } from "@/types";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function PredictBox({ prediction }: PredictionProps) {
  return (
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
  );
}
