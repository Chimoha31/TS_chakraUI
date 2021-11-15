/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from "react";
import { Center, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Input, Spinner, Stack, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organism/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(() => onOpen(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/random/"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
          </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom" >
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>User Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value="Chiho" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value="Chiho Maekawa" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value="12345@gmail.com" isReadOnly/>
              </FormControl>
              <FormControl>
                <FormLabel>TELL</FormLabel>
                <Input value="123-456-789" isReadOnly/>
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
