import React, { useState } from 'react';
import { Card, ListGroup, Button,CardGroup } from "react-bootstrap";
import ReactStars from 'react-stars'
import axios from 'axios';



const ratingChanged = (newRating) => {
  console.log(newRating)
}



export default class SeznamPriljubljenihPiv extends React.Component {
  
  state = {
    piva: [],
    uniques:[]
  }

  componentDidMount() {
    if(sessionStorage.getItem("prijavljenUporabnik")!=null){
    const idUporabnika=JSON.parse(sessionStorage.getItem("prijavljenUporabnik")).iduporabnik;
    
    axios.get(`http://localhost:5001/vsaPriljubljenaPiva/${idUporabnika}`)
      .then(res => {
        const piva = res.data;
        const vsiIDs = piva.map(pivo => pivo.idseznam_piva);
        let uniques = [...new Set(vsiIDs)];
        this.setState({piva,uniques});
      })
    }
  }

  handleOdstraniPivo(idpivo,idseznam) {
    console.log(idpivo);
    console.log(idseznam);
    axios.delete(`http://localhost:5001/odstraniPivoSseznama/${idpivo}/${idseznam}`)
    this.setState({piva: this.state.piva.filter(function(pivo) { 
      return pivo.idpivo !== idpivo;
  })});
  }

 
  render() {
    return (
      <>
        
        <CardGroup>
        {   
          this.state.uniques
            .map(unique =>
            <Card  style={{ width: '12rem' }}>
              
                    <Card.Body>
                        <Card.Header as="h5">Seznam#{unique}</Card.Header>
                        <ListGroup variant="flush">
                        {
                        this.state.piva.filter(pivo =>pivo.idseznam_piva===unique).map(filteredPivo => (
                            <>
                            <Card.Img variant="top" src={filteredPivo.imgurl} />
                            <ListGroup.Item>{filteredPivo.naziv}</ListGroup.Item>
                            <ListGroup.Item> <p>Oceni pivo</p> 
                              	<ReactStars count={5} value={3} half={false} onChange={ratingChanged} size={40} color2={'#ffd700'} />
                            </ListGroup.Item>
                            <Button variant="warning" onClick={() => { this.handleOdstraniPivo(filteredPivo.idpivo,unique) }}>Odstrani</Button>
                            </>
                            ))}
                        </ListGroup>
          
                    </Card.Body>
                </Card>
            )
          }      
      </CardGroup>
      </>
    )
  }
}