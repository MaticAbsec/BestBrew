import React from 'react';
import { CardGroup, Card, ListGroup, Button } from "react-bootstrap";
import axios from 'axios';
var Barcode = require('react-barcode');

export default class SeznamPiv extends React.Component {
  state = {
    piva: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/Vsapiva`)
      .then(res => {
        const piva = res.data;
        this.setState({ piva });
      })
  }

  render() {
    return (
    <>
        <CardGroup>
        {
          this.state.piva
            .map(pivo =>
                <Card className="flex-fill m-1" style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Title>{pivo.naziv}</Card.Title>
                        <Card.Subtitle>{pivo.naziv_pivovarne}</Card.Subtitle>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{pivo.alkohol}</ListGroup.Item>
                            <ListGroup.Item>{pivo.vrsta}</ListGroup.Item>
                            <ListGroup.Item>Pena: {pivo.pena}</ListGroup.Item>
                            <ListGroup.Item>Okus: {pivo.okus}</ListGroup.Item>
                            <ListGroup.Item>Vonj: {pivo.vonj}</ListGroup.Item>
                            <Barcode value={pivo.crtna_koda} />,
                        </ListGroup>
                        <Button variant="primary">Več</Button>
                    </Card.Body>
                </Card>
            )
        }
      </CardGroup>
    </>
    )
  }
}