import '../styles/modal.css';
import { Button} from "react-bootstrap";
import React from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import axios from 'axios';

function Modal({ handleClose, show, children }) {
    const prikaz = show ? "modal display-block" : "modal display-none";
    const [podatki, setPodatki] = React.useState("Pivo ni bilo najdeno.");
    const [stopStream, setStopStream] = React.useState(false);

    return (
        <div className={prikaz}>
            <section className="modal-main">
                {children}
                <>
                <BarcodeScannerComponent
                    width = {500}
                    height = {500}
                    stopStream = {stopStream}
                    onUpdate = {(err, result) => {
                        if(result) {
                            let podatek = result.text;
                            setStopStream(true);
                            axios.get(`http://localhost:5001/pivoScanner/${result.text}`)
                            .then(res => {
                                let pivo = res.data;
                                setPodatki(pivo[0].naziv);
                                console.log(pivo);
                            });
                        } else {
                            setPodatki("Pivo ni bilo najdeno.");
                        }
                    }}
                    
                />
                </>
                <p>{podatki}</p> 
                <Button type="button" onClick={handleClose}>
                    Zapri
                </Button>
            </section>
        </div>
    );
};

export default Modal;