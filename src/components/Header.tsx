import { HeaderProps } from "@/types";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Header({ title, description }: HeaderProps) {
  return (
    <Flex flexDirection="column">
      <Heading as="h1" size={{ base: "lg", md: "xl" }} mt="2">
        {title}
      </Heading>
      <Text mt="2">{description}</Text>
    </Flex>
  );
}
