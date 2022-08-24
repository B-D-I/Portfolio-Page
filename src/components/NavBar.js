import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedIn from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.png';

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Nav className="ms-auto">
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/nathan-hewett-583372249/"><img src={linkedIn} alt="" /></a>
              </div>

               <Navbar.Brand href="https://github.com/B-D-I">
                  <img id="git" src={github} alt="GitHub" />
              </Navbar.Brand>
            </span>
        </Container>
      </Navbar>
    </Router>
  )
}