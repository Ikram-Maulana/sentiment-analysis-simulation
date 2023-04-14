import { ButtonsProps } from "@/types";
import { Button } from "@chakra-ui/react";
import { HiSparkles } from "react-icons/hi";

export default function Buttons({ loading }: ButtonsProps) {
  return (
    <Button
      leftIcon={<HiSparkles />}
      colorScheme="red"
      variant="solid"
      mt="3"
      type="submit"
      isLoading={loading}
      loadingText="Mengklasifikasikan"
    >
      Klasifikasikan Ulasan
    </Button>
  );
}
