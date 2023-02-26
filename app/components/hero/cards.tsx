"use client";

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Container,
  Flex,
} from "@chakra-ui/react";
import { cardData } from "../database/cardData";

import { RevealWrapper } from "next-reveal";

export default function Cards() {
  return (
    <Box>
      <RevealWrapper
        origin='right'
        delay={200}
        duration={1000}
        distance='500px'
        reset={true}
      >
        <Container maxW={"7xl"} py={12}>
          <Flex flexWrap={"wrap"} justifyContent='space-between'>
            {cardData.map((card) => (
              <Box
                display={"flex"}
                justifyContent='space-evenly'
                key={card.id}
                w={"22.22%"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"dark-lg"}
                rounded={"sm"}
                p={5}
                m={3}
                overflow={"hidden"}
                borderRadius={"20px"}
              >
                <Stack spacing='3'>
                  <Heading
                    color={"red.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"lg"}
                    letterSpacing={1.1}
                    textAlign={"center"}
                    p={4}
                  >
                    {card.heading}
                  </Heading>

                  <Text color={"gray.500"}>{card.text}</Text>
                </Stack>
              </Box>
            ))}
          </Flex>
        </Container>
      </RevealWrapper>
    </Box>
  );
}
