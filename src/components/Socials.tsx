import { Flex, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGlobal,
} from "react-icons/ai";
import data from "../data.json";

export default function Socials() {
  return (
    <Flex mt="4" alignItems="center" gap={2}>
      {data.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            aria-label={item.name}
            icon={
              item.name === "Github" ? (
                <AiFillGithub />
              ) : item.name === "Instagram" ? (
                <AiFillInstagram />
              ) : item.name === "Linkedin" ? (
                <AiFillLinkedin />
              ) : (
                <AiOutlineGlobal />
              )
            }
            isRound={true}
          />
        </Link>
      ))}
    </Flex>
  );
}
