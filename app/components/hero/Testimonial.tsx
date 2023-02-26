"use client";
import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";

export default function WithLargeQuote() {
  return (
    <RevealWrapper
      origin='left'
      delay={200}
      duration={1000}
      distance='500px'
      reset={true}
    >
      <Stack
        bg={useColorModeValue("gray.50", "gray.800")}
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={"center"}
        direction={"column"}
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign={"center"}
          maxW={"3xl"}
        >
          As a student, I have found this course to be very good to my learning
          and professional development. One of the things I appreciate most
          about this course is the relevance of the material to my field of
          study. The course content is directly applicable to my career goals
          and has given me with a solid foundation of knowledge and skills. The
          difficulty of the course was challenging but not overwhelming, it has
          pushed me to learn new skills and think critically. The workload was
          well-balanced, and I felt that the assignments were challenging but
          achievable.The quality of instruction was excellent, the instructor
          was knowledgeable, engaging, and given clear explanations. The support
          team was quick to respond to any issues I had and given clear and
          concise instructions for resolving them.
        </Text>
        <Box textAlign={"center"}>
          <Avatar src={"/student.png"} alt={"Abdullah Azhar Khan"} mb={2} />

          <Text fontWeight={600}>Abdullah Azhar Khan</Text>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.400", "gray.400")}
          >
            Student
          </Text>
        </Box>
      </Stack>
    </RevealWrapper>
  );
}
