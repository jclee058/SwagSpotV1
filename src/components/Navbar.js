import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Classes from '../pages/Classes';
import Schedule from '../pages/Schedule';
import Pricing from '../pages/Pricing';
import Location from '../pages/Location';
import Contact from '../pages/Contact';
import Register from '../pages/Register';

import './Navbar.css';

function NavbarFunc() {
  return (
    <Router>
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
            <Container>
                <Navbar.Brand as={Link} to={"/home"}>The Swag Spot</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                    <NavDropdown title="Classes" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/classes"}>Classes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/schedule"}>Class Schedule</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/pricing"}>Pricing</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to={"/location"}>Location</Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Button as={Link} to={"/register"} variant="dark" className="regBtn">Register</Button>{' '}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> 
        </div>
        <div>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/classes" element={<Classes/>}></Route>
                <Route path="/schedule" element={<Schedule/>}></Route>
                <Route path="/pricing" element={<Pricing/>}></Route>
                <Route path="/location" element={<Location/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </div>
    </Router>
  );
}

export default NavbarFunc;

