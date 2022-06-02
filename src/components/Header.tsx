import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Container fluid>
        <Nav className='me-auto'>
          <Nav.Item>
            <NavLink className="nav-link" to="/" >Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className='nav-link' to='/users'>Users</NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;