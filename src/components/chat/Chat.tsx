import React from "react";
import { Box, Container } from "@chakra-ui/react";
import ListMessage from "./list-message/ListMessage.tsx";
import FormMessage from "./form-message/FormMessage.tsx";
const Chat: React.FC = () => {
  return (
    <div>
      <Box>
        <Container p={0} border={"1vw #6528f7 solid"} borderTop={"0"} maxW="10xl">
          <ListMessage />
          <FormMessage />
        </Container>
      </Box>
    </div>
  );
};

export default Chat;
