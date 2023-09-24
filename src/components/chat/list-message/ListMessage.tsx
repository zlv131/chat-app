import React, { useEffect, useRef } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Message from "./message/Message.tsx";
import { useAppSelector } from "../../../hooks/useAppSelector.ts";
import { getHistoryChat, URL_GET } from "../../../api/api.ts";
import { useAppDispatch } from "../../../hooks/useAppDispatch.ts";
import { setListMessages } from "../../../store/reducers/chatSlice.ts";
import { scrollDown } from "../../../helpers";

const ListMessage: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.userSlice.token);
  const listMessages = useAppSelector((state) => state.chatSlice.listMessages);
  const statusAuthorization = useAppSelector(state => state.userSlice.statusAuthorization);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (statusAuthorization) {
      getHistoryChat(URL_GET, token).then((data) =>
          dispatch(setListMessages(data.reverse())),
      );
    }
  }, [statusAuthorization]);

  useEffect(() => {
    statusAuthorization &&
    scrollDown(boxRef);
  }, [listMessages]);

  return (
    <div>
      <Box ref={boxRef} maxHeight={"82vh"} height={"82vh"} overflow={"scroll"}>
        <Flex>
          <Container maxW={"container.8lg"}>
            {listMessages !== null &&
              listMessages.map((message, key) => (
                  <Message key={key} message={message} />
              ))}
          </Container>
        </Flex>
      </Box>
    </div>
  );
};

export default ListMessage;
