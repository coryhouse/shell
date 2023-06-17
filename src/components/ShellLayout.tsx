import {
  Center,
  Box,
  Flex,
  Heading,
  Spinner,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Link, Link as RouterLink } from "react-router-dom";

var buildDate = process.env.BUILD_DATE;

type ShellLayoutProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  RemoteOne: ReactNode;
  RemoteTwo: ReactNode;
};

export function ShellLayout({
  count,
  setCount,
  RemoteOne,
  RemoteTwo,
}: ShellLayoutProps) {
  return (
    <Center
      height="100vh"
      width="100%"
      backgroundColor="#1B1A29"
      margin="0"
      p="0"
      flexDirection="column"
    >
      <Box color="#fff" position="fixed" right="0" top="0" mr="2rem" mt="2rem">
        Build Date: <Text fontWeight="bold">{buildDate}</Text>
      </Box>
      <Flex
        border="1px solid #151421"
        borderRadius="1rem"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        padding="5rem"
        backgroundColor="#6F60EA"
      >
        <Heading color="#fff">SHELL</Heading>
        <Link to="/about">About Page</Link>
        <Text color="white">Shell click count: {count}</Text>
        <Button onClick={() => setCount((prevState) => prevState + 1)}>
          Increment shell count
        </Button>
        <br />
        <Flex direction="row" justifyContent="space-around">
          <React.Suspense fallback={<Spinner size="xl" />}>
            <Box
              p="2rem"
              mr="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                REMOTE 1
              </Heading>
              {RemoteOne}
              <Button mt="1rem" w="100%" to="/remote1" as={RouterLink}>
                To Remote 1
              </Button>
            </Box>
          </React.Suspense>
          <React.Suspense fallback={<Spinner size="xl" />}>
            <Box
              p="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                REMOTE 2
              </Heading>
              {RemoteTwo}
              <Button
                mt="1rem"
                w="100%"
                alignSelf="center"
                to="/remote2"
                as={RouterLink}
              >
                To Remote 2
              </Button>
            </Box>
          </React.Suspense>
        </Flex>
      </Flex>
    </Center>
  );
}
