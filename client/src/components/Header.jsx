import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Header = () => {

  const Product = useSelector(state => state.mycart.cart);
  const productLength = Product.length;
  return (
    <>

      <Container fluid style={{ position: "sticky", top: 0, zIndex: "2", width: "100%" }}>
        <Navbar expand="lg" className="header">
          <Navbar.Brand href="/">
            <div id="logo"><h1>Sun Shine</h1></div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              <Nav.Link as={Link} to="products">Product</Nav.Link>
              <Nav.Link as={Link} to="contact">Contact</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/cart"><FaCartPlus /> {productLength}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </Container>

    </>
  );
};

export default Header;