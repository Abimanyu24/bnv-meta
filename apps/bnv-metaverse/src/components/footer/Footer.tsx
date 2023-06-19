import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';

import footerStyle from './Footer.module.css';

export default function Footer() {
  const [footerValues, setfooterValues] = useState([
    'ABOUT',
    'HELP CENTER',
    'TERMS AND CONDITIONS',
    'PRIVACY POLICY',
    'SUSTAINABILITY STATEMENT',
  ]);
  return (
    <Container style={{ marginTop: '50px' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={7} className={footerStyle.leftColumn}>
          <span className={footerStyle.color}>
            Sign up to get our stories and autions delivered
          </span>
          <InputGroup className="mb-3" id={footerStyle.footerInputGroup}>
            <Form.Control
              placeholder="Email Address"
              aria-label="Email Address"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              style={{
                margin: '0 0 0 10px',
                backgroundColor: '#D7FD35',
                color: '#000000',
              }}
            >
              Subscribe
            </Button>
          </InputGroup>
          <Row id={footerStyle.footerLogos}>
            <Col xs={2} md={2}>
              <Image src="/logoOne.png" rounded />
            </Col>
            <Col xs={2} md={2}>
              <Image src="/insta.png" rounded />
            </Col>
            <Col xs={2} md={2}>
              <Image src="/twitter.png" rounded />
            </Col>
            <Col xs={2} md={2}>
              <Image src="/linkedin.png" rounded />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={1}></Col>
        <Col xs={12} md={4} className={footerStyle.rightColumn}>
          <ul>
            {footerValues.map((e, index) => {
              return <li key={index}> {e} </li>;
            })}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4} className={footerStyle.tradeMark}>
          <span>@2023 BNV</span>
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  );
}
