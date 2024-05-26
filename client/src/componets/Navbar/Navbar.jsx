
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cartimg from "../images/add-to-cart.png"

import "./Navbar.css"
import { Link } from 'react-router-dom';
function NavScrollExample() {
  return (
    <Navbar expand="sm" id='navbar' fixed="top" className="bg-body-tertiary" >
      <Container fluid>
       
        <Link to={"/cart"}><Navbar.Brand><img src={cartimg} alt="cart"  className='cart-img'/></Navbar.Brand></Link>
        <Navbar.Brand href="/"> NEW BRAND</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">TOP COLLECTIONS</Nav.Link>
            <Nav.Link href="#action2">NEW ARRIVAL</Nav.Link>
            <NavDropdown title="COLLECTIONS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">ANIMA</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              ANOTHER ITEMS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              ANOTHER ITEMS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              ANOTHER ITEMS
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Link className='login' to="/login">login</Link>
            <Link  className="register"to="/register">Register</Link>
            <Nav.Link href="/about">About</Nav.Link>
           

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;