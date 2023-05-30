"use client";
import { Box, Heading, Link, Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Info } from "./Info";
import { Liste } from "./Liste";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("./map/Map"), {
    loading: () => <Spinner />,
    ssr: false,
  });

  const host = useHost();
  console.log({ host });

  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <MapWithNoSSR />
    </Box>
  );
}
