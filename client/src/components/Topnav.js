import React from 'react';
import { Navbar } from 'react-bootstrap';

const Topnav = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>DOSCG</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      {/* <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Topnav;
