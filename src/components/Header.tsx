import { HeaderProps } from "@/types";
import { Flex, Heading, Highlight, Text } from "@chakra-ui/react";

export default function Header({ title, spotlight, description }: HeaderProps) {
  return (
    <Flex flexDirection="column">
      <Heading as="h1" size={{ base: "lg", md: "xl" }} mt="2">
        {title}
      </Heading>
      {spotlight && (
        <Text mt="2" lineHeight="7">
          <Highlight
            query={spotlight}
            styles={{ px: "2", py: "1", rounded: "md", bg: "yellow.200" }}
          >
            {description}
          </Highlight>
        </Text>
      )}
      {!spotlight && (
        <Text mt="2" lineHeight="7">
          {description}
        </Text>
      )}
    </Flex>
  );
}
