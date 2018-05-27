import React from 'react';
import SectionHeader from '../SectionHeader';
import { Container, Col, Row } from '../Grid';

export default () => (
  <Container>
    <SectionHeader>Collections</SectionHeader>
    <Row>
      <Col span={7}>
        <h1>Head phones</h1>
        <img src="/img/product-headphone.png" />
      </Col>
    </Row>
    <Row justifyContent="flex-end">
      <Col span={7}>
        <h1>Ear phones</h1>
        <img src="/img/product-earphone.png" />
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <h1>Speakers</h1>
        <img src="/img/product-speaker.png" />
      </Col>
    </Row>
  </Container>
)