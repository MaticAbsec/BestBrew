import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/prvastran.css';
import pivo from './Slike/BESTBREW.png';
import Image from 'react-bootstrap/Image'
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import "./GoogleAuth/ageAuthPopUp.css";

import pivo4 from './Slike/SlideShow3.jpg';
import pivo3 from './Slike/SlideShow2.jpg';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion/dist/framer-motion';

import BackgroundIMG from './StylingZaStran/backgroundIMG';
import BackgroundIMG2 from './StylingZaStran/backgroundIMG2';
import BackgroundIMG3 from './StylingZaStran/bacgroundIMG3';
import { MDBBtn } from 'mdbreact';

import Popup from 'reactjs-popup';
import facts from './funfacts'
import 'reactjs-popup/dist/index.css';

function PrvaStran() {

  const [visible, setVisible] = useState(false)

  const getRandomFact = () => {
    return facts[Math.floor(Math.random() * facts.length)];
  };

  const [funFacts, setFunFacts] = useState(getRandomFact());
  const handleClick = () => {
    // shuffle array and pick random
    const randomFact = getRandomFact();
    setFunFacts(randomFact);
  };


  
  const pStyle = {
    textAlign: 'center'
  }
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <BackgroundIMG />
      <Container fluid style={{ margin: "0.5%", width: "97%" }}>

        <Row className="align-items-center justify-content-center " style={{ margin: "0.5%" }}>
          <Col md >
            <Card className="text-center">
              <Card.Body style={{ color: "primary" }}>
                <Card.Text>
                  <h1>BESTBREW</h1>
                  <p class=" text-center, fw-bold, glavnoText">Za vse prave ljublitelje piv.</p>
                </Card.Text>
      <Popup trigger={<Button onClick={handleClick}> Klikni za naključni "fun fact" o pivih</Button>} position="right center">
    <div>{funFacts}</div>
  </Popup>
      <br/>
      {console.log(funFacts)}
      <br/>
                <Image src={pivo}></Image>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <BackgroundIMG2 />

      <Container fluid style={{ margin: "0.5%", width: "97%" }}>
        <Row className="align-items-center justify-content-center " style={{ margin: "0.5%" }}>
          <Col md>
            <Card>
              <Card.Body style={{ color: "primary" }}>
                <Card.Header><h2>Nekaj o spletni strani in kaj tukaj najdete.</h2></Card.Header>
                <Card.Text>
                  <p class="glavni">

                    Radi pogosto zavijete po napornem dnevu v gostilno? Imate radi pijačo narejeno iz hmelja po imenu pivo?<br />
                    Potem je ta stran prava za vas!<br />
                    Ocenjujte piva ter si ustvarite vaš lasten nabor najljubših piv.<br />
                    BestBrew
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card>
              <Card.Img src={pivo4} />
            </Card>
          </Col>
        </Row>

      </Container>

      <BackgroundIMG3 />

      <Container fluid style={{ margin: "0.5%", width: "97%" }}>

        <Row className="align-items-center justify-content-center " style={{ margin: "0.5%" }}>
          <Col md>
            <Card.Img src={pivo3} />
          </Col>
          <Col md>
            <Card className="bg-dark text-white">
              <Card.Body style={{ color: "dark" }}>
                <center>
                  <Card.Text>
                    <p class="textd">Prični svojo pivsko doživetje s klikom enega gumba.</p>
                    <Link to="/iskanje"><MDBBtn><b>Poišči svojo najljubše pivo</b></MDBBtn></Link>
                  </Card.Text>
                </center>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div >
  );
}

export default PrvaStran;


/**
 * <Card style={{ width: "70%"}}>
              <Card.Img variant="top" src={pivo} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
 * 
 * <Col sm>
            <Card>
              <Card.Body style={{ color: "primary" }}>
                <center>


                  <p class=" text-center, fw-bold, glavnoText">BESTBREW<br></br>
                    Za vse prave ljublitelje piv.</p>
                  <Image src={pivo}></Image>
                </center>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <center>
          <Card>
            <Card.Body style={{ color: "primary" }}>
              <Card.Header><p class="naslov">Nekaj o spletni strani in kaj tukaj najdete.</p></Card.Header>
              <Card.Text>
                <p class="glavni">
                  Radi pogosto zavijete po napornem dnevu v gostilno? Imate radi pijačo narejeno iz hmelja po imenu pivo?<br />
                  Potem je ta stran prava za vas!<br />
                  Ocenjujte piva ter si ustvarite vaš lasten nabor najljubših piv.<br />
                  BestBrew
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </center>

        <Card className="bg-dark text-white">
          <Card.Body style={{ color: "dark" }}>
            <center>
              <Card.Text>
                <p class="textd">Prični svojo pivsko doživetje s klikom enega gumba.</p>
                <Button href="/iskanje">Poišči svojo najljubše pivo</Button>
              </Card.Text>
            </center>
          </Card.Body>
        </Card> */