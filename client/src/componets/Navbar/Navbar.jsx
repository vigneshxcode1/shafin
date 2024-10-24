import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import cartimg from "../../componets/images/add-to-cart.png"
import titleimg from '../images/titleimg.jpeg'
import './Navbar.css'


function CollapsibleExample() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg"  className="bg-body-tertiary toggle" id='bg-body-tertiary'>
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='toggle'/>
        <Navbar.Collapse id="responsive-navbar-nav" className='toggle'>
          <Nav className="me-auto">
            <Nav.Link href="/products">TOP COLLECTIONS</Nav.Link>
            <Nav.Link href="#pricing">NEW ARRIVALS</Nav.Link>
            <NavDropdown title="more collections" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">COLLECTION</NavDropdown.Item>
              <NavDropdown.Item href="/animicollections">
               ANIMI Collections
              </NavDropdown.Item>
              <NavDropdown.Item href="/animicollections">
               Car Collections
              </NavDropdown.Item>
              <NavDropdown.Item href="/animicollections">
               Bike Collections
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Poster collections
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">LOGIN</Nav.Link>
            <Nav.Link eventKey={2} href="/register">
             REGISTER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className='headtitle'><img className='titleimg' src={titleimg}></img></Navbar.Brand>
        <Link to={"/cart"}><Navbar.Brand><img src={cartimg} alt="cart"  className='cart-img'/></Navbar.Brand></Link>
    
    </Navbar>
    </>
  
  );
}

export default CollapsibleExample;