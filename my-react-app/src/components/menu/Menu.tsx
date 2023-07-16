import React from 'react';
import {SettingsIcon} from "@chakra-ui/icons";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
} from '@chakra-ui/react'
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {setNickname} from "../../store/reducers/userSlice.ts";

const Menu: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const nickname = useAppSelector(state => state.userSlice.nickname);
    const dispatch = useAppDispatch();

    return (
        <>
            <SettingsIcon color="#EDE4FF" cursor={"pointer"} boxSize="12" ref={btnRef} onClick={onOpen}/>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader> Your nickname </DrawerHeader>
                    <DrawerBody>
                        <Input value={nickname} onChange={(event) => dispatch(setNickname(event.target.value))} placeholder='Type here...' />
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
};

export default Menu;