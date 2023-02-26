"use client";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RevealWrapper } from "next-reveal";

export default function Hero() {
  return (
    <Box
      bgImage={
        "https://www.freepik.com/free-vector/red-curve-gray-background_14731285.htm#query=red%20background&position=25&from_view=search&track=ais"
      }
    >
      <RevealWrapper delay={200} duration={1000} distance='500px' reset={true}>
        <Container maxW={"7xl"} pt={20}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "red.400",
                    zIndex: -1,
                  }}
                >
                  Become a Certified Developer
                </Text>
                <br />
                <Text as={"span"} color={"red.400"}>
                  with Panaverse
                </Text>
              </Heading>
              <Text color={"gray.500"}>
                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                Getting Ready for the Next Generation of the Internet
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Box display={{ base: "none", md: "flex" }}>
                  <Link
                    as={NextLink}
                    isExternal
                    href='https://www.piaic.org/'
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button colorScheme='red'>Apply Now</Button>
                  </Link>
                </Box>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={"/metaverse.jpeg"}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </RevealWrapper>
    </Box>
  );
}
