// src/components/NavB.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import "./FireBase/ageAuthPopUp.css";
import pivo from './Slike/BESTBREW.png';
import navlogo from './Slike/navlogo.png';
import React, { useState, useEffect } from "react";
import SignIn from './FireBase/SignIn';
import UserProfile from './FireBase/UserProfile';

const NavB = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromStorage = sessionStorage.getItem("prijavljenUporabnik");
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []);

  const handleSignOut = () => {
    setUser(null);
    sessionStorage.removeItem("prijavljenUporabnik");
  };

  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand>
          <Link to="/" className='navText'>
            <Image src={navlogo} roundedCircle width="26"/>
            <b>BestBrew</b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/iskanje" className='navText'>Iskanje piv</Link>
            </Nav.Link>
            {user && (
              <Nav.Link>
                <Link to="/mojepive" className='navText'>Moja piva</Link>
              </Nav.Link>
            )}
            <Nav.Link>
              <Link to="/map" className='navText'>Zemljevid</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/onas" className='navText'>O nas</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
     
        <Nav>
          {user ? <UserProfile user={user} onSignOut={handleSignOut} /> : <SignIn />}
        </Nav>
    
      </Container>
    </Navbar>
  );
}

export default NavB;
