import { Inter } from "next/font/google";
import { ChakraProviders } from "./ChakraProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ti på topp Hamarøy",
  description: "Kart over destinasjonene i Ti på topp Hamarøy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <ChakraProviders>
        <body>{children}</body>
      </ChakraProviders>
    </html>
  );
}
