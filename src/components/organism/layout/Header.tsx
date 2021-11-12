import { VFC, memo } from "react";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: VFC = memo(() => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          User Management App
        </Heading>
      </Flex>

      <Flex
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
      >
        <Box pr={4}>
          <Link>User List</Link>
        </Box>
        <Box>
          <Link>Setting</Link>
        </Box>
      </Flex>

      {/* <IconButton aria-label= "menu-button" icon={<HamburgerIcon />} size="sm" variant="unstyled"/> */}
    </Flex>
  );
});
