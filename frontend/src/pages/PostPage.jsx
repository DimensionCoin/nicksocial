import {
  Avatar,
  Flex,
  Image,
  Text,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import Comment from "../components/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/solana.png" size={"md"} name="Nick Vassallo" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              nickvassallo
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my={3}>Lets Talk About being a fucking Fag</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid gray"}
        borderColor={"gray.light"}
      >
        <Image src="/solana.png" w={"full"} />
      </Box>
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.ligh"} fontSize={"sm"}>
          123 Replies
        </Text>
        <Box w={1} h={1} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.ligh"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} Likes
        </Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋🏻</Text>
          <Text>Get the App to like, reply and post</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />

      <Comment
        comment="Looks great"
        createdAt="2d"
        likes={100}
        userName="nickvassallo"
        userAvatar="https://bit.ly/dan-abramov"
      />
      <Comment
        comment="your really good at this"
        createdAt="1d"
        likes={99}
        userName="vladputin"
        userAvatar="https://bit.ly/dan-abramov"
      />
    </>
  );
};

export default PostPage;
