"use client"
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import React from "react";

interface Props {
    visible: boolean,
    closeHandler: () => void,
    children: React.JSX.Element,
    headerText?: {
        wlcm: string,
        to: string
    },
}


const Module: React.FC<Props> = ({visible, closeHandler, children, headerText}) => {

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
          {headerText?.wlcm}
            <Text b size={18}>
              {headerText?.to}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Module;