import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const CV = () => {
  return (
    <Container style={{ marginTop: '16px' }}>
      {/* Intro */}
      <Row>
        <Col>
          <h1>Hi, My name is Vachirarat Thavisaengsiri</h1>
          <h3 className='mt-3'>
            Full Stack Developer, with specialty on the Front End
          </h3>
          <p className='mt-3'>
            You can reach me by <FontAwesomeIcon icon={faPhone} /> 087-799-9769{' '}
            <FontAwesomeIcon icon={faEnvelope} /> vachirarat72@gmail.com
          </p>
        </Col>
      </Row>
      {/* Education */}
      <Row className='mt-3'>
        <Col>
          <h1>Education</h1>
          <Row>
            <Col sm={10}>
              MAHIDOL UNIVERSITY INTERNATIONAL COLLEGE | BS COMPUTER SCIENCE
            </Col>
            <Col sm={2}>2012-2015</Col>
          </Row>
        </Col>
      </Row>
      {/* Experience */}
      <Row className='mt-3'>
        <Col>
          <h1>Experience</h1>
          <Row>
            <Col sm={10}>PEAK POWER SYSTEM | IT & FRONT END DEVELOPER</Col>
            <Col sm={2}>2017-2017</Col>
          </Row>
          <Row>
            <Col sm={10}>
              <ul>
                <li>
                  Built company website{' '}
                  <a href='http://www.peakpowersystem.com'>
                    http://www.peakpowersystem.com
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>KONTUMWEB | FRONT END DEV</Col>
            <Col sm={2}>2017-2017</Col>
          </Row>
          <Row>
            <Col sm={10}>
              <ul>
                <li>
                  Responsible for creating UI for a betting site, using HTML,
                  CSS, and AngularJS
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>FREELANCE | FRONT END DEVELOPER</Col>
            <Col sm={2}>2017-2019</Col>
          </Row>
          <Row>
            <Col sm={10}>
              <ul>
                <li>Built website for clients using mostly Wordpress</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>HYDRONEO | SENIOR FRONT END DEVELOPER</Col>
            <Col sm={2}>Feb 2020 - Apr 2020</Col>
          </Row>
          <Row>
            <Col sm={10}>
              <ul>
                <li>
                  Responsible for the company’s website{' '}
                  <a href='https://hydroneo.net/'>https://hydroneo.net</a> using
                  WordPress
                </li>
                <li>
                  Responsible for the IoT’s web app, built with React/Redux/Antd
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>
              NELLIKA CONSULTING .CO. LTD | FRONT END DEVELOPER{' '}
            </Col>
            <Col sm={2}>Jun 2020 - Dec 2020</Col>
          </Row>
          <Row>
            <Col sm={10}>
              <ul>
                <li>
                  Worked on Doctor - Patient app using React and React Native
                </li>
                <li>
                  Refactor one of the web app to use NextJS instead of React for
                  SEO purpose
                </li>
                <li>Lead a full stack project. Built with MERN Stack.</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CV;
