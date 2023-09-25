import React from "react";
import {Button, Flex, FormControl, Input, useColorMode} from "@chakra-ui/react";
import { useAppDispatch } from "../../../hooks/useAppDispatch.ts";
import { useAppSelector } from "../../../hooks/useAppSelector.ts";
import {
  setListMessages,
  setUserMessage,
} from "../../../store/reducers/chatSlice.ts";
import { getHistoryChat, URL_GET } from "../../../api/api.ts";
import {currentColor} from "../../../styles/theme.ts";
import EmojiPicker from 'emoji-picker-react';

const FormMessage: React.FC = () => {
  const dispatch = useAppDispatch();
  const userMessage = useAppSelector((state) => state.chatSlice.userMessage);
  const statusAuthorization = useAppSelector(state => state.userSlice.statusAuthorization);
  const token = useAppSelector((state) => state.userSlice.token);
  const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);

  const {colorMode} = useColorMode();
  const sendMessageToServer = (event) => {
    event.preventDefault();
    socket.send(JSON.stringify({ text: userMessage }));
    dispatch(setUserMessage(""));
  };

  socket.onmessage = function () {
    if (statusAuthorization) {
      getHistoryChat(URL_GET, token).then((data) =>
          dispatch(setListMessages(data.reverse())),
      );
    }
  };


  return (
    <div>
      <form onSubmit={(event) => sendMessageToServer(event)}>
        <FormControl borderTop={"solid 0.5vw"} borderColor={currentColor(colorMode)} isRequired>
          <Flex mt={3} mb={3}>
            <Input
              focusBorderColor={currentColor(colorMode)}
              borderColor={currentColor(colorMode)}
              value={userMessage}
              onChange={(event) => dispatch(setUserMessage(event.target.value))}
              placeholder="Your message..."
              mr={10}
              ml={5}
            />
            <Button
              borderColor={currentColor(colorMode)}
              type={"submit"}
              variant="outline"
              colorScheme="purple"
              mr={5}>
              Send
            </Button>
          </Flex>
        </FormControl>
      </form>
    </div>
  );
};

export default FormMessage;
