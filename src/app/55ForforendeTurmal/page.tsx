"use client";
import { Box, Heading, Link, Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { turmal55Forforende } from "@/turmal55ForforendeDestinations";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../map/Map"), {
    loading: () => <Spinner />,
    ssr: false,
  });

  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <MapWithNoSSR
        destinations={turmal55Forforende}
        mapCenter={[67.373685, 15.157764]}
        zoom={7}
        localstorageKey={"55ForforendeTurmal"}
      />
      <Box
        position="fixed"
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
          Konkurranse:{" "}
          <Link href="https://www.telltur.no/friluftsrad/salten">
            55 Forførende Turmål
          </Link>
        </Heading>
      </Box>
    </Box>
  );
}
