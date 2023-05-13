"use client";
import { Box, Heading, Link } from "@chakra-ui/react";
import dynamic from "next/dynamic";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("./map/Map"), {
    loading: () => <p>loading...</p>,
    ssr: false,
  });

  return (
    <Box
      as="main"
      display="flex"
      flex-direction="column"
      align-items="center"
      min-height="100vh"
    >
      <MapWithNoSSR />
      <Box
        position="absolute"
        display="grid"
        gap=".25em"
        bottom="0"
        left="0"
        zIndex="1000"
        background="white"
        color="black"
        padding=".35rem"
        fontFamily="sans-serif"
        opacity=".5"
      >
        <Heading fontSize="1rem">
          Turmål,{" "}
          <Link href="https://www.telltur.no/friluftsrad/salten">
            Ti på topp Hamarøy
          </Link>
        </Heading>
        <Link href="https://github.com/idaons/min-telltur">Github</Link>
      </Box>
    </Box>
  );
}
