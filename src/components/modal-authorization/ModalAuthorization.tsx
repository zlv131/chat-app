import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import Steppers from "../stepper/Steppers.tsx";
import { useAppSelector } from "../../hooks/useAppSelector.ts";
import FormAuthorization from "../form-authorization/FormAuthorization.tsx";
const ModalAuthorization: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentStep = useAppSelector((state) => state.stepSlice.currentStep);

  useEffect(() => {
    onOpen();
    currentStep === 3 && onClose();
  }, [currentStep]);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        closeOnEsc={false}
        size={"xl"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="28" color="purple" textAlign="center">
            Authorization
          </ModalHeader>
          <ModalBody>
            <Steppers />
          </ModalBody>

          <ModalBody>
            <FormAuthorization />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAuthorization;
