import { MetricsCardProps } from "@/types";
import { Box, Heading } from "@chakra-ui/react";

export default function MetricsCard({ title, value }: MetricsCardProps) {
  return (
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
        {title}
      </Box>
      <Heading as="h2" size={{ base: "md", md: "lg" }}>
        {value}
      </Heading>
    </Box>
  );
}
