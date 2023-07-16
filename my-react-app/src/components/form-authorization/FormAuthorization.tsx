import React, {useState} from 'react';
import {Button, Flex, Input} from "@chakra-ui/react";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {setCurrentStep} from "../../store/reducers/stepSlice.ts";
import {setCode, setNickname} from "../../store/reducers/userSlice.ts";
import {postEmail, URL} from "../../api/api.ts";

const FormAuthorization: React.FC = () => {

    const dispatch = useAppDispatch();

    const [email, setEmail] = useState<string>("");
    const code = useAppSelector(state => state.userSlice.code);
    const nickname = useAppSelector(state => state.userSlice.nickname);
    const currentStep = useAppSelector(state => state.stepSlice.currentStep);


    const handleOnSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        switch (currentStep) {
            case 0:
                if (email === '') return
                console.log(postEmail(URL, email));
                console.log(email);
                break
            case 1:
                if (code === '') return
                console.log(code);
                break
            case 2:
                if (nickname === '') return
                console.log(nickname);
                break
        }
        dispatch(setCurrentStep(currentStep + 1));
    }


    return (
        <>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                {currentStep === 0
                    &&
	                <label>
		                Email:
		                <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email"/>
	                </label>
                }
                {currentStep === 1
                    &&
			            <label>
				            Code:
				            <Input value={code} onChange={(event) => dispatch(setCode(event.target.value))} type="text"/>
			            </label>
                }
                {currentStep === 2
                    &&
			            <label>
				            Nickname:
				            <Input value={nickname} onChange={(event) => dispatch(setNickname(event.target.value))} type="text"/>
			            </label>
                }


                {/*<label>*/}
                {/*    Email:*/}
                {/*    <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email"/>*/}
                {/*</label>*/}
                <Flex mt="25" justifyContent="center">
                    <Button type="submit" mb="25" colorScheme='purple'> Отправить </Button>
                </Flex>
            </form>
        </>
    )
};

export default FormAuthorization;