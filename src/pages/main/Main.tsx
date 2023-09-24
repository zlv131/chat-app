import React, {useEffect} from 'react';
import Header from "../../components/header/Header.tsx";
import ModalAuthorization from "../../components/modal-authorization/ModalAuthorization.tsx";
import Chat from "../../components/chat/Chat.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {setStatusAuthorization} from "../../store/reducers/userSlice.ts";
import Cookies from "js-cookie";
const Main: React.FC = () => {

    const dispatch = useAppDispatch();
    const statusAuthorization = useAppSelector(state => state.userSlice.statusAuthorization);

    useEffect(() => {
        (Cookies.get('email') && Cookies.get('token') && Cookies.get('nickname')) && dispatch(setStatusAuthorization(true));
    }, [])

    return (
        <div>
            <Header/>
            {statusAuthorization ? <></> : <ModalAuthorization/>}
            <Chat />
        </div>
    );
};

export default Main;