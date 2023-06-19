/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import cardStyles from './CardComponent.module.css';

interface nftContent {
  time: string;
  status: string;
  cardContent?: string;
  nftBy?: string;
  showCardData?: boolean;
  btnStyle?: boolean;
  source?: string;
}

function BasicExample({
  time,
  status,
  cardContent,
  nftBy,
  showCardData = true,
  btnStyle = true,
  source,
}: nftContent) {
  return (
    <Row>
      <Col xs={10} md={12} style={{ padding: '0' }}>
        <Card className={cardStyles.cardComponent}>
          <Row>
            <Col xs={4} md={4}></Col>
            <Col xs={8} md={8} style={{ transform: 'translate(6%, 0)' }}>
              {showCardData ? (
                <div className={cardStyles.placeHolderDiv}>
                  <Placeholder.Button
                    id={cardStyles.placeHolder}
                    xs={4}
                    aria-hidden="true"
                  >
                    {time}
                  </Placeholder.Button>
                </div>
              ) : (
                <></>
              )}
            </Col>
          </Row>
          <div id={cardStyles.example}>{status}</div>
          <Card.Img variant="top" src={source} />
          {showCardData ? (
            <Card.Body>
              <div>
                <div>
                  <Card.Title className={cardStyles.cardTitle}>
                    {cardContent}
                  </Card.Title>
                  <span>{nftBy}</span>
                </div>
              </div>
            </Card.Body>
          ) : (
            <></>
          )}
        </Card>
        {showCardData ? (
          <></>
        ) : (
          <Button
            id={cardStyles.btnPlaceHolder}
            aria-hidden="true"
            className={`${btnStyle ? cardStyles.plc2 : cardStyles.plc1}`}
          >
            {nftBy}
          </Button>
        )}
      </Col>
    </Row>
  );
}

export default BasicExample;
