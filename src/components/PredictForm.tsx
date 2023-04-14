import Buttons from "@/components/Buttons";
import { PredictFormProps } from "@/types";
import { Box, FormControl, Textarea } from "@chakra-ui/react";

export default function PredictForm({
  handleSubmit,
  text,
  setText,
  loading,
}: PredictFormProps) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl>
        <Box mt="4">
          <Textarea
            placeholder="Masukkan teks ulasan di sini"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Box>

        <Buttons loading={loading} />
      </FormControl>
    </form>
  );
}
