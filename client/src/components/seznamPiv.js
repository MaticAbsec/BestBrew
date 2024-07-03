import React from 'react';
import { Card, Container, ListGroup, Button, CardGroup } from "react-bootstrap";
import ReactStars from 'react-stars';
import axios from 'axios';
import $ from 'jquery';

const ratingChanged = (event, idPriljubljenaPiva) => {
  console.log(event);
  console.log(idPriljubljenaPiva);
  axios.get(`http://localhost:8081/posodobiOceno/${event}/${idPriljubljenaPiva}`)
    .catch(error => {
      console.error('There was an error!', error);
    });
};

const kreirajSeznam = (podatki) => {
  return $.ajax({
    url: "http://localhost:8081/dodajSeznam",
    type: 'POST',
    data: JSON.parse(JSON.stringify(podatki)),
    crossDomain: true,
    context: document.body,
    success: function (data, status) {
      console.log('Seznam je bil uspešno kreiran. Lahko pričnete z dodajanjem piv v seznam.');
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
};

export default class SeznamPriljubljenihPiv extends React.Component {

  state = {
    piva: [],
    uniques: [],
    imena: []
  }

  componentDidMount() {
    const prijavljenUporabnik = sessionStorage.getItem("prijavljenUporabnik");
    if (prijavljenUporabnik) {
      const { iduporabnik } = JSON.parse(prijavljenUporabnik);

      axios.get(`http://localhost:8081/vsaPriljubljenaPiva/${iduporabnik}`)
        .then(res => {
          const piva = res.data;
          const vsiIDs = piva.map(pivo => pivo.idseznam_piva);
          let uniques = [...new Set(vsiIDs)];
          this.setState({
            piva: piva,
            uniques: uniques,
          });
        });

      axios.get(`http://localhost:8081/seznamIme/${iduporabnik}`)
        .then(res => {
          const imenaJSON = res.data;
          const imenaSeznamov = imenaJSON.map(seznam => seznam.naziv);
          let imena = [...new Set(imenaSeznamov)];
          this.setState({
            imena: imena,
          });
        });
    } else {
      console.error("No user is logged in");
      // Handle no user logged in scenario
    }
  }

  handleOdstraniPivo(idpivo, idseznam) {
    console.log(idpivo);
    console.log(idseznam);
    axios.delete(`http://localhost:8081/odstraniPivoSseznama/${idpivo}/${idseznam}`)
      .then(() => {
        this.setState({
          piva: this.state.piva.filter(pivo => pivo.idpivo !== idpivo)
        });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  dodajanjeSeznama() {
    const prijavljenUporabnik = sessionStorage.getItem("prijavljenUporabnik");

    if (prijavljenUporabnik) {
      const { iduporabnik } = JSON.parse(prijavljenUporabnik);
      const imeSeznama = $('#imeSeznama').val();

      if (imeSeznama) {
        const podatki = { uporabnik: iduporabnik, ime: imeSeznama };
        kreirajSeznam(podatki);
      } else {
        alert('Vnestite ime seznama!');
      }
    } else {
      alert('No user is logged in');
    }
  }

  render() {
    return (
      <>
        <Container>
          <center>
            <div className="form__group">
              <input id="imeSeznama" className="form__input" type='text' placeholder='Vnesite ime seznama'></input>
              <Button size='lg' variant='secondary' onClick={() => { this.dodajanjeSeznama() }}>Dodaj nov seznam</Button>
            </div>
          </center>
          <CardGroup>
            {
              this.state.uniques.map((unique, index) =>
                <Card style={{ width: '12rem' }} key={unique}>
                  <Card.Body>
                    <Card.Header as="h2" style={{ textAlign: "center" }}>{this.state.imena[index]}</Card.Header>
                    <ListGroup variant="flush">
                      {
                        this.state.piva.filter(pivo => pivo.idseznam_piva === unique).map(filteredPivo => (
                          <React.Fragment key={filteredPivo.idpivo}>
                            <ListGroup.Item>{filteredPivo.naziv}</ListGroup.Item>
                            <ListGroup.Item>
                              <p>Oceni pivo</p>
                              <ReactStars
                                count={5}
                                value={filteredPivo.ocena}
                                half={false}
                                onChange={event => ratingChanged(event, filteredPivo.idpriljubljena_piva)}
                                size={40}
                                color2={'#ffd700'}
                              />
                            </ListGroup.Item>
                            <Button variant="warning" onClick={() => { this.handleOdstraniPivo(filteredPivo.idpivo, unique) }}>Odstrani</Button>
                          </React.Fragment>
                        ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              )
            }
          </CardGroup>
        </Container>
      </>
    );
  }
}
