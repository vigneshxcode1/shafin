import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import cartimg from "../../componets/images/add-to-cart.png"
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
            <Nav.Link href="#deets">LOGIN</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             REGISTER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">z-culture</Navbar.Brand>
        <Link to={"/cart"}><Navbar.Brand><img src={cartimg} alt="cart"  className='cart-img'/></Navbar.Brand></Link>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;