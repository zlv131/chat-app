import React from "react";
import { Box, Container, Flex, Avatar, Badge, Text } from "@chakra-ui/react";
import {refreshDate} from "../../../../helpers";

interface IMessage {
  message: any;
}
const Message: React.FC<IMessage> = ({ message }) => {

  return (
    <div>
      <Box>
        <Container
          wordBreak={"break-word"}
          maxW={"container.xl"}
          mb={3}
          mt={5}
          p={2}
          border={"solid 2px #9175ce"}
          borderRadius={12}
        >
          <Flex>
            <Avatar border={"solid 1px #9175ce"} name={message.user.name} />
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
