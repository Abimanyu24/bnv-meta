import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardComponent from '../card/CardComponent';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';

import storyStyles from './Market.module.css';

interface Campings {
  id: number;
  time: string;
  status: string;
  btnStyle: boolean;
  nftBy: string;
  source: string;
}

export default function Market() {
  const [val, setVal] = useState<Campings[]>([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}getCampaign`).then((res) => {
      if (res.data?.data) {
        res.data.data.map((e: Campings) => {
          setVal((oldArray: Campings[]) => [...oldArray, e]);
        });
      }
    });
  }, []);
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
          Weareables in the Metaverse
        </span>
        <div style={{ marginTop: '20px' }}>
          <p className={`${storyStyles.pTag} ${storyStyles.textColor}`}>
            Wield the legacy of your digital fashion NFT into the virtual world
          </p>
          <p className={`${storyStyles.pTag} ${storyStyles.textColor}`}>
            and grow with your digital assets. With each rare fashion NFT
          </p>
          <p className={`${storyStyles.pTag} ${storyStyles.textColor}`}>
            you invest it on BNV
          </p>
        </div>
        <CardGroup className={storyStyles.cardGroupMargin}>
          {val.map((e, index) => {
            return (
              <CardComponent
                key={index}
                time={e.time}
                status={e.status}
                showCardData={false}
                btnStyle={e.btnStyle}
                nftBy={e.nftBy}
                source={e.source}
              />
            );
          })}
        </CardGroup>
      </Col>
      <Col xs={0} md={2}></Col>
    </Row>
  );
}
