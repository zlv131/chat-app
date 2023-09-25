import React from "react";
import {Box, Container, Flex, Avatar, Badge, Text, useColorMode} from "@chakra-ui/react";
import {refreshDate} from "../../../../helpers";
import {useAppSelector} from "../../../../hooks/useAppSelector.ts";
import {currentColor} from "../../../../styles/theme.ts";

interface IMessage {
  message: any;
}
const Message: React.FC<IMessage> = ({ message }) => {

  const email = useAppSelector(state => state.userSlice.email);
  const {colorMode} = useColorMode()
  console.log(email, message.user.email)
  return (
    <div>
      <Box>
        <Container
          wordBreak={"break-word"}
          maxW={"container.xl"}
          mb={3}
          mt={5}
          p={2}
          border={"solid 2px"}
          borderColor={currentColor(colorMode)}
          borderRadius={12}
        >
          <Flex>
            {
              email === message.user.email
              ? <Avatar border={"solid 1px"} borderColor={currentColor(colorMode)} name={message.user.name} src='https://bit.ly/dan-abramov' />
              : <Avatar border={"solid 1px"} borderColor={currentColor(colorMode)} name={message.user.name} />
            }

            <Box ml="4">
              <Text fontWeight="bold">
                {message.user.name}
                <Badge ml="2" colorScheme="purple">
                  {refreshDate.hoursMinutes(message.createdAt)}
                </Badge>
                <Badge ml="2" colorScheme="purple">
                  {refreshDate.date(message.createdAt)}
                </Badge>
              </Text>
              <Text fontSize="sm">
                {message.text}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default Message;
