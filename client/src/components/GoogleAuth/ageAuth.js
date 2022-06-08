import React from "react"
import "./ageAuthPopUp.css";
import { useState } from "react";


import { Modal } from "react-bootstrap";
import  Button  from "react-bootstrap/Button";

export default function Polnoletnost() {
    const [show, setShow] = useState(true); //Tu se state spremeni na true da bo delovalo zaj za enkrat sn dav tk da lahk delamo brez da konstantno popUp nalaga

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header>
                    <Modal.Title>Ali ste polnoletni?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    S klikom na gumb spodnji gumb potrdim da sem star/a 18 ali več
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Potrdim
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
