import React, { Suspense, lazy, useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import CardGroup from 'react-bootstrap/CardGroup';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../footer/Footer';
import Community from '../community/Community';
import Stories from '../stories/Stories';
import Market from '../market/Market';
import axios from 'axios';

import homeStyles from './Home.module.css';

const CardComponent = React.lazy(() => import('../card/CardComponent'));

interface Campings {
  id: number;
  time: string;
  status: string;
  cardContent: string;
  nftBy: string;
  source: string;
}
export default function Home() {
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
    <>
      <div style={{ width: '100%', height: '70vh' }}>
        <Image src="/metaverse-bg.png" width="100%" height="100%"></Image>
      </div>
      <div className={homeStyles.textCenter}>
        {/* <h3>{process.env.VITE_CUSTOM_VAR}</h3> */}
        <h2> Our Campings and Drops</h2>
      </div>
      <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
        <Row className="justify-content-center">
          <Col xs={0} md={2}></Col>
          <Col
            xs={12}
            md={8}
            className="text-center text-md-right"
            style={{ marginTop: '90px' }}
          >
            <CardGroup className={homeStyles.cardGroupMargin}>
              {val.map((e, index) => {
                return (
                  <CardComponent
                    key={index}
                    time={e.time}
                    status={e.status}
                    cardContent={e.cardContent}
                    nftBy={e.nftBy}
                    source={e.source}
                  />
                );
              })}
            </CardGroup>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Row>
          <Col xs={1} md={4}></Col>
          <Col xs={10} md={4}>
            <Placeholder.Button
              id={homeStyles.placeHolder}
              xs={4}
              aria-hidden="true"
            >
              Explore All Collections
            </Placeholder.Button>
          </Col>
          <Col xs={1} md={4}></Col>
        </Row>
        <Market />
        <Stories />
        <Community />
        <Footer />
      </div>
    </>
  );
}
