"use client";
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import NextLink from "next/link";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg='red.500'
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "red.400",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg='black' color='whiteAlpha.500'>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box>
          <Link as={NextLink} href='/'>
            <Image src='/logo.png' w={200} h={100} alt='panaverse-logo' />
          </Link>
        </Box>
        <Text>© 2023 Panaverse Dao. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/Panaverse_edu"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"YouTube"}
            href={"https://www.youtube.com/@panaverse"}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={"Facebook"}
            href={"https://web.facebook.com/groups/piaic/?_rdc=1&_rdr"}
          >
            <FaFacebook />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
