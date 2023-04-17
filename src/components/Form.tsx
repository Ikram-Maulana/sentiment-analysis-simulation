import Buttons from "@/components/Buttons";
import { FormProps } from "@/types";
import { Box, FormControl, Textarea } from "@chakra-ui/react";

export default function Form({ handleSubmit, children }: FormProps) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl>{children}</FormControl>
    </form>
  );
}
