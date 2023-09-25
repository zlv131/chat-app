import React from "react";
import {Box, Container, useColorMode} from "@chakra-ui/react";
import ListMessage from "./list-message/ListMessage.tsx";
import FormMessage from "./form-message/FormMessage.tsx";
import {currentBackgroundColor, currentColor} from "../../styles/theme.ts";
const Chat: React.FC = () => {

  const {colorMode} = useColorMode()


  return (
    <div>
      <Box>
        <Container bg={currentBackgroundColor(colorMode)} p={0} border={"1vw solid"} borderColor={currentColor(colorMode)} borderTop={"0"} maxW="10xl">
          <ListMessage />
          <FormMessage />
        </Container>
      </Box>
    </div>
  );
};

export default Chat;
