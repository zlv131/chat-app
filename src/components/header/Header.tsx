import React from "react";
import {Box, Container, Flex, Text, useColorMode} from "@chakra-ui/react";
import Menu from "../menu/Menu.tsx";

const Header: React.FC = () => {


  return (
    <div>
      <Box p="2" bg="#6528F7" as="header">
        <Container pl={8} pr={8} maxW={"container.2lg"}>
          <Flex justifyContent="space-between" alignItems="center">
            <Menu />
            <Text
              fontFamily={"Lato"}
              color="#EDE4FF"
              as="p"
              fontWeight={600}
              fontSize="4xl"
            >
              Chatotto
            </Text>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default Header;
