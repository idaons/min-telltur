"use client";
import {
  Box,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export function Info() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Box>
      <Link as="button" onClick={onOpen}>
        Info
      </Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginX="1rem">
          <ModalHeader>Turmål, Ti på topp Hamarøy</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom="2rem">
            <Stack spacing="1rem">
              <Text>
                Dette er et lite hobbyprosjekt jeg lagde fordi jeg ønsket meg en
                enkel oversikt over turmål i Ti på topp Hamarøy.
              </Text>
              <Text>
                Det er ingen automatisk kobling mellom dette kartet og
                Telltur.no, så ting du gjør her gir deg ikke poeng eller
                synkroniseres noe sted.
              </Text>
              <Text>
                Jeg har gjort det mulig å huke av for {'"Besøkt"'}, men dette er
                bare så det skal være lett å få oversikt og er ikke koblet til
                telltur. Når du huker av for {'"Besøkt"'} her lagres det lokalt
                i nettleseren din, og kan forsvinne plutselig.
              </Text>
              <Text>
                Hvis du oppdager feil må du gjerne si ifra, så skal jeg rette
                opp så fort som mulig.
              </Text>
              <Text>
                Håper dette lille verktøyet er nyttig i turplanleggingen din.
                God tur!
              </Text>
              <Text>
                <Link href="https://github.com/idaons/min-telltur">
                  Hvis du ønsker å bidra ligger koden på Github.
                </Link>
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
