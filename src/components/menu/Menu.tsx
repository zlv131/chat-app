import React from "react";
import { SettingsIcon } from "@chakra-ui/icons";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Switch,
  Box,
  Text,
  Flex,
  useColorMode, WrapItem, Avatar,
} from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/useAppSelector.ts";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { setNickname } from "../../store/reducers/userSlice.ts";
import { changeNickname, URL } from "../../api/api.ts";
import Cookies from "js-cookie";

const Menu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const nickname = useAppSelector((state) => state.userSlice.nickname);
  const token = useAppSelector((state) => state.userSlice.token);
  const dispatch = useAppDispatch();

  const { colorMode, toggleColorMode } = useColorMode();
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (nickname === "") return;
    event.preventDefault();
    onClose();
    changeNickname(URL, token, nickname);
    Cookies.set("nickname", nickname, { expires: 7 });
  };

  return (
    <>
      <SettingsIcon
        color="#EDE4FF"
        cursor={"pointer"}
        boxSize="12"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={(event) => handleOnClick(event)} />
          <DrawerHeader fontSize={32}> Settings </DrawerHeader>
          <DrawerBody>
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <Text as={"b"} fontSize={20}>
                Nickname
              </Text>
              <Input
                focusBorderColor={"primary"}
                fontSize={20}
                isRequired
                value={nickname}
                onChange={(event) => dispatch(setNickname(event.target.value))}
              />
              <Text align={"center"} as={"b"} fontSize={20} mt={4}>
                Theme
              </Text>
              <Box fontSize={20}>
                Light
                <Switch
                  isChecked={colorMode === "dark"}
                  onChange={() => toggleColorMode()}
                  colorScheme={"purple"}
                  p={4}
                  size="md"
                />
                Dark
              </Box>
              <Text align={"center"} as={"b"} fontSize={20} mt={4}>
                Avatar
              </Text>
              <WrapItem >
                <Avatar size='xl' mt={4} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
              </WrapItem>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
