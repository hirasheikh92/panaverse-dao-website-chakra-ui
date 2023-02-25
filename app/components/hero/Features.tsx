"use client";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import { RevealWrapper } from "next-reveal";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box bgColor={"#F7FAFC"} as='section'>
      <Container maxW={"7xl"} py={12}>
        <RevealWrapper
          origin='left'
          delay={200}
          duration={1000}
          distance='500px'
          reset={true}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Flex>
              <Image
                bgColor={"EA4C46"}
                rounded={"md"}
                alt={"feature image"}
                src={"/pic2.jpg"}
                objectFit={"cover"}
              />
            </Flex>
            <Stack spacing={4}>
              <Text
                textTransform={"uppercase"}
                color={"red.400"}
                fontWeight={600}
                fontSize={"sm"}
                bg={useColorModeValue("red.50", "red.900")}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                Our Program Studies
              </Text>
              <Heading>Core Courses (Common in All Specializations)</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                Every participant of the program will start by completing the
                following three core courses.
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                <Feature
                  icon={
                    <Icon
                      as={IoAnalyticsSharp}
                      color={"yellow.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Quarter I"}
                />
                <Text>
                  CS-101: Object-Oriented Programming using TypeScript
                </Text>
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"Quarter III"}
                />

                <Text>
                  W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud
                  Apps and APIs using Next.js 13 and Cloud Development Kit (CDK)
                  for Terraform
                </Text>

                <Feature
                  icon={
                    <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Quarter II"}
                />
                <Text>
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </RevealWrapper>
      </Container>
    </Box>
  );
}
