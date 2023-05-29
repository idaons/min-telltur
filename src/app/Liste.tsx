"use client";
import { tiPaToppHamaroyDestinations } from "@/TiPaToppHamaroy";
import {
  Box,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  useDisclosure,
} from "@chakra-ui/react";

export function Liste() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Link as="button" onClick={onOpen}>
        Liste over turmål
      </Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginX="1rem">
          <ModalHeader>Turmål, Ti på topp Hamarøy</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom="2rem">
            <OrderedList>
              {tiPaToppHamaroyDestinations
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((turmål, i) => (
                  <ListItem
                    key={turmål.name}
                    display="flex"
                    justifyContent="space-between"
                    maxW="20rem"
                    padding=".1rem .5rem"
                    _odd={{ background: "gray.100" }}
                  >
                    <Box>
                      {i + 1}. {turmål.name}
                    </Box>
                    <Box>{turmål.points}</Box>
                  </ListItem>
                ))}
            </OrderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
