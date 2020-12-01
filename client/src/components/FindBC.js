import React from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import axios from 'axios';

const FindBC = () => {
  const getData = async () => {
    const res = await axios.get('http://localhost:5000/findbc');
    return res.data;
  };

  const { data, isLoading } = useQuery('findBC', getData);
  return (
    <Container style={{ marginTop: '16px' }}>
      <p>Question: If A = 21, A + B = 23, A + C = -21</p>
      {!isLoading && (
        <p>
          A={data.A} B={data.B} C={data.C}
        </p>
      )}
    </Container>
  );
};

export default FindBC;
