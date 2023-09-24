import React from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/useAppSelector.ts";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { setCurrentStep } from "../../store/reducers/stepSlice.ts";
import {
  setCode,
  setEmail,
  setNickname,
  setStatusAuthorization,
} from "../../store/reducers/userSlice.ts";
import { changeNickname, URL } from "../../api/api.ts";
import Cookies from "js-cookie";
const FormAuthorization: React.FC = () => {
  const dispatch = useAppDispatch();

  const email = useAppSelector((state) => state.userSlice.email);
  const token = useAppSelector((state) => state.userSlice.token);
  const nickname = useAppSelector((state) => state.userSlice.nickname);
  const currentStep = useAppSelector((state) => state.stepSlice.currentStep);
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    switch (currentStep) {
      case 0:
        if (email === "") return;
        break;
      case 1:
        if (token === "") return;
        break;
      case 2:
        if (nickname === "") return;
        changeNickname(URL, token, nickname);
        break;
    }
    Cookies.set("token", token, { expires: 7 });
    Cookies.set("email", email, { expires: 7 });
    Cookies.set("nickname", nickname, { expires: 7 });
    (email && token && nickname) ? dispatch(setStatusAuthorization(true)) : dispatch(setStatusAuthorization(false))
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        {currentStep === 0 && (
          <label>
            Email:
            <Input
              value={email}
              focusBorderColor="purple"
              onChange={(event) => dispatch(setEmail(event.target.value))}
              type="email"
            />
          </label>
        )}
        {currentStep === 1 && (
          <label>
            Code:
            <Input
              value={token}
              focusBorderColor="purple"
              onChange={(event) => dispatch(setCode(event.target.value))}
              type="text"
            />
          </label>
        )}
        {currentStep === 2 && (
          <label>
            Nickname:
            <Input
              value={nickname}
              focusBorderColor="purple"
              onChange={(event) => dispatch(setNickname(event.target.value))}
              type="text"
            />
          </label>
        )}

        <Flex mt="25" justifyContent="center">
          <Button type="submit" mb="25" colorScheme="purple">
            Отправить
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default FormAuthorization;
