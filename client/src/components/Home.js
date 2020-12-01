import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container style={{ marginTop: '16px' }}>
      <ul>
        <li>
          <Link to='/findbc'>Find BC</Link>
        </li>
        <li>
          <Link to='/direction'>Get direction</Link>
        </li>
        <li>
          <Link to='/cv'>CV</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
