import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import communityStyle from './Community.module.css';

export default function Community() {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={0} md={2}></Col>
        <Col
          xs={12}
          md={8}
          className="text-center text-md-right"
          style={{ marginTop: '90px' }}
        >
          <span className={`${communityStyle.span} ${communityStyle.textFont}`}>
            Join Our Community
          </span>
          <Row className="justify-content-md-center">
            <Col xs={12} sm={4} md={4}></Col>
            <Col xs={12} sm={4} md={4}>
              <div id={communityStyle.communityLogos}>
                <Row>
                  <Col xs={2} md={2}>
                    <Image src="/logoOne.png" rounded />
                  </Col>
                  <Col xs={2} md={2}>
                    <Image src="/insta.png" rounded />
                  </Col>
                  <Col xs={2} md={2}>
                    <Image src="/twitter.png" rounded />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4}></Col>
          </Row>
          <div className={communityStyle.span}>
            <p
              className={`${communityStyle.textColor} ${communityStyle.textFont} ${communityStyle.textFont}`}
            >
              SHARE, ASK AND COLLABORATE.
            </p>
            <p className={`${communityStyle.pTag}`}>
              Our Discord community is the place to answer all your
            </p>
            <p className={`${communityStyle.pTag}`}>
              digital fashion, NFTs and metaverse releated questions.
            </p>
          </div>
          <div className={communityStyle.featureMargin}>
            <span
              className={`${communityStyle.span} ${communityStyle.textFont}`}
            >
              We've Been Featured In
            </span>
          </div>
        </Col>
        <Col xs={0} md={2}></Col>
      </Row>
      <div
        className={`${communityStyle.three} ${communityStyle.textFont}`}
      ></div>
    </>
  );
}
