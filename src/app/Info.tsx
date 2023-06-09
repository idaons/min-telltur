"use client";
import {
  Box,
  Button,
  Checkbox,
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
import { useLocalStorageState } from "@/useLocalStorageState";

export function Info() {
  const [isOpen, setIsOpen, keyExist] = useLocalStorageState<boolean>(
    "tiPaToppHamaroyModal",
    true
  );

  return (
    <Box>
      <Link as="button" onClick={() => setIsOpen(true)}>
        Info
      </Link>

      <Modal
        isOpen={keyExist ? isOpen : false}
        onClose={() => setIsOpen(false)}
      >
        <ModalOverlay />
        <ModalContent marginX="1rem">
          <ModalHeader>Turmål, Ti på topp Hamarøy</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom="2rem">
            <Stack spacing="1rem">
              <Text>
                Denne siden ble laget fordi jeg ønsket meg en oversikt over
                plasseringene av turmålene i Ti på topp Hamarøy.
              </Text>
              <Text>
                Det er ingen kobling mellom dette kartet og Telltur.no, så ting
                du gjør her gir deg ikke poeng eller synkroniseres noe sted.
              </Text>
              <Text>
                Jeg har gjort det mulig å huke av for {'"Besøkt"'}, men dette er
                bare så det skal være lett å få oversikt over egne besøk og er
                ikke koblet til telltur. Når du huker av for {'"Besøkt"'} her
                lagres det lokalt i nettleseren din, og kan forsvinne plutselig.
              </Text>
              <Text>
                Hvis du oppdager feil må du gjerne si ifra, så skal jeg rette
                opp så fort som mulig.
              </Text>
              <Text>
                Håper dette kan være nyttig i turplanleggingen din. God tur!
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
