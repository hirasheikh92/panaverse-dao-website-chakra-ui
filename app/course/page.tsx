"use client";

import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

import { core, cards } from "../components/database/database";
import { RevealWrapper } from "next-reveal";

const Course = () => {
  return (
    <>
      <Box p={4}>
        <Container maxW={"7xl"} pt={10}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Center>
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
                  Course Syllabus
                </Text>
                <br />
              </Heading>
            </Center>
            <Text color={"gray.500"}>
              The first three quarters are shared by all specialties and are
              dedicated to studying Object-Oriented Programming and cutting-edge
              Full-Stack Web 2.0 development. It is going to be a
              fifteen-month-long hybrid program that includes both onsite and
              online classes and is divided into five quarters of 13 weeks each
            </Text>
          </Stack>
          <Stack mt={4} mb={3} flex={1} spacing={{ base: 5, md: 10 }}>
            <Center>
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
                  Common in All
                </Text>
                <br />
              </Heading>
            </Center>
            <Text color={"gray.500"} align={"center"}>
              Every participant of the program will start by completing the
              following three core courses:
            </Text>
          </Stack>
          {/* card flex */}
          <RevealWrapper
            delay={200}
            duration={1000}
            distance='500px'
            reset={true}
          >
            <Center>
              <Flex mt='30px' gap='20px'>
                {core.map((elem) => (
                  <Box
                    textAlign='center'
                    p='30px'
                    boxShadow='dark-lg'
                    borderRadius='20px'
                    width='290px'
                    key={elem.id}
                  >
                    <Heading as={"span"} textColor={"red.400"}>
                      {elem.heading}
                    </Heading>
                    <Text pt='5px'>{elem.text}</Text>
                  </Box>
                ))}
              </Flex>
            </Center>
          </RevealWrapper>
        </Container>
        <Box bgColor={"#F7FAFC"} w={"100%"}>
          <Container maxW={"7xl"}>
            {cards.map((elem) => (
              <Box
                key={elem.id}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack
                  mt={6}
                  flex={1}
                  justifyContent={"center"}
                  spacing={{ base: 5, md: 10 }}
                >
                  <Center>
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
                      mt={6}
                      textAlign={"center"}
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
                        {elem.heading1}
                      </Text>
                      <br />
                    </Heading>
                  </Center>

                  <Center>
                    {" "}
                    <Text color={"gray.500"} align={"center"} mb={5}>
                      {elem.text1}
                    </Text>
                  </Center>
                </Stack>

                <RevealWrapper
                  origin='right'
                  delay={200}
                  duration={1000}
                  distance='500px'
                  reset={true}
                >
                  <Center>
                    <Flex mt='30px' gap='20px'>
                      <Box
                        bgColor='white'
                        textAlign='center'
                        p='50px'
                        boxShadow='dark-lg'
                        borderRadius='20px'
                        width='350px'
                      >
                        <Heading as={"span"} textColor={"red.400"}>
                          {elem.heading2}
                        </Heading>
                        <Text fontWeight='medium' pt='5px'>
                          {elem.text2}
                        </Text>
                      </Box>
                      <Box
                        bgColor='white'
                        textAlign='center'
                        p='50px'
                        boxShadow='dark-lg'
                        borderRadius='20px'
                        width='350px'
                      >
                        <Heading as={"span"} textColor={"red.400"}>
                          {elem.heading3}
                        </Heading>
                        <Text fontWeight='medium' pt='5px'>
                          {elem.text3}
                        </Text>
                      </Box>
                    </Flex>
                  </Center>
                </RevealWrapper>
              </Box>
            ))}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Course;
