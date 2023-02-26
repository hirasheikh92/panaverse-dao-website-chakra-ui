import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { data } from "./database/database";

interface data {
  id: number;
  src: string;
  heading: string;
  text: string;
}
export default function Instructors(ins: data) {
  return (
    <>
      <Box bgColor={"#F7FAFC"}>
        <Container maxW={1400} p={6}>
          <Center>
            <Heading>Our Instructors</Heading>
          </Center>
          <Flex flexDir='row' mt={10} mb={10} flexBasis={20}>
            {data.map((ins) => (
              <Box key={ins.id}>
                <Center>
                  <Image
                    borderRadius='full'
                    width={90}
                    height={90}
                    src={ins.src}
                    alt={"panaverse-img"}
                  />
                </Center>
                <Heading textAlign='center' size='md'>
                  {ins.heading}
                </Heading>
                <Text
                  px='30px'
                  fontSize='sm'
                  textAlign='center'
                  color={useColorModeValue("gray.400", "gray.400")}
                >
                  {ins.text}
                </Text>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    </>
  );
}
