import React from "react";
import {
  Flex,
  VStack,
  Box,
  Text,
  Link,
  MenuButton,
  Menu,
  Portal,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Button, useToast } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const UserHeader = () => {
  const toast = useToast();

  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      console.log("URL Copied to Clipboard");
      toast({
        title: "Success.",
        status: "success",
        description: "Profile link copied.",
        duration: 3000,
        isClosable: true,
      });
    });
  };

  const beAfuckingFag = () => {
    toast({
      title: "Success.",
      status: "success",
      description: "Thanks For Being A Fucking Fag.",
      duration: 5000,
      isClosable: false,
    });

    setTimeout(() => {
      window.location.href = "http://www.meatspin.com";
    }, 5000);
  };
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"}>Nick</Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>nickvassallo</Text>
            <Text
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              social.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name="Nick"
            src="/solana.png"
            size={{ base: "md", md: "lg" }}
          />
        </Box>
      </Flex>
      <Text>Bio goes here!</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}> 3.2K followers</Text>
          <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>Instagram.com</Link>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"} p={2} borderRadius={"md"}>
                  <MenuItem
                    bg={"gray.light"}
                    borderRadius={"md"}
                    onClick={copyURL}
                  >
                    Copy Link
                  </MenuItem>
                  <MenuItem bg={"gray.dark"} onClick={beAfuckingFag}>
                    Be A Fuckin Fag
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"full"}>
        <Flex
          flex={1}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}> Posts</Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom={"1px solid gray"}
          justifyContent={"center"}
          color={"gray.light"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}> Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
