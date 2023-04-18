import { Box } from "@chakra-ui/react";
import PieChart from "./PieChart";

export default function PieChartGrid({ title, chartData }: any) {
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
    >
      <Box as="p" fontSize="md" fontWeight="bold">
        {title}
      </Box>
      <PieChart chartData={chartData} />
    </Box>
  );
}
