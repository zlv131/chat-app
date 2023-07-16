import React from 'react';
import styles from './Main.module.scss';
import Header from "../../components/header/Header.tsx";
import ModalAuthorization from "../../components/modal-authorization/ModalAuthorization.tsx";
const Main: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <ModalAuthorization/>

        </div>
    );
};

export default Main;