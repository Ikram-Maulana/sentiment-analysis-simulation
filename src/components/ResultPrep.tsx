import { PredictionProps } from "@/types";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function ResultPrep({ prediction }: PredictionProps) {
  return (
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
  );
}
