import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Avatar from './Slike/Avatar.png';
import '../App.css'
import '../styles/onas.css';

import { motion } from 'framer-motion';

function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >   
            <div className="marginAll">
                <Row>
                    <Col className="d-flex" style={{ margin: "0.1%" }}>
                        <Card className="flex-fill" style={{ width: '18rem', height: "auto"  }}>
                            <Card.Img variant="top" src={Avatar} />
                            <Card.Body>
                                <Card.Title>Urban Vižintin</Card.Title>
                                <Card.Subtitle>Velenje</Card.Subtitle>
                                <Card.Text>
                                    Backend expert<br />
                                    Three point specialist
                                </Card.Text>
                                <Card.Link href="#">Instagram</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex" style={{ margin: "0.1%" }}>
                        <Card className="flex-fill" style={{ width: '18rem', height: "auto"  }}>
                            <Card.Img variant="top" src={Avatar} />
                            <Card.Body>
                                <Card.Title>David Golež</Card.Title>
                                <Card.Subtitle>Slovenj Gradec</Card.Subtitle>
                                <Card.Text>
                                    Frontend expert<br />
                                    Chupapi
                                </Card.Text>
                                <Card.Link href="#">Facebook</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex" style={{ margin: "0.1%" }}>
                        <Card className="flex-fill" style={{ width: '18rem', height: "auto"  }}>
                            <Card.Img variant="top" src={Avatar} />
                            <Card.Body>
                                <Card.Title>Nik Kac</Card.Title>
                                <Card.Subtitle>Vuzenica</Card.Subtitle>
                                <Card.Text>
                                    Frontend expert
                                </Card.Text>
                                <Card.Link href="#">Instagram</Card.Link>
                                <Card.Link href="#">Tinder</Card.Link>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col className="d-flex" style={{ margin: "0.1%" }}>

                        <Card className="flex-fill" style={{ width: '18rem', height: "auto" }}>
                            <Card.Img variant="top" src={Avatar} />
                            <Card.Body>
                                <Card.Title>Matic Absec</Card.Title>
                                <Card.Subtitle>Celje/Kranj</Card.Subtitle>
                                <Card.Text>
                                    Fullstack engineer<br />
                                    DJ
                                </Card.Text>
                                <Card.Link href="#">Snapchat</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}

export default About;