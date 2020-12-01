import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useQuery } from 'react-query';
import axios from 'axios';

const Direction = () => {
  const getData = async () => {
    const res = await axios.get('http://localhost:5000/direction');
    return res.data;
  };

  const { data, isLoading } = useQuery('direction', getData);

  const legs = data && data.routes[0].legs[0];
  const steps = data && data.routes[0].legs[0].steps;

  return (
    <Container style={{ marginTop: '16px', marginBottom: '96px' }}>
      <p>Direction: SCG Bangsue to Central World</p>

      {!isLoading && (
        <>
          <p>Distance {legs.distance.text}</p>
          <p>Duration {legs.duration.text}</p>
          <ListGroup>
            {steps.map((step) => (
              <ListGroup.Item>
                <div
                  dangerouslySetInnerHTML={{ __html: step.html_instructions }}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </Container>
  );
};

export default Direction;
