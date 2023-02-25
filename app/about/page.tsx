"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import React from "react";
import Instructor from "../components/Instructor";
import { data } from "../components/database/database";
import { RevealList, RevealWrapper } from "next-reveal";

const About = () => {
  return (
    <>
      <Box>
        <Container maxW={"7xl"}>
          <Flex
            my='50px'
            px={{ lg: "50px", base: "20px" }}
            gap='30px'
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis='50%'>
              <Image
                src={"/President.webp"}
                alt={"president-image"}
                mx={"auto"}
              ></Image>
            </Box>
            <Box flexBasis='50%'>
              <RevealList
                interval={60}
                delay={500}
                origin='right'
                distance='500px'
                reset={true}
              >
                <Heading size='2xl'>Dr. Arif Alvi</Heading>
                <Text mt={5}>
                  Dr. Arif Alvi was born in 1949 and completed his early
                  education in Karachi. He did his Bachelor of Dental Surgery
                  (BDS) from De’ Montmorency College of Dentistry, Lahore where
                  he was declared the “Best Graduate”. He completed his Masters
                  of Science in the field of Prosthodontics from University of
                  Michigan (1975) and in Orthodontics from University of
                  Pacific, San Francisco (1982). He was awarded fellowship
                  ‘Diplomatic American Board of Orthodontists (1995)’.
                </Text>
                <Text mt={5}>
                  President Dr. Arif Alvi has been a renowned professional and
                  has held many important positions in the field of Dentistry.
                  He remained Dean of Orthodontics, College of Physicians and
                  Surgeons of Pakistan, President, Pakistan Dental Association
                  (1997-2001), Pakistan Association of Orthodontists (2005),
                  Asia Pacific Dental Federation (2006-07) and Councilor of the
                  World Dental Federation (2007-2013). Through his sheer hard
                  work in the World Dental Federation, he was able to get the
                  declaration of 20th March as World Oral Health Day. He is also
                  an author of a book, theses, and many articles.
                </Text>

                <Button colorScheme='red' mt={5} size='md'>
                  More Info
                </Button>
              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1400}>
          <Flex
            my='50px'
            px={{ lg: "50px", base: "20px" }}
            gap='30px'
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis='50%'>
              <RevealList
                interval={60}
                delay={500}
                origin='left'
                distance='500px'
                reset={true}
              >
                <Heading size='2xl'>Panaverse DAO</Heading>
                <Text mt={5}>
                  Panaverse DAO is a community of Web 3 and Metaverse
                  developers, designers, trainers, startup founders and service
                  providers. Panaverse DAO is struggling to produce professional
                  metaverse developers from Pakistan for the upcoming Era of
                  Internet
                </Text>
                <Text mt={5}>
                  President Dr. Arif Alvi has been a renowned professional and
                  has held many important positions in the field of Dentistry.
                  He remained Dean of Orthodontics, College of Physicians and
                  Surgeons of Pakistan, President, Pakistan Dental Association
                  (1997-2001), Pakistan Association of Orthodontists (2005),
                  Asia Pacific Dental Federation (2006-07) and Councilor of the
                  World Dental Federation (2007-2013). Through his sheer hard
                  work in the World Dental Federation, he was able to get the
                  declaration of 20th March as World Oral Health Day. He is also
                  an author of a book, theses, and many articles.
                </Text>
                <Button colorScheme='red' mt={5} size='md'>
                  More Info
                </Button>
              </RevealList>
            </Box>
            <Box flexBasis='50%' m='auto'>
              <Image
                mx='auto'
                src='/logo.png'
                alt='President'
                width={{ lg: 450, base: 200 }}
                height={{ lg: 280, base: 150 }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1400}>
          <Flex
            my='50px'
            px={{ lg: "50px", base: "20px" }}
            gap='30px'
            display={{ lg: "flex", base: "grid" }}
          >
            <Box m='auto' flexBasis='50%'>
              <Image m='auto' src='/Zia.webp' alt='President' />
            </Box>
            <Box flexBasis='50%'>
              <RevealList
                interval={60}
                delay={500}
                origin='right'
                distance='500px'
                reset={true}
              >
                <Heading size='2xl'>Zia Khan</Heading>
                <Text mt={5}>
                  CEO of Panacloud, the world’s first Integrated API Ownership
                  Economy, Crowdfunding, and Development Platform. Volunteer COO
                  of PIAIC, an initiative by the President of Pakistan for AI
                  and computing mass education. Mentor and software developer
                  with 20+ years of expertise in cloud and serverless computing,
                  software design, project management, and API and App
                  development. Expert in concept, business modeling & strategy
                  development for startups, specializing in DeFi and token
                  economics. Mentored and trained hundreds of thousands of
                  developers. Triple masters degrees in business administration,
                  engineering, and finance from Arizona State University. Master
                  in Economics from KU. Certified Public Accountant and
                  Certified Management Accountant in USA.
                </Text>
                <Text mt={5}>
                  Extensive experience in software architecture, design,
                  development, implementation, and integration. Worked as a
                  developer in Silicon Valley for 7 years. Hands-on work
                  including thousands of hours of development work logged
                  recently resulting in multiple successful projects for cutting
                  edge startups like Panacloud, OpenPD, Datasplash, FreshAir
                  Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.
                </Text>
                <Button colorScheme='red' mt={5} size='md'>
                  More Info
                </Button>
              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <RevealWrapper
          origin='right'
          delay={200}
          duration={1000}
          distance='500px'
          reset={true}
        >
          <Instructor id={0} src={""} heading={""} text={""} />
        </RevealWrapper>
      </Box>
    </>
  );
};
export default About;
