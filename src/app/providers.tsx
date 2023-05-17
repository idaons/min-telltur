"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ChakraTheme,
  extendBaseTheme,
  extendTheme,
} from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        textDecoration: "underline",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
