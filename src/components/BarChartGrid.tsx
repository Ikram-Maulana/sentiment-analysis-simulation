import { Box } from "@chakra-ui/react";
import BarChart from "./BarChart";

export default function BarChartGrid({ title, chartData }: any) {
  return (
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
        {title}
      </Box>
      <BarChart chartData={chartData} />
    </Box>
  );
}
