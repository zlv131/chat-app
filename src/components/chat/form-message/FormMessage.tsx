import React from "react";
import {Button, Flex, FormControl, Input, useColorMode} from "@chakra-ui/react";
import { useAppDispatch } from "../../../hooks/useAppDispatch.ts";
import { useAppSelector } from "../../../hooks/useAppSelector.ts";
import {
  setListMessages,
  setUserMessage,
} from "../../../store/reducers/chatSlice.ts";
import { getHistoryChat, URL_GET } from "../../../api/api.ts";

const FormMessage: React.FC = () => {
  const dispatch = useAppDispatch();
  const userMessage = useAppSelector((state) => state.chatSlice.userMessage);
  const statusAuthorization = useAppSelector(state => state.userSlice.statusAuthorization);
  const token = useAppSelector((state) => state.userSlice.token);
  const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);

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
        <FormControl borderTop={"solid #6528f7 0.5vw"} isRequired>
          <Flex mt={3} mb={3}>
            <Input
              // variant={'brand'}
              // focusBorderColor={"brand.200"}
              value={userMessage}
              onChange={(event) => dispatch(setUserMessage(event.target.value))}
              placeholder="Your message..."
              mr={10}
              ml={5}
            />
            <Button
              type={"submit"}
              variant="outline"
              colorScheme="purple"
              mr={5}
            >
              Send
            </Button>
          </Flex>
        </FormControl>
      </form>
    </div>
  );
};

export default FormMessage;
