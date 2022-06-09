import React from "react";
import { Card, Container } from "react-bootstrap";
import '../App.css'
export const Napaka = () => {

    const MyStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        fontFamily: "Arial",
        margin: "auto"
        };

    return (
        <Container className="marginTopIskanje">
            <Card style={{body: "true", bg: 'success'}}>
                <Card.Body style={MyStyle}>
                    <Card.Text>
                        ERROR
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}