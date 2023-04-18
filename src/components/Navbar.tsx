import { Box, Button, Container, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [link, setLink] = useState("home");
  const router = useRouter();

  useEffect(() => {
    router.pathname === "/" ? setLink("home") : setLink("dashboard");
  }, [router.pathname]);

  return (
    <Box as="nav" pos="relative" top="0" left="0" right="0">
      <Container maxW="3xl" px="8">
        <Box
          py="8"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box className="nav-link" display="flex" gap="2" alignItems="center">
            <Button
              as={Link}
              href="/"
              size="sm"
              variant={link === "home" ? undefined : "ghost"}
            >
              Home
            </Button>
            <Button
              as={Link}
              href="/dashboard"
              size="sm"
              variant={link === "dashboard" ? undefined : "ghost"}
            >
              Dashboard
            </Button>
          </Box>

          <Button size="sm" onClick={toggleColorMode}>
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
