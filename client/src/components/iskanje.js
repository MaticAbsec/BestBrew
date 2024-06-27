import React, { Component, useState, useEffect } from "react";
import { Card, Button, Container, ListGroup, CardGroup, DropdownButton,Dropdown,Toast} from "react-bootstrap";
import { ReactDOM } from "react";
import mojaPiva from './mojaPiva'
import Modal from "./modal";
import '../App.css'
import '../styles/iskanje.css';
import 'mdbreact/dist/css/mdb.css'
import axios from 'axios';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var Barcode = require('react-barcode');



/*
const handleOnSearch = (string, results) => {
   onSearch will have as the first callback parameter
   the string searched and for the second the results.
  console.log(string, results)
}
*/




export default function Iskanje() {

  const [piva, setPiva] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8081/Vsapiva`)
      .then(res => {
        const piva = res.data;
        setPiva(piva);
      })
    
    
  }

  );
  return (
    <motion.div className="marginTopRight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      <SearchChange piva={piva} />
    </motion.div>
  )
}

function SearchChange({ piva }) {

  
  const [search, setSearch] = useState("");
  const [mojiSeznami, setMojiSeznami] = useState([])

  const [izbraniSeznam,setIzbraniSeznam]=useState(0);
  
  const handleSelect=(e)=>{
    console.log(e);
    setIzbraniSeznam(e)
  }

  useEffect(() => {},[search]);
  
  useEffect(() => {  
    if(sessionStorage.getItem("prijavljenUporabnik")!=null){ 
      const idUporabnika=JSON.parse(sessionStorage.getItem("prijavljenUporabnik")).iduporabnik;
      
      axios.get(`http://localhost:8081/seznamiUporabnikov/${idUporabnika}`)
        .then(res => {
          const mojiSeznami = res.data;
          setMojiSeznami(mojiSeznami);
        })
    }
    });

  const [prikaz, setPrikaz] = useState(false);


  const handleChange = (event) => {
    setSearch(event.target.value.toLocaleLowerCase());
  };

  const notify = () => toast.success("Tega boš mogu spit🍺");
  
  const handleDodajPivo = (idPivo,idSeznam) => {
    
    console.log("idPivo: "+idPivo);
    console.log("izbraniSeznam: "+izbraniSeznam);

    axios.get(`http://localhost:8081/dodajPivoNaSeznam/${idPivo}/${idSeznam}`)
    .then(res => {
      console.log(res);
      notify();
    })
  }; 

  // prikaz oziroma skrivanje modala
  const prikazi = () => {
    setPrikaz(true);
  }

  const skrij = () => {
    setPrikaz(false);
  }


  


  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: window.innerWidth }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <ToastContainer />
      <Container className="center-text">
        <center>
          <div class="form__group">
            <input class="form__input" type='text' placeholder="Vnesi ime piva" onChange={handleChange} />
            <label for="name" class="form__label">Rezultati iskanja</label>
          </div>
        </center>
          <Modal show = {prikaz} handleClose = {skrij}>
            <h1>Iskanje ~ Barcode</h1>
          </Modal>
        <center>
          <Button size="lg" onClick={prikazi} handleClose={skrij} variant="secondary">Skeniraj kodo</Button>
        </center>


        <CardGroup>
          {piva.filter(pivo => pivo.naziv.toLocaleLowerCase().includes(search)).map(pivo => (


            <Card className="flex-fill m-1" style={{ width: '12rem' }} >
              <Card.Body>
                <Card.Img variant="top" className="cssPivo" src={pivo.imgurl} />
                <Card.Title>{pivo.naziv}</Card.Title>
                <Card.Subtitle>{pivo.naziv_pivovarne}</Card.Subtitle>
                <ListGroup variant="flush" >
                  <ListGroup.Item>{pivo.alkohol}</ListGroup.Item>
                  <ListGroup.Item>{pivo.vrsta}</ListGroup.Item>
                  <ListGroup.Item>Pena: {pivo.pena}</ListGroup.Item>
                  <ListGroup.Item>Okus: {pivo.okus}</ListGroup.Item>
                  <ListGroup.Item>Vonj: {pivo.vonj}</ListGroup.Item>
                 
                </ListGroup>


                <Barcode value={pivo.crtna_koda} />
                <div className="d-grid">
                  <DropdownButton  title={"Dodaj pivo v seznam"} onSelect={handleSelect}>
                  
                    {mojiSeznami.map(seznam =>                  
                    <Dropdown.Item size="sm" eventKey={seznam.idseznam_piva}>{seznam.naziv}</Dropdown.Item>
                    
                      )
                    } 
                    
                  </DropdownButton>
                  <Button variant="Secondary" id="mojaPivaShrani"
                    onClick={() => handleDodajPivo(pivo.idpivo,izbraniSeznam)}
                  >Dodaj
                  </Button>
              </div>
                <mojaPiva likedPiva={mojaPiva.likedPiva} />
              </Card.Body>
            </Card>


          )
          )}
        </CardGroup>
      </Container>
    </motion.div>
  )
}
