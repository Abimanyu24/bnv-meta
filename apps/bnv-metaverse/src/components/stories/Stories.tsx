import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Placeholder from 'react-bootstrap/Placeholder';
import storyStyles from './Stories.module.css';

export default function Stories() {
  return (
    <Row className="justify-content-center">
      <Col xs={0} md={2}></Col>
      <Col
        xs={12}
        md={8}
        className="text-center text-md-right"
        style={{ marginTop: '90px' }}
      >
        <span className={`${storyStyles.span} ${storyStyles.textFont}`}>
          Stories on BNV
        </span>
        <div>
          <p className={`${storyStyles.pTag} ${storyStyles.textColor}`}>
            Learn more about Digital Fashion
          </p>
          <p className={`${storyStyles.pTag} ${storyStyles.textColor}`}>
            and the next version of the web by reading BNV stories
          </p>
        </div>
        <Row>
          <Col xs={1} md={4}></Col>
          <Col xs={10} md={4}>
            <Placeholder.Button
              id={storyStyles.placeHolder}
              xs={4}
              aria-hidden="true"
            >
              Go to Stories
            </Placeholder.Button>
          </Col>
          <Col xs={1} md={4}></Col>
        </Row>
      </Col>
      <Col xs={0} md={2}></Col>
    </Row>
  );
}
