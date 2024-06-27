/*
import { Button } from "bootstrap";
import Image from 'react-bootstrap/Image'
import React, { useState } from "react";
import { signInWithGoogle, signOutWithGoogle, auth } from "./firebase";
import { Card, Container } from 'react-bootstrap';



const defaultImg = "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
const defIme = "Prijavite se: ";

export const LoginZaProps = (props) => {
    const [user, setUser] = useState({ ime: defIme, img: defaultImg, button: true });
    const ime = user.ime;
    const imgUrl = user.img;
    const button = user.button


    setUser(prevUser => {
        return ({ ime: prevUser.ime = props.ime, img: prevUser.img = props.img, button: prevUser.button = false });
    });


    return (
        <>
            <div>
                <Container className="me-auto">

                    <Image src={imgUrl} rounded width={"30px"} height={"30px"} fluid></Image>

                    <span>{ime}</span>

                    {user.button ? <button onClick={signInWithGoogle}>LogIn</button> :
                        <button onClick={signOutWithGoogle}>LogOut</button>}

                </Container>
            </div>
        </>
    );
};




*/


















/*
export function LogIn() {
    return (
        <>
            <button onClick={signInWithGoogle}>Login</button>
        </>
    );
};

export function LogOut() {
    return (
        <>
            <Image src={localStorage.getItem("img")}></Image>
            <></>
            <button onClick={signOutWithGoogle}>LogOut</button>
        </>
    );
};
*/